import React, { useEffect, useState } from "react";
import ep1 from "../assets/episode-1.jpg";
import ep2 from "../assets/episode-2.jpg";
import ep3 from "../assets/episode-3.jpg";
import ep4 from "../assets/episode-4.jpg";

const slides = [
  { src: ep4, title: "Episode 4: Voices That Connect", caption: "Conversations that stick" },
];

export default function SlideshowHero({ interval = 4000 }: { interval?: number }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <section className="py-12 bg-gradient-to-b from-background to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          {slides.map((s, i) => (
            <div
              key={s.title}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <img src={s.src} alt={s.title} className="w-full h-72 md:h-96 object-cover" />
              <div className="absolute left-6 bottom-6 bg-black/50 text-white rounded-md p-4 max-w-lg">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm mt-1">{s.caption}</p>
              </div>
            </div>
          ))}

          <div className="absolute left-6 top-6 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>

          <div className="absolute right-6 top-6 text-sm text-white/90">{index + 1}/{slides.length}</div>
        </div>
      </div>
    </section>
  );
}
