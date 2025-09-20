import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";
import episode1 from "@/assets/podcast-studio.jpg";
import episode2 from "@/assets/podcast-chair.jpg";
import episode3 from "@/assets/hero-origin.jpg";
import episode4 from "@/assets/episode-4.jpg";
import { useState, useRef } from "react";
import VideoLightbox from "@/components/VideoLightbox";
import { useReveal } from "@/hooks/useReveal";

const episodes = [
  {
    id: 1,
    title: "Origins of Ancient Civilizations",
    description: "Journey back to the birth of human civilization and discover the foundations that shaped our world.",
    duration: "42 min",
    platforms: ["Spotify", "Apple Podcasts", "YouTube"],
    image: episode1,
  },
  {
    id: 2,
    title: "The Birth of the Internet",
    description: "How a military project became the most transformative technology of our time.",
    duration: "38 min",
    platforms: ["Spotify", "Apple Podcasts"],
    image: episode2,
  },
  {
    id: 3,
    title: "The First Steps on the Moon",
    description: "The untold story behind humanity's greatest leap into the unknown.",
    duration: "45 min",
    platforms: ["Spotify", "YouTube"],
    image: episode3,
  },
  {
    id: 4,
    title: "The Renaissance Revolution",
    description: "When art, science, and philosophy converged to change the world forever.",
    duration: "40 min",
    platforms: ["Apple Podcasts", "YouTube"],
    image: episode4,
  },
];

interface EpisodeCardProps {
  episode: typeof episodes[0];
  index: number;
  onPlay: (videoId: string) => void;
}

interface EpisodeHeroProps {
  episode: typeof episodes[0];
  onPlay: (videoId: string) => void;
}

function EpisodeHero({ episode, onPlay }: EpisodeHeroProps) {
  const ref = useReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="relative rounded-2xl overflow-hidden glass-card reveal-fade"
    >
      <div className="aspect-video relative">
        <img 
          src={episode.image} 
          alt={episode.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <button 
          onClick={() => onPlay('dQw4w9WgXcQ')}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 play-button"
        >
          <Play className="w-8 h-8" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">{episode.title}</h3>
        <p className="text-lg mb-4 text-gray-200 max-w-3xl">{episode.description}</p>
        <div className="flex items-center gap-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => onPlay('dQw4w9WgXcQ')}
            className="neon-glow"
          >
            Watch Now
          </Button>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{episode.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EpisodeCard({ episode, index, onPlay }: EpisodeCardProps) {
  const ref = useReveal({ delay: index * 200 });

  return (
    <div
      ref={ref}
      className="glass-card overflow-hidden rounded-2xl reveal-fade group"
    >
      <div className="relative w-full cursor-pointer" style={{paddingTop: '56.25%'}} onClick={() => onPlay('dQw4w9WgXcQ')}>
        <img src={episode.image} alt={episode.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="play-button-overlay">
          <div className="play-button">
            <Play className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-lg mb-2 line-clamp-2">{episode.title}</h4>
          <p className="text-muted-foreground line-clamp-2 mb-4">{episode.description}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{episode.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedEpisodes() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxUrl, setLightboxUrl] = useState<string | undefined>(undefined);
  const [activePlatform, setActivePlatform] = useState<'all' | 'youtube' | 'spotify' | 'facebook' | 'instagram'>('all');
  const heroRef = useRef<HTMLDivElement | null>(null);

  const openVideo = (videoId: string) => {
    setLightboxUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
    setLightboxOpen(true);
  };

  const filteredEpisodes = episodes.filter((episode) => {
    if (activePlatform === 'all') return true;
    const p = activePlatform.toLowerCase();
    return episode.platforms.some((plat) => {
      const low = plat.toLowerCase();
      if (p === 'facebook') return low.includes('facebook') || low.includes('fb');
      if (p === 'instagram') return low.includes('instagram') || low.includes('ig');
      return low.includes(p);
    });
  });

  return (
    <section data-section="episodes" className="py-24 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text px-4 py-2 inline-block mb-4">
            Featured Episodes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most compelling stories and dive into history's greatest moments
          </p>
        </div>

        {/* Featured Episode Hero (slideable) */}
        <div className="mb-24 relative">
          <button
            aria-label="Prev featured"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-105 transition-transform"
            onClick={() => {
              const el = heroRef.current;
              if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
            }}
          >‹</button>

          <div ref={heroRef} className="no-scrollbar overflow-x-auto scroll-snap-x snap-mandatory scroll-smooth" style={{display: 'flex', gap: 24}}>
            {filteredEpisodes.map((ep) => (
              <div key={ep.id} style={{minWidth: '100%', scrollSnapAlign: 'center'}} className="px-4">
                <EpisodeHero episode={ep} onPlay={openVideo} />
              </div>
            ))}
          </div>

          <button
            aria-label="Next featured"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-105 transition-transform"
            onClick={() => {
              const el = heroRef.current;
              if (el) el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
            }}
          >›</button>
        </div>

        {/* Platform Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1 bg-card rounded-lg">
            {['all', 'youtube', 'spotify', 'facebook', 'instagram'].map((platform) => (
              <button
                key={platform}
                onClick={() => setActivePlatform(platform as typeof activePlatform)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activePlatform === platform 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEpisodes.slice(1).map((episode, index) => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              index={index}
              onPlay={openVideo}
            />
          ))}
        </div>
      </div>
      
      <VideoLightbox open={lightboxOpen} url={lightboxUrl} onClose={() => setLightboxOpen(false)} />
    </section>
  );
}