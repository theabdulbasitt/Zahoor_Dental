import React, { useState } from "react";
import { Play, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

const assets = [
    { type: "image", src: "/gallery/img_1.jpeg", alt: "Modern Dental Clinic" },
    { type: "image", src: "/gallery/img_2.jpeg", alt: "Advanced Equipment" },
    { type: "image", src: "/gallery/img_3.jpeg", alt: "Consultation Room" },
    { type: "image", src: "/gallery/img_4.jpeg", alt: "Sterilization Area" },
    { type: "image", src: "/gallery/img_5.jpeg", alt: "Our Professional Team" },
    { type: "image", src: "/gallery/img_6.jpeg", alt: "Smile Transformation" },
];

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOpen = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % assets.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + assets.length) % assets.length);
    };

    // Home section preview items (4 images)
    const previewItems = [assets[0], assets[1], assets[2], assets[3]];

    return (
        <section id="gallery" className="section-padding bg-secondary/30 relative overflow-hidden group/section">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block opacity-80">
                        Our Gallery
                    </span>
                    <h2 className="font-heading text-4xl md:text-6xl font-medium mb-6 leading-[1.1]">
                        Visualizing <span className="text-gradient italic">Excellence</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Experience our state-of-the-art facility and transformative results.
                    </p>
                </div>

                {/* 4 Images Preview Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative">
                    {/* Main large image */}
                    <div
                        className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[2.5rem] border border-white/10 group h-[400px] md:h-auto shadow-2xl cursor-pointer"
                        onClick={() => handleOpen(0)}
                    >
                        <img
                            src={previewItems[0].src}
                            alt={previewItems[0].alt}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                            <p className="text-white text-xl font-medium">{previewItems[0].alt}</p>
                        </div>
                    </div>

                    {/* Small image 1 */}
                    <div
                        className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-[2rem] border border-white/10 group h-[250px] shadow-xl cursor-pointer"
                        onClick={() => handleOpen(1)}
                    >
                        <img
                            src={previewItems[1].src}
                            alt={previewItems[1].alt}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                    </div>

                    {/* Tall image */}
                    <div
                        className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-[2.5rem] border border-white/10 group h-[350px] md:h-auto shadow-xl cursor-pointer"
                        onClick={() => handleOpen(3)}
                    >
                        <img
                            src={previewItems[3].src}
                            alt={previewItems[3].alt}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                    </div>

                    {/* Small image 2 */}
                    <div
                        className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-[2rem] border border-white/10 group h-[250px] shadow-xl cursor-pointer"
                        onClick={() => handleOpen(2)}
                    >
                        <img
                            src={previewItems[2].src}
                            alt={previewItems[2].alt}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-x-0 bottom-0 top-0 bg-black/20 group-hover:opacity-0 transition-opacity" />
                    </div>

                    {/* Button for full gallery */}
                    <div
                        className="md:col-span-4 mt-8 flex justify-center"
                        onClick={() => handleOpen(0)}
                    >
                        <div className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 transition-all cursor-pointer shadow-lg hover:-translate-y-1">
                            <Maximize2 size={20} />
                            Explore Full Gallery
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Dialog */}
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] animate-in fade-in duration-300" />
                    <Dialog.Content className="fixed inset-0 z-[101] flex items-center justify-center animate-in zoom-in-95 duration-300">
                        {/* Close Button - Fixed and high z-index */}
                        <Dialog.Close className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-[110]">
                            <X size={28} />
                        </Dialog.Close>

                        {/* Navigation - Prev */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 md:left-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-[105]"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Main Image Container */}
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-12 mt-12 md:mt-0">
                            <div className="relative max-w-5xl w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
                                <img
                                    src={assets[currentIndex].src}
                                    alt={assets[currentIndex].alt}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                            </div>
                            <div className="mt-8 text-center max-w-2xl">
                                <h3 className="text-white text-2xl font-heading mb-2">{assets[currentIndex].alt}</h3>
                                <p className="text-white/40">{currentIndex + 1} / {assets.length}</p>
                            </div>
                        </div>

                        {/* Navigation - Next */}
                        <button
                            onClick={nextImage}
                            className="absolute right-4 md:right-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-[105]"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </section>
    );
};

export default Gallery;
