import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import About from "@/components/About";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
