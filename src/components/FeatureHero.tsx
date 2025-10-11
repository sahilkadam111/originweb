import React from "react";
import heroImage from "../assets/podcast-studio.jpg";

export default function FeatureHero() {
  return (
    <section className="py-16 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional podcast studio setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Discover Our Podcast Universe</span>
            </h2>
            <div className="space-y-6">
              <FeatureItem
                title="Expert Insights"
                description="Deep dive into industry expertise and professional experiences"
              />
              <FeatureItem
                title="Engaging Stories"
                description="Real conversations that inspire and resonate with our listeners"
              />
              <FeatureItem
                title="Growth Focus"
                description="Practical strategies for personal and professional development"
              />
            </div>
          </div>

          {/* Right Column: Stats removed per request */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg text-center">
      <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}