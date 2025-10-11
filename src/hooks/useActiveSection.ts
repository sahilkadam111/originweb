import { useEffect, useState, useCallback } from "react";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = useCallback((sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }
    const section = document.querySelector(`section[data-section="${sectionId}"]`);
    if (section) {
      const offsetTop = (section as HTMLElement).getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: offsetTop - 80, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "host", "launchpad", "contact"];
      for (const id of sections) {
        const el = document.querySelector(`section[data-section="${id}"]`);
        if (el) {
          const { top, bottom } = (el as HTMLElement).getBoundingClientRect();
          if (top <= 100 && bottom > 100) {
            setActiveSection(id);
            return;
          }
        }
      }
      // default fallback
      setActiveSection("home");
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { activeSection, scrollToSection, setActiveSection } as const;
}
