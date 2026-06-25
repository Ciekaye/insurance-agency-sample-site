import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading, CoverageCard, CtaBand } from "@/components/ui";
import { truckingCoverages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trucking Insurance",
  description:
    "Auto liability, cargo, bobtail, dump truck, hazmat, and new-venture trucking coverage from a specialty transportation team.",
};

export default function TruckingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transportation Division"
        title="Trucking insurance from a dedicated team"
        intro="New-authority owner-operators to established fleets — our transportation specialists keep you compliant and on the road."
        imageSrc="/images/trucking-hero.png"
      />
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title="Trucking coverage we place"
            intro="Programs tailored to how and what you haul."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {truckingCoverages.map((c) => (
              <CoverageCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Get a trucking quote today" />
    </>
  );
}
