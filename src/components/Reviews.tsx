import React from "react";
import { Star, MessageSquare } from "lucide-react";

const reviews = [
    {
        name: "Sharjeel ahmad",
        content: "i would say Dr. Zahoor is such a nice personality and humble person with great skills , Reasonable prices of every treatment and best location too , i had the RCT of my teeth and it was perfect and i'm fully satisfied with the tx as well",
        tags: ["RCT", "Reasonable Prices"],
        highlight: "Fully Satisfied"
    },
    {
        name: "Kashif Jabbar",
        content: "I had a great experience with Dr. Zahoor with regards to the quality of treatment provided. We had done multiple treatments with the dentist and he provided premier services at a very affordable price.",
        tags: ["Quality Treatment", "Affordable"],
        highlight: "Premier Services"
    },
    {
        name: "Ruhma Sajjad",
        content: "Dr. Zahoor is very thorough and pays attention to the details. He would listen to your concerns patiently and will discuss all the treatment options with you until you are satisfied. Above all, the prices for the treatments are very reasonable too. Very good value for money. I would 100% recommend him.",
        tags: ["Thorough", "Value for Money"],
        highlight: "100% Recommended"
    },
    {
        name: "qasim khan",
        content: "It was a great experience with doctor zahoor ahmed .. personally I recommend it to everyone one..",
        tags: ["Great Experience", "Highly Recommended"],
        highlight: "Top Rated"
    },
    {
        name: "Mehtab Ahmad",
        content: "Dr. Zahoor is an exceptional dentist, with a good skills set and even better communication skills. He is always available for any consultation both in the clinic and on personal whatsapp. Rates for different procedures are also affordable as compared to the rest of the market. I would 100% suggest him for any dental related procedures or queries.",
        tags: ["Exceptional", "Great Communication"],
        highlight: "Exceptional Skill"
    }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="flex-shrink-0 w-[350px] h-[280px] p-6 mx-3 rounded-[2rem] bg-card/40 backdrop-blur-xl border border-white/5 flex flex-col justify-between group hover:border-primary/20 transition-all duration-700 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)]">
        <div>
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1 text-primary/80">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                    ))}
                </div>
                <span className="px-3 py-0.5 bg-primary/10 text-primary text-[9px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
                    {review.highlight}
                </span>
            </div>
            <p className="text-muted-foreground/90 text-[13px] leading-relaxed mb-3 italic line-clamp-4">
                "{review.content}"
            </p>
        </div>

        <div>
            <div className="flex gap-2 mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {review.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[9px] font-medium text-primary/70 bg-primary/5 px-2.5 py-0.5 rounded-full border border-primary/10">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex flex-col gap-1 border-t border-white/5 pt-4">
                <p className="text-primary font-normal text-[13px] transition-colors duration-300">
                    {review.name}
                </p>
            </div>
        </div>
    </div>
);

const Reviews = () => {
    return (
        <section id="reviews" className="section-padding bg-background overflow-hidden relative border-y border-white/5">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="container mx-auto relative z-10 mb-20">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-6 block opacity-80">
                        Client Testimonials
                    </span>
                    <h2 className="font-heading text-4xl md:text-6xl font-medium mb-6 leading-[1.1]">
                        Our Patients <span className="text-gradient italic">Results</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-lg">
                        Experience the transformation through the words of those who have
                        trusted us with their smiles.
                    </p>
                </div>
            </div>

            <div className="space-y-10 relative">
                {/* Row 1 - Left to Right */}
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex animate-marquee hover:[animation-play-state:paused] py-4">
                        {[...reviews, ...reviews].map((review, i) => (
                            <ReviewCard key={`row1-${i}`} review={review} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right to Left */}
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] py-4">
                        {[...reviews, ...reviews].map((review, i) => (
                            <ReviewCard key={`row2-${i}`} review={review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
