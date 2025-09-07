'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'AI Automation', href: '/services#ai-automation' },
    { name: 'Self-Hosting', href: '/services#self-hosting' },
    { name: 'Custom AI Development', href: '/services#custom-ai' },
    { name: 'Migration & Support', href: '/services#migration' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Rabeel-Ashraf', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/orionixlabs/', icon: Linkedin },
  { name: 'Email', href: 'mailto:orionixlabs@gmail.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="section-padding py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-md leading-relaxed">
              Building the future of automation and self-hosting solutions for enterprises across the UAE and beyond.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                <MapPin className="w-4 h-4 mr-3 text-accent-teal" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                <Mail className="w-4 h-4 mr-3 text-accent-teal" />
                <a href="mailto:orionixlabs@gmail.com" className="hover:text-accent-teal transition-colors">
                  orionixlabs@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-accent-teal/10 hover:text-accent-teal transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-accent-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-accent-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-accent-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            © 2025 Orionixlabs Automation and Self Hosting Solutions. All rights reserved.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-4 md:mt-0">
            Founded by{' '}
            <a
              href="https://github.com/Rabeel-Ashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-teal hover:text-accent-violet transition-colors"
            >
              Rabeel Ashraf
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
