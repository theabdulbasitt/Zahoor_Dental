import { Code2 } from "lucide-react";

const FloatingDeveloperCredit = () => {
    return (
        <div className="fixed bottom-24 left-4 z-[40] md:bottom-8 md:left-8 flex items-center group pointer-events-none">
            <a
                href="#developer"
                className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/40 backdrop-blur-md border border-primary/10 hover:border-primary/40 hover:bg-background/60 transition-all duration-300 shadow-sm"
            >
                <Code2 size={12} className="text-primary animate-pulse" />
                <span className="text-[10px] font-medium tracking-tight text-muted-foreground/80 group-hover:text-primary transition-colors whitespace-nowrap">
                    Dev: <span className="text-foreground/70 group-hover:text-primary transition-colors">Abdul Basit</span>
                </span>
            </a>

            {/* Decorative line */}
            <div className="hidden md:block w-px h-12 bg-gradient-to-t from-primary/40 to-transparent ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

export default FloatingDeveloperCredit;
