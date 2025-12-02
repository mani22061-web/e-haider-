import React from 'react';
import { SERVICES } from '../constants';
import { SectionId } from '../types';
import * as Icons from 'lucide-react';

// Helper to render icon dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (Icons as any)[name];
  return IconComponent ? <IconComponent className={className} /> : <Icons.Activity className={className} />;
};

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#111] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h3 className="text-[#FF6A00] uppercase tracking-widest text-sm font-medium mb-2">Our Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mastering the Built Environment.</h2>
          <div className="w-24 h-1 bg-[#FF6A00]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group glass-panel p-8 hover:bg-[#111] transition-all duration-500 hover:-translate-y-2 border-t-2 ${index === 0 || index === 4 ? 'border-t-[#FF6A00]' : 'border-t-transparent hover:border-t-[#FF6A00]'}`}
            >
              <div className="mb-6 text-gray-400 group-hover:text-[#FF6A00] transition-colors">
                <DynamicIcon name={service.iconName} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FF6A00] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-[#333] pl-4 group-hover:border-[#FF6A00] transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;