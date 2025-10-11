import heroOrigin from "@/assets/hero-origin.jpg";
import voicesImage from "@/assets/voices-that-connect.png";
import { useState } from "react";

export default function PodcastHero() {

  return (
  <section data-section="home" className="hero-bg min-h-screen flex items-center justify-start relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroOrigin} 
          alt="Origin Hero Background" 
          className="w-full h-full object-cover brightness-75 md:brightness-100"
        />
      </div>


      {/* Content */}
  <div className="relative z-10 max-w-6xl ml-0 pl-6 md:pl-12 lg:pl-20 w-full">
        {/* Hero menu removed per request */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div className="text-left pl-0 md:pl-0 lg:pl-0 py-12 md:py-20 max-w-xl">
            <img 
              src={voicesImage}
              alt="Voices That Connect"
              className="w-full h-auto object-contain -ml-8 md:-ml-12"
            />
          </div>

          {/* Right: decorative/empty space to keep hero balanced on larger screens */}
          <div className="hidden md:block w-full h-96" aria-hidden>
            {/* intentionally left blank: background image covers this area */}
          </div>
        </div>

        {/* hero follow-up paragraph removed per request */}
      </div>
    </section>
  );
}