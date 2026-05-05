// components/animations/FadeInOnScroll.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function FadeInOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimatedIn(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleBeforePrint = () => setIsPrinting(true);
    const handleAfterPrint = () => setIsPrinting(false);
    const mediaQuery = window.matchMedia('print');
    const handleMediaChange = (event: MediaQueryListEvent) => setIsPrinting(event.matches);

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  if (isPrinting) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={hasAnimatedIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
