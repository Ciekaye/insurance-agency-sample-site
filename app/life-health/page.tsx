import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading, CoverageCard, CtaBand } from "@/components/ui";
import { lifeHealthCoverages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Life + Health Insurance",
  description:
    "Group health, individual plans, and life insurance to protect your team and your family.",
};

export default function LifeHealthPage() {
  return (
    <>
      <PageHero
        eyebrow="Life + Health"
        title="Benefits and protection for your people"
        intro="Whether you're insuring a growing team or your own family, we help you find plans that balance coverage and cost."
        imageSrc="/images/life-health-hero.png"
      />
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title="Life & health solutions"
            intro="Group and individual options from leading carriers."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {lifeHealthCoverages.map((c) => (
              <CoverageCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Explore your benefits options" />
    </>
  );
}
