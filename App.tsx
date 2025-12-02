import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import { initializeChat } from './services/geminiService';

const App: React.FC = () => {
  
  useEffect(() => {
    // Initialize Gemini Chat Service on mount
    initializeChat();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF6A00] selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Overview />
        <Services />
        <Projects />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
};

export default App;