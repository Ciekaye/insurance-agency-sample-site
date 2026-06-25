import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`mt-3 text-3xl sm:text-4xl font-semibold leading-tight ${
          light ? "!text-white" : ""
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-slate-200" : "text-slate-600"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function CoverageCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="group h-full rounded-lg border border-slate-200 bg-white p-6 shadow-card transition-colors hover:border-navy">
      <div className="mb-4 h-1 w-10 bg-accent transition-all group-hover:w-16" />
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}

export function CtaBand({
  title = "Ready to get the right coverage?",
  text = "Talk to an independent advisor who works for you — not the insurance company.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy">
      <Container className="flex flex-col items-start gap-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold !text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-slate-200">{text}</p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Get a Free Quote
          </Link>
          <a href="tel:+13179420549" className="btn-outline">
            Call 317-942-0549
          </a>
        </div>
      </Container>
    </section>
  );
}
