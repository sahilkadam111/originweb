import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useState, useEffect, createElement } from "react";
import { useToast } from "@/hooks/use-toast";
import originLogo from "@/assets/origin logo.png";
import { 
  Linkedin,
  Instagram, 
  Youtube, 
  Facebook,
  Music4
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Here you would typically send this to your backend
    toast({
      title: "Thank you for subscribing!",
      description: "We'll keep you updated with the latest episodes and stories.",
    });
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
      color: "hover:text-[#0A66C2]",
      hoverBg: "hover:bg-[#0A66C2]/10",
      hoverBorder: "hover:border-[#0A66C2]/50"
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
      color: "hover:text-[#E4405F]",
      hoverBg: "hover:bg-[#E4405F]/10",
      hoverBorder: "hover:border-[#E4405F]/50"
    },
    {
      name: "Youtube",
      href: "#",
      icon: Youtube,
      color: "hover:text-[#FF0000]",
      hoverBg: "hover:bg-[#FF0000]/10",
      hoverBorder: "hover:border-[#FF0000]/50"
    },
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
      color: "hover:text-[#1877F2]",
      hoverBg: "hover:bg-[#1877F2]/10",
      hoverBorder: "hover:border-[#1877F2]/50"
    },
    {
      name: "Spotify",
      href: "#",
      icon: Music4,
      color: "hover:text-[#1DB954]",
      hoverBg: "hover:bg-[#1DB954]/10",
      hoverBorder: "hover:border-[#1DB954]/50"
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Episodes", href: "#episodes" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Use", href: "#terms" },
  ];

  return (
    <footer className="relative pt-16 pb-8 px-4 md:px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="relative">
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
                        "h-14 sm:h-16 w-auto relative",
                        "transition-all duration-300",
                        "group-hover:brightness-125",
                        "group-hover:scale-105"
                      )}
                    />
                  </div>
                  
                  <h3 className={cn(
                    "text-xl sm:text-2xl font-bold",
                    "gradient-text",
                    "relative inline-block",
                    "py-2",
                    "pb-3",
                    "leading-relaxed",
                    "tracking-normal",
                    "overflow-visible",
                    "group-hover:after:opacity-100",
                    "after:absolute after:inset-0",
                    "after:bg-gradient-neon after:opacity-0",
                    "after:blur-2xl after:-z-10",
                    "after:transition-opacity after:duration-500"
                  )}>
                    The Origin
                  </h3>
                </div>
                
                <p className={cn(
                  "text-muted-foreground",
                  "transition-colors duration-300",
                  "group-hover:text-accent/80"
                )}>
                  Every Story Has a Beginning.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-full",
                    "border border-border transition-all duration-300",
                    "text-muted-foreground",
                    social.color,
                    social.hoverBg,
                    social.hoverBorder,
                    "hover:shadow-[0_0_15px_rgba(0,200,255,0.15)]"
                  )}
                  aria-label={social.name}
                >
                  {createElement(social.icon, {
                    size: 20,
                    className: "transition-transform duration-300 group-hover:scale-110"
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(
                      "text-muted-foreground hover:text-accent transition-colors duration-300",
                      "block py-1"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Episodes */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Latest Episodes</h4>
            <div className="space-y-4">
              {[1, 2, 3].map((episode) => (
                <a
                  key={episode}
                  href="#"
                  className={cn(
                    "block group",
                    "transition-all duration-300"
                  )}
                >
                  <div className="text-sm font-medium group-hover:text-accent">
                    Episode {episode}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Exploring the mysteries of our universe
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Stay Updated</h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest episodes and stories.
              </p>
              <div className="flex flex-col gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "bg-background",
                    "border-border focus:border-accent/50",
                    "placeholder:text-muted-foreground/50"
                  )}
                />
                <Button 
                  type="submit"
                  className={cn(
                    "w-full",
                    "bg-accent/10 hover:bg-accent/20",
                    "text-accent",
                    "border border-accent/50",
                    "transition-all duration-300",
                    "hover:shadow-[0_0_20px_rgba(0,200,255,0.2)]"
                  )}
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} The Origin Podcast. All rights reserved.
            </div>
            <div className="text-xs text-muted-foreground/60 text-center md:text-right">
              Crafted with passion for storytelling and the pursuit of origins.
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 w-12 h-12 rounded-full",
          "bg-accent/10 hover:bg-accent/20",
          "border border-accent/50",
          "text-accent",
          "transition-all duration-300",
          "hover:shadow-[0_0_20px_rgba(0,200,255,0.2)]",
          "opacity-0 pointer-events-none",
          showBackToTop && "opacity-100 pointer-events-auto"
        )}
        aria-label="Back to top"
      >
        ↑
      </Button>
    </footer>
  );
}