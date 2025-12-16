import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 animate-fade-in"
          >
            Your Perfect Smile{" "}
            <span className="text-gradient italic">Starts Here.</span>
          </h1>
          
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Experience exceptional dental care with our team of experts. 
            We combine advanced technology with gentle care to give you 
            the smile you've always dreamed of.
          </p>

          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="rounded-full px-8 gap-2 glow-primary">
              Book Your Visit
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-muted-foreground/30 hover:bg-secondary">
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 md:mt-24 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-semibold text-primary">15+</div>
              <div className="text-muted-foreground text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-semibold text-primary">10K+</div>
              <div className="text-muted-foreground text-sm mt-1">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-semibold text-primary">98%</div>
              <div className="text-muted-foreground text-sm mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
