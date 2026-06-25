import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading, CoverageCard, CtaBand } from "@/components/ui";
import { specialtyLines } from "@/lib/site";

export const metadata: Metadata = {
  title: "Specialty Insurance",
  description:
    "Environmental, aviation, captive, medical malpractice, short-term rental, and other hard-to-place specialty coverage.",
};

export default function SpecialtyPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialty Lines"
        title="Coverage for risks others won't touch"
        intro="Our specialty divisions place programs for industries and exposures that generalist agents simply can't."
        imageSrc="/images/specialty-hero.png"
      />
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title="Specialty programs we place"
            intro="If your risk is unusual, you're in the right place."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specialtyLines.map((c) => (
              <CoverageCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Talk to a specialty advisor" />
    </>
  );
}
