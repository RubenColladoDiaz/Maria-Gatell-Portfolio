import { motion } from "framer-motion";

type CommerceFlowProps = {
  labels: readonly string[];
  centerTop: string;
  center: string;
  eyebrow: string;
  line: string;
  ariaLabel: string;
};

const nodeLayout = [
  { x: "10%", y: "18%", delay: 0 },
  { x: "62%", y: "10%", delay: 0.16 },
  { x: "78%", y: "42%", delay: 0.32 },
  { x: "42%", y: "70%", delay: 0.48 },
  { x: "14%", y: "58%", delay: 0.64 },
];

export function CommerceFlow({ labels, centerTop, center, eyebrow, line, ariaLabel }: CommerceFlowProps) {
  return (
    <div className="absolute inset-0 overflow-hidden border-l border-ink/10 md:border-l-0" aria-label={ariaLabel}>
      <div className="absolute inset-0 kinetic-lines" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[min(82vw,650px)] w-[min(82vw,650px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/10 bg-pistachio-50/44 backdrop-blur-sm md:h-[620px] md:w-[620px]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[min(72vw,560px)] w-[min(72vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pistachio-700/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[min(52vw,420px)] w-[min(52vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/18"
        animate={{ rotate: -360 }}
        transition={{ duration: 46, ease: "linear", repeat: Infinity }}
      />

      <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink p-3 text-center text-pistachio-400 shadow-glow md:h-[220px] md:w-[220px]">
        <div className="grid h-full place-items-center rounded-full border border-pistachio-400/30">
          <div>
            <p className="text-xs font-black uppercase text-white/46">{centerTop}</p>
            <p className="mt-2 text-4xl font-black uppercase leading-none md:text-5xl">{center}</p>
          </div>
        </div>
      </div>

      {nodeLayout.map((node, index) => (
        <motion.div
          key={labels[index]}
          className="absolute"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0.82, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: node.delay, duration: 0.7 }}
        >
          <motion.div
            className="node-chip"
            animate={{ y: [0, -10, 0] }}
            transition={{ delay: node.delay, duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span />
            {labels[index]}
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-14 right-0 max-w-[260px] border-y border-ink/14 bg-pistachio-50/70 px-5 py-4 backdrop-blur-xl"
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.72, duration: 0.7 }}
      >
        <p className="text-xs font-black uppercase text-ink/46">{eyebrow}</p>
        <p className="mt-2 text-2xl font-black leading-none text-ink">{line}</p>
      </motion.div>
    </div>
  );
}
