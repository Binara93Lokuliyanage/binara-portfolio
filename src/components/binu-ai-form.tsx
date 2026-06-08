"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { BINU_AI_API_URL, formatBinuResponse } from "@/lib/binu-ai";

const MIN_JOB_DESCRIPTION_LENGTH = 40;

const getTextValue = (
  record: Record<string, unknown>,
  key: string
): string | null => {
  const value = record[key];
  return typeof value === "string" && value.trim() ? value : null;
};

const getStringList = (
  record: Record<string, unknown>,
  key: string
): string[] => {
  const value = record[key];

  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item): item is string => typeof item === "string" && item.trim().length > 0
  );
};

const parseJsonString = (value: string): unknown => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

const unwrapBinuPayload = (payload: unknown): unknown => {
  if (typeof payload === "string") {
    return parseJsonString(payload);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return payload;
  }

  const record = payload as Record<string, unknown>;
  const knownReportKeys = [
    "assistantName",
    "openingMessage",
    "matchScore",
    "quickSummary",
    "whyBinaraFits",
    "relevantExperience",
    "relevantProjects",
    "possibleGaps",
    "suggestedNextStep",
    "recruiterFriendlyResponse",
  ];

  if (knownReportKeys.some((key) => key in record)) {
    return record;
  }

  const wrapperKeys = ["response", "result", "answer", "data", "message"];

  for (const key of wrapperKeys) {
    if (key in record) {
      return unwrapBinuPayload(record[key]);
    }
  }

  return record;
};

const ResultList = ({ title, items }: { title: string; items: string[] }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="binu-ai-result-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

const BinuResult = ({ payload }: { payload: unknown }) => {
  const displayPayload = unwrapBinuPayload(payload);

  if (typeof displayPayload === "string") {
    return (
      <div className="binu-ai-result">
        <span>Binu AI</span>
        <p>{displayPayload}</p>
      </div>
    );
  }

  if (
    !displayPayload ||
    typeof displayPayload !== "object" ||
    Array.isArray(displayPayload)
  ) {
    return (
      <div className="binu-ai-result">
        <span>Binu AI</span>
        <p>{formatBinuResponse(displayPayload)}</p>
      </div>
    );
  }

  const record = displayPayload as Record<string, unknown>;
  const assistantName = getTextValue(record, "assistantName") ?? "Binu";
  const openingMessage = getTextValue(record, "openingMessage");
  const quickSummary = getTextValue(record, "quickSummary");
  const suggestedNextStep = getTextValue(record, "suggestedNextStep");
  const recruiterFriendlyResponse = getTextValue(
    record,
    "recruiterFriendlyResponse"
  );
  const matchScore =
    typeof record.matchScore === "number" ? Math.round(record.matchScore) : null;
  const hasStructuredContent = Boolean(
    openingMessage ||
      quickSummary ||
      suggestedNextStep ||
      recruiterFriendlyResponse ||
      getStringList(record, "whyBinaraFits").length ||
      getStringList(record, "possibleGaps").length ||
      getStringList(record, "relevantExperience").length ||
      getStringList(record, "relevantProjects").length ||
      matchScore !== null
  );

  if (!hasStructuredContent) {
    return (
      <div className="binu-ai-result">
        <span>Binu AI</span>
        <p>{formatBinuResponse(displayPayload)}</p>
      </div>
    );
  }

  return (
    <article className="binu-ai-result binu-ai-report">
      <div className="binu-ai-report-header">
        <div>
          <span>{assistantName} AI</span>
          {openingMessage && <p>{openingMessage}</p>}
        </div>
        {matchScore !== null && (
          <div className="binu-ai-score" aria-label={`Match score ${matchScore}%`}>
            <strong>{matchScore}</strong>
            <small>match score</small>
          </div>
        )}
      </div>

      {quickSummary && (
        <section className="binu-ai-result-section is-highlighted">
          <h3>Quick Summary</h3>
          <p>{quickSummary}</p>
        </section>
      )}

      <div className="binu-ai-result-grid">
        <ResultList
          title="Why Binara Fits"
          items={getStringList(record, "whyBinaraFits")}
        />
        <ResultList
          title="Possible Gaps"
          items={getStringList(record, "possibleGaps")}
        />
      </div>

      <ResultList
        title="Relevant Experience"
        items={getStringList(record, "relevantExperience")}
      />
      <ResultList
        title="Relevant Projects"
        items={getStringList(record, "relevantProjects")}
      />

      {suggestedNextStep && (
        <section className="binu-ai-result-section">
          <h3>Suggested Next Step</h3>
          <p>{suggestedNextStep}</p>
        </section>
      )}

      {recruiterFriendlyResponse && (
        <section className="binu-ai-result-section is-highlighted">
          <h3>Recruiter-Friendly Response</h3>
          <p>{recruiterFriendlyResponse}</p>
        </section>
      )}
    </article>
  );
};

const BinuAiForm = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<unknown | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const trimmedDescription = jobDescription.trim();
  const isTooShort =
    trimmedDescription.length > 0 &&
    trimmedDescription.length < MIN_JOB_DESCRIPTION_LENGTH;

  const helperText = useMemo(() => {
    if (isTooShort) {
      return `Add a little more context. Binu needs at least ${MIN_JOB_DESCRIPTION_LENGTH} characters.`;
    }

    return "Paste the role responsibilities, required skills, and any seniority expectations.";
  }, [isTooShort]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (trimmedDescription.length < MIN_JOB_DESCRIPTION_LENGTH) {
      setError("Please paste a fuller job description before asking Binu.");
      setResult(null);
      return;
    }

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      // TODO: Update NEXT_PUBLIC_BINU_AI_API_URL when the final Binu backend endpoint is confirmed.
      const response = await fetch(BINU_AI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobDescription: trimmedDescription,
        }),
      });

      const contentType = response.headers.get("content-type") ?? "";
      const payload: unknown = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        throw new Error(
          formatBinuResponse(payload) || `Request failed with ${response.status}`
        );
      }

      setResult(payload);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Binu could not process this request. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="binu-ai-form" onSubmit={handleSubmit}>
      <div className="binu-ai-form-field">
        <label htmlFor="job-description">Job description</label>
        <textarea
          id="job-description"
          name="jobDescription"
          rows={12}
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
          placeholder="Paste the job description here..."
          aria-describedby="job-description-help"
        />
        <p id="job-description-help" className={isTooShort ? "is-error" : ""}>
          {helperText}
        </p>
      </div>

      <button
        className="btn-primary binu-ai-submit"
        type="submit"
        disabled={isLoading || trimmedDescription.length < MIN_JOB_DESCRIPTION_LENGTH}
      >
        {isLoading ? (
          <>
            <Sparkles size={18} aria-hidden="true" />
            Asking Binu...
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Ask Binu
          </>
        )}
      </button>

      <div className="binu-ai-status" aria-live="polite">
        {error && <div className="binu-ai-message is-error">{error}</div>}
        {result !== null && <BinuResult payload={result} />}
      </div>
    </form>
  );
};

export default BinuAiForm;
