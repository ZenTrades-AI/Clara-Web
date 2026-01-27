import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Delay in seconds
}

export const RevealOnScroll = ({ children, className, delay = 0 }: RevealOnScrollProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all duration-700 ease-out transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                className
            )}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};
