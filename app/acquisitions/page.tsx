import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading, CtaBand } from "@/components/ui";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Agency Acquisitions",
  description:
    "Thinking about selling your insurance agency? We partner with owners on confidential succession and acquisition.",
};

const steps = [
  { n: "01", title: "Confidential conversation", body: "We start with a private, no-obligation discussion about your goals and timeline." },
  { n: "02", title: "Valuation & fit", body: "We review your book of business and present a fair, transparent valuation." },
  { n: "03", title: "Smooth transition", body: "We protect your clients and staff with a thoughtful, well-managed handoff." },
];

const reasons = [
  "You're planning for retirement or succession",
  "You want your clients and staff well cared for",
  "You'd like to stay on in a reduced role",
  "You're ready to cash out and move on",
];

export default function AcquisitionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Acquisitions"
        title="Thinking about selling your insurance agency?"
        intro="We partner with agency owners on confidential succession and acquisition — protecting the relationships you've spent a career building."
        imageSrc="/images/acquisitions-hero.png"
      />

      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A straightforward, owner-friendly process"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-lg border border-slate-200 bg-white p-7 shadow-card">
                <span className="font-serif text-3xl font-semibold text-accent">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Is it time?" title="Reasons owners reach out to us" />
            <ul className="mt-8 space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-slate-700">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card">
            <h3 className="text-xl font-semibold text-navy">Let&apos;s talk, confidentially</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Every conversation is private and there&apos;s never any obligation. Reach out and
              we&apos;ll find a time that works for you.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Start the Conversation
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand title="Ready to discuss your agency?" text="Confidential, no-obligation conversations with agency owners." />
    </>
  );
}
