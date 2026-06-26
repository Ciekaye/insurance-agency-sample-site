import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { company, nav } from "@/lib/site";

// lucide-react dropped brand logos, so use minimal inline SVGs for socials.
function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.33-.13-.81-.28-1.71-.32-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.48-2.9a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z" />
    </svg>
  );
}
function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.8-.1-1.6-.15-2.4-.15-2.4 0-4.05 1.47-4.05 4.17v2.28H7.5V13h2.75v8h3.25Z" />
    </svg>
  );
}
function Youtube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.42-4.81ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}
function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.5h3.1V21H3.4V8.5Zm5.05 0h2.97v1.7h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.55c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21H8.45V8.5Z" />
    </svg>
  );
}

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="container grid gap-12 py-16 lg:grid-cols-4 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm border border-slate-100">
            <div className="flex items-center justify-center">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footer-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3D85C6" />
                    <stop offset="100%" stopColor="#123B5F" />
                  </linearGradient>
                  <linearGradient id="footer-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2F6CA6" />
                    <stop offset="100%" stopColor="#0E2D49" />
                  </linearGradient>
                </defs>
                <path d="M12 3L2 19h9L12 3z" fill="url(#footer-grad-1)" />
                <path d="M12 3l10 16h-9L12 3z" fill="url(#footer-grad-2)" />
                <circle cx="12" cy="14" r="3" fill="#ffffff" />
                <circle cx="12" cy="14" r="1.5" fill="url(#footer-grad-1)" />
              </svg>
            </div>
            <span className="flex flex-col">
              <span className="font-serif text-lg font-extrabold leading-none tracking-wider text-navy">
                APEX
              </span>
              <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-500 leading-none mt-1.5 font-sans">
                Insurance Group
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            An independent insurance agency. Because we&apos;re not tied to one company, we
            shop the market to find you the best coverage for the best price.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded border border-white/15 text-slate-300 transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Coverage links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider !text-white">Coverage</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.slice(0, 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Agency links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider !text-white">Agency</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/our-people" className="text-slate-400 hover:text-white">Our People</Link></li>
            <li><Link href="/acquisitions" className="text-slate-400 hover:text-white">Acquisitions</Link></li>
            <li><Link href="/blog" className="text-slate-400 hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="text-slate-400 hover:text-white">Contact</Link></li>
            <li><Link href="/#states" className="text-slate-400 hover:text-white">States We Serve</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider !text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-accent" />
              <a href={company.phoneHref} className="text-slate-300 hover:text-white">{company.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-accent" />
              <a href={`mailto:${company.email}`} className="text-slate-300 hover:text-white">{company.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-accent" />
              <span className="text-slate-400">
                {company.address.line1}<br />{company.address.line2}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            Coverage descriptions are summaries only and are subject to the terms of the actual
            policy. This site does not constitute professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
