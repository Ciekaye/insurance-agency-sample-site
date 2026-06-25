import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Scale, Handshake, Building2, Home, HeartPulse } from "lucide-react";
import { Container, SectionHeading, CtaBand } from "@/components/ui";
import {
  company,
  stats,
  specialtyDivisions,
  relatedCompanies,
  usStates,
} from "@/lib/site";

const pillars = [
  {
    Icon: Scale,
    title: "Truly independent",
    body: "We aren't tied to one company. We represent 40+ carriers and shop them against each other for you.",
  },
  {
    Icon: ShieldCheck,
    title: "Specialty expertise",
    body: "Sixteen dedicated divisions mean a specialist who actually understands your industry handles your account.",
  },
  {
    Icon: Handshake,
    title: "Advice that's on your side",
    body: "Our job is to get you the best coverage for the best price — not to defend a single insurer's products.",
  },
];

const lines = [
  { Icon: Building2, title: "Business", href: "/business", body: "Liability, property, workers comp, cyber, and more for companies of every size." },
  { Icon: Home, title: "Personal", href: "/personal", body: "Home, auto, umbrella, and valuable-articles coverage for you and your family." },
  { Icon: HeartPulse, title: "Life + Health", href: "/life-health", body: "Group health, individual plans, and life insurance to protect what matters." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 lg:block overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply z-10" />
          <Image
            src="/images/home-hero.png"
            alt="Wexford Office"
            fill
            priority
            className="object-cover"
          />
        </div>
        <Container className="relative z-20 grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="eyebrow">{company.tagline}</span>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] !text-white sm:text-5xl lg:text-6xl">
              The right coverage, from an agency that works for you.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
              Being independent means we&apos;re not tied to one insurance company. We represent
              many — so we can find you the best coverage for the best price.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/business" className="btn-outline">
                Explore Coverage
              </Link>
            </div>
          </div>

          {/* Solid info card — no gradient */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/10 bg-white p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Talk to an advisor
              </p>
              <p className="mt-2 text-2xl font-semibold text-navy">Call {company.phone}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Give us a call today or request a quote and an independent advisor will get back
                to you with options tailored to your needs.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white p-4">
                    <dt className="text-2xl font-semibold text-navy">{s.value}</dt>
                    <dd className="mt-1 text-xs leading-snug text-slate-500">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Wexford"
            title="An independent agency, on your side"
            intro="Most agents can only sell you what one company offers. We compare the whole market."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map(({ Icon, title, body }) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core lines of coverage */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow="What we cover" title="Coverage for every part of your life and business" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {lines.map(({ Icon, title, href, body }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col rounded-lg border border-slate-200 bg-white p-7 shadow-card transition-colors hover:border-navy"
              >
                <Icon size={28} className="text-accent" />
                <h3 className="mt-5 text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-slate-600">{body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                  Learn more
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Specialty divisions */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our specialty divisions"
            title="Deep expertise in hard-to-place industries"
            intro="From excavating to aviation, our specialty teams place coverage that generalist agents can't."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {specialtyDivisions.map((d) => (
              <div
                key={d}
                className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-navy"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {d}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/specialty" className="btn-ghost">
              View all specialty lines <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Acquisitions band */}
      <section className="bg-navy-700">
        <Container className="flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Acquisitions
            </span>
            <h2 className="mt-2 text-2xl font-semibold !text-white sm:text-3xl">
              Thinking about selling your insurance agency?
            </h2>
            <p className="mt-3 text-slate-200">
              We partner with agency owners on succession and acquisition. Let&apos;s talk
              confidentially about your book of business.
            </p>
          </div>
          <Link href="/acquisitions" className="btn-primary flex-shrink-0">
            Learn About Acquisitions
          </Link>
        </Container>
      </section>

      {/* Our companies */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Our companies" title="A family of specialist agencies" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {relatedCompanies.map((c) => (
              <div key={c.name} className="rounded-lg border border-slate-200 bg-white p-7 shadow-card">
                <h3 className="text-lg font-semibold text-navy">{c.name}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* States */}
      <section id="states" className="border-t border-slate-200 bg-slate-50 py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Nationwide reach"
            title="States we operate in"
            intro={`Licensed and serving clients in ${company.statesCount}+ states across the country.`}
          />
          <div className="mt-10 flex flex-wrap gap-2">
            {usStates.map((s) => (
              <span
                key={s}
                className="rounded border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
