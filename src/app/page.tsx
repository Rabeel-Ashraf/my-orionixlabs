import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import Testimonials from '@/components/sections/Testimonials';
import LogoWall from '@/components/sections/LogoWall';
import Newsletter from '@/components/sections/Newsletter';
import CursorFollower from '@/components/ui/CursorFollower';

export default function HomePage() {
  return (
    <>
      <CursorFollower />
      <Hero />
      <Features />
      <ProjectShowcase />
      <Testimonials />
      <LogoWall />
      <Newsletter />
    </>
  );
}
