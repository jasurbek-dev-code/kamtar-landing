import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Modules from "@/components/Modules";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Problems />
      <Features />
      <HowItWorks />
      <Modules />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
