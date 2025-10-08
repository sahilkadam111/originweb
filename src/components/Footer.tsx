import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useState, useEffect, createElement } from "react";
import useActiveSection from "@/hooks/useActiveSection";
import { useToast } from "@/hooks/use-toast";
import originLogo from "@/assets/origin logo.png";
import { socialLinks } from "@/config/social";
// episode thumbnails removed, streaming section deleted per request
import { Mail, ArrowUp } from "lucide-react";

export default function Footer(): JSX.Element {
  const [email, setEmail] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Email Required", description: "Please enter your email address.", variant: "destructive" });
      return;
    }
    if (!validateEmail(email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
  toast({ title: "Subscribed", description: "Thanks you'll get updates from us." });
    setEmail("");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // latestEpisodes removed, streaming section deleted



  const quickLinks = [
    { name: "About Us", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <footer className="relative pt-16 pb-8 px-4 md:px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="relative flex items-center">
                  <div className={cn("absolute -inset-2 rounded-xl transition-all duration-300", "opacity-0 group-hover:opacity-100", "bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10", "group-hover:blur-md")} />
                  <img src={originLogo} alt="Origin Story Logo" className={cn("h-24 sm:h-28 w-auto relative", "transition-all duration-300", "group-hover:brightness-125", "group-hover:scale-105")} />
                </div>
                <div className="flex flex-col justify-center">
                  {/* Brand name removed per request */}
                  <h3 className={cn("text-xl sm:text-2xl font-bold", "gradient-text", "relative inline-block", "py-2", "pb-3")}></h3>
                  <div className="mt-1 font-primary text-sm tracking-wide">
                    {/* Tagline removed per request */}
                  </div>
                </div>
              </div>
              {/* tagline removed per request */}
              {/* Social icons under brand */}
              <div className="mt-4">
                <div className="flex items-center gap-3">
                  {socialLinks.filter((s) => s.url && s.url.length > 0).map((s) => {
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
            </div>

          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.id ? (
                    <button
                      onClick={() => scrollToSection(link.id!)}
                      className={cn(
                        "transition-colors duration-300 block py-1 text-left w-full text-muted-foreground",
                        activeSection === link.id && "text-accent font-semibold"
                      )}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className={cn("text-muted-foreground hover:text-accent transition-colors duration-300 block py-1")}>
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            
          </div>

          {/* Streaming Episodes section removed per request */}

          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wide">Stay Updated</h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest episodes and exclusive content.</p>
              <div className="space-y-2">
                <div className="relative">
                  <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className={cn("bg-background pl-10", "border-border focus:border-accent/50", "placeholder:text-muted-foreground/50", "transition-all duration-300", "focus:ring-2 focus:ring-accent/10")} />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                </div>
                <Button type="submit" className={cn("w-full bg-accent/10 hover:bg-accent/20 text-accent border border-accent/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,200,255,0.2)]")}>
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</div>
            <div className="text-sm text-muted-foreground/60">Crafted with passion for storytelling and the pursuit of origins.</div>
          </div>
        </div>
      </div>

      <Button onClick={scrollToTop} className={cn("fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/50 text-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,200,255,0.2)] opacity-0 pointer-events-none", showBackToTop && "opacity-100 pointer-events-auto")} aria-label="Back to top">
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
}