import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">D</span>
              </div>
              <span className="font-heading text-xl font-semibold">DentaCare</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing exceptional dental care with a gentle touch since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Cases", "About"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {["Teeth Whitening", "Dental Implants", "Cosmetic Dentistry", "General Checkups"].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                hello@dentacare.com
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-0.5" />
                123 Dental Street<br />Suite 100, City, ST 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 DentaCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
