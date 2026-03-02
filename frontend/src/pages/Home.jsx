import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AnimatedGallery from "../components/AnimatedGallery";
import WhyChoose from "../components/WhyChoose";
import Stats from "../components/Stats";
import CallToAction from "../components/CallToAction";

export default function Home(){
  return (
    <>
      <Hero />
      <WhyChoose />
      <AnimatedGallery />
      <Stats />
      <CallToAction />
      <Footer />
    </>
  );
}