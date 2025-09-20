import PodcastHero from "@/components/PodcastHero";
import AboutSection from "@/components/AboutSection";
import FeaturedEpisodes from "@/components/FeaturedEpisodes";
import HostSection from "@/components/HostSection";
// ListenSection and NewsletterSection removed per request
import ContactSection from "@/components/ContactSection";
import MakePodcast from "@/components/MakePodcast";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/reveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PodcastHero />
      <main>
  <Reveal><FeaturedEpisodes /></Reveal>
        <Reveal><AboutSection /></Reveal>
        <Reveal><HostSection /></Reveal>
  <Reveal><MakePodcast /></Reveal>
  <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;