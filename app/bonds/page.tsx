import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading, CoverageCard, CtaBand } from "@/components/ui";
import { bondTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Surety Bonds",
  description:
    "Performance, payment, bid, license, fidelity, and court bonds placed quickly through our surety markets.",
};

export default function BondsPage() {
  return (
    <>
      <PageHero
        eyebrow="Surety & Bonds"
        title="Bonds placed fast, backed by strong markets"
        intro="Contractors and businesses count on us for the surety bonds they need to bid, win, and deliver work."
        imageSrc="/images/bonds-hero.png"
      />
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Bond types"
            title="Surety bonds we write"
            intro="Need a bond on a deadline? Our surety team moves quickly."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bondTypes.map((c) => (
              <CoverageCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Need a bond? Let's get it done" />
    </>
  );
}
