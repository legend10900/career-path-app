'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export default function LandingHero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-slate-900 border-b border-slate-800 text-white py-24 sm:py-32 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20 tracking-wide uppercase">
            <Sparkles className="w-4 h-4" />
            Empowering Your Future
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
            Choose Your High School Stream <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">With Absolute Clarity.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed font-light">
            Stop guessing about your future. Utilize our intelligent assessment hub and intense career roadmaps to make data-driven decisions for your education.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('quiz')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center group shadow-lg shadow-blue-500/20"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('roadmaps')}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-all flex items-center justify-center border border-slate-700"
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
