import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import useActiveSection from "@/hooks/useActiveSection"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import originLogo from "@/assets/origin logo.png"

// Custom hamburger menu component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-6 h-6 cursor-pointer">
      <span className={cn(
        "absolute h-[2px] bg-current transition-all duration-300 ease-in-out transform",
        "before:absolute before:h-[2px] before:bg-current before:transition-all before:duration-300 before:content-['']",
        "after:absolute after:h-[2px] after:bg-current after:transition-all after:duration-300 after:content-['']",
        "w-6 top-1/2 -translate-y-1/2",
        "before:w-6 before:-top-2",
        "after:w-6 after:top-2",
        isOpen && [
          "bg-transparent",
          "before:rotate-45 before:translate-y-2",
          "after:-rotate-45 after:-translate-y-2"
        ]
      )} />
    </div>
  );
};

const Header = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  const buttonStyles = (section: string) => {
    return cn(
      "relative overflow-hidden group px-5 py-2 rounded-full transition-all duration-300",
      "text-sm font-semibold tracking-wide",
      "border border-transparent",
      "backdrop-blur-sm",
      activeSection === section
        ? [
            "text-white",
            "bg-gradient-to-r from-accent to-primary",
            "shadow-[0_6px_24px_rgba(58,123,213,0.18)]",
            "scale-100",
          ]
        : [
            "text-white/80",
            "bg-transparent",
            "hover:bg-accent/10",
            "hover:text-white",
            "hover:scale-105",
          ],
    );
  };

  const [isOpen, setIsOpen] = useState(false);



  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      "before:absolute before:inset-0 before:bg-gradient-to-b before:from-background/80 before:to-transparent",
      "before:transition-opacity before:duration-500",
      isScrolled ? "before:opacity-100" : "before:opacity-0 hover:before:opacity-50"
    )}>
      <div className="relative z-10 flex items-center justify-between px-3 md:px-6 py-2 md:py-3">
        <div className="flex items-center">
          <div className="relative group">
            <div className={cn(
              "absolute -inset-2 rounded-xl transition-all duration-300",
              "opacity-0 group-hover:opacity-100",
              "bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10",
              "group-hover:blur-md"
            )}/>
            <img 
              src={originLogo} 
              alt="Origin Story Logo" 
              className={cn(
                "h-14 md:h-20 w-auto relative cursor-pointer",
                "transition-all duration-300",
                "group-hover:brightness-125",
                "group-hover:scale-105"
              )}
              onClick={() => {
                scrollToSection('home');
              }}
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3">
          {[
            { id: 'home', label: 'Home' },
            { id: 'episodes', label: 'Streaming' },
            { id: 'about', label: 'About Us' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  scrollToSection(item.id);
                }
              }}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={buttonStyles(item.id)}
            >
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className={cn(
                  "relative w-10 h-10 rounded-full",
                  "border border-transparent",
                  "hover:border-accent/30 hover:bg-accent/10",
                  "transition-all duration-300"
                )}
              >
                <HamburgerIcon isOpen={isOpen} />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full max-w-xs border-accent/20 bg-background/95 backdrop-blur-md p-6"
            >
              <nav className="flex flex-col space-y-3 mt-8">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'episodes', label: 'Streaming' },
                  { id: 'about', label: 'About Us' },
                  { id: 'contact', label: 'Contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        scrollToSection(item.id);
                      }
                      setIsOpen(false);
                    }}
                    className={cn(
                      buttonStyles(item.id),
                      "w-full justify-center text-left px-6"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;