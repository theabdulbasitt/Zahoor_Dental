import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    separator?: string;
}

const CountUp = ({ end, duration = 2000, suffix = '', prefix = '', separator = '' }: CountUpProps) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;

                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);

                        // Easing function for smooth animation (easeOutExpo)
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                        setCount(Math.floor(easeOutQuart * end));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [end, duration]);

    const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    return (
        <span ref={elementRef} className="tabular-nums">
            {prefix}{formattedCount}{suffix}
        </span>
    );
};

export default CountUp;
