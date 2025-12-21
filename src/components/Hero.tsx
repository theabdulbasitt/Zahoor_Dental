import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CountUp from "@/components/ui/CountUp";
import { clinics } from "@/components/Locations";
import AppointmentDialog from "./AppointmentDialog";

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
            <AppointmentDialog
              trigger={
                <Button size="lg" className="rounded-full px-8 gap-2 glow-primary">
                  Book Your Visit
                  <ArrowRight size={18} />
                </Button>
              }
            />

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="rounded-full px-8 border-muted-foreground/30 hover:bg-secondary">
                  Our Locations
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl w-[90%] rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-center mb-4">Our Locations</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-4">
                  {clinics.map((clinic) => (
                    <div key={clinic.id} className="p-4 rounded-xl bg-secondary/50 border border-border flex flex-col gap-3">
                      <div className="w-full aspect-video rounded-lg overflow-hidden border border-border/50 bg-background">
                        <iframe
                          src={clinic.mapUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-medium mb-3 flex items-center gap-2 text-primary">
                          <MapPin size={16} />
                          {clinic.name}
                        </h4>
                        <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <MapPin size={14} className="mt-0.5 min-w-[14px]" />
                            <p>{clinic.address}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={14} className="min-w-[14px]" />
                            <p>{clinic.phone}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} className="min-w-[14px]" />
                            <p>{clinic.hours}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-24 max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-semibold text-primary">
                <CountUp end={10} suffix="+" duration={3500} />
              </div>
              <div className="text-muted-foreground text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-semibold text-primary">
                <CountUp end={10000} separator="," suffix="+" duration={3500} />
              </div>
              <div className="text-muted-foreground text-sm mt-1">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-semibold text-primary">
                <CountUp end={98} suffix="%" duration={3500} />
              </div>
              <div className="text-muted-foreground text-sm mt-1">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-semibold text-primary">
                <CountUp end={5000} separator="," suffix="+" duration={3500} />
              </div>
              <div className="text-muted-foreground text-sm mt-1">Returning Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
