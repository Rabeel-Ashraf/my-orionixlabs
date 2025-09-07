'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {/* Logo Mark */}
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br from-accent-teal to-accent-violet rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm transform rotate-45"></div>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-teal rounded-full animate-pulse"></div>
      </div>
      
      {/* Logo Text */}
      <div className="text-xl font-bold">
        <span className="text-neutral-900 dark:text-white">Orionix</span>
        <span className="gradient-text">labs</span>
      </div>
    </motion.div>
  );
}
