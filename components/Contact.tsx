import React from 'react';
import { SectionId } from '../types';
import { MapPin, Mail, Phone, ArrowRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="bg-[#050505] text-white pt-24 pb-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* CTA Section */}
          <div>
            <h3 className="text-[#FF6A00] uppercase tracking-widest text-sm font-medium mb-4">Start A Conversation</h3>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to build <br/> the extraordinary?
            </h2>
            <p className="text-gray-400 max-w-md mb-8 text-lg">
                Whether it's a skyline-defining tower or a private residence, we bring your vision to life with precision and art.
            </p>
            <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 font-bold tracking-wider hover:bg-[#FF6A00] hover:text-white transition-all duration-300">
                START YOUR PROJECT
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="glass-panel p-6 border-l-2 border-l-[#FF6A00] border-t-0 border-r-0 border-b-0">
                <MapPin className="text-[#FF6A00] mb-4 w-6 h-6" />
                <h4 className="text-lg font-bold mb-2">London HQ</h4>
                <p className="text-gray-400 text-sm">
                    1402 Architectural Ave,<br/>
                    Canary Wharf, London<br/>
                    E14 5AB, UK
                </p>
            </div>
             <div className="glass-panel p-6 border-l-2 border-l-gray-700 hover:border-l-[#FF6A00] transition-colors border-t-0 border-r-0 border-b-0">
                <MapPin className="text-gray-400 mb-4 w-6 h-6" />
                <h4 className="text-lg font-bold mb-2">New York Studio</h4>
                <p className="text-gray-400 text-sm">
                    88 West Street,<br/>
                    Tribeca, NY 10013<br/>
                    USA
                </p>
            </div>
             <div className="glass-panel p-6 border-l-2 border-l-gray-700 hover:border-l-[#FF6A00] transition-colors border-t-0 border-r-0 border-b-0">
                <Mail className="text-[#FF6A00] mb-4 w-6 h-6" />
                <h4 className="text-lg font-bold mb-2">Email</h4>
                <p className="text-gray-400 text-sm">enquiries@axisgroup.com</p>
                <p className="text-gray-400 text-sm">careers@axisgroup.com</p>
            </div>
             <div className="glass-panel p-6 border-l-2 border-l-gray-700 hover:border-l-[#FF6A00] transition-colors border-t-0 border-r-0 border-b-0">
                <Phone className="text-[#FF6A00] mb-4 w-6 h-6" />
                <h4 className="text-lg font-bold mb-2">Phone</h4>
                <p className="text-gray-400 text-sm">+44 (0) 20 7946 0000</p>
                <p className="text-gray-400 text-sm">+1 212 555 0199</p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-64 bg-[#111] border border-[#222] mb-12 relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-gray-600 uppercase tracking-widest text-xs">Interactive Map Module</span>
             </div>
             {/* Abstract Map Lines */}
             <div className="absolute inset-0 opacity-20" 
                style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
             </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 AXIS GROUP. All Rights Reserved.</p>
            <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-[#FF6A00] transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-[#FF6A00] transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-[#FF6A00] transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-[#FF6A00] transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;