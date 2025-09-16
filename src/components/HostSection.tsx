import hostImage from "@/assets/podcast-studio.jpg";
import podcastChair from "@/assets/podcast-chair.jpg";
import { Mic, Radio, Headphones } from "lucide-react";

export default function HostSection() {
  return (
    <section className="py-24 px-6 bg-background relative">
      {/* Chair Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 hidden lg:block">
        <img
          src={podcastChair}
          alt="Podcast recording chair"
          className="w-full h-full object-cover chair-tilt"
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent text-lg font-medium mb-4 flex items-center justify-center gap-2">
            <Radio className="w-5 h-5" />
            The voice behind the journey.
            <Radio className="w-5 h-5" />
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <Mic className="w-8 h-8 text-accent mic-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Meet the Host
            </h2>
            <Headphones className="w-8 h-8 text-primary mic-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Studio Setup Around Portrait */}
              <div className="absolute -top-8 -left-8 opacity-60">
                <Mic className="w-12 h-12 text-accent mic-bounce" />
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-60">
                <Headphones className="w-12 h-12 text-primary mic-bounce" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent/30 relative">
                <img
                  src={hostImage}
                  alt="Sahil - Host of The Origin"
                  className="w-full h-full object-cover"
                />
                {/* Studio Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full"></div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-lg"></div>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3 justify-center lg:justify-start">
              <Radio className="w-6 h-6 text-accent" />
              I'm Sahil, your storyteller for every origin.
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Passionate about uncovering untold beginnings and sharing them with the world. 
              With a background in history and journalism, I believe that understanding where 
              things started helps us better appreciate where we're going. Every story has 
              layers, every beginning has depth, and every origin has the power to inspire.
            </p>
            
            {/* Studio Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="glass-card p-4 rounded-xl text-center">
                <Mic className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-xl font-bold text-accent">50+</div>
                <div className="text-xs text-muted-foreground">Episodes</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <Headphones className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-xl font-bold text-accent">100k+</div>
                <div className="text-xs text-muted-foreground">Downloads</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <Radio className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-xl font-bold text-accent">25+</div>
                <div className="text-xs text-muted-foreground">Countries</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-lg mx-auto mb-2">⭐</div>
                <div className="text-xl font-bold text-accent">4.9</div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground italic">
              "Every microphone session is a journey back in time, every recording booth a portal to the past."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}