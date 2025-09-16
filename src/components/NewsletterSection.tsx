import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Mail, Mic, Radio, Headphones } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 px-6 bg-background relative">
      {/* Studio Mic Background */}
      <div className="absolute left-0 top-1/4 opacity-5">
        <Mic className="w-96 h-96 text-accent" />
      </div>
      <div className="absolute right-0 bottom-1/4 opacity-5">
        <Headphones className="w-80 h-80 text-primary" />
      </div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <p className="text-accent text-lg font-medium mb-4 flex items-center justify-center gap-2">
            <Radio className="w-5 h-5" />
            Be the first to know the next beginning.
            <Radio className="w-5 h-5" />
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Mail className="w-8 h-8 text-accent mic-bounce" />
            <div className="relative">
              <h2 className={cn(
                "text-4xl md:text-5xl font-bold",
                "gradient-text",
                "relative inline-block",
                "py-3 px-4", // Add padding
                "pb-4", // Extra bottom padding for descenders
                "leading-relaxed", // Relaxed line height
                "tracking-normal", // Normal letter spacing
                "overflow-visible", // Ensure text isn't cut off
                "after:absolute after:inset-0",
                "after:bg-gradient-neon after:opacity-0",
                "after:blur-2xl after:-z-10",
                "after:transition-opacity after:duration-500"
              )}>
                Stay Connected
              </h2>
            </div>
            <Mic className="w-8 h-8 text-primary mic-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-muted-foreground text-lg">
            Get notified about new episodes, behind-the-scenes studio content, 
            and exclusive insights into the stories we uncover.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl relative">
          {/* Floating Studio Elements */}
          <div className="absolute -top-4 -left-4">
            <Mic className="w-6 h-6 text-accent/50 mic-bounce" />
          </div>
          <div className="absolute -bottom-4 -right-4">
            <Headphones className="w-6 h-6 text-primary/50 mic-bounce" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email for studio updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button 
              type="submit"
              variant="hero"
              size="lg"
              className="h-12 px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              🎙️ Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <Radio className="w-4 h-4" />
            No spam, ever. Unsubscribe at any time.
            <Radio className="w-4 h-4" />
          </p>
        </form>
        
        {/* Studio Stats */}
        <div className="mt-8 flex justify-center gap-8 text-center">
          <div className="glass-card p-4 rounded-xl">
            <Mic className="w-6 h-6 text-accent mx-auto mb-2" />
            <div className="text-sm text-muted-foreground">Weekly Studio Updates</div>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <Headphones className="w-6 h-6 text-accent mx-auto mb-2" />
            <div className="text-sm text-muted-foreground">Episode Previews</div>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <Radio className="w-6 h-6 text-accent mx-auto mb-2" />
            <div className="text-sm text-muted-foreground">Behind the Scenes</div>
          </div>
        </div>
      </div>
    </section>
  );
}