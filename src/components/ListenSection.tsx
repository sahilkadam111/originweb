import { Button } from "@/components/ui/button";
import { ExternalLink, Headphones, Radio, Volume2, Mic } from "lucide-react";

const platforms = [
  {
    name: "Spotify",
    icon: Volume2,
    emoji: "🎵",
    color: "bg-green-500",
    url: "#",
  },
  {
    name: "Apple Podcasts",
    icon: Headphones,
    emoji: "🎧",
    color: "bg-purple-500",
    url: "#",
  },
  {
    name: "YouTube",
    icon: Radio,
    emoji: "📺",
    color: "bg-red-500",
    url: "#",
  },
  {
    name: "Google Podcasts",
    icon: Mic,
    emoji: "🔍",
    color: "bg-blue-500",
    url: "#",
  },
];

export default function ListenSection() {
  return (
    <section className="py-24 px-6 bg-card/20 relative">
      {/* Audio Wave Background */}
      <div className="absolute top-0 left-0 right-0 h-32 flex items-end justify-center gap-2 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-2 bg-accent rounded-full audio-wave"
            style={{
              height: `${10 + (i % 5) * 8}px`,
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <p className="text-accent text-lg font-medium mb-4 flex items-center justify-center gap-2">
            <Headphones className="w-5 h-5" />
            Tune in, anytime, anywhere.
            <Headphones className="w-5 h-5" />
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Radio className="w-8 h-8 text-accent mic-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Where to Listen
            </h2>
            <Volume2 className="w-8 h-8 text-primary mic-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Animated Mic Icon */}
                <div className="absolute top-2 right-2 opacity-20">
                  <Mic className="w-4 h-4 text-accent mic-bounce" />
                </div>
                
                <div className="text-4xl mb-4">{platform.emoji}</div>
                <IconComponent className="w-8 h-8 mx-auto mb-4 text-accent mic-bounce" />
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {platform.name}
                </h3>
                <Button 
                  variant="neon" 
                  size="sm" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Listen
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 glass-card p-6 rounded-2xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Mic className="w-6 h-6 text-accent mic-bounce" />
            <p className="text-muted-foreground">
              Available on all major podcast platforms.
            </p>
            <Headphones className="w-6 h-6 text-primary mic-bounce" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-accent font-medium">
            🎙️ New episodes every Tuesday at 6 AM EST
          </p>
        </div>
      </div>
    </section>
  );
}