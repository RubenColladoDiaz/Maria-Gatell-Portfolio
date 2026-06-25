import type { LucideIcon } from "lucide-react";

type SectionKickerProps = {
  icon: LucideIcon;
  children: string;
  tone?: "dark" | "light";
};

export function SectionKicker({ icon: Icon, children, tone = "light" }: SectionKickerProps) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-sm font-black uppercase ${
        tone === "dark" ? "text-pistachio-400" : "text-pistachio-700"
      }`}
    >
      <Icon size={17} />
      {children}
    </p>
  );
}
