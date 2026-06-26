import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insurance insights, coverage explainers, and risk-management tips from the Apex Insurance Group team.",
};

const posts = [
  {
    title: "Do You Really Need an Umbrella Policy?",
    category: "Personal",
    date: "June 12, 2026",
    excerpt: "How a relatively inexpensive policy can protect everything you've built when a claim exceeds your limits.",
    image: "/images/personal-hero.png",
  },
  {
    title: "Lowering Your Workers' Comp Experience Mod",
    category: "Business",
    date: "May 28, 2026",
    excerpt: "Practical steps contractors can take to bring down their mod and their premiums over time.",
    image: "/images/contractors-hero.png",
  },
  {
    title: "New-Authority Trucking: What to Insure First",
    category: "Trucking",
    date: "May 9, 2026",
    excerpt: "A first-year roadmap to the coverages every new owner-operator needs to stay compliant.",
    image: "/images/trucking-hero.png",
  },
  {
    title: "Cyber Insurance for Small Business, Explained",
    category: "Business",
    date: "April 22, 2026",
    excerpt: "What cyber policies actually cover — and why even small companies are now targets.",
    image: "/images/business-hero.png",
  },
  {
    title: "Insuring a Short-Term Rental the Right Way",
    category: "Specialty",
    date: "April 3, 2026",
    excerpt: "Why a standard homeowners policy usually won't cover your Airbnb or VRBO.",
    image: "/images/specialty-hero.png",
  },
  {
    title: "Independent vs. Captive Agents: The Difference",
    category: "Agency",
    date: "March 15, 2026",
    excerpt: "Why working with an independent agency can mean better coverage at a better price.",
    image: "/images/home-hero.png",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="The Apex Insurance Group blog"
        intro="Coverage explainers, risk-management tips, and straight answers to the questions clients ask us most."
        imageSrc="/images/blog-hero.png"
      />
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Latest" title="Recent articles" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-card transition-colors hover:border-navy"
              >
                {p.image && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-md border border-slate-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded bg-navy px-2.5 py-1 font-semibold uppercase tracking-wide text-white">
                    {p.category}
                  </span>
                  <span className="text-slate-400">{p.date}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-navy">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>
                <Link href="/blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                  Read article
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Have a coverage question?" text="Our advisors are happy to help — no obligation." />
    </>
  );
}

