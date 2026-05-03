import Nav from "@/components/Nav";
import HeroBento from "@/components/HeroBento";
import WhyGrafly from "@/components/WhyGrafly";
import AppGallery from "@/components/AppGallery";
import MiniGames from "@/components/MiniGames";
import Courses from "@/components/Courses";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import FooterBento from "@/components/FooterBento";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <HeroBento />
        <WhyGrafly />
        <AppGallery />
        <MiniGames />
        <Courses />
        <Testimonial />
        <FAQ />
        <FooterBento />
      </main>
    </>
  );
}
