import { motion } from "framer-motion";
import { Gauge, Orbit, TrendingUp } from "lucide-react";
import type { SiteCopy } from "../../data/content";

type ExperienceSignalMapProps = {
  highlights: SiteCopy["experience"]["highlights"];
  metrics: SiteCopy["experience"]["metrics"];
};

const highlightPositions = [
  "md:left-0 md:top-10",
  "md:right-0 md:top-2",
  "md:right-6 md:bottom-14",
  "md:left-8 md:bottom-8",
];

const metricBars = ["h-24", "h-20", "h-28"];

export function ExperienceSignalMap({ highlights, metrics }: ExperienceSignalMapProps) {
  return (
    <motion.div
      className="relative min-h-[560px] overflow-hidden border border-pistachio-400/24 bg-pistachio-400/[0.07] p-5 md:p-8"
      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      transition={{ delay: 0.12, duration: 0.82, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(232,255,209,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(232,255,209,0.08)_1px,transparent_1px)] bg-[size:46px_46px]" />

      <div className="relative hidden min-h-[420px] md:block">
        <motion.div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pistachio-400/34"
          animate={{ rotate: 360 }}
          transition={{ duration: 36, ease: "linear", repeat: Infinity }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-pistachio-100/22"
          animate={{ rotate: -360 }}
          transition={{ duration: 42, ease: "linear", repeat: Infinity }}
        />

        <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-center text-pistachio-400 shadow-glow">
          <div>
            <Orbit className="mx-auto mb-3" size={26} />
            <p className="text-xs font-black uppercase text-smoke/48">Deal</p>
            <p className="text-4xl font-black uppercase leading-none">Engine</p>
          </div>
        </div>

        {highlights.map((item, index) => (
          <motion.div
            key={item}
            className={`absolute max-w-[210px] border-l-4 border-pistachio-400 bg-ink/62 p-4 backdrop-blur-md ${highlightPositions[index]}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + index * 0.08, duration: 0.55 }}
          >
            <p className="text-xs font-black uppercase text-pistachio-400">0{index + 1}</p>
            <p className="mt-2 text-lg font-black leading-tight text-smoke">{item}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative grid gap-3 md:hidden">
        <div className="flex items-center gap-3 border-y border-pistachio-400/28 py-4">
          <div className="grid size-14 place-items-center rounded-full bg-pistachio-400 text-ink">
            <Orbit size={24} />
          </div>
          <p className="text-2xl font-black uppercase leading-none text-pistachio-400">Deal engine</p>
        </div>
        {highlights.map((item, index) => (
          <div key={item} className="flex gap-3 border-b border-pistachio-100/12 py-3">
            <span className="font-black text-pistachio-400">0{index + 1}</span>
            <span className="font-black leading-tight text-smoke">{item}</span>
          </div>
        ))}
      </div>

      <div className="relative mt-8 grid gap-4 md:grid-cols-[0.78fr_1.22fr] md:items-end">
        <div className="flex items-center gap-3 border-y border-pistachio-400/24 py-5">
          <Gauge className="text-pistachio-400" size={28} />
          <p className="text-xs font-black uppercase text-smoke/58">Revenue signals</p>
        </div>

        <div className="grid grid-cols-3 items-end gap-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="grid min-w-0 gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 + index * 0.08, duration: 0.5 }}
            >
              <div className={`bg-pistachio-400 ${metricBars[index]}`} />
              <p className="text-xl font-black leading-none text-pistachio-400 break-all">{metric.value}</p>
              <p className="text-[0.68rem] font-black uppercase leading-tight text-smoke/54">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <TrendingUp className="absolute right-5 top-5 text-pistachio-400/28" size={84} strokeWidth={1} />
    </motion.div>
  );
}
