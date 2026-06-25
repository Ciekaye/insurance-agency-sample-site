"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company, nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* Top utility bar */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="container flex h-9 items-center justify-between text-xs">
          <span className="text-slate-200">
            Independent agency representing 40+ carriers across {company.statesCount}+ states
          </span>
          <div className="flex items-center gap-5">
            <a href={`mailto:${company.email}`} className="text-slate-200 hover:text-white">
              {company.email}
            </a>
            <a href={company.phoneHref} className="flex items-center gap-1.5 font-semibold hover:text-accent">
              <Phone size={13} /> {company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="flex flex-shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={`${company.name} — ${company.tagline}`}
            width={570}
            height={264}
            priority
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-x-4 xl:flex 2xl:gap-x-5">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-[13px] font-medium transition-colors hover:text-accent 2xl:text-sm ${
                  active ? "text-accent" : "text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-3">
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-md bg-accent px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-accent-dark md:inline-flex 2xl:text-sm"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="text-navy xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <nav className="container grid gap-1 py-4">
            {[{ label: "Home", href: "/" }, ...nav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
