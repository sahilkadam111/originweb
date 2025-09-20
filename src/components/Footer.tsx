import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useState, useEffect, createElement } from "react";
import useActiveSection from "@/hooks/useActiveSection";
import { useToast } from "@/hooks/use-toast";
import originLogo from "@/assets/origin logo.png";
import ep1Thumb from "@/assets/episode-1.jpg";
import ep2Thumb from "@/assets/episode-2.jpg";
import ep3Thumb from "@/assets/episode-3.jpg";
import { Linkedin, Instagram, Youtube, Facebook, Music4, Mail, ArrowUp, Phone } from "lucide-react";

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
    toast({ title: "Subscribed", description: "Thanks — you'll get updates from us." });
    setEmail("");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const latestEpisodes = [
    { id: 1, title: "The Big Bang Theory", description: "Exploring the birth of our universe", thumbnail: ep1Thumb },
    { id: 2, title: "Dark Matter Mystery", description: "Understanding the invisible force", thumbnail: ep2Thumb },
    { id: 3, title: "Black Holes", description: "Journey into the unknown", thumbnail: ep3Thumb },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin, color: "hover:text-[#0A66C2]", hoverBg: "hover:bg-[#0A66C2]/10", hoverBorder: "hover:border-[#0A66C2]/50" },
    { name: "Instagram", href: "#", icon: Instagram, color: "hover:text-[#E4405F]", hoverBg: "hover:bg-[#E4405F]/10", hoverBorder: "hover:border-[#E4405F]/50" },
    { name: "Youtube", href: "#", icon: Youtube, color: "hover:text-[#FF0000]", hoverBg: "hover:bg-[#FF0000]/10", hoverBorder: "hover:border-[#FF0000]/50" },
    { name: "Facebook", href: "#", icon: Facebook, color: "hover:text-[#1877F2]", hoverBg: "hover:bg-[#1877F2]/10", hoverBorder: "hover:border-[#1877F2]/50" },
    { name: "Spotify", href: "#", icon: Music4, color: "hover:text-[#1DB954]", hoverBg: "hover:bg-[#1DB954]/10", hoverBorder: "hover:border-[#1DB954]/50" },
    { name: "WhatsApp", href: "https://wa.me/1234567890", icon: Phone, color: "hover:text-[#25D366]", hoverBg: "hover:bg-[#25D366]/10", hoverBorder: "hover:border-[#25D366]/50" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about", id: "about" },
    { name: "Episodes", href: "#episodes", id: "episodes" },
    { name: "Contact", href: "#contact", id: "contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Use", href: "#terms" },
  ];

  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <footer className="relative pt-16 pb-8 px-4 md:px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <div className={cn("absolute -inset-2 rounded-xl transition-all duration-300", "opacity-0 group-hover:opacity-100", "bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10", "group-hover:blur-md")} />
                  <img src={originLogo} alt="Origin Story Logo" className={cn("h-14 sm:h-16 w-auto relative", "transition-all duration-300", "group-hover:brightness-125", "group-hover:scale-105")} />
                </div>
                <div>
                  <h3 className={cn("text-xl sm:text-2xl font-bold", "gradient-text", "relative inline-block", "py-2", "pb-3")}>The Origin</h3>
                  <div className="mt-1 font-montserrat text-sm tracking-widest">
                    <span className="text-[#fff8f8]">-BY</span>
                    <span className="ml-2 text-[#d8b036]">TAC &amp; CO.</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">Every Story Has a Beginning.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className={cn("w-10 h-10 flex items-center justify-center rounded-lg border border-border transition-all duration-300 text-muted-foreground group", social.color, social.hoverBg, social.hoverBorder, "hover:scale-110 hover:shadow-lg")} aria-label={social.name}>
                  {createElement(social.icon, { size: 18, className: "transition-transform duration-300 group-hover:scale-110" })}
                </a>
              ))}
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

          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wide">Streaming Episodes</h4>
            <div className="space-y-4">
              {latestEpisodes.map((episode) => (
                <a key={episode.id} href="#" className={cn("flex items-center gap-3 group transition-all duration-300 hover:bg-accent/5 rounded-lg p-2 -mx-2")}>
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={episode.thumbnail} alt={episode.title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium truncate group-hover:text-accent transition-colors duration-300">{episode.title}</h5>
                    <p className="text-sm text-muted-foreground truncate">{episode.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

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
            <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} The Origin Podcast. All rights reserved.</div>
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