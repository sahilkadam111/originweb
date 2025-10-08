import React from 'react';
import { Mic } from 'lucide-react';

export default function MakePodcast() {
  return (
    <section data-section="make-podcast" className="py-20 px-6 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text tracking-normal leading-relaxed mb-6">
              Let's make a podcast
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Have an idea, a story, or a brand that needs a voice? We help creators and companies develop, produce, and launch high-quality podcasts that connect with listeners.
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <Mic className="w-5 h-5 text-accent mt-1" /> 
                Concept & format development
              </li>
              <li className="flex items-start gap-3">
                <Mic className="w-5 h-5 text-accent mt-1" /> 
                Full-service production & editing
              </li>
              <li className="flex items-start gap-3">
                <Mic className="w-5 h-5 text-accent mt-1" /> 
                Distribution & launch strategy
              </li>
            </ul>

            <div className="flex gap-3">
              {/* CTAs removed per request */}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-black/20 to-transparent p-6">
            <div className="text-sm text-muted-foreground mb-4">What we offer</div>
            <div className="space-y-3">
              <div className="glass-card p-4 rounded-xl">Creative brief & pilot scripting</div>
              <div className="glass-card p-4 rounded-xl">Remote or in-studio recording</div>
              <div className="glass-card p-4 rounded-xl">Audio mixing, mastering & assets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
