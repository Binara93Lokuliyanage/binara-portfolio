import Link from "next/link";
import { BrainCircuit, Cpu, ScanSearch, ShieldCheck } from "lucide-react";
import Reveal from "@/components/reveal";

const features = [
  "Compares job descriptions with Binara's real profile",
  "Highlights relevant skills and project experience",
  "Identifies strong matches and possible gaps",
  "Gives recruiters a quick AI-assisted candidate overview",
];

const BinuAiSection = () => {
  return (
    <section
      id="binu-ai"
      className="binu-ai-section section-padding-top section-padding-bottom"
    >
      <div className="container">
        <Reveal>
          <div className="binu-ai-shell">
            <div className="binu-ai-content">
              <span className="binu-ai-kicker">
                <BrainCircuit size={18} aria-hidden="true" />
                Recruiter AI assistant
              </span>
              <h2>Meet Binu AI</h2>
              <p className="binu-ai-subtitle">
                Binara&apos;s personal AI recruiter assistant
              </p>
              <p className="binu-ai-description">
                Paste a job description and Binu will compare it with
                Binara&apos;s real experience, technical skills, projects, and
                leadership background, helping recruiters quickly understand
                role fit.
              </p>

              <div className="binu-ai-features" aria-label="Binu AI features">
                {features.map((feature) => (
                  <div className="binu-ai-feature" key={feature}>
                    <ShieldCheck size={18} aria-hidden="true" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="binu-ai-actions">
                <Link href="/professional/binu-ai" className="btn-primary">
                  Try Binu AI
                </Link>
                <p>
                  Powered by Binara&apos;s verified profile data. Binu does not
                  invent experience.
                </p>
              </div>
            </div>

            <div className="binu-ai-visual" aria-hidden="true">
              <div className="binu-ai-chip">
                <div className="binu-ai-chip-core">
                  <Cpu size={46} />
                  <span>BINU</span>
                  <small>profile match engine</small>
                </div>
                <span className="chip-pin pin-top-1" />
                <span className="chip-pin pin-top-2" />
                <span className="chip-pin pin-right-1" />
                <span className="chip-pin pin-right-2" />
                <span className="chip-pin pin-bottom-1" />
                <span className="chip-pin pin-bottom-2" />
                <span className="chip-pin pin-left-1" />
                <span className="chip-pin pin-left-2" />
              </div>
              <div className="binu-ai-signal signal-one">
                <ScanSearch size={16} />
                Skills match
              </div>
              <div className="binu-ai-signal signal-two">Experience fit</div>
              <div className="binu-ai-signal signal-three">Verified data</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BinuAiSection;
