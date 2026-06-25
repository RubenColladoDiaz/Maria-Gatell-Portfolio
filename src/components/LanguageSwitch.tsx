import type { Lang } from "../data/content";

type LanguageSwitchProps = {
  lang: Lang;
  onChange: (lang: Lang) => void;
  contrast?: "light" | "dark";
};

export function LanguageSwitch({ lang, onChange, contrast = "light" }: LanguageSwitchProps) {
  const isDark = contrast === "dark";

  return (
    <div
      className={`flex rounded-full border p-1 backdrop-blur-xl ${
        isDark ? "border-pistachio-400 bg-ink" : "border-ink/10 bg-pistachio-50/72"
      }`}
    >
      {(["es", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          className={`rounded-full px-3 py-2 text-xs font-black uppercase transition ${
            lang === option
              ? isDark
                ? "bg-pistachio-400 text-ink"
                : "bg-ink text-pistachio-400"
              : isDark
                ? "text-pistachio-100 hover:bg-pistachio-400 hover:text-ink"
                : "text-ink/58 hover:bg-pistachio-100 hover:text-ink"
          }`}
          onClick={() => onChange(option)}
          aria-pressed={lang === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
