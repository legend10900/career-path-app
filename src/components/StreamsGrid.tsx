'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { streams } from '@/data/streams';
import { Rocket, Stethoscope, TrendingUp, Briefcase, Palette } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Stethoscope,
  TrendingUp,
  Briefcase,
  Palette
};

export default function StreamsGrid() {
  const handleStreamClick = (streamName: string) => {
    document.getElementById('roadmaps')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('setSearchTerm', { detail: streamName }));
    }, 500);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Explore High School Streams</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Click to explore career roadmaps for each path.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream, i) => {
            const Icon = iconMap[stream.icon] || Briefcase;
            return (
              <motion.div 
                key={stream.id}
                onClick={() => handleStreamClick(stream.name)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <div className="relative">
                  <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700 mb-6 group-hover:scale-110 transition-transform text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{stream.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">{stream.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Core Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                        {stream.coreSubjects.slice(0, 3).map(sub => (
                          <span key={sub} className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
