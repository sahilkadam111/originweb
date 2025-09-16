import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroOrigin from "@/assets/hero-origin.jpg";
import originLogo from "@/assets/origin logo.png";

export default function PodcastHero() {
  return (
    <section data-section="home" className="hero-bg min-h-screen flex items-center justify-center text-center relative overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroOrigin} 
          alt="Origin Hero Background" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          <h1 className={cn(
            "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold",
            "gradient-text",
            "relative",
            "py-4 px-6", // Increased padding
            "pb-6", // Extra bottom padding for descenders
            "mx-auto", // Center the text
            "leading-normal", // Adjusted line height
            "whitespace-nowrap", // Prevent text wrapping
            "tracking-normal", // Normal letter spacing
            "overflow-visible", // Ensure descenders are visible
            "group-hover:after:opacity-100",
            "after:absolute after:inset-0",
            "after:bg-gradient-neon after:opacity-0",
            "after:blur-2xl after:-z-10",
            "after:transition-opacity after:duration-500"
          )}>
            The Origin
          </h1>
          {/* Add a spacer div to ensure proper spacing */}
          <div className="h-4" />
        </div>
        
        <p className="text-2xl md:text-3xl text-gray-200 mb-12 font-light">
          Every Story Has a Beginning.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="xl" className="pulse-neon">
            Listen Now
          </Button>
          
          <Button variant="neon" size="xl">
            Latest Episode
          </Button>
        </div>
        
        {/* Podcast Stats */}
        <div className="mt-12 flex justify-center items-center">
          {/* Episodes */}
          <div className="group px-4 sm:px-6">
            <div className={cn(
              "text-2xl sm:text-3xl font-bold",
              "gradient-text",
              "transition-all duration-300",
              "group-hover:scale-110"
            )}>
              50+
            </div>
            <div className={cn(
              "text-xs sm:text-sm text-gray-300 mt-1",
              "transition-colors duration-300",
              "group-hover:text-accent/80",
              "uppercase tracking-wide"
            )}>
              Episodes
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="h-8 w-px bg-accent/20"></div>

          {/* Listeners */}
          <div className="group px-4 sm:px-6">
            <div className={cn(
              "text-2xl sm:text-3xl font-bold",
              "gradient-text",
              "transition-all duration-300",
              "group-hover:scale-110"
            )}>
              100k+
            </div>
            <div className={cn(
              "text-xs sm:text-sm text-gray-300 mt-1",
              "transition-colors duration-300",
              "group-hover:text-accent/80",
              "uppercase tracking-wide"
            )}>
              Listeners
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="h-8 w-px bg-accent/20"></div>

          {/* Rating */}
          <div className="group px-4 sm:px-6">
            <div className={cn(
              "text-2xl sm:text-3xl font-bold flex items-center justify-center",
              "gradient-text",
              "transition-all duration-300",
              "group-hover:scale-110"
            )}>
              <span className="text-accent text-lg sm:text-xl mr-1">⭐</span>
              4.9
            </div>
            <div className={cn(
              "text-xs sm:text-sm text-gray-300 mt-1",
              "transition-colors duration-300",
              "group-hover:text-accent/80",
              "uppercase tracking-wide"
            )}>
              Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}