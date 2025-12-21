import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppointmentDialog from "./AppointmentDialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Cases", href: "#cases" },
    { name: "Gallery", href: "#gallery" },
    { name: "Locations", href: "#locations" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo_1.png" alt="Smile Sanctuary" className="h-14 w-auto md:h-20" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link text-sm font-medium">
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:03120158027">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Call Us
              </Button>
            </a>
            <AppointmentDialog
              trigger={
                <Button size="sm" className="rounded-full px-6">
                  Book Appointment
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <a href="tel:03120158027" className="w-full">
                  <Button variant="outline" size="sm" className="w-full rounded-full">
                    Call Us
                  </Button>
                </a>
                <AppointmentDialog
                  trigger={
                    <Button size="sm" className="rounded-full w-full">
                      Book Appointment
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
