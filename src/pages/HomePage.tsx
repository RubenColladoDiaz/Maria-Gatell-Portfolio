import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { routePaths, type RouteKey, type SiteCopy } from "../data/content";
import { PageTransition } from "../components/PageTransition";
import { HeroPortrait } from "../components/HeroPortrait";
import { CommerceFlow } from "../components/visuals/CommerceFlow";
import mariaPlaceholder from "../assets/maria-placeholder.jpg";

type PageProps = {
  copy: SiteCopy;
  onNavigate: (route: RouteKey) => void;
};

export function HomePage({ copy, onNavigate }: PageProps) {
  return (
    <PageTransition>
      <section className="relative min-h-[calc(100svh-6rem)] overflow-hidden">
        <div className="absolute inset-0 pistachio-field" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-smoke to-transparent" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-16">
          <div className="grid min-h-[66svh] items-center gap-x-10 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,420px)]">
            <div className="lg:col-start-1">
              <motion.p
                className="mb-7 inline-flex w-fit items-center gap-2 border border-ink/12 bg-pistachio-50/70 px-4 py-2 text-sm font-black uppercase text-ink/70 backdrop-blur-md"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Sparkles size={16} className="text-pistachio-700" />
                {copy.profile.badge}
              </motion.p>

              <motion.h1
                className="max-w-5xl font-display text-[clamp(4.4rem,13vw,11rem)] font-black uppercase leading-[0.78] tracking-normal text-ink"
                initial={{ opacity: 0, y: 42 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              >
                María
                <span className="block text-pistachio-700">Gatell</span>
              </motion.h1>
            </div>

            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <HeroPortrait src={mariaPlaceholder} alt={copy.home.portraitAlt} />
            </div>

            <div className="lg:col-start-1">
              <motion.div
                className="max-w-3xl"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.72 }}
              >
                <p className="text-2xl font-semibold leading-tight text-ink md:text-4xl">{copy.profile.headline}</p>
              </motion.div>

              <motion.div
                className="mt-9 flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.7 }}
              >
                <a
                  href={routePaths.experience}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate("experience");
                  }}
                  className="group inline-flex items-center gap-3 bg-ink px-6 py-4 text-sm font-black uppercase text-pistachio-400 transition hover:-translate-y-1 hover:shadow-glow"
                >
                  {copy.profile.primaryAction}
                  <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href={routePaths.contact}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate("contact");
                  }}
                  className="inline-flex items-center border border-ink/16 bg-pistachio-50/72 px-6 py-4 text-sm font-black uppercase text-ink transition hover:-translate-y-1 hover:bg-pistachio-50"
                >
                  {copy.profile.secondaryAction}
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative mt-10 min-h-[360px] overflow-hidden border-y border-ink/12 md:min-h-[440px] lg:mt-2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.42, duration: 1 }}
          >
            <CommerceFlow
              labels={copy.flow.nodes}
              centerTop={copy.flow.centerTop}
              center={copy.flow.center}
              eyebrow={copy.flow.eyebrow}
              line={copy.flow.line}
              ariaLabel={copy.flow.aria}
            />
          </motion.div>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.75 }}
          >
            <div className="flex flex-wrap gap-3 border-y border-ink/12 py-5">
              {copy.home.strips.map((item) => (
                <span key={item} className="bg-ink px-4 py-2 text-xs font-black uppercase text-pistachio-400">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
