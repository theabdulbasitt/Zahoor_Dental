import { useState } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const cases = [
  {
    id: 1,
    title: "Teeth Whitening",
    description: "Professional whitening treatment to remove stubborn stains and brighten the smile by several shades.",
    detailedDescription: "Teeth whitening is a popular cosmetic procedure that significantly enhances your smile by removing deep-seated stains caused by food, drinks, and aging. Beyond aesthetics, a brighter smile can boost self-confidence and encourage better oral hygiene habits. Our professional-grade whitening is safer and more effective than over-the-counter options, ensuring long-lasting results without damaging tooth enamel.",
    image: "/case_1_teeth_withening.jpeg",
  },
  {
    id: 2,
    title: "Orthodontic Braces",
    description: "Traditional braces treatment to correct misalignment and achieve a perfectly straight, functional smile.",
    detailedDescription: "Orthodontic braces are essential for correcting misaligned teeth and bite issues. Proper alignment makes it easier to clean between teeth, reducing the risk of cavities and gum disease. Furthermore, correcting your bite can prevent uneven wear on teeth and alleviate potential jaw pain or speech difficulties, contributing to long-term oral health and a more harmonious facial profile.",
    image: "/case_2_braces.jpg",
  },
  {
    id: 3,
    title: "Scaling & Polishing",
    description: "Deep cleaning procedure to remove plaque and tartar, restoring gum health and tooth brilliance.",
    detailedDescription: "Scaling and polishing is more than just a cleaning; it's a vital preventive measure. By removing stubborn tartar (calculus) that regular brushing can't reach, we prevent the onset of gingivitis and periodontitis. This treatment helps eliminate bad breath, prevents gum recession, and protects the underlying bone structure of your teeth, ensuring your smile remains healthy and strong.",
    image: "/case_3_scalling_poolish.jpeg",
  },
  {
    id: 4,
    title: "Zirconia Crown",
    description: "High-strength, natural-looking zirconia crown restoration for durability and superior aesthetics.",
    detailedDescription: "Zirconia crowns offer the perfect blend of strength and beauty. They are used to restore severely damaged or weakened teeth, providing a protective shell that prevents further decay or fracture. Zirconia is highly biocompatible and mimics the light-reflecting properties of natural enamel, ensuring your restoration is virtually indistinguishable from your own teeth while offering exceptional longevity.",
    image: "/case_4_zarconia_crown.jpg",
  },
  {
    id: 5,
    title: "PFM Crown",
    description: "Porcelain-fused-to-metal crown providing a robust solution for restoring damaged teeth.",
    detailedDescription: "Porcelain-fused-to-metal (PFM) crowns have been a reliable choice for decades, offering the durability of a metal sub-structure with the aesthetic appeal of a porcelain exterior. They are excellent for restoring posterior teeth where chewing forces are high, protecting the natural tooth structure underneath and maintaining the integrity of your dental arch and bite alignment.",
    image: "/case_5_pfm_cown.jpg",
  },
];

const Cases = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const getVisibleCases = () => {
    const first = cases[startIndex];
    const second = cases[(startIndex + 1) % cases.length];
    return [first, second];
  };

  const visibleCases = getVisibleCases();

  return (
    <section id="cases" className="section-padding grid-bg relative">
      <div className="container mx-auto">
        <div className="text-center md:text-left mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Results
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-medium">
            Real Patient{" "}
            <span className="text-gradient italic">Transformations</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Witness the transformative power of our dental care. These real-life examples demonstrate our commitment to excellence and your beautiful smile.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative px-4 md:px-12">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-10 h-10 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-white shadow-lg flex"
          >
            <ChevronLeft size={20} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-10 h-10 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-white shadow-lg flex"
          >
            <ChevronRight size={20} />
          </Button>

          <div className="grid md:grid-cols-2 gap-6">
            {visibleCases.map((item, index) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div
                    className={`group rounded-2xl overflow-hidden bg-card border border-border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col ${index === 1 ? 'hidden md:flex' : ''}`}
                  >
                    <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-heading text-lg font-semibold mb-1 shadow-sm">
                          {item.title}
                        </h3>
                      </div>

                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-primary/90 text-white p-2 rounded-full shadow-lg">
                          <Info size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col bg-card relative z-10">
                      <div className="mb-3">
                        <h4 className="text-xs font-bold text-primary mb-2 uppercase tracking-wide flex items-center gap-2">
                          <span className="w-4 h-0.5 bg-primary rounded-full"></span>
                          Case Details
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
                        <div className="text-[10px] font-semibold text-primary uppercase tracking-widest">
                          Treatment Successful
                        </div>
                        <span className="text-xs text-primary font-medium hover:underline">View Case Info</span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-7xl w-[95vw] max-h-[90vh] rounded-2xl overflow-y-auto p-0 gap-0 border-none [&>button]:bg-white/20 [&>button]:backdrop-blur-md [&>button]:rounded-full [&>button]:p-1 [&>button]:hover:bg-white/40 [&>button]:transition-all">
                  <div className="grid md:grid-cols-[1.2fr_0.8fr]">
                    <div className="aspect-square md:aspect-auto relative overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col bg-card">
                      <DialogHeader className="mb-6">
                        <div className="inline-block w-12 h-1 bg-primary rounded-full mb-4"></div>
                        <DialogTitle className="text-3xl font-heading font-medium text-foreground">
                          {item.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex-1 overflow-y-auto">
                        <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                          Why this procedure is important
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {item.detailedDescription}
                        </p>

                        <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                          <div className="flex items-center gap-3 mb-2">
                            <Info size={18} className="text-primary" />
                            <span className="text-sm font-bold text-foreground">Pro-Tip for Healthy Teeth</span>
                          </div>
                          <p className="text-sm text-muted-foreground italic">
                            Regular follow-ups and maintaining a consistent oral hygiene routine are key to ensuring the longevity of your dental treatment.
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-border flex justify-end">
                        <Button
                          variant="outline"
                          onClick={() => document.querySelector('[data-state="open"]')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}
                          className="rounded-full px-8 hover:bg-primary/5 transition-colors"
                        >
                          Close Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
