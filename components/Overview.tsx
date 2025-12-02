import React from 'react';
import { SectionId, Achievement } from '../types';
import { ACHIEVEMENTS, TEAM } from '../constants';
import { Quote } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id={SectionId.OVERVIEW} className="py-24 bg-white text-black relative">
        {/* Subtle Grid on White */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h3 className="text-[#FF6A00] uppercase tracking-widest text-sm font-bold mb-4">Who We Are</h3>
            <h2 className="text-5xl font-bold leading-tight mb-8">
              We don't just build.<br/>
              We define <span className="text-[#FF6A00]">spaces</span>.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              AXIS GROUP is an international multidisciplinary practice. We combine 
              strategic urban planning with high-fidelity architectural design to create 
              environments that stand the test of time.
            </p>
            <div className="flex gap-4">
              <div className="w-16 h-1 bg-black"></div>
              <div className="w-4 h-1 bg-[#FF6A00]"></div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -top-10 -left-10 text-gray-100">
                <Quote size={120} />
             </div>
             <blockquote className="relative text-2xl font-light italic leading-relaxed text-gray-800 border-l-4 border-[#FF6A00] pl-6 py-2">
                "Our philosophy is simple: Every line drawn must have a purpose. Every space must tell a story. Architecture is the silent language of civilization."
             </blockquote>
             <p className="mt-4 font-bold text-black pl-8">— Alexander Vane, Principal</p>
          </div>
        </div>

        {/* Vision/Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            <div className="p-8 bg-black text-white shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-[#FF6A00] text-sm uppercase tracking-widest mb-4">Our Vision</h3>
                <p className="text-xl font-light">To be the global benchmark for futuristic, sustainable, and human-centric urban ecosystems.</p>
            </div>
            <div className="p-8 bg-gray-100 border border-gray-200 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-black text-sm uppercase tracking-widest mb-4 font-bold">Our Mission</h3>
                <p className="text-gray-700">Blending art, technology, and functionality to solve complex spatial challenges.</p>
            </div>
            <div className="p-8 bg-white border border-gray-200 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF6A00] opacity-10 rounded-bl-full"></div>
                <h3 className="text-black text-sm uppercase tracking-widest mb-4 font-bold">Core Values</h3>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF6A00]"></span>Innovation First</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF6A00]"></span>Sustainability</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF6A00]"></span>Absolute Precision</li>
                </ul>
            </div>
        </div>

        {/* Achievements Strip */}
        <div className="bg-black text-white p-12 rounded-sm shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6A00] to-transparent"></div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {ACHIEVEMENTS.map((ach) => (
                    <div key={ach.id} className="relative">
                        <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">{ach.metric}</h4>
                        <p className="text-xs uppercase tracking-widest text-gray-400">{ach.label}</p>
                    </div>
                ))}
             </div>
        </div>

        {/* Leadership Teaser */}
        <div className="mt-24">
            <h3 className="text-center text-[#FF6A00] uppercase tracking-widest text-sm font-bold mb-12">Leadership</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {TEAM.map((member) => (
                    <div key={member.id} className="group text-center">
                        <div className="relative mb-4 overflow-hidden border border-gray-200 p-2">
                             <img src={`${member.image}?grayscale`} alt={member.name} className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                             <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF6A00] transition-all duration-500 pointer-events-none m-2"></div>
                        </div>
                        <h4 className="text-lg font-bold text-black group-hover:text-[#FF6A00] transition-colors">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Overview;