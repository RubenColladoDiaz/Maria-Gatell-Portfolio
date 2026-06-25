import { CircleDotDashed } from "lucide-react";
import { motion } from "framer-motion";
import type { SiteCopy } from "../data/content";
import { PageTransition } from "../components/PageTransition";
import { SectionKicker } from "../components/SectionKicker";
import { AboutSystem } from "../components/visuals/AboutSystem";

type AboutPageProps = {
  copy: SiteCopy;
};

export function AboutPage({ copy }: AboutPageProps) {
  return (
    <PageTransition>
      <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <div className="absolute inset-0 pistachio-field" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div className="max-w-4xl" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionKicker icon={CircleDotDashed}>{copy.about.eyebrow}</SectionKicker>
            <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-normal md:text-8xl">
              {copy.about.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-ink/62">{copy.about.intro}</p>
          </motion.div>

          <AboutSystem about={copy.about} role={copy.profile.role} />
        </div>
      </section>
    </PageTransition>
  );
}
