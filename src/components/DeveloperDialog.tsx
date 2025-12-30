import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Code2, Mail, Linkedin, MessageCircle } from "lucide-react";

interface DeveloperDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const DeveloperDialog = ({ open, onOpenChange }: DeveloperDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="flex flex-col items-center text-center gap-4 py-4">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                                <img
                                    src="https://github.com/theabdulbasitt.png"
                                    alt="Abdul Basit"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <DialogTitle className="text-2xl font-bold">Abdul Basit</DialogTitle>
                            <DialogDescription className="text-primary font-medium">Full Stack Developer</DialogDescription>
                        </div>
                        <p className="text-muted-foreground text-center text-sm px-4">
                            Crafting high-performance web applications with a focus on modern aesthetics and seamless user experience.
                        </p>
                    </div>
                </DialogHeader>
                <div className="flex justify-center gap-4 pb-6">
                    <a
                        href="https://linkedin.com/in/theabdulbasitt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        title="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="https://wa.me/923408015975"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        title="WhatsApp"
                    >
                        <MessageCircle size={18} />
                    </a>
                    <a
                        href="mailto:iabdulbasit.se@gmail.com"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        title="Email"
                    >
                        <Mail size={18} />
                    </a>
                    <a
                        href="https://github.com/theabdulbasitt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        title="GitHub"
                    >
                        <Code2 size={18} />
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeveloperDialog;
