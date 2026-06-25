import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { type Lang, routePaths, routes, type RouteKey, type SiteCopy } from "../data/content";
import { LanguageSwitch } from "./LanguageSwitch";

type NavigationProps = {
  currentRoute: RouteKey;
  lang: Lang;
  copy: SiteCopy;
  onNavigate: (route: RouteKey) => void;
  onLanguageChange: (lang: Lang) => void;
  contrast?: "light" | "dark";
};

export function Navigation({ currentRoute, lang, copy, onNavigate, onLanguageChange, contrast = "light" }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = contrast === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (route: RouteKey) => {
    onNavigate(route);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? "bg-ink shadow-[0_10px_40px_rgba(16,19,13,0.28)] backdrop-blur-xl"
            : "bg-pistachio-100/86 shadow-[0_10px_40px_rgba(16,19,13,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href={routePaths.home}
          className="group flex items-center gap-3"
          aria-label={copy.nav.home}
          onClick={(event) => {
            event.preventDefault();
            go("home");
          }}
        >
          <span className="grid size-10 place-items-center rounded-full bg-ink text-sm font-black text-pistachio-400 shadow-glow">
            MG
          </span>
          <span
            className={`hidden text-sm font-semibold uppercase transition sm:block ${
              isDark ? "text-pistachio-100 group-hover:text-pistachio-400" : "text-ink/70 group-hover:text-ink"
            }`}
          >
            {copy.profile.name}
          </span>
        </a>

        <div
          className={`hidden items-center gap-1 rounded-full border p-1 backdrop-blur-xl md:flex ${
            isDark ? "border-pistachio-400 bg-ink" : "border-ink/10 bg-pistachio-50/72"
          }`}
        >
          {routes.map((route) => (
            <a
              key={route.key}
              href={route.path}
              onClick={(event) => {
                event.preventDefault();
                go(route.key);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                currentRoute === route.key
                  ? isDark
                    ? "bg-pistachio-400 text-ink"
                    : "bg-ink text-pistachio-400"
                  : isDark
                    ? "text-pistachio-100 hover:bg-pistachio-400 hover:text-ink"
                    : "text-ink/66 hover:bg-ink hover:text-pistachio-400"
              }`}
            >
              {copy.nav[route.key]}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitch lang={lang} onChange={onLanguageChange} contrast={contrast} />
          <a
            href={routePaths.contact}
            onClick={(event) => {
              event.preventDefault();
              go("contact");
            }}
            className="inline-flex items-center rounded-full bg-pistachio-400 px-5 py-2.5 text-sm font-black text-ink shadow-[0_18px_38px_rgba(126,190,42,0.28)] transition hover:-translate-y-0.5 hover:bg-ink hover:text-pistachio-400"
          >
            {copy.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className={`grid size-11 place-items-center rounded-full border backdrop-blur-xl md:hidden ${
            isDark ? "border-pistachio-400 bg-ink text-pistachio-100" : "border-ink/10 bg-pistachio-50/78 text-ink"
          }`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? copy.nav.menuClose : copy.nav.menuOpen}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`grid transition-[grid-template-rows] duration-500 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`mx-5 mb-4 border p-2 backdrop-blur-xl ${
              isDark ? "border-pistachio-400 bg-ink" : "border-ink/10 bg-pistachio-50/92"
            }`}
          >
            <div className="mb-2 flex justify-end">
              <LanguageSwitch lang={lang} onChange={onLanguageChange} contrast={contrast} />
            </div>
            {routes.map((route) => (
              <a
                key={route.key}
                href={route.path}
                onClick={(event) => {
                  event.preventDefault();
                  go(route.key);
                }}
                className={`block px-4 py-3 text-base font-semibold transition ${
                  currentRoute === route.key
                    ? isDark
                      ? "bg-pistachio-400 text-ink"
                      : "bg-ink text-pistachio-400"
                    : isDark
                      ? "text-pistachio-100 hover:bg-pistachio-400 hover:text-ink"
                      : "text-ink/74 hover:bg-pistachio-100 hover:text-ink"
                }`}
              >
                {copy.nav[route.key]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
