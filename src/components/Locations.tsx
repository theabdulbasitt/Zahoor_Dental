import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const clinics = [
  {
    id: "downtown",
    name: 'D.Capital Dental Clinic',
    address: 'Shop#6, Ground Floor, Jahangir Multiplex, Adjacent to Main gate Qaide Azam International Hospital',
    city: 'Main Peshawar GT Road, Golramor, Islamabad',
    phone: '03120158027 / 03244277067',
    hours: 'Evening: 4PM - 11PM | Morning: 11AM - 3PM (On Call)',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.2536043331997!2d72.9727111!3d33.624665799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97000196a363%3A0xb706578acbb6dda2!2sD.Capital%20Dental%20Clinic!5e0!3m2!1sen!2s!4v1763560492623!5m2!1sen!2s'
  },
  {
    id: "bayarea",
    name: 'ZA Dental Clinic',
    address: '1st Floor, Islamabad Plaza, Main Fateh Jhang Road',
    city: 'Near Post Office, Ternol, Islamabad',
    phone: '03120158027',
    hours: '9AM (Sobh) to 6PM (Sham)',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.434178226035!2d72.9080329!3d33.645910199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97f1b0966283%3A0x29d999823ac0b1e1!2sZA%20Dental%20Clinic!5e0!3m2!1sen!2s!4v1763560523348!5m2!1sen!2s'
  }
];

const Locations = () => {
  return (
    <section id="locations" className="section-padding grid-bg relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Locations
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-medium mb-4">
            Visit Us at{" "}
            <span className="text-gradient italic">Two Locations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conveniently located to serve you better. Choose the clinic nearest
            to you and experience exceptional dental care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full"
            >
              <h3 className="font-heading text-xl font-medium mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/35 flex items-center justify-center transition-colors">
                  <MapPin className="text-primary" size={20} />
                </div>
                {clinic.name}
              </h3>

              {/* Map */}
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-border/50 bg-background mb-6 relative z-10">
                <iframe
                  src={clinic.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

              <div className="space-y-4 text-sm mt-auto">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                  <MapPin size={18} className="text-primary mt-0.5 min-w-[18px]" />
                  <div>
                    <p className="text-foreground font-medium mb-1">Address</p>
                    <p className="text-muted-foreground">{clinic.address}</p>
                    <p className="text-muted-foreground mt-0.5">{clinic.city}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                    <Phone size={18} className="text-primary mt-0.5 min-w-[18px]" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Phone</p>
                      <p className="text-muted-foreground">{clinic.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                    <Clock size={18} className="text-primary mt-0.5 min-w-[18px]" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Hours</p>
                      <p className="text-muted-foreground">{clinic.hours}</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full rounded-full group-hover:translate-x-1 transition-transform" variant="outline">
                  Get Directions <MapPin className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
