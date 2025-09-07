'use client';

import { motion } from 'framer-motion';
import { Bot, Server, Cpu, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: Bot,
    title: 'AI Tools & Automation',
    description: 'Custom AI solutions that automate complex workflows, reduce manual tasks, and drive intelligent decision-making across your organization.',
    color: 'from-accent-teal to-cyan-400',
    stats: '40% productivity boost',
  },
  {
    icon: Server,
    title: 'Self-Hosting Platform',
    description: 'Complete SHaaS solutions giving you full control over your data, infrastructure, and applications with enterprise-grade security.',
    color: 'from-accent-violet to-purple-400',
    stats: '60% cost reduction',
  },
  {
    icon: Cpu,
    title: 'Custom AI Development',
    description: 'Bespoke AI models and machine learning solutions tailored to your specific business needs and industry requirements.',
    color: 'from-pink-500 to-rose-400',
    stats: '3x faster deployment',
  },
  {
    icon: Shield,
    title: 'Migration & Support',
    description: 'Seamless migration from cloud services to self-hosted solutions with 24/7 support and monitoring.',
    color: 'from-emerald-500 to-teal-400',
    stats: '99.9% uptime guarantee',
  },
];

export default function Features() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Enterprise-grade <span className="gradient-text">solutions</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            From AI automation to self-hosted infrastructure, we deliver comprehensive solutions that scale with your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 relative">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Stacking Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/20 to-accent-violet/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-violet/10 to-accent-teal/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300" />
              
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative glass p-8 rounded-2xl border border-white/10 hover:border-accent-teal/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className="text-accent-teal font-semibold">{feature.stats}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-accent-teal"
                  >
                    →
                  </motion.div>
                </div>

                {/* Parallax Effect */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-teal/20 to-accent-violet/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
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
