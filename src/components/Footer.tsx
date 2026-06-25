import { ArrowUpRight } from "lucide-react";
import { routePaths, type RouteKey, type SiteCopy } from "../data/content";

type FooterProps = {
  copy: SiteCopy;
  onNavigate: (route: RouteKey) => void;
};

export function Footer({ copy, onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-ink/14 bg-pistachio-700 px-5 py-10 text-smoke md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xl font-black uppercase leading-none text-pistachio-100">{copy.profile.name}</p>
          <p className="mt-2 text-sm font-semibold text-smoke/54">{copy.footer.line}</p>
        </div>
        <a
          href={routePaths.contact}
          onClick={(event) => {
            event.preventDefault();
            onNavigate("contact");
          }}
          className="group inline-flex w-fit items-center gap-3 border border-pistachio-100/24 px-5 py-3 text-sm font-black uppercase text-smoke transition hover:border-pistachio-100 hover:bg-pistachio-100 hover:text-ink"
        >
          {copy.footer.contact}
          <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
}
