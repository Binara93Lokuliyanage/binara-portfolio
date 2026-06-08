export const BINU_AI_API_URL =
  process.env.NEXT_PUBLIC_BINU_AI_API_URL ??
  `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://binara-portfolio-backend-5pb9km3vm.vercel.app"}/api/ai/job-match`;
  

export const formatBinuResponse = (payload: unknown): string => {
  if (typeof payload === "string") {
    return payload;
  }

  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;
    const likelyResponse =
      record.response ??
      record.result ??
      record.message ??
      record.answer ??
      record.data;

    if (typeof likelyResponse === "string") {
      return likelyResponse;
    }

    if (likelyResponse && typeof likelyResponse === "object") {
      return JSON.stringify(likelyResponse, null, 2);
    }

    return JSON.stringify(record, null, 2);
  }

  return "Binu returned a response, but it could not be displayed.";
};
