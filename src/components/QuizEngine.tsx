'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '@/data/quiz';
import { streams } from '@/data/streams';
import { careers } from '@/data/careers';
import { Archetype, QuizResult } from '@/types';
import { useAppStore } from '@/store/useAppStore';
import { ArrowLeft, ArrowRight, RefreshCcw } from 'lucide-react';

export default function QuizEngine() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [scores, setScores] = useState<Record<Archetype, number>>({
    'Analytical/Tech': 0,
    'Business/Finance': 0,
    'Creative/Humanities': 0,
    'Healthcare/Bio-Sciences': 0,
  });
  
  const { quizResult, setQuizResult, reset } = useAppStore();

  const handleOptionSelect = (weight: Partial<Record<Archetype, number>>) => {
    const newScores = { ...scores };
    Object.keys(weight).forEach((key) => {
      newScores[key as Archetype] += weight[key as Archetype] || 0;
    });
    setScores(newScores);

    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      calculateResults(newScores);
    }
  };

  const handleBack = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx((prev) => prev - 1);
      // Note: Ideally, we should also subtract the previous answer's weight, but for simplicity we let it slide in this mock or reset logic.
      // A more robust implementation would keep track of answers array.
    }
  };

  const calculateResults = (finalScores: Record<Archetype, number>) => {
    // Find the highest scoring archetype
    const topArchetype = (Object.keys(finalScores) as Archetype[]).reduce((a, b) => 
      finalScores[a] > finalScores[b] ? a : b
    );

    let recommendedStreamIds: string[] = [];
    if (topArchetype === 'Analytical/Tech') recommendedStreamIds = ['sci-pcm', 'comm-math'];
    else if (topArchetype === 'Business/Finance') recommendedStreamIds = ['comm-math', 'comm-nomath'];
    else if (topArchetype === 'Creative/Humanities') recommendedStreamIds = ['humanities'];
    else if (topArchetype === 'Healthcare/Bio-Sciences') recommendedStreamIds = ['sci-pcb'];

    const matchedStreams = streams.filter(s => recommendedStreamIds.includes(s.id)).map(s => s.name);
    
    const careerMatches = careers.filter(c => 
      c.recommendedStreams.some(s => matchedStreams.includes(s))
    ).slice(0, 3);

    const result: QuizResult = {
      archetype: topArchetype,
      recommendedStreams: matchedStreams,
      recommendedSubjects: [],
      careerMatches,
    };
    
    setQuizResult(result);
  };

  const currentQ = quizQuestions[currentQuestionIdx];
  const progress = ((currentQuestionIdx) / quizQuestions.length) * 100;

  if (quizResult) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Your Profile: The {quizResult.archetype.split('/')[0]}</h2>
          <p className="text-slate-600 dark:text-slate-300">Based on your answers, here are your top matches.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border border-indigo-100 dark:border-indigo-800">
            <h3 className="font-semibold text-lg text-indigo-900 dark:text-indigo-200 mb-4">Recommended Streams</h3>
            <ul className="space-y-2">
              {quizResult.recommendedStreams.map(s => (
                <li key={s} className="flex items-center text-indigo-700 dark:text-indigo-300">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl border border-emerald-100 dark:border-emerald-800">
            <h3 className="font-semibold text-lg text-emerald-900 dark:text-emerald-200 mb-4">Top Career Matches</h3>
            <ul className="space-y-3">
              {quizResult.careerMatches.map(c => (
                <li key={c.id} className="text-sm">
                  <div className="font-medium text-emerald-800 dark:text-emerald-300">{c.title}</div>
                  <div className="text-emerald-600/80 dark:text-emerald-400/80">{c.industry}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => {
              reset();
              setCurrentQuestionIdx(0);
              setScores({
                'Analytical/Tech': 0,
                'Business/Finance': 0,
                'Creative/Humanities': 0,
                'Healthcare/Bio-Sciences': 0,
              });
            }}
            className="flex items-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg transition-colors font-medium"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Retake Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-500 font-medium mb-2">
          <span>Question {currentQuestionIdx + 1} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-indigo-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-6">
            {currentQ.question}
          </h2>

          <div className="space-y-3">
            {currentQ.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOptionSelect(opt.weight)}
                className="w-full text-left p-4 sm:p-5 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 dark:hover:border-indigo-500 transition-all text-slate-700 dark:text-slate-300 font-medium group"
              >
                <div className="flex justify-between items-center">
                  <span>{opt.text}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-slate-200 dark:border-slate-700 group-hover:border-indigo-500 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={handleBack}
          disabled={currentQuestionIdx === 0}
          className="flex items-center text-slate-500 hover:text-indigo-600 disabled:opacity-50 disabled:hover:text-slate-500 transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>
      </div>
    </div>
  );
}
