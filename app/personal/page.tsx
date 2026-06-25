import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading, CoverageCard, CtaBand } from "@/components/ui";
import { personalCoverages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Personal Insurance",
  description:
    "Home, auto, umbrella, and valuable-articles coverage for you and your family — shopped across multiple carriers.",
};

export default function PersonalPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Lines"
        title="Protect your home, your car, and your family"
        intro="We shop the market across top-rated carriers so you get strong personal coverage without overpaying."
        imageSrc="/images/personal-hero.png"
      />
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title="Personal coverage we place"
            intro="Bundle for savings, or build a plan that fits your life."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {personalCoverages.map((c) => (
              <CoverageCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Get a personal insurance quote" />
    </>
  );
}
