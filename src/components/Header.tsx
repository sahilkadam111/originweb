import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import useActiveSection from "@/hooks/useActiveSection";
import { socialLinks } from "@/config/social";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import originLogo from "@/assets/origin logo.png";

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
    <span
      className={cn(
        "absolute block h-[3px] bg-current transition-all duration-300 w-12 md:w-16",
        "before:content-[''] before:absolute before:h-[3px] before:w-12 md:before:w-16 before:bg-current before:-translate-y-3 before:transition-all",
        "after:content-[''] after:absolute after:h-[3px] after:w-12 md:after:w-16 after:bg-current after:translate-y-3 after:transition-all",
        isOpen && ["bg-transparent", "before:rotate-45 before:translate-y-0", "after:-rotate-45 after:translate-y-0"]
      )}
    />
  </div>
);

export default function Header() {
  const { activeSection, scrollToSection } = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const quickLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Host", href: "#host", id: "host" },
    { name: "Launchpad", href: "#launchpad", id: "launchpad" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-background/80 before:to-transparent",
        "before:transition-opacity before:duration-500",
        isScrolled ? "before:opacity-100" : "before:opacity-0 hover:before:opacity-50"
      )}
    >
      <div className="relative z-10 flex items-center justify-between px-3 md:px-6 py-2 md:py-3">
        <div className="flex items-center">
          <div className="relative group">
            <div
              className={cn(
                "absolute -inset-2 rounded-xl transition-all duration-300",
                "opacity-0 group-hover:opacity-100",
                "bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10",
                "group-hover:blur-md"
              )}
            />
            <img
              src={originLogo}
              alt="Origin Story Logo"
              className={cn("h-24 md:h-32 w-auto relative cursor-pointer", "transition-all duration-300", "group-hover:brightness-125", "group-hover:scale-105")}
              onClick={() => scrollToSection("home")}
            />
          </div>
        </div>

        <div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation"
                className={cn(
                  "relative w-24 h-24 md:w-32 md:h-32 rounded-full",
                  "border border-transparent",
                  "hover:border-accent/30 hover:bg-accent/10",
                  "transition-all duration-300"
                )}
              >
                <HamburgerIcon isOpen={isOpen} />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full max-w-xs border-accent/20 bg-background/95 backdrop-blur-md p-6 flex flex-col">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold tracking-wide">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      {link.id ? (
                        <button
                          onClick={() => {
                            scrollToSection(link.id!);
                            setIsOpen(false);
                          }}
                          className={cn(
                            "transition-colors duration-300 block py-1 text-left w-full text-muted-foreground",
                            activeSection === link.id && "text-accent font-semibold"
                          )}
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a href={link.href} className={cn("text-muted-foreground hover:text-accent transition-colors duration-300 block py-1")}>{link.name}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Follow us</p>
                <div className="flex items-center gap-3">
                  {socialLinks
                    .filter((s) => s.url && s.url.length > 0)
                    .map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.name}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-md ${s.colorClass} hover:bg-accent/5 transition-colors duration-200`}
                          aria-label={`Open ${s.name}`}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}