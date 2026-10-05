import React from 'react';
import LandingHero from '@/components/LandingHero';
import MythsGrid from '@/components/MythsGrid';
import StreamsGrid from '@/components/StreamsGrid';
import QuizEngine from '@/components/QuizEngine';
import CareerRoadmap from '@/components/CareerRoadmap';
import { MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <LandingHero />
      <MythsGrid />
      <StreamsGrid />
      
      <section id="quiz" className="py-24 bg-indigo-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">The Stream & Career Fit Quiz</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Answer a few quick questions to find your natural archetype and recommended paths.</p>
          </div>
          <QuizEngine />
        </div>
      </section>

      <section id="roadmaps" className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Interactive Career Roadmaps</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Explore exactly how to reach your dream career, step by step.</p>
          </div>
          <CareerRoadmap />
        </div>
      </section>

      {/* Floating AI Counselor Widget Mockup */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="flex items-center justify-center w-14 h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </main>
  );
}
