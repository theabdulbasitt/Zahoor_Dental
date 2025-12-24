import { useState } from "react";
import { Mail, MessageSquare, MessageCircle, Share2 } from "lucide-react";
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
import { clinics } from "@/components/Locations";

interface AppointmentDialogProps {
    trigger: React.ReactNode;
}

const AppointmentDialog = ({ trigger }: AppointmentDialogProps) => {
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

    const validateForm = () => {
        const form = document.getElementById("appointment-form") as HTMLFormElement;
        if (form && !form.checkValidity()) {
            form.reportValidity();
            return false;
        }
        if (!formData.clinic) {
            alert("Please select a preferred clinic");
            return false;
        }
        return true;
    };

    const handleWhatsApp = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        const message = constructMessage();
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "923120158027";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    const handleSMS = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        const message = constructMessage();
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "923120158027";
        window.open(`sms:${phoneNumber}?body=${encodedMessage}`, '_blank');
    };

    const handleEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        const message = constructMessage();
        const encodedMessage = encodeURIComponent(message);
        const emailTo = "iabdulbasit.se@gmail.com";
        const subject = encodeURIComponent("Booking Request - D.Capital Dental Clinic");
        window.open(`mailto:${emailTo}?subject=${subject}&body=${encodedMessage}`, '_blank');
    };

    const handleShare = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        const message = constructMessage();

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Booking Request - D.Capital Dental Clinic',
                    text: message,
                });
            } catch (err) {
                console.error("Error sharing:", err);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(message);
            alert("Booking details copied to clipboard! You can now paste and send them via any app.");
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent
                className="max-w-md w-[90%] rounded-2xl overflow-y-auto max-h-[90vh] z-[150]"
                onOpenAutoFocus={(e) => e.preventDefault()}
            >
                <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-center mb-4">Book Your Visit</DialogTitle>
                </DialogHeader>
                <form id="appointment-form" className="space-y-4">
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
                        <Select value={formData.clinic} onValueChange={handleSelectChange} required>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a clinic" />
                            </SelectTrigger>
                            <SelectContent className="z-[200]">
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
                        <div className="grid grid-cols-2 gap-3">
                            <Button onClick={handleSMS} className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all hover:scale-[1.02]" size="lg">
                                <MessageSquare className="mr-2" size={18} />
                                SMS
                            </Button>
                            <Button onClick={handleEmail} className="w-full bg-red-500 hover:bg-red-600 text-white shadow-md transition-all hover:scale-[1.02]" size="lg">
                                <Mail className="mr-2" size={18} />
                                Email
                            </Button>
                        </div>
                        <Button onClick={handleShare} variant="outline" className="w-full border-primary/20 hover:bg-primary/5 transition-all hover:scale-[1.02]" size="lg">
                            <Share2 className="mr-2 text-primary" size={20} />
                            Other Sending Options
                        </Button>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                        Choose how you'd like to send your booking request
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AppointmentDialog;
