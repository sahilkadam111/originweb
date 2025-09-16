import PodcastHero from "@/components/PodcastHero";
import AboutSection from "@/components/AboutSection";
import FeaturedEpisodes from "@/components/FeaturedEpisodes";
import HostSection from "@/components/HostSection";
import ListenSection from "@/components/ListenSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PodcastHero />
      <AboutSection />
      <FeaturedEpisodes />
      <HostSection />
      <ListenSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;