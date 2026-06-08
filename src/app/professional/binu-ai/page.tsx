import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import BinuAiForm from "@/components/binu-ai-form";

export default function BinuAiPage() {
  return (
    <main>
      <section className="binu-ai-page section-padding-top section-padding-bottom">
        <div className="container">
          <div className="binu-ai-page-grid">
            <div className="binu-ai-page-intro">
              <Link href="/professional" className="binu-ai-back-link">
                Back to professional portfolio
              </Link>
              <span className="binu-ai-kicker">
                <BrainCircuit size={18} aria-hidden="true" />
                AI-assisted candidate overview
              </span>
              <h1>Try Binu AI</h1>
              <p>
                Paste a job description and Binu will compare it with
                Binara&apos;s verified profile data, including real project
                experience, technical skills, and leadership background.
              </p>
              <div className="binu-ai-page-note">
                Binu does not invent experience. It is designed to summarize
                role fit from Binara&apos;s real profile data.
              </div>
            </div>

            <div className="binu-ai-form-card">
              <BinuAiForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
