import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import type { SiteCopy } from "../data/content";
import { PageTransition } from "../components/PageTransition";
import { SectionKicker } from "../components/SectionKicker";

type ContactPageProps = {
  copy: SiteCopy;
};

export function ContactPage({ copy }: ContactPageProps) {
  const mailHref = `mailto:${copy.profile.email}?subject=${encodeURIComponent("ServiceNow / portfolio conversation")}`;

  return (
    <PageTransition tone="dark">
      <section className="relative min-h-[calc(100svh-6rem)] overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(184,255,94,0.26),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionKicker icon={Mail} tone="dark">
              {copy.contact.eyebrow}
            </SectionKicker>
            <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-normal md:text-8xl lg:text-6xl">
              {copy.contact.title}
            </h1>
            <p className="mt-7 max-w-md text-lg font-semibold leading-8 text-smoke/62">{copy.contact.intro}</p>
            <a
              href={mailHref}
              className="group mt-10 inline-flex items-center gap-3 bg-pistachio-400 px-6 py-4 text-sm font-black uppercase text-ink transition hover:-translate-y-1 hover:bg-pistachio-100"
            >
              {copy.contact.action}
              <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          <motion.div
            className="relative min-w-0 overflow-hidden border border-pistachio-100/14 bg-ink/28 p-5 md:p-8 lg:mt-20"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <div className="absolute inset-x-0 top-0 h-2 bg-pistachio-400" />
            <div className="relative grid gap-2">
              <ContactRow icon={Mail} label={copy.contact.emailLabel} value={copy.profile.email} href={`mailto:${copy.profile.email}`} />
              <ContactRow icon={Phone} label={copy.contact.phoneLabel} value={copy.profile.phones.join(" / ")} />
              <ContactRow icon={MapPin} label={copy.contact.locationLabel} value={copy.profile.location} />
            </div>
            <p className="relative mt-8 border-t border-pistachio-100/14 pt-6 text-xl font-black uppercase leading-tight text-pistachio-400 md:text-3xl">
              {copy.contact.availability}
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

type ContactRowProps = {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
};

function ContactRow({ icon: Icon, label, value, href }: ContactRowProps) {
  const content = (
    <span className="block min-w-0 max-w-full">
      <span className="flex items-center gap-2 text-sm font-black uppercase text-pistachio-400">
        <Icon size={17} />
        {label}
      </span>
      <span className="mt-2 block min-w-0 max-w-full whitespace-normal break-words text-[clamp(1.35rem,4vw,2.65rem)] font-black leading-tight text-smoke [overflow-wrap:anywhere]">
        {value}
      </span>
    </span>
  );

  if (href) {
    return (
      <a className="block min-w-0 max-w-full border-b border-pistachio-100/14 py-6 transition hover:border-pistachio-400" href={href}>
        {content}
      </a>
    );
  }

  return <div className="min-w-0 max-w-full border-b border-pistachio-100/14 py-6">{content}</div>;
}
