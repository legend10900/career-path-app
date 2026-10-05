'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export default function LandingHero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute top-[60%] -right-[20%] w-[60%] h-[60%] rounded-full bg-emerald-500/20 blur-[120px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-sm font-medium mb-6 border border-white/10">
            <Sparkles className="w-4 h-4" />
            Discover Your True Potential
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
            Choose Your High School Stream <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Without the Stress.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
            Stop guessing about your future. Take our 3-minute quiz to find the perfect stream and explore real-world career roadmaps built for teens.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('quiz')}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-all flex items-center justify-center group"
            >
              Take the 3-Minute Quiz
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('roadmaps')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all flex items-center justify-center backdrop-blur-sm border border-white/10"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Roadmaps
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
