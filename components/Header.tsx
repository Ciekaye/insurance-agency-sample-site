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
        <Link href="/" className="flex flex-shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex items-center justify-center">
            <svg className="h-9 w-9 lg:h-11 lg:w-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="header-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3D85C6" />
                  <stop offset="100%" stopColor="#123B5F" />
                </linearGradient>
                <linearGradient id="header-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2F6CA6" />
                  <stop offset="100%" stopColor="#0E2D49" />
                </linearGradient>
              </defs>
              <path d="M12 3L2 19h9L12 3z" fill="url(#header-grad-1)" />
              <path d="M12 3l10 16h-9L12 3z" fill="url(#header-grad-2)" />
              <circle cx="12" cy="14" r="3" fill="#ffffff" />
              <circle cx="12" cy="14" r="1.5" fill="url(#header-grad-1)" />
            </svg>
          </div>
          <span className="flex flex-col">
            <span className="font-serif text-xl font-extrabold leading-none tracking-wider text-navy lg:text-2xl">
              APEX
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500 leading-none mt-1 font-sans lg:text-[10px]">
              Insurance Group
            </span>
          </span>
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
