import React from "react";
import { Sparkles, Rocket, Megaphone, Archive, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Project Launch",
    body: "The perfect pedestal to launch your dream project or product in dynamic unison with your purpose and positioning.",
    icon: Rocket,
    accent: "from-pink-400 to-rose-500",
  },
  {
    title: "CEO Speak",
  body: "Voice the entrepreneur's journey, align mission with customers, partners and investors through a compelling personal narrative.",
    icon: Megaphone,
    accent: "from-indigo-400 to-violet-500",
  },
  {
    title: "Legacy Orientation",
  body: "Create the voice of legacy, document the evolution of brand, identity, person or product for lasting impact.",
    icon: Archive,
    accent: "from-yellow-400 to-amber-500",
  },
  {
    title: "Igniting Innovation",
  body: "Record the genesis of a revolution, the ideas, experiments and momentum that spark transformative change.",
    icon: Zap,
    accent: "from-green-400 to-teal-500",
  },
  {
    title: "Generation Next",
  body: "Platform for the next generation, fresh perspectives in entrepreneurship, arts, tech and culture, raw and unfiltered.",
    icon: Users,
    accent: "from-cyan-400 to-sky-500",
  },
];

export default function LaunchpadSection() {
  return (
    <section id="launchpad" data-section="launchpad" className="py-20 px-6 bg-gradient-to-r from-background/30 to-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text leading-tight">The Launchpad to Choose Your Revolution</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Elevate your story, ignite your audience and own your moment. Five distinct frames to present your revolution.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-b from-card/60 to-card/40 border border-transparent shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${c.accent} opacity-10 group-hover:opacity-25 transition-opacity`} aria-hidden />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-white/6 to-white/3 ring-1 ring-white/6">
                    <Icon className="w-6 h-6 text-foreground/90" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                  </div>
                </div>

                {/* small info line removed per user request */}
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Sparkles className="mx-auto mb-4 w-10 h-10 text-accent opacity-80" />
          <p className="max-w-2xl mx-auto text-muted-foreground">Not sure which frame fits? Let’s craft a custom Launchpad. We help design the format, promotion and guest narrative so your debut resonates.</p>
          <div className="mt-6">
            <Button variant="hero" onClick={() => { window.location.hash = "#contact"; }}>Build My Launchpad</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
