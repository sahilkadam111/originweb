import { Button } from "@/components/ui/button";
import { Play, Clock, Youtube, Music2, Facebook, Instagram } from "lucide-react";
import { platformLinks } from "@/config/platformLinks";

const platforms = [
  {
    name: "YouTube",
    icon: Youtube,
    color: "text-red-600",
    bgColor: "bg-red-600/10",
    hoverColor: "hover:bg-red-600/20"
  },
  {
    name: "Spotify",
    icon: Music2,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    hoverColor: "hover:bg-green-500/20"
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    hoverColor: "hover:bg-blue-600/20"
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    hoverColor: "hover:bg-pink-500/20"
  }
];

const episodes = [
  {
    id: 1,
    title: "Origins of Ancient Civilizations",
    description: "Journey back to the birth of human civilization and discover the foundations that shaped our world.",
    duration: "42 min",
    platform: "YouTube",
    views: "1.2M views",
  link: ""
  },
  {
    id: 2,
    title: "The Birth of the Internet",
    description: "How a military project became the most transformative technology of our time.",
    duration: "38 min",
    platform: "Spotify",
    views: "856K plays",
    link: "https://open.spotify.com/show/7LaxHSFHYi4UKq5XGtazDH"
  },
  {
    id: 3,
    title: "The First Steps on the Moon",
    description: "The untold story behind humanity's greatest leap into the unknown.",
    duration: "45 min",
    platform: "Facebook",
    views: "2.1M views",
    link: "https://www.facebook.com/share/1Jbr2V9d4C/?mibextid=wwXIfr"
  },
  {
    id: 4,
    title: "The Renaissance Revolution",
    description: "When art, science, and philosophy converged to change the world forever.",
    duration: "40 min",
    platform: "Instagram",
    views: "950K views",
  link: ""
  }
];

// Featured Episodes component removed per user request.
// Keep a stub export to avoid import errors elsewhere.
export default function FeaturedEpisodes() {
  return null;
}
