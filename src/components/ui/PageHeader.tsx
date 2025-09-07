'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  gradientText?: string;
}

export default function PageHeader({ title, subtitle, gradientText }: PageHeaderProps) {
  const titleParts = gradientText ? title.split(gradientText) : [title];

  return (
    <section className="relative py-24 md:py-32 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 dark:from-neutral-900 to-transparent z-0"></div>
      <div className="section-padding relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {titleParts[0]}
          {gradientText && <span className="gradient-text">{gradientText}</span>}
          {titleParts[1]}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
