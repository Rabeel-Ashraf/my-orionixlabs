'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, controls } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/10 via-accent-violet/10 to-accent-teal/10 rounded-3xl transform -skew-y-1" />
          <div className="absolute inset-0 bg-gradient-to-l from-accent-violet/5 via-accent-teal/5 to-accent-violet/5 rounded-3xl transform skew-y-1" />
          
          <div className="relative glass p-12 rounded-3xl border border-white/10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stay ahead of the <span className="gradient-text">curve</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Get insights on AI automation, self-hosting trends, and exclusive case studies delivered to your inbox. Join 2,000+ tech leaders.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center space-x-3 text-accent-teal"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-medium">Thanks for subscribing!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-accent-teal transition-colors backdrop-blur-lg"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent-teal to-accent-violet text-white font-medium rounded-lg hover:from-accent-teal/80 hover:to-accent-violet/80 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            )}

            <p className="text-sm text-neutral-500 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-teal/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-violet/20 rounded-full blur-3xl" />
    </section>
  );
}
