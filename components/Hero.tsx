import React from 'react';
import { SectionId } from '../types';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/234/1920/1080?grayscale"
          alt="Architectural Abstract"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 border border-[#FF6A00]/20 rounded-full blur-3xl opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <h2 className="text-[#FF6A00] uppercase tracking-[0.5em] text-sm md:text-base font-medium mb-6 animate-fade-in-down">
          Est. 2021
        </h2>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-tight">
          AXIS GROUP <br />
          <span className="font-light italic text-gray-400">Beyond Structures.</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
          Where visionary design meets precision engineering. Shaping the skyline of tomorrow with an ultra-modern aesthetic.
        </p>
        
        <div className="flex justify-center gap-6">
          <a href={`#${SectionId.PROJECTS}`} className="px-8 py-3 bg-[#FF6A00] text-white font-medium hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1">
            View Projects
          </a>
          <a href={`#${SectionId.CONTACT}`} className="px-8 py-3 border border-white/30 text-white font-medium hover:border-[#FF6A00] hover:text-[#FF6A00] transition-all duration-300 bg-black/30 backdrop-blur-sm">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default Hero;