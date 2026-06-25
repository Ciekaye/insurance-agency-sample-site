import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";

export default function PageHero({
  eyebrow,
  title,
  intro,
  imageSrc,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  imageSrc?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Decorative side block: image with overlay if provided, otherwise solid color */}
      {imageSrc ? (
        <div className="absolute inset-y-0 right-0 hidden w-1/3 lg:block overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply z-10" />
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-navy-700 lg:block" aria-hidden />
      )}
      <Container className="relative z-20 grid gap-8 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-8">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-3 text-4xl font-semibold leading-tight !text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:+13179420549" className="btn-outline">
              Call 317-942-0549
            </a>
          </div>
        </div>
        {imageSrc && (
          <div className="hidden lg:col-span-4 lg:flex items-center justify-center z-10">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-card">
              <Image
                src={imageSrc}
                alt={title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

