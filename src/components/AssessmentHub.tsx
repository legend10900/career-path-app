'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuizEngine from './QuizEngine';
import { useAppStore } from '@/store/useAppStore';
import { Compass, BookOpen, Target, Sparkles, ArrowRight } from 'lucide-react';

type Mode = 'menu' | 'quiz' | 'stream' | 'custom';

export default function AssessmentHub() {
  const [mode, setMode] = useState<Mode>('menu');
  const [customInterest, setCustomInterest] = useState('');
  const { toggleAssistant } = useAppStore();

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInterest.trim()) return;
    
    toggleAssistant(customInterest);
    setCustomInterest('');
  };

  const scrollToRoadmaps = () => {
    document.getElementById('roadmaps')?.scrollIntoView({ behavior: 'smooth' });
    // Small timeout to allow scrolling, then focus the search input
    setTimeout(() => {
      const searchInput = document.getElementById('career-search') as HTMLInputElement;
      if (searchInput) searchInput.focus();
    }, 500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-[400px]">
      <AnimatePresence mode="wait">
        {mode === 'menu' && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <button
              onClick={() => setMode('quiz')}
              className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">I'm Completely Lost</h3>
              <p className="text-slate-500 text-center text-sm">Take the psychological assessment to discover your ideal stream and career.</p>
            </button>

            <button
              onClick={() => {
                document.getElementById('streams-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-purple-500 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">I Know My Stream</h3>
              <p className="text-slate-500 text-center text-sm">Explore careers available specifically for Science, Commerce, or Humanities.</p>
            </button>

            <button
              onClick={scrollToRoadmaps}
              className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">I Know My Career</h3>
              <p className="text-slate-500 text-center text-sm">Skip to the intense roadmaps and see exact exams, scores, and skills needed.</p>
            </button>

            <button
              onClick={() => setMode('custom')}
              className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-slate-700 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-xl" />
              <div className="w-16 h-16 bg-white/10 text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Interests</h3>
              <p className="text-slate-400 text-center text-sm">Type in your raw hobbies and passions. Our AI will analyze them.</p>
            </button>
          </motion.div>
        )}

        {mode === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <button 
              onClick={() => setMode('menu')}
              className="mb-6 text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center transition-colors"
            >
              ← Back to Options
            </button>
            <QuizEngine />
          </motion.div>
        )}

        {mode === 'custom' && (
          <motion.div
            key="custom"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800"
          >
            <button 
              onClick={() => setMode('menu')}
              className="mb-6 text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center transition-colors"
            >
              ← Back to Options
            </button>
            
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">What do you love doing?</h2>
            <p className="text-slate-500 mb-6">Describe your hobbies, what subjects you hate, what you do on weekends, or any vague career ideas you have. Be as specific as you want.</p>
            
            <form onSubmit={handleCustomSubmit}>
              <textarea
                value={customInterest}
                onChange={(e) => setCustomInterest(e.target.value)}
                placeholder="E.g., I love playing video games, building custom PCs, and watching crime documentaries, but I absolutely hate chemistry and rote memorization..."
                className="w-full h-40 p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 dark:text-slate-200 resize-none mb-6"
              />
              <button
                type="submit"
                disabled={!customInterest.trim()}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl font-bold transition-all flex items-center justify-center group"
              >
                Analyze with AI Counselor
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
