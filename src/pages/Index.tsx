import PodcastHero from "@/components/PodcastHero";
import AboutSection from "@/components/AboutSection";
import SlideshowHero from "@/components/SlideshowHero";
import FeatureHero from "@/components/FeatureHero";
import AnimatedHero from "@/components/AnimatedHero";
import HostSection, { HostSectionMirrored } from "@/components/HostSection";
import LaunchpadSection from "@/components/LaunchpadSection";
import tejasImage from "../assets/tejas-host.jpg";
import tejasImg from "../assets/tejas-host.jpg";
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

        {/* Welcome section inserted per request */}
        <Reveal>
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text tracking-normal leading-relaxed">Welcome to The Origin</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-100">
                A powerful portal to launch your grand story through a grand scheme of deep insights,
                a dynamic connection which transcends aspirations, dreams and ambitions a metaphor for
                glory and for legacies untold and awaiting to unfold.
              </p>
              {/* decorative divider removed per request */}
            </div>
          </section>
        </Reveal>

  {/* Featured Episodes section removed */}
    {/* AnimatedHero section removed */}
        <Reveal><AboutSection /></Reveal>
  <Reveal><HostSection hostLinkedIn="https://www.linkedin.com/in/mehak-painter-297b23319/" /></Reveal>
  <Reveal><HostSectionMirrored showTitle={false} hostLinkedIn="https://www.linkedin.com/in/jasbir-singh-rawat-071baa1aa/" /></Reveal>
  <Reveal><HostSection showTitle={false} hostName={"Tejas Sawant (Managing Director)"} hostBullets={[]} hostDescription={"Oversees the full production lifecycle of The Origin, driving strategy, execution, digital presence, and business expansion. With a focus on operational excellence and brand growth, he ensures the podcast consistently delivers impactful, high-quality content."} hostImg={tejasImg} hostLinkedIn="https://www.linkedin.com/in/tejas-sawant-0621b133a/" /></Reveal>
  <Reveal><LaunchpadSection /></Reveal>
  <Reveal><MakePodcast /></Reveal>
  <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;