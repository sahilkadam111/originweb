import React, { useState, useEffect } from "react";
import ep1 from "../assets/episode-1.jpg";
import ep2 from "../assets/episode-2.jpg";
import ep3 from "../assets/episode-3.jpg";
import ep4 from "../assets/episode-4.jpg";

const slides = [
  {
    image: ep4,
    title: "Community Growth",
    description: "Building a space where ideas flourish and connections thrive",
    subtitle: "Episode 4: Voices That Connect"
  }
];

export default function AnimatedHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Title removed per user request */}

      {/* Slideshow container */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Slides */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === currentSlide 
                  ? "opacity-100 translate-x-0" 
                  : index < currentSlide 
                    ? "opacity-0 -translate-x-full" 
                    : "opacity-0 translate-x-full"
              }`}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2 animate-slide-up">{slide.title}</h3>
                <p className="text-lg mb-2 opacity-90 animate-slide-up delay-200">{slide.subtitle}</p>
                <p className="text-base opacity-80 animate-slide-up delay-400">{slide.description}</p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transform transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transform transition-all hover:scale-110"
            aria-label="Next slide"
          >
            →
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" />
      </div>
    </section>
  );
}

// Add these styles to your global CSS or tailwind.config.js
const styles = `
@keyframes subtle-float {
  0%, 100% { transform: translateY(0) scale(1.05); }
  50% { transform: translateY(-10px) scale(1.05); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes gradient-text {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-subtle-float {
  animation: subtle-float 15s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.animate-gradient-text {
  background: linear-gradient(90deg, #f43f5e, #8b5cf6, #f43f5e);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-text 8s linear infinite;
}

.delay-0 { animation-delay: 0s; }
.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }
`;