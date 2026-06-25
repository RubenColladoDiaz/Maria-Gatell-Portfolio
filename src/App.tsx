import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { content, type Lang, type RouteKey } from "./data/content";
import { pathForRoute, routeFromPath } from "./lib/router";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";

const storageKey = "maria-gatell-lang";

function getInitialLang(): Lang {
  const stored = window.localStorage.getItem(storageKey);
  if (stored === "es" || stored === "en") {
    return stored;
  }
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const [route, setRoute] = useState<RouteKey>(() => routeFromPath(window.location.pathname));
  const copy = useMemo(() => content[lang], [lang]);
  const navContrast: "light" | "dark" = route === "experience" || route === "contact" ? "dark" : "light";

  useEffect(() => {
    const onPopState = () => setRoute(routeFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, lang);
    document.documentElement.lang = lang;
    document.title = copy.metaTitle;
  }, [copy.metaTitle, lang]);

  const navigate = (nextRoute: RouteKey) => {
    const nextPath = pathForRoute(nextRoute);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
    }
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = (() => {
    switch (route) {
      case "experience":
        return <ExperiencePage copy={copy} />;
      case "projects":
        return <ProjectsPage copy={copy} />;
      case "about":
        return <AboutPage copy={copy} />;
      case "contact":
        return <ContactPage copy={copy} />;
      case "home":
      default:
        return <HomePage copy={copy} onNavigate={navigate} />;
    }
  })();

  return (
    <div className="min-h-screen overflow-hidden bg-smoke text-ink selection:bg-ink selection:text-pistachio-400">
      <Navigation
        currentRoute={route}
        lang={lang}
        copy={copy}
        onNavigate={navigate}
        onLanguageChange={setLang}
        contrast={navContrast}
      />
      <AnimatePresence mode="wait">{page}</AnimatePresence>
      <Footer copy={copy} onNavigate={navigate} />
    </div>
  );
}
