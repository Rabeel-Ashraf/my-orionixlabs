import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 p-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-8xl md:text-9xl font-bold gradient-text mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200 mb-8"
        >
          Page Not Found
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-md mx-auto"
        >
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/" className="btn-primary">
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
