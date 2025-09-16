import { Mic2, Volume2, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import podcastStudio from "@/assets/podcast-studio.jpg";

export default function AboutSection() {
  return (
    <section data-section="about" className="py-24 px-6 bg-background relative">
      {/* Studio Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={podcastStudio} 
          alt="Podcast studio setup" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <p className="text-accent text-lg font-medium mb-4 flex items-center justify-center gap-2">
            <Volume2 className="w-5 h-5" />
            Not just stories. The start of everything.
            <Volume2 className="w-5 h-5" />
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <Mic2 className="w-8 h-8 text-accent mic-bounce" />
          <div className="relative inline-block">
            <h2 className={cn(
              "text-4xl md:text-5xl font-bold",
              "gradient-text",
              "relative",
              "py-3 px-4", // Add padding
              "pb-4", // Extra bottom padding for descenders
              "leading-relaxed", // Relaxed line height
              "tracking-normal", // Normal letter spacing
              "overflow-visible" // Ensure text isn't cut off
            )}>
              About The Origin
            </h2>
            {/* Add a spacer for extra clearance */}
            <div className="h-2" />
          </div>
          <Headphones className="w-8 h-8 text-primary mic-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          The Origin uncovers the beginnings of ideas, cultures, and people who changed the world. 
          Every episode takes you back to where it all began. From the first spark of innovation 
          to the moment that changed everything, we explore the untold stories behind history's 
          most pivotal moments.
        </p>
        
        {/* Podcast Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl text-center">
            <Mic2 className="w-12 h-12 text-accent mx-auto mb-4 mic-bounce" />
            <h3 className="text-lg font-semibold mb-2">Deep Research</h3>
            <p className="text-muted-foreground text-sm">Months of investigation go into every origin story we tell.</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Volume2 className="w-12 h-12 text-accent mx-auto mb-4 mic-bounce" style={{ animationDelay: '0.5s' }} />
            <h3 className="text-lg font-semibold mb-2">Immersive Audio</h3>
            <p className="text-muted-foreground text-sm">Cinematic soundscapes transport you to the moment it all began.</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Headphones className="w-12 h-12 text-accent mx-auto mb-4 mic-bounce" style={{ animationDelay: '1s' }} />
            <h3 className="text-lg font-semibold mb-2">Expert Insights</h3>
            <p className="text-muted-foreground text-sm">Historians and experts share never-before-heard perspectives.</p>
          </div>
        </div>
      </div>
    </section>
  );
}