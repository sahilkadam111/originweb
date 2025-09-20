import podcastStudio from "@/assets/podcast-studio.jpg";
import podcastChair from "@/assets/podcast-chair.jpg";

export default function AboutSection() {
  return (
    <section data-section="about" className="py-20 px-6 bg-background relative">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src={podcastStudio} alt="Podcast studio" className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Intro text */}
          <div className="text-gray-100">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">About</h2>
            <p className="text-accent font-medium mb-4">The Voice Above the Noise…</p>

            <p className="text-lg leading-relaxed mb-4">
              <strong>THE ORIGIN</strong> is a podcast dedicated to stories that transform and transcend businesses and enterprise. We go beyond numbers and headlines to unveil the cast behind the glory — the turning points that make the headlines and the choices that shape the future.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Each episode blends candid conversations with actionable insights — delivering inspiration, influence, and practical lessons you can use.
            </p>

            <p className="italic text-muted-foreground">This is where stories are told and where glory unfolds through the pulse of a generation holding the keys to tomorrow.</p>

            <div className="mt-8 flex gap-4">
              {/* Listen Now link removed per request */}
              <a href="#" className="inline-flex items-center px-5 py-3 rounded-full bg-transparent border border-border text-gray-200">Explore Episodes</a>
            </div>
          </div>

          {/* Right: Host image and callout */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-black/40 to-transparent p-4">
            <div className="relative">
              <img src={podcastChair} alt="Host portrait" className="w-full h-72 object-cover rounded-lg" />
              <div className="absolute bottom-4 left-4 bg-black/60 p-4 rounded-lg">
                <h4 className="text-xl font-semibold">Meet the Host</h4>
                <p className="text-sm text-muted-foreground">Jane Doe — investigative journalist & audio producer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision / Mission */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p className="text-muted-foreground">To take the decisions and make the difference behind business, success, progress and enterprise — for you are one story away from greatness.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p className="text-muted-foreground">We uncover the origins of companies, leaders and brands, translating candid narratives into clear, practical lessons for founders, operators, and the next generation of visionaries and revolutionaries for the times to come and for the times to become.</p>
          </div>
        </div>
      </div>
    </section>
  );
}