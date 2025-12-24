import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Locations from "@/components/Locations";
import Developer from "@/components/Developer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Gallery />
      <Reviews />
      <Locations />
      <Developer />
      <Footer />
    </div>
  );
};

export default Index;
