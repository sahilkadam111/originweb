import { Button } from "@/components/ui/button";
import { Mail, Instagram, Twitter, Linkedin, Mic, Radio, Headphones } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:sahil@theorigin.com",
    color: "hover:text-blue-400",
    description: "Studio inquiries",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "#",
    color: "hover:text-pink-400",
    description: "Behind the scenes",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "#",
    color: "hover:text-blue-400",
    description: "Episode updates",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "#",
    color: "hover:text-blue-600",
    description: "Professional network",
  },
];

export default function ContactSection() {
  return (
    <section data-section="contact" className="py-24 px-6 bg-card/20 relative">
      {/* Studio Equipment Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="absolute top-10 left-10 opacity-5 rotate-12">
          <Mic className="w-32 h-32 text-accent" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5 -rotate-12">
          <Headphones className="w-28 h-28 text-primary" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <Radio className="w-24 h-24 text-accent" />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <p className="text-accent text-lg font-medium mb-4 flex items-center justify-center gap-2">
            <Mic className="w-5 h-5" />
            Have a story worth telling? Let's begin.
            <Mic className="w-5 h-5" />
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Radio className="w-8 h-8 text-accent mic-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Get in Touch
            </h2>
            <Headphones className="w-8 h-8 text-primary mic-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Know an origin story that deserves to be told? Want to visit the studio? 
            Have feedback or suggestions? I'd love to hear from you and explore new beginnings together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Studio Icon */}
                <div className="absolute top-2 right-2 opacity-20">
                  <Mic className="w-4 h-4 text-accent mic-bounce" />
                </div>
                
                <IconComponent className={`h-8 w-8 mx-auto mb-3 text-muted-foreground group-hover:text-accent transition-colors ${social.color}`} />
                <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors mb-1">
                  {social.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {social.description}
                </div>
              </a>
            );
          })}
        </div>
        
        <div className="glass-card p-8 rounded-2xl relative">
          {/* Studio Mic Decorations */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Mic className="w-8 h-8 text-accent mic-bounce" />
          </div>
          
          <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center justify-center gap-3">
            <Radio className="w-6 h-6 text-accent" />
            Suggest a Story for the Studio
            <Headphones className="w-6 h-6 text-primary" />
          </h3>
          <p className="text-muted-foreground mb-6">
            Every great story starts somewhere. Share your ideas for future episodes, 
            or nominate someone whose origin story deserves the spotlight.
          </p>
          <Button variant="neon" size="lg" className="pulse-neon">
            <Mail className="mr-2 h-5 w-5" />
            🎙️ Submit Your Story Idea
          </Button>
          
          <div className="mt-6 text-sm text-muted-foreground italic">
            "The best stories come from listeners who care about origins as much as we do."
          </div>
        </div>
      </div>
    </section>
  );
}