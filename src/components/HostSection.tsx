import hostImage from "@/assets/podcast-studio.jpg";
import { Mic, Radio, Headphones, Instagram, Twitter, Linkedin } from "lucide-react";

export default function HostSection() {
  return (
    <section data-section="host" className="py-24 px-6 bg-background relative">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-80 sm:w-96">
              <div className="rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
                <img src={hostImage} alt="Sahil - Host" className="w-full h-full object-cover" />
              </div>

              {/* Badge CTA */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-full shadow-xl text-sm font-semibold">
                <Mic className="inline-block w-4 h-4 mr-2 align-middle" /> Listen & Subscribe
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">Meet the Host</h2>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">I'm Sahil, your storyteller for every origin.</h3>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm passionate about uncovering untold beginnings and sharing them with the world. With a background in
              history and journalism, I dig into archives, conduct candid interviews, and craft narrative-driven
              episodes that reveal how decisions, people and moments shaped what we know today. Expect thoughtful
              conversations, practical insights, and stories that stick.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}