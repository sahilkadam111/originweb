import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play } from "lucide-react";
import episode1 from "@/assets/podcast-studio.jpg";
import episode2 from "@/assets/podcast-chair.jpg";
import episode3 from "@/assets/hero-origin.jpg";
import { useState } from "react";
import VideoLightbox from "@/components/VideoLightbox";

const slides = [
  { id: 1, title: "Origins of Ancient Civilizations", image: episode1, videoId: 'dQw4w9WgXcQ' },
  { id: 2, title: "The Birth of the Internet", image: episode2, videoId: 'V-_O7nl0Ii0' },
  { id: 3, title: "The First Steps on the Moon", image: episode3, videoId: '3JZ_D3ELwOQ' },
];

export default function StreamingHero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxUrl, setLightboxUrl] = useState<string | undefined>(undefined);

  const openVideo = (id: string) => {
    setLightboxUrl(`https://www.youtube.com/embed/${id}?autoplay=1`);
    setLightboxOpen(true);
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Featured Clips</h2>
          <p className="text-muted-foreground">Quick highlights from recent episodes</p>
        </div>

        <Carousel className="relative">
          <CarouselContent className="flex gap-4">
            {slides.map((s) => (
              <CarouselItem key={s.id} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => openVideo(s.videoId!)}>
                  <div style={{ paddingTop: '56.25%' }} className="relative w-full">
                    <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <div className="bg-gradient-to-t from-black/60 to-transparent w-full p-4 rounded-tl-2xl">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-semibold line-clamp-2">{s.title}</h3>
                        <button className="bg-accent text-accent-foreground p-2 rounded-full">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <VideoLightbox open={lightboxOpen} url={lightboxUrl} onClose={() => setLightboxOpen(false)} />
      </div>
    </section>
  );
}
