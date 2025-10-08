// Button removed from hero per request
import { cn } from "@/lib/utils";
import heroOrigin from "@/assets/hero-origin.jpg";
import originLogo from "@/assets/origin logo.png";
import voicesConnect from "@/assets/voices-that-connect.png";

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


      {/* Content area: left image + optional content */}
      <div className="relative z-10 w-full h-full">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left column: Voices image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <img src={voicesConnect} alt="Voices that connect" className="w-64 sm:w-80 md:w-96 object-contain" />
          </div>

          {/* Right column: intentionally left empty/placeholder to preserve layout */}
          <div className="lg:col-span-7">
            {/* Intentionally empty - content removed per earlier requests */}
          </div>
        </div>
      </div>
    </section>
  );
}