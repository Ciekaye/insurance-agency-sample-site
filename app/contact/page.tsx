import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free quote or talk to an independent advisor. Call 317-942-0549 or send us a message.",
};

const details = [
  { Icon: Phone, label: "Phone", value: company.phone, href: company.phoneHref },
  { Icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  {
    Icon: MapPin,
    label: "Office",
    value: `${company.address.line1}, ${company.address.line2}`,
  },
  { Icon: Clock, label: "Hours", value: "Mon–Fri, 8:00 AM – 5:00 PM ET" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find your best coverage"
        intro="Give us a call today or fill out the form and an independent advisor will get back to you with options."
        imageSrc="/images/contact-hero.png"
      />

      <section className="py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          {/* Details */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold text-navy">Talk to a real advisor</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              We&apos;re an independent agency, which means we work for you — not the insurance
              company. Reach out however&apos;s easiest.
            </p>

            <ul className="mt-8 space-y-5">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-navy text-white">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-lg font-medium text-navy hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-navy">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
