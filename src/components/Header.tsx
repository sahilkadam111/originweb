import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
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
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`section[data-section="${sectionId}"]`);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'episodes', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const sectionId of sections) {
        const section = document.querySelector(`section[data-section="${sectionId}"]`);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 100 && bottom > 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonStyles = (section: string) => {
    return cn(
      "relative overflow-hidden group px-4 py-1.5 rounded-full transition-all duration-300",
      "text-sm font-medium tracking-wide",
      "bg-transparent hover:bg-accent/10",
      "border border-transparent",
      "hover:border-accent/30",
      activeSection === section ? [
        "text-accent",
        "border-accent/50",
        "bg-accent/10",
        "shadow-[0_0_20px_rgba(0,200,255,0.2)]"
      ] : [
        "text-white/70",
        "hover:text-accent"
      ]
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
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
              }}
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {['home', 'about', 'episodes', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => {
                if (section === 'home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  scrollToSection(section);
                }
              }}
              className={buttonStyles(section)}
            >
              <span className="relative z-10 uppercase">
                {section}
              </span>
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
              <nav className="flex flex-col space-y-2 mt-8">
                {['home', 'about', 'episodes', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      if (section === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        scrollToSection(section);
                      }
                      setIsOpen(false);
                    }}
                    className={cn(
                      buttonStyles(section),
                      "w-full justify-center"
                    )}
                  >
                    <span className="relative z-10 uppercase">
                      {section}
                    </span>
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