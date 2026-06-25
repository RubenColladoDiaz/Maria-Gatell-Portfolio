import { FolderKanban, Plus } from "lucide-react";
import { motion } from "framer-motion";
import type { SiteCopy } from "../data/content";
import { PageTransition } from "../components/PageTransition";
import { SectionKicker } from "../components/SectionKicker";

type ProjectsPageProps = {
  copy: SiteCopy;
};

export function ProjectsPage({ copy }: ProjectsPageProps) {
  return (
    <PageTransition tone="pistachio">
      <section className="relative min-h-[calc(100svh-6rem)] overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <div className="absolute inset-0 project-stripes" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionKicker icon={FolderKanban}>{copy.projects.eyebrow}</SectionKicker>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.88] tracking-normal md:text-8xl">
              {copy.projects.title}
            </h1>
          </motion.div>

          <motion.div
            className="relative min-h-[560px] overflow-hidden border border-ink/18 bg-pistachio-50/74 p-5 backdrop-blur-md md:p-8"
            initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="absolute inset-5 border border-dashed border-ink/28" aria-hidden="true" />
            <div className="relative grid min-h-[500px] place-items-center">
              <div className="grid w-full max-w-2xl gap-4">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-ink text-pistachio-400 shadow-glow">
                  <Plus size={28} />
                </div>
                <p className="text-center text-sm font-black uppercase text-ink/46">{copy.projects.empty}</p>
                <div className="grid gap-3 md:grid-cols-3">
                  {copy.projects.slots.map((slot) => (
                    <div key={slot} className="min-h-[180px] border border-ink/14 bg-pistachio-100/58 p-4">
                      <span className="block h-2 w-12 bg-ink" />
                      <p className="mt-4 text-sm font-black uppercase text-ink/60">{slot}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
