import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroOrigin from "@/assets/hero-origin.jpg";
import originLogo from "@/assets/origin logo.png";

export default function PodcastHero() {
  return (
  <section data-section="home" className="hero-bg min-h-screen flex items-center justify-start relative overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroOrigin} 
          alt="Origin Hero Background" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>


      {/* Content */}
  <div className="relative z-10 max-w-6xl ml-0 pl-6 md:pl-12 lg:pl-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div className="text-left md:pl-12 lg:pl-16 py-12 md:py-20 max-w-xl">
            <div className="mb-4">
              <h1 className={cn(
               "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight",
               "font-primary",
               "gradient-text",
               "relative",
               "py-2 px-0",
               "pb-2",
               "mx-0",
               "tracking-tight",
               "overflow-visible",
               "group-hover:after:opacity-100",
               "after:absolute after:inset-0",
               "after:bg-gradient-neon after:opacity-0",
               "after:blur-2xl after:-z-10",
               "after:transition-opacity after:duration-500"
             )}>
               The Origin
             </h1>
             <div className="mt-2 font-montserrat text-sm tracking-widest">
               <span className="text-[#fff8f8]">-BY</span>
               <span className="ml-2 text-[#d8b036]">TAC &amp; CO.</span>
             </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-200 mb-6 font-light leading-relaxed">
              Every Story Has a Beginning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              {/* Listen Now button removed per request */}
              <Button variant="neon" size="lg">
                Latest Episode
              </Button>
            </div>

            {/* Podcast Stats */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
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
              "uppercase tracking-wide",
              "font-secondary"
            )}>
              Episodes
            </div>
          </div>

        {/* Vertical Separator */}
        <div className="h-8 w-px bg-accent/20 mx-2 hidden sm:block"></div>

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
              "uppercase tracking-wide",
              "font-secondary"
            )}>
              Listeners
            </div>
          </div>

        {/* Vertical Separator */}
        <div className="h-8 w-px bg-accent/20 mx-2 hidden sm:block"></div>

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
              "uppercase tracking-wide",
              "font-secondary"
            )}>
              Rating
            </div>
          </div>
            </div>
          </div>

          {/* Right: decorative/empty space to keep hero balanced on larger screens */}
          <div className="hidden md:block w-full h-96" aria-hidden>
            {/* intentionally left blank: background image covers this area */}
          </div>
        </div>
      </div>
    </section>
  );
}