const services = [
  {
    icon: "/icons/whitening.png",
    title: "Teeth Whitening",
    description: "Professional whitening treatments to brighten your smile and remove stubborn stains.",
  },
  {
    icon: "/icons/implant.png",
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacement solutions for a confident smile.",
  },
  {
    icon: "/icons/cosmetic.png",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and smile makeover treatments.",
  },
  {
    icon: "/icons/root-canal.png",
    title: "Root Canal Treatment",
    description: "Painless endodontic care to save your natural teeth and relieve discomfort.",
  },
  {
    icon: "/icons/checkup.png",
    title: "General Checkups",
    description: "Comprehensive dental exams and cleanings for optimal oral health.",
  },
  {
    icon: "/icons/pediatric.png",
    title: "Pediatric Dentistry",
    description: "Gentle, child-friendly dental care to establish healthy habits early.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-medium mb-4">
            Comprehensive Dental{" "}
            <span className="text-gradient italic">Care</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From routine checkups to advanced cosmetic procedures, we offer
            a full range of dental services to meet all your oral health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="font-heading text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
