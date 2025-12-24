import { Code2, Mail, Linkedin, MessageCircle, Globe, Zap, ShieldCheck, Heart } from "lucide-react";

const developerFeatures = [
    {
        icon: Globe,
        title: "Full Stack Mastery",
        description: "Expertise in MERN, Next.js, and modern web architectures",
    },
    {
        icon: Zap,
        title: "Rapid Performance",
        description: "High-speed, optimized, and SEO-friendly applications",
    },
    {
        icon: ShieldCheck,
        title: "Clean Code",
        description: "Maintainable, scalable, and secure development standards",
    },
    {
        icon: Heart,
        title: "UI/UX Passion",
        description: "Creating stunning, user-centric digital experiences",
    },
];

const Developer = () => {
    return (
        <section id="developer" className="section-padding bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium text-sm tracking-wider uppercase inline-block relative">
                        THE DEVELOPER
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary/50 rounded-full"></span>
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-medium mt-6">
                        Building Digital <span className="text-gradient italic">Excellence</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col items-center text-center gap-6 animate-fade-in">
                        <div className="relative shrink-0">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl transition-transform duration-500 hover:scale-105">
                                <img
                                    src="https://github.com/theabdulbasitt.png"
                                    alt="Abdul Basit"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full border-2 border-background shadow-md">
                                Abdul Basit
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">Full Stack Developer</p>
                            <h3 className="font-heading text-2xl md:text-3xl font-medium">Abdul Basit</h3>
                            <p className="text-muted-foreground max-w-sm mx-auto">
                                Crafting high-performance web applications with a focus on modern aesthetics and seamless user experience.
                            </p>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://linkedin.com/in/theabdulbasitt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                title="LinkedIn"
                            >
                                <Linkedin size={19} />
                            </a>
                            <a
                                href="https://wa.me/923408015975"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                title="WhatsApp"
                            >
                                <MessageCircle size={19} />
                            </a>
                            <a
                                href="mailto:iabdulbasit.se@gmail.com"
                                className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                title="Email"
                            >
                                <Mail size={19} />
                            </a>
                            <a
                                href="https://github.com/theabdulbasitt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                title="GitHub"
                            >
                                <Code2 size={19} />
                            </a>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {developerFeatures.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="group p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="text-primary" size={24} />
                                </div>
                                <h4 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Developer;
