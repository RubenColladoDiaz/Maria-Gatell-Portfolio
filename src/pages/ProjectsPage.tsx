import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  FolderKanban,
  Layers3,
  MousePointer2,
  Orbit,
  Target,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { SiteCopy } from "../data/content";
import { PageTransition } from "../components/PageTransition";
import { SectionKicker } from "../components/SectionKicker";

type ProjectsPageProps = {
  copy: SiteCopy;
};

type Project = SiteCopy["projects"]["cases"][number];
type LayerKey = "deliverables" | "operations" | "note";

const axisPositions = [
  "left-1/2 top-14 -translate-x-1/2",
  "right-8 top-36",
  "right-10 bottom-28",
  "left-1/2 bottom-14 -translate-x-1/2",
  "left-8 bottom-28",
  "left-10 top-36",
];

export function ProjectsPage({ copy }: ProjectsPageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState<LayerKey>("deliverables");
  const activeProject = copy.projects.cases[activeIndex];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setActiveLayer("deliverables");
  };

  return (
    <PageTransition tone="pistachio">
      <section className="relative overflow-hidden px-5 py-14 md:px-8 md:py-20">
        <div className="absolute inset-0 project-stripes" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 2xl:grid-cols-[minmax(620px,0.86fr)_minmax(0,1fr)] 2xl:items-end">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <SectionKicker icon={FolderKanban}>{copy.projects.eyebrow}</SectionKicker>
              <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.86] tracking-normal md:text-8xl">
                {copy.projects.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-ink/64">{copy.projects.intro}</p>
            </motion.div>

            <motion.div
              className="grid border-y border-ink/14 md:grid-cols-4"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.62 }}
            >
              {activeProject.stats.map((stat) => (
                <div key={stat.label} className="min-w-0 border-b border-ink/10 px-3 py-4 md:border-b-0 md:border-r md:px-4 md:last:border-r-0">
                  <p className="max-w-full break-words text-3xl font-black leading-none text-ink sm:text-4xl md:text-5xl">{stat.value}</p>
                  <p className="mt-2 max-w-[10rem] text-[0.68rem] font-black uppercase leading-tight text-ink/58 md:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-10 grid gap-0 overflow-hidden border-y border-ink/16 bg-pistachio-50/64 backdrop-blur-md lg:grid-cols-[260px_minmax(0,1fr)]"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            transition={{ delay: 0.16, duration: 0.76, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <ProjectRail
              label={copy.projects.selectorLabel}
              projects={copy.projects.cases}
              activeIndex={activeIndex}
              onSelect={handleSelect}
            />

            <div className="grid min-w-0 lg:grid-cols-[minmax(0,0.98fr)_minmax(340px,0.86fr)]">
              <ProjectDial
                project={activeProject}
                axis={copy.projects.axis}
                index={activeIndex}
                mapLabel={copy.projects.mapLabel}
                caseLabel={copy.projects.caseLabel}
              />

              <ProjectBrief
                project={activeProject}
                activeLayer={activeLayer}
                onLayerChange={setActiveLayer}
                noteLabel={copy.projects.noteLabel}
                sourceLabel={copy.projects.sourceLabel}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

type ProjectRailProps = {
  label: string;
  projects: readonly Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

function ProjectRail({ label, projects, activeIndex, onSelect }: ProjectRailProps) {
  return (
    <aside className="min-w-0 border-b border-ink/14 lg:border-b-0 lg:border-r">
      <div className="flex items-center gap-2 border-b border-ink/12 px-4 py-4 text-sm font-black uppercase text-ink/58">
        <MousePointer2 size={17} />
        {label}
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto lg:block lg:overflow-visible">
        {projects.map((project, index) => {
          const active = index === activeIndex;
          const shortTitle = project.title.split("|")[0].trim();

          return (
            <button
              key={project.title}
              type="button"
              className={`group min-w-full snap-start border-r border-ink/10 px-4 py-5 text-left transition sm:min-w-[220px] lg:min-w-0 lg:border-b lg:border-r-0 ${
                active ? "bg-ink text-pistachio-400" : "text-ink hover:bg-pistachio-100/78"
              }`}
              onClick={() => onSelect(index)}
              aria-pressed={active}
            >
              <span className={`text-xs font-black uppercase ${active ? "text-pistachio-100/62" : "text-ink/42"}`}>0{index + 1}</span>
              <span className="mt-3 flex min-w-0 items-center justify-between gap-4">
                <span className="min-w-0 text-xl font-black uppercase leading-none">{shortTitle}</span>
                <ArrowRight className="shrink-0 transition group-hover:translate-x-1" size={18} />
              </span>
              <span className={`mt-3 block text-xs font-black uppercase leading-tight ${active ? "text-pistachio-100/72" : "text-ink/48"}`}>
                {project.eyebrow}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

type ProjectDialProps = {
  project: Project;
  axis: readonly string[];
  index: number;
  mapLabel: string;
  caseLabel: string;
};

function ProjectDial({ project, axis, index, mapLabel, caseLabel }: ProjectDialProps) {
  const projectName = project.title.split("|")[0].trim();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.title}
        data-project-dial
        className="relative h-[430px] min-w-0 self-start overflow-hidden p-5 md:h-[560px] md:p-8"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.36 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,19,13,0.055)_1px,transparent_1px),linear-gradient(0deg,rgba(16,19,13,0.055)_1px,transparent_1px)] bg-[size:46px_46px]" />

        <div className="relative z-10 flex items-center gap-2 text-sm font-black uppercase text-ink/56">
          <Orbit size={18} />
          {mapLabel}
        </div>

        <motion.div
          className="absolute left-1/2 top-[52%] h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/12 md:h-[22rem] md:w-[22rem]"
          animate={{ rotate: 360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-[52%] h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-pistachio-700/34 md:h-[15.5rem] md:w-[15.5rem]"
          animate={{ rotate: -360 }}
          transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
        />

        <div
          data-project-center
          className="absolute left-1/2 top-[52%] z-20 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink p-5 text-center text-pistachio-400 shadow-glow md:h-44 md:w-44"
        >
          <div>
            <p className="text-xs font-black uppercase text-smoke/48">
              {caseLabel} 0{index + 1}
            </p>
            <p className="mx-auto mt-3 max-w-[7.8rem] text-[1.45rem] font-black uppercase leading-[0.9] md:text-[1.65rem]">
              {projectName}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 hidden md:block">
          {axis.map((item, axisIndex) => {
            const needle = item.toLowerCase().split(" ")[0];
            const active = project.coverage.some((coverage) => coverage.toLowerCase().includes(needle));

            return (
              <motion.div
                key={item}
                data-project-axis={item}
                className={`absolute z-10 whitespace-nowrap border px-3 py-2 text-center text-xs font-black uppercase leading-tight ${axisPositions[axisIndex % axisPositions.length]} ${
                  active ? "border-ink bg-ink text-pistachio-400" : "border-ink/12 bg-pistachio-50 text-ink/48"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + axisIndex * 0.04, duration: 0.38 }}
              >
                {item}
              </motion.div>
            );
          })}
        </div>

        <div className="absolute inset-x-5 bottom-5 z-10 flex flex-wrap gap-2 md:hidden">
          {project.coverage.slice(0, 6).map((item) => (
            <span key={item} className="bg-pistachio-400 px-3 py-2 text-[0.68rem] font-black uppercase leading-none text-ink">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

type ProjectBriefProps = {
  project: Project;
  activeLayer: LayerKey;
  onLayerChange: (layer: LayerKey) => void;
  noteLabel: string;
  sourceLabel: string;
};

function ProjectBrief({ project, activeLayer, onLayerChange, noteLabel, sourceLabel }: ProjectBriefProps) {
  const [mainTitle, secondaryTitle] = project.title.split("|").map((item) => item.trim());
  const layers = [
    { key: "deliverables" as const, label: project.deliverablesTitle, count: project.deliverables.length, icon: ClipboardList },
    { key: "operations" as const, label: project.operationsTitle, count: project.operations.length, icon: Layers3 },
    { key: "note" as const, label: noteLabel, count: 1, icon: FileText },
  ];
  const activeItems = activeLayer === "deliverables" ? project.deliverables : project.operations;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.title}
        className="min-w-0 border-t border-ink/12 bg-ink p-5 text-smoke md:p-8 lg:border-l lg:border-t-0"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -18 }}
        transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <p className="text-sm font-black uppercase text-pistachio-400">{project.eyebrow}</p>
        <h2 className="mt-4 break-words text-4xl font-black uppercase leading-[0.92] text-white md:text-5xl">{mainTitle}</h2>
        {secondaryTitle ? <p className="mt-3 text-sm font-black uppercase leading-5 text-pistachio-100/58">{secondaryTitle}</p> : null}

        <div className="mt-6 grid gap-5 border-y border-pistachio-100/14 py-5">
          <p className="text-base font-semibold leading-7 text-smoke/70">{project.summary}</p>
          <p className="flex gap-3 text-sm font-black uppercase leading-6 text-pistachio-100">
            <Target className="mt-0.5 shrink-0 text-pistachio-400" size={18} />
            <span className="min-w-0 break-words">{project.goal}</span>
          </p>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto border-b border-pistachio-100/14 pb-3 md:grid md:grid-cols-3 md:overflow-visible">
          {layers.map((layer) => {
            const Icon = layer.icon;
            const active = activeLayer === layer.key;

            return (
              <button
                key={layer.key}
                type="button"
                className={`min-w-[160px] border px-3 py-3 text-left transition md:min-w-0 ${
                  active ? "border-pistachio-400 bg-pistachio-400 text-ink" : "border-pistachio-100/14 text-smoke/62 hover:text-pistachio-100"
                }`}
                onClick={() => onLayerChange(layer.key)}
                aria-pressed={active}
              >
                <span className="flex items-center justify-between gap-3 text-xs font-black uppercase">
                  <Icon size={16} />
                  {layer.count}
                </span>
                <span className="mt-2 block text-sm font-black uppercase leading-tight">{layer.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeLayer === "note" ? (
            <motion.div
              key="note"
              className="mt-6 border-l-4 border-pistachio-400 pl-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24 }}
            >
              <p className="text-xs font-black uppercase text-smoke/46">{sourceLabel}</p>
              <p className="mt-2 break-words text-lg font-black leading-tight text-pistachio-400">{project.source}</p>
              <p className="mt-5 break-words text-base font-semibold leading-7 text-smoke/72">{project.note}</p>
            </motion.div>
          ) : (
            <motion.div
              key={activeLayer}
              className="mt-6 max-h-[340px] overflow-y-auto pr-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24 }}
            >
              {activeItems.map((item) => (
                <p
                  key={item}
                  className="flex min-w-0 gap-3 border-t border-pistachio-100/12 py-3 text-sm font-semibold leading-6 text-smoke/74 first:border-t-0"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-pistachio-400" size={16} />
                  <span className="min-w-0 break-words">{item}</span>
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
