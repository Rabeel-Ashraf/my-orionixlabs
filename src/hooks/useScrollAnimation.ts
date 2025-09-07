'use client';

import { useEffect, useRef, useState } from 'react';
import { useAnimation as useFramerAnimation } from 'framer-motion';
import { useAnimation } from '@/components/providers/AnimationProvider';

export function useScrollAnimation(threshold = 0.1) {
  const controls = useFramerAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { prefersReducedMotion, animationsPaused } = useAnimation();

  useEffect(() => {
    if (prefersReducedMotion || animationsPaused) {
      controls.start({ opacity: 1, y: 0 });
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({ opacity: 1, y: 0 });
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls, threshold, hasAnimated, prefersReducedMotion, animationsPaused]);

  return { ref, controls };
}
