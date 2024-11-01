import Audit from "@/components/Homepage/Audit";
import Cta from "@/components/Homepage/Cta";
import FAQ from "@/components/Homepage/FAQ";
import Hero from "@/components/Homepage/Hero";
import Portfolio from "@/components/Homepage/Portfolio";
import Review from "@/components/Homepage/Review";
import Services from "@/components/Homepage/Services";
import TechnologyStack from "@/components/Homepage/TechnologyStack";
import Testimonials from "@/components/Homepage/Testimonials";
import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Portfolio />
      <Review />
      <Services />
      <TechnologyStack />
      <Audit />
      <Testimonials />
      <FAQ />
      <Cta />
      <Footer />
    </main>
  );
}
