import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet the independent advisors and specialty teams behind Apex Insurance Group.",
};

const team = [
  { name: "Michael Vance", role: "Principal & Founder", focus: "Commercial Lines", image: "/images/team-michael.png" },
  { name: "Sarah Bennett", role: "Director of Personal Lines", focus: "Home & Auto", image: "/images/team-sarah.png" },
  { name: "David Cho", role: "Transportation Lead", focus: "Trucking & Fleet", image: "/images/team-david.png" },
  { name: "Rachel Ortiz", role: "Contractor Division Lead", focus: "Trades & Bonds", image: "/images/team-rachel.png" },
  { name: "James Patterson", role: "Specialty Risk Advisor", focus: "Environmental & Aviation", image: "/images/team-james.png" },
  { name: "Emily Nguyen", role: "Benefits Consultant", focus: "Life + Health" },
];

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2);
}

export default function OurPeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Independent advisors who know your industry"
        intro="Behind every policy is a specialist who understands your world — and answers when you call."
        imageSrc="/images/our-people-hero.png"
      />
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="The team"
            title="Meet the people you'll work with"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="rounded-lg border border-slate-200 bg-white p-7 shadow-card">
                {m.image ? (
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-slate-200 shadow-sm">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-700 font-serif text-xl font-semibold text-white shadow-inner">
                    {initials(m.name)}
                  </div>
                )}
                <h3 className="mt-5 text-lg font-semibold text-navy">{m.name}</h3>
                <p className="text-sm font-medium text-accent">{m.role}</p>
                <p className="mt-2 text-sm text-slate-500">Focus: {m.focus}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Want to talk to an advisor?" />
    </>
  );
}

