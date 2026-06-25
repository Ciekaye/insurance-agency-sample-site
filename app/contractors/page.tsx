import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading, CoverageCard, CtaBand } from "@/components/ui";
import { contractorTrades } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contractor Insurance",
  description:
    "General liability, workers comp, tools & equipment, and bonds for 26+ contractor trades.",
};

const contractorCoverages = [
  { title: "General Liability", body: "Third-party injury and property-damage protection on every jobsite." },
  { title: "Workers Compensation", body: "Coverage for your crew, with help managing your experience mod." },
  { title: "Tools & Equipment", body: "Inland marine coverage for the gear that gets the job done." },
  { title: "Contractor's Bonds", body: "License, bid, and performance bonds to win and complete work." },
];

export default function ContractorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contractor Division"
        title="Insurance built for the trades"
        intro="From a single GL policy to a full program with bonds and workers comp, we know contractor risk inside and out."
        imageSrc="/images/contractors-hero.png"
      />

      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title="Core contractor coverage"
            intro="The protections every contractor needs, placed with the right carriers."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contractorCoverages.map((c) => (
              <CoverageCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Trades we serve"
            title="Specialized coverage by trade"
            intro="We write coverage for 26+ contractor classes — and counting."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {contractorTrades.map((t) => (
              <div
                key={t}
                className="flex items-center gap-2.5 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-navy"
              >
                <CheckCircle2 size={16} className="flex-shrink-0 text-accent" />
                {t}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Get covered before your next job" />
    </>
  );
}
