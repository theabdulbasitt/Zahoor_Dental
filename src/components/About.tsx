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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-medium mb-6">
              Trusted Dental Care{" "}
              <span className="text-gradient italic">Since 2009</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At DentaCare, we believe everyone deserves a healthy, beautiful smile. 
              Our team of experienced professionals uses the latest technology and 
              techniques to provide exceptional care in a comfortable environment.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're committed to building lasting relationships with our patients, 
              understanding their unique needs, and delivering personalized treatment 
              plans that achieve outstanding results.
            </p>
            <Button size="lg" className="rounded-full px-8">
              Meet Our Team
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-secondary/50 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-heading text-lg font-medium mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
