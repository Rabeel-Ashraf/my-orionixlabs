'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCursorFollower } from '@/hooks/useCursorFollower';

interface CursorFollowerProps {
  image?: string;
  text?: string;
}

export default function CursorFollower({ image, text }: CursorFollowerProps) {
  const { mousePosition, isHovering } = useCursorFollower();

  return (
    <AnimatePresence>
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-50 mix-blend-difference"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
          {image ? (
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-2xl transform -translate-x-1/2 -translate-y-1/2">
              <img src={image} alt="Preview" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="bg-white text-black px-4 py-2 rounded-lg font-medium transform -translate-x-1/2 -translate-y-1/2">
              {text || 'View'}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
