import { motion } from "framer-motion";
import { Building2, CalendarDays, MoveUpRight } from "lucide-react";
import type { SiteCopy } from "../../data/content";

type ExperienceTrajectoryProps = {
  items: SiteCopy["experience"]["timeline"];
};

export function ExperienceTrajectory({ items }: ExperienceTrajectoryProps) {
  return (
    <div className="relative mt-20">
      <div className="absolute left-5 top-0 h-full w-px bg-pistachio-400/28 md:left-1/2" aria-hidden="true" />

      <div className="grid gap-8">
        {items.map((item, index) => {
          const alignRight = index % 2 === 1;

          return (
            <motion.article
              key={`${item.company}-${item.period}`}
              className="relative grid gap-5 pl-14 md:grid-cols-[minmax(0,1fr)_86px_minmax(0,1fr)] md:items-center md:pl-0"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div
                className={`absolute left-0 top-2 grid size-10 place-items-center rounded-full border border-pistachio-400 bg-ink text-sm font-black text-pistachio-400 shadow-glow md:left-1/2 md:top-1/2 md:size-16 md:-translate-x-1/2 md:-translate-y-1/2 ${
                  alignRight ? "md:order-2" : ""
                }`}
              >
                {index + 1}
              </div>

              <div
                className={`border-y border-pistachio-100/12 py-5 ${
                  alignRight ? "md:col-start-3" : "md:col-start-1 md:text-right"
                }`}
              >
                <div className={`flex items-center gap-2 ${alignRight ? "" : "md:justify-end"}`}>
                  <CalendarDays size={16} className="text-pistachio-400" />
                  <p className="text-sm font-black uppercase text-pistachio-400">{item.period}</p>
                </div>
                <div className={`mt-3 flex items-center gap-2 ${alignRight ? "" : "md:justify-end"}`}>
                  <Building2 size={16} className="text-smoke/40" />
                  <p className="text-sm font-black uppercase text-smoke/48">{item.company}</p>
                </div>
              </div>

              <div
                className={`group border-l-4 border-pistachio-400 bg-pistachio-100/[0.045] p-5 transition hover:bg-pistachio-400 hover:text-ink md:min-h-[172px] ${
                  alignRight ? "md:col-start-1 md:row-start-1 md:text-right" : "md:col-start-3"
                }`}
              >
                <h2 className="text-2xl font-black uppercase leading-none text-white transition group-hover:text-ink md:text-4xl">
                  {item.role}
                </h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-smoke/62 transition group-hover:text-ink/72">
                  {item.copy}
                </p>
                <MoveUpRight
                  className={`mt-5 text-pistachio-400 transition group-hover:text-ink ${alignRight ? "md:ml-auto" : ""}`}
                  size={24}
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
