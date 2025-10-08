import React, { useState, useEffect } from "react";
import ep1 from "../assets/episode-1.jpg";
import ep2 from "../assets/episode-2.jpg";
import ep3 from "../assets/episode-3.jpg";
import ep4 from "../assets/episode-4.jpg";

const slides = [
  {
    image: ep1,
    title: "Authentic Voices",
    description: "Real conversations that dive deep into experiences and insights",
  subtitle: "Episode 1 The Big Bang Theory"
  },
  {
    image: ep2,
    title: "Inspiring Stories",
    description: "Tales of innovation, challenges, and breakthroughs that shape our journey",
  subtitle: "Episode 2 Dark Matter Mystery"
  },
  {
    image: ep3,
    title: "Lasting Impact",
    description: "Creating meaningful connections and inspiring positive change",
  subtitle: "Episode 3 Black Holes"
  },
  {
    image: ep4,
    title: "Community Growth",
    description: "Building a space where ideas flourish and connections thrive",
  subtitle: "Episode 4 Voices That Connect"
  }
];

// AnimatedHero removed per user request. Keep a no-op stub to avoid import issues.
export default function AnimatedHero() {
  return null;
}