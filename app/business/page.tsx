import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading, CoverageCard, CtaBand } from "@/components/ui";
import { businessCoverages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business Insurance",
  description:
    "Protect your company with liability, property, workers compensation, cyber, and management coverage from an independent agency.",
};

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Lines"
        title="Business insurance built around your operation"
        intro="From a single liability policy to a complete commercial program, we compare carriers to protect your business at the right price."
        imageSrc="/images/business-hero.png"
      />
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title="Commercial coverage we place"
            intro="Mix and match the protections your business actually needs."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessCoverages.map((c) => (
              <CoverageCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Let's review your commercial program" />
    </>
  );
}
