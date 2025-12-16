import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    id: 1,
    title: "Complete Smile Makeover",
    description: "Veneers and whitening transformed this patient's smile completely.",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    id: 2,
    title: "Dental Implant Restoration",
    description: "Multiple implants restored full functionality and aesthetics.",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    id: 3,
    title: "Teeth Alignment Correction",
    description: "Invisible aligners corrected crowding in just 8 months.",
    beforeLabel: "Before",
    afterLabel: "After",
  },
];

const Cases = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
    setShowAfter(false);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
    setShowAfter(false);
  };

  return (
    <section id="cases" className="section-padding grid-bg relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Results
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-medium mb-4">
            Real Patient{" "}
            <span className="text-gradient italic">Transformations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the remarkable results we've achieved for our patients. 
            Every smile tells a story of renewed confidence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Case Display */}
          <div className="relative rounded-3xl overflow-hidden bg-secondary border border-border">
            <div className="aspect-[16/10] relative">
              {/* Before/After Toggle Overlay */}
              <div className="absolute inset-0 flex">
                <button
                  onClick={() => setShowAfter(false)}
                  className={`flex-1 flex items-center justify-center text-lg font-medium transition-all ${
                    !showAfter ? "bg-primary/20" : "bg-muted/50 hover:bg-muted/70"
                  }`}
                >
                  <span className={!showAfter ? "text-primary" : "text-muted-foreground"}>
                    Before
                  </span>
                </button>
                <div className="w-px bg-border" />
                <button
                  onClick={() => setShowAfter(true)}
                  className={`flex-1 flex items-center justify-center text-lg font-medium transition-all ${
                    showAfter ? "bg-primary/20" : "bg-muted/50 hover:bg-muted/70"
                  }`}
                >
                  <span className={showAfter ? "text-primary" : "text-muted-foreground"}>
                    After
                  </span>
                </button>
              </div>

              {/* Result indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                <span className="text-sm font-medium">
                  {showAfter ? "✨ After Treatment" : "📷 Before Treatment"}
                </span>
              </div>
            </div>

            {/* Case Info */}
            <div className="p-6 md:p-8">
              <h3 className="font-heading text-2xl font-medium mb-2">
                {cases[activeCase].title}
              </h3>
              <p className="text-muted-foreground">
                {cases[activeCase].description}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevCase}
              className="rounded-full border-muted-foreground/30"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveCase(index);
                    setShowAfter(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeCase
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextCase}
              className="rounded-full border-muted-foreground/30"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
