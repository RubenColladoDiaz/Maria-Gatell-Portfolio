import { motion } from "framer-motion";

type HeroPortraitProps = {
  src: string;
  alt: string;
};

export function HeroPortrait({ src, alt }: HeroPortraitProps) {
  return (
    <motion.figure
      className="relative mx-auto w-[min(78vw,21rem)] sm:w-[22rem] lg:mx-0 lg:justify-self-end xl:w-[24.5rem]"
      initial={{ opacity: 0, scale: 0.86, rotate: -4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.16, duration: 0.82, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <motion.div
        className="absolute -left-5 top-12 h-28 w-5 bg-mineral"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -right-4 bottom-16 h-24 w-5 bg-coral"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="absolute -inset-4 rounded-full border border-ink/12" aria-hidden="true" />
      <div className="absolute -inset-8 rounded-full border border-pistachio-700/18" aria-hidden="true" />

      <div className="relative aspect-square overflow-hidden rounded-full border-[14px] border-pistachio-400 bg-pistachio-100 shadow-[0_34px_110px_rgba(16,19,13,0.28)]">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-ink/14" aria-hidden="true" />
      </div>

      <div className="absolute bottom-3 right-4 grid size-16 place-items-center rounded-full bg-ink text-lg font-black text-pistachio-400 shadow-glow">
        MG
      </div>
    </motion.figure>
  );
}
