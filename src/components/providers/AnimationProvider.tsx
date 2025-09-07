'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type AnimationContextType = {
  prefersReducedMotion: boolean;
  animationsPaused: boolean;
  toggleAnimations: () => void;
};

const AnimationContext = createContext<AnimationContextType>({
  prefersReducedMotion: false,
  animationsPaused: false,
  toggleAnimations: () => {},
});

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animationsPaused, setAnimationsPaused] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleAnimations = () => {
    setAnimationsPaused(!animationsPaused);
  };

  return (
    <AnimationContext.Provider
      value={{
        prefersReducedMotion,
        animationsPaused,
        toggleAnimations,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return context;
};
