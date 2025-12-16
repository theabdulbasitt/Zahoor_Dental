import { useState } from "react";
import { ArrowRight, MapPin, Phone, Clock, Mail, MessageSquare, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CountUp from "@/components/ui/CountUp";
import { clinics } from "@/components/Locations";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    clinic: "",
    reason: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, clinic: value }));
  };

  const constructMessage = () => {
    return `Hello, I would like to book a visit.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Clinic: ${formData.clinic}
Reason: ${formData.reason}`;
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = constructMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "923408015975";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleSMS = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = constructMessage();
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "923408015975";
    window.open(`sms:${phoneNumber}?body=${encodedMessage}`, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = constructMessage();
    const encodedMessage = encodeURIComponent(message);
    const emailTo = "iabdulbasit.se@gmail.com";
    const subject = encodeURIComponent("Booking Request - Smile Sanctuary");
    window.open(`mailto:${emailTo}?subject=${subject}&body=${encodedMessage}`, '_blank');
  };

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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full px-8 gap-2 glow-primary">
                  Book Your Visit
                  <ArrowRight size={18} />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md w-[90%] rounded-2xl overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-center mb-4">Book Your Visit</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="Enter Name" required value={formData.name} onChange={handleInputChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter Email" value={formData.email} onChange={handleInputChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter Phone Number" required value={formData.phone} onChange={handleInputChange} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" name="date" type="date" required value={formData.date} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" name="time" type="time" required value={formData.time} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clinic">Preferred Clinic</Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a clinic" />
                      </SelectTrigger>
                      <SelectContent>
                        {clinics.map((clinic) => (
                          <SelectItem key={clinic.id} value={clinic.name}>
                            {clinic.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Visit</Label>
                    <Textarea id="reason" name="reason" placeholder="e.g., Checkup, Cleaning, Tooth Pain..." required value={formData.reason} onChange={handleInputChange} />
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button onClick={handleWhatsApp} className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-md transition-all hover:scale-[1.02]" size="lg">
                      <MessageCircle className="mr-2" size={20} />
                      Send via WhatsApp
                    </Button>
                    <Button onClick={handleSMS} className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all hover:scale-[1.02]" size="lg">
                      <MessageSquare className="mr-2" size={20} />
                      Send via SMS
                    </Button>
                    <Button onClick={handleEmail} className="w-full bg-red-500 hover:bg-red-600 text-white shadow-md transition-all hover:scale-[1.02]" size="lg">
                      <Mail className="mr-2" size={20} />
                      Send via Email
                    </Button>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Choose how you'd like to send your booking request
                  </p>
                </form>
              </DialogContent>
            </Dialog>

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
                <CountUp end={15} suffix="+" duration={3500} />
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
