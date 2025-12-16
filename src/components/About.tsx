import { Award, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Award,
    title: "Certified Experts",
    description: "Board-certified dentists with specialized training",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Evening and weekend appointments available",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Welcoming environment for patients of all ages",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Convenient downtown location with easy parking",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase inline-block relative">
            About Us
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary/50 rounded-full"></span>
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image & Tagline */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="relative shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                  alt="Dr. Zahoor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full border-2 border-background shadow-md">
                Dr. Z
              </div>
            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-medium leading-tight max-w-md">
              Trusted Dental Care{" "}
              <span className="text-gradient italic block mt-2">Since 2009</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-background border-2 border-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-5">
                  <feature.icon className="text-primary transition-transform group-hover:scale-110" size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground/90 group-hover:text-foreground/80 transition-colors text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
