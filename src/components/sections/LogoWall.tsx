'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const companies = [
  { name: 'TechCorp Dubai', logo: 'TC' },
  { name: 'GulfLogix', logo: 'GL' },
  { name: 'Emirates AI', logo: 'EA' },
  { name: 'Dubai Innovations', logo: 'DI' },
  { name: 'UAE Startups', logo: 'US' },
  { name: 'MiddleEast Tech', logo: 'MT' },
  { name: 'Smart Cities ME', logo: 'SC' },
  { name: 'Digital Gulf', logo: 'DG' },
  { name: 'AI Solutions UAE', logo: 'AS' },
  { name: 'Cloud First', logo: 'CF' },
];

export default function LogoWall() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 border-y border-neutral-200 dark:border-neutral-800">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Trusted by innovative companies across the UAE and beyond
          </p>
        </motion.div>

        {/* Cycling Logo Animation */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{
              x: [0, -100 * companies.length],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* First set */}
            {companies.map((company, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 group"
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => {
                  // Pause animation on hover would be implemented here
                }}
              >
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center group-hover:from-accent-teal/20 group-hover:to-accent-violet/20 transition-all duration-300">
                  <span className="text-xl font-bold text-neutral-700 dark:text-neutral-300 group-hover:text-accent-teal transition-colors">
                    {company.logo}
                  </span>
                </div>
                <p className="text-center text-sm text-neutral-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {company.name}
                </p>
              </motion.div>
            ))}
            
            {/* Second set for seamless loop */}
            {companies.map((company, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 group"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center group-hover:from-accent-teal/20 group-hover:to-accent-violet/20 transition-all duration-300">
                  <span className="text-xl font-bold text-neutral-700 dark:text-neutral-300 group-hover:text-accent-teal transition-colors">
                    {company.logo}
                  </span>
                </div>
                <p className="text-center text-sm text-neutral-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {company.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-bg-dark to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-bg-dark to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
