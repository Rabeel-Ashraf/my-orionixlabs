import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
    { name: 'Rabeel Ashraf', role: 'Founder & CEO', image: 'https://avatars.githubusercontent.com/u/10264383?v=4', linkedin: 'https://www.linkedin.com/in/rabeel-ashraf/' },
    { name: 'Jane Doe', role: 'Lead AI Engineer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', linkedin: '#' },
    { name: 'John Smith', role: 'Head of Infrastructure', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', linkedin: '#' },
    { name: 'Aisha Al Futtaim', role: 'Business Development, MENA', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face', linkedin: '#' },
];

const timeline = [
    { year: 2022, event: 'Orionixlabs founded in Dubai with a mission to democratize enterprise-grade automation.' },
    { year: 2023, event: 'Launched our flagship Self-Hosting-as-a-Service (SHaaS) platform.' },
    { year: 2024, event: 'Expanded our AI development team and secured major logistics and FinTech clients.' },
    { year: 2025, event: 'Recognized as a leading innovator in the UAE tech ecosystem.' },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="Engineering the Future of Automation"
        gradientText="Future"
        subtitle="We are a team of engineers, innovators, and problem-solvers dedicated to building intelligent, secure, and autonomous systems."
      />

      <section className="py-24 section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Founded in the heart of Dubai's thriving tech scene, Orionixlabs was born from the vision of Rabeel Ashraf to empower businesses with the tools for digital sovereignty. We believe that the future isn't just about using software, but about owning and controlling the systems that power your business.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              From day one, our focus has been on creating robust, scalable, and secure solutions that replace expensive, restrictive SaaS products with powerful self-hosted alternatives.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden glass">
             <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop" layout="fill" objectFit="cover" alt="Orionixlabs Team" />
             <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/50 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="section-padding">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 glass rounded-xl">
              <Award className="w-12 h-12 mx-auto text-accent-teal mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Pushing the boundaries of what's possible with AI and automation.</p>
            </div>
            <div className="p-8 glass rounded-xl">
              <Users className="w-12 h-12 mx-auto text-accent-violet mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Centricity</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Your success is our success. We build partnerships, not just products.</p>
            </div>
            <div className="p-8 glass rounded-xl">
              <Target className="w-12 h-12 mx-auto text-accent-teal mb-4" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Transparency and security are at the core of everything we build.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 section-padding">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
                <div key={member.name} className="group relative text-center">
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-neutral-200 dark:ring-neutral-800 group-hover:ring-accent-teal transition-all duration-300">
                        <Image src={member.image} layout="fill" objectFit="cover" alt={member.name} />
                    </div>
                    <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                    <p className="text-accent-teal">{member.role}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
