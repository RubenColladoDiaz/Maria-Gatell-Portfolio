import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, Languages, Megaphone, Target, UsersRound } from "lucide-react";
import type { SiteCopy } from "../../data/content";

type AboutSystemProps = {
  about: SiteCopy["about"];
  role: string;
};

const operatingIcons = [Target, UsersRound, Megaphone, Languages];
const orbitPositions = [
  "lg:left-0 lg:top-8",
  "lg:right-0 lg:top-20",
  "lg:left-8 lg:bottom-12",
  "lg:right-8 lg:bottom-2",
];

export function AboutSystem({ about, role }: AboutSystemProps) {
  return (
    <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center">
      <motion.div
        className="relative min-h-[620px] overflow-hidden border-y border-ink/12 py-6"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.72 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,19,13,0.055)_1px,transparent_1px),linear-gradient(0deg,rgba(16,19,13,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="relative hidden h-[560px] lg:block">
          <motion.div
            className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/12"
            animate={{ rotate: 360 }}
            transition={{ duration: 42, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-pistachio-700/26"
            animate={{ rotate: -360 }}
            transition={{ duration: 48, ease: "linear", repeat: Infinity }}
          />
          <div className="absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink p-6 text-center text-pistachio-400 shadow-[0_30px_100px_rgba(16,19,13,0.24)]">
            <div>
              <p className="text-xs font-black uppercase text-smoke/48">Maria OS</p>
              <p className="mt-2 text-4xl font-black uppercase leading-none">Value</p>
            </div>
          </div>

          {about.operatingSystem.map((item, index) => {
            const Icon = operatingIcons[index];

            return (
              <motion.div
                key={item.label}
                className={`absolute max-w-[250px] border-l-4 border-ink bg-pistachio-50/72 p-4 backdrop-blur-md ${orbitPositions[index]}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.07, duration: 0.55 }}
              >
                <p className="flex items-center gap-2 text-sm font-black uppercase text-pistachio-700">
                  <Icon size={17} />
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-black leading-tight text-ink">{item.value}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="relative grid gap-4 lg:hidden">
          {about.operatingSystem.map((item, index) => {
            const Icon = operatingIcons[index];

            return (
              <motion.div
                key={item.label}
                className="border-l-4 border-ink bg-pistachio-50/74 p-4 backdrop-blur-md"
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
              >
                <p className="flex items-center gap-2 text-sm font-black uppercase text-pistachio-700">
                  <Icon size={17} />
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-black leading-tight text-ink">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="grid gap-8"
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.18, duration: 0.68 }}
      >
        <div className="border-y border-ink/12 py-6">
          <p className="flex items-center gap-2 text-sm font-black uppercase text-pistachio-700">
            <GraduationCap size={18} />
            {about.educationTitle}
          </p>
          <div className="mt-6 grid gap-5">
            {about.education.map((item, index) => (
              <div key={item} className="grid grid-cols-[56px_1fr] items-center gap-4">
                <span className="grid size-14 place-items-center rounded-full bg-ink text-sm font-black text-pistachio-400">
                  0{index + 1}
                </span>
                <p className="border-b border-ink/10 pb-4 text-xl font-black leading-tight text-ink md:text-2xl">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="flex items-center gap-2 text-sm font-black uppercase text-pistachio-700">
            <BadgeCheck size={18} />
            {about.certTitle}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {about.certifications.slice(0, 4).map((item) => (
              <span key={item} className="border border-ink/12 bg-ink px-4 py-3 text-sm font-black uppercase leading-tight text-pistachio-400">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="border-l-4 border-pistachio-500 bg-pistachio-50/72 p-5">
          <p className="text-sm font-black uppercase text-ink/58">{role}</p>
        </div>
      </motion.div>
    </div>
  );
}
