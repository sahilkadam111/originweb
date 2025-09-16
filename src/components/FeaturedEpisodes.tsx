import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";
import episode1 from "@/assets/episode-1.jpg";
import episode2 from "@/assets/episode-2.jpg";
import episode3 from "@/assets/episode-3.jpg";
import episode4 from "@/assets/episode-4.jpg";

const episodes = [
  {
    id: 1,
    title: "Origins of Ancient Civilizations",
    description: "Journey back to the birth of human civilization and discover the foundations that shaped our world.",
    duration: "42 min",
    image: episode1,
  },
  {
    id: 2,
    title: "The Birth of the Internet",
    description: "How a military project became the most transformative technology of our time.",
    duration: "38 min",
    image: episode2,
  },
  {
    id: 3,
    title: "The First Steps on the Moon",
    description: "The untold story behind humanity's greatest leap into the unknown.",
    duration: "45 min",
    image: episode3,
  },
  {
    id: 4,
    title: "The Renaissance Revolution",
    description: "When art, science, and philosophy converged to change the world forever.",
    duration: "40 min",
    image: episode4,
  },
];

export default function FeaturedEpisodes() {
  return (
    <section data-section="episodes" className="py-24 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-lg font-medium mb-4">
            Discover. Relive. Begin Again.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Featured Episodes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button variant="hero" size="sm" className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Play Episode
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Clock className="h-4 w-4" />
                  {episode.duration}
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {episode.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {episode.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}