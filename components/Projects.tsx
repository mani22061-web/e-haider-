import React from 'react';
import { PROJECTS } from '../constants';
import { SectionId } from '../types';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h3 className="text-[#FF6A00] uppercase tracking-widest text-sm font-medium mb-2">Selected Works</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Leaving Our Mark.</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-[#FF6A00] transition-colors mt-4 md:mt-0">
            <span>VIEW FULL PORTFOLIO</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
                <div key={project.id} className={`group relative overflow-hidden ${index % 3 === 0 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'}`}>
                    <img 
                        src={`${project.image}?grayscale`} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-[#FF6A00] uppercase text-xs tracking-widest mb-2">{project.category} — {project.year}</span>
                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                        <div className="w-full h-[1px] bg-white/20 mt-4 mb-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        <span className="text-white text-sm opacity-80 cursor-pointer flex items-center gap-2">
                            Explore Case Study <ArrowUpRight className="w-3 h-3" />
                        </span>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-white hover:text-[#FF6A00] transition-colors">
                <span>VIEW FULL PORTFOLIO</span>
                <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;