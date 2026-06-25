import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
import type { SiteCopy } from "../data/content";
import { PageTransition } from "../components/PageTransition";
import { SectionKicker } from "../components/SectionKicker";
import { ExperienceSignalMap } from "../components/visuals/ExperienceSignalMap";
import { ExperienceTrajectory } from "../components/visuals/ExperienceTrajectory";

type ExperiencePageProps = {
  copy: SiteCopy;
};

export function ExperiencePage({ copy }: ExperiencePageProps) {
  return (
    <PageTransition tone="dark">
      <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(184,255,94,0.22),transparent_28%),linear-gradient(135deg,rgba(184,255,94,0.08),transparent_42%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <SectionKicker icon={BriefcaseBusiness} tone="dark">
                {copy.experience.eyebrow}
              </SectionKicker>
              <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-normal md:text-8xl">
                {copy.experience.title}
              </h1>
              <p className="mt-8 max-w-xl text-lg font-semibold leading-8 text-smoke/62">{copy.experience.intro}</p>
            </motion.div>

            <ExperienceSignalMap highlights={copy.experience.highlights} metrics={copy.experience.metrics} />
          </div>

          <ExperienceTrajectory items={copy.experience.timeline} />
        </div>
      </section>
    </PageTransition>
  );
}
