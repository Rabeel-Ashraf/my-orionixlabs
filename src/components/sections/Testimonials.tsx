'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    id: 1,
    quote: "Orionixlabs helped us replace costly SaaS workflows with self-hosted solutions — saving 38% annually while maintaining enterprise-grade security.",
    author: "Aisha Al Mansoori",
    role: "CTO",
    company: "GulfLogix",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 2,
    quote: "The AI automation platform transformed our logistics operations. We've seen 70% faster processing times and virtually eliminated human errors.",
    author: "Mohammed Hassan",
    role: "Operations Director",
    company: "Emirates Logistics",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 3,
    quote: "Migrating to self-hosted infrastructure with Orionixlabs gave us complete data sovereignty. The support team is exceptional.",
    author: "Sarah Al Zaabi",
    role: "Founder & CEO",
    company: "TechCorp Dubai",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What our <span className="gradient-text">clients say</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Don't just take our word for it. See what business leaders across the UAE say about working with Orionixlabs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Background Cards for Stacking Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 to-accent-violet/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-accent-teal/5 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300" />
              
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative glass p-8 rounded-2xl border border-white/10 hover:border-accent-teal/30 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent-teal to-accent-violet rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-accent-teal/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-accent-teal/20 to-accent-violet/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
