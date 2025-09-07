'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCursorFollower } from '@/hooks/useCursorFollower';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Auto-Deploy-Infra',
    description: 'A powerful IaC solution using Terraform and Ansible to automate the deployment of self-hosted applications, reducing setup time from days to minutes.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&h=600&fit=crop',
    category: 'Self-Hosting',
    results: ['95% faster deployment', 'Fully reproducible environments', 'Secure by default'],
    link: 'https://github.com/Rabeel-Ashraf',
  },
  {
    id: 2,
    title: 'Insight-AI',
    description: 'A custom-built AI dashboard for a FinTech client in Dubai, providing real-time market analysis and predictive insights using ML models.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'AI Development',
    results: ['30% increase in portfolio performance', 'Real-time risk assessment', 'Actionable trading signals'],
    link: 'https://github.com/Rabeel-Ashraf',
  },
  {
    id: 3,
    title: 'Secure-Flow',
    description: 'An end-to-end encrypted workflow automation tool that helps legal firms in the UAE manage sensitive documents and client communications securely.',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&h=600&fit=crop',
    category: 'Workflow Automation',
    results: ['100% data privacy compliance', 'Automated document signing', 'Reduced manual paperwork by 80%'],
    link: 'https://github.com/Rabeel-Ashraf',
  },
];

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, controls } = useScrollAnimation();
  const { setIsHovering } = useCursorFollower();
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Real results for real businesses. See how we've transformed operations for companies across the UAE and beyond.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto" ref={carouselRef}>
          <div className="flex items-center justify-center">
            <button
              onClick={prevProject}
              className="absolute left-4 z-20 p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 hover:bg-accent-teal/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-96 flex items-center justify-center perspective-1000">
              <AnimatePresence mode="wait">
                {projects.map((project, index) => {
                  const offset = index - activeIndex;
                  const isActive = index === activeIndex;

                  return (
                    <motion.div
                      key={project.id}
                      className="absolute w-80 h-96"
                      initial={{ opacity: 0, rotateY: offset * 45, z: -Math.abs(offset) * 200 }}
                      animate={{
                        opacity: Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.5,
                        rotateY: offset * 45,
                        z: -Math.abs(offset) * 200,
                        scale: isActive ? 1 : 0.8,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                      }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="w-full h-full glass rounded-2xl overflow-hidden border border-white/20 hover:border-accent-teal/40 transition-all duration-300 flex flex-col">
                        <div className="relative h-48 overflow-hidden flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute top-4 left-4 px-3 py-1 bg-accent-teal/20 backdrop-blur-sm rounded-full text-accent-teal text-sm font-medium">
                            {project.category}
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2 flex-grow">
                            {project.description}
                          </p>

                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-accent-teal hover:text-accent-violet transition-colors font-medium mt-auto"
                          >
                            <span>View on GitHub</span>
                            <Github className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <button
              onClick={nextProject}
              className="absolute right-4 z-20 p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 hover:bg-accent-teal/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-accent-teal scale-125'
                    : 'bg-neutral-400 hover:bg-accent-teal/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-violet/10 rounded-full blur-3xl" />
    </section>
  );
}
