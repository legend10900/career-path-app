'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { careers } from '@/data/careers';
import { Career } from '@/types';
import { Search, Map, GraduationCap, Briefcase, TrendingUp, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function CareerRoadmap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const handleSetSearch = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setSearchTerm(customEvent.detail);
      }
    };
    window.addEventListener('setSearchTerm', handleSetSearch);
    return () => window.removeEventListener('setSearchTerm', handleSetSearch);
  }, []);

  const industries = ['All', ...Array.from(new Set(careers.map(c => c.industry)))];

  const filteredCareers = careers.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || c.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6">
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            id="career-search"
            type="text" 
            placeholder="Search careers (e.g. Software, Doctor)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800 dark:text-slate-200"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          {industries.map(ind => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                selectedIndustry === ind 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredCareers.map(career => (
          <div key={career.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-indigo-200 dark:hover:border-indigo-900/50">
            <button 
              onClick={() => setExpandedId(expandedId === career.id ? null : career.id)}
              className="w-full p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-left gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{career.title}</h3>
                  {career.isTech && <span className="px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs rounded-full font-medium">Tech</span>}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-1">{career.description}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="hidden md:block font-medium">{career.salaryRange}</span>
                <div className={`p-2 rounded-full ${expandedId === career.id ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400' : 'bg-slate-50 text-slate-400 dark:bg-slate-800'}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedId === career.id ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </button>

            <AnimatePresence>
              {expandedId === career.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                    <div className="p-5 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                      
                      {career.dayInTheLife && (
                        <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl">
                          <h4 className="text-indigo-800 dark:text-indigo-300 font-semibold mb-2">A Day in the Life</h4>
                          <p className="text-sm text-indigo-700/80 dark:text-indigo-200/80 leading-relaxed">{career.dayInTheLife}</p>
                        </div>
                      )}

                      <div className="grid md:grid-cols-4 gap-6 relative">
                        
                        {/* Step 1 */}
                        <div className="relative">
                          <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400 font-semibold">
                            <Map className="w-5 h-5" />
                            <h4>1. High School Stream</h4>
                          </div>
                          <ul className="space-y-2">
                            {career.recommendedStreams.map(s => (
                              <li key={s} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                          <div className="flex items-center gap-2 mb-3 text-purple-600 dark:text-purple-400 font-semibold">
                            <GraduationCap className="w-5 h-5" />
                            <h4>2. College & Exams</h4>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Entrance Exams</span>
                              <ul className="space-y-1.5">
                                {career.entranceExams.map(e => (
                                  <li key={e} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 shrink-0" />
                                    {e}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {career.targetScores && career.targetScores.length > 0 && (
                              <div className="bg-purple-50 dark:bg-purple-900/10 p-3 rounded-lg border border-purple-100 dark:border-purple-800/30">
                                <span className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wider mb-1 block">Target Scores</span>
                                <ul className="space-y-1">
                                  {career.targetScores.map(score => (
                                    <li key={score} className="text-xs text-purple-800 dark:text-purple-300 flex items-center">
                                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-1.5" />
                                      {score}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                          <div className="flex items-center gap-2 mb-3 text-rose-600 dark:text-rose-400 font-semibold">
                            <Briefcase className="w-5 h-5" />
                            <h4>3. Core Skills to Build</h4>
                          </div>
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {career.coreSkills.map(skill => (
                                <span key={skill} className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs text-slate-600 dark:text-slate-300 shadow-sm">
                                  {skill}
                                </span>
                              ))}
                            </div>
                            {career.certificationsToGet && career.certificationsToGet.length > 0 && (
                              <div className="bg-rose-50 dark:bg-rose-900/10 p-3 rounded-lg border border-rose-100 dark:border-rose-800/30">
                                <span className="text-xs font-semibold text-rose-700 dark:text-rose-400 uppercase tracking-wider mb-2 block">Recommended Certifications</span>
                                <ul className="space-y-1.5">
                                  {career.certificationsToGet.map(cert => (
                                    <li key={cert} className="text-xs text-rose-800 dark:text-rose-300 flex items-start">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mr-1.5 shrink-0" />
                                      {cert}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative">
                          <div className="flex items-center gap-2 mb-3 text-emerald-600 dark:text-emerald-400 font-semibold">
                            <TrendingUp className="w-5 h-5" />
                            <h4>4. First Jobs & Salary</h4>
                          </div>
                          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">{career.salaryRange}</p>
                          <p className="text-xs text-slate-500 mb-2">Growth Trend: {career.growthTrend}</p>
                          <div className="flex flex-wrap gap-2">
                            {career.firstJobRoles.map(role => (
                              <span key={role} className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded text-xs font-medium border border-emerald-100 dark:border-emerald-800">
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* International Path */}
                      {career.internationalPath && (
                        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                          <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-4 uppercase tracking-wider">🌍 International Pathway</h4>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{career.internationalPath.description}</p>
                            </div>
                            <div>
                              <div className="mb-4">
                                <span className="block text-xs text-slate-500 mb-1">Required Exams</span>
                                <div className="flex flex-wrap gap-1">
                                  {career.internationalPath.exams.map(e => <span key={e} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] rounded">{e}</span>)}
                                </div>
                              </div>
                              <div>
                                <span className="block text-xs text-slate-500 mb-1">Top Destinations</span>
                                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{career.internationalPath.topDestinations.join(', ')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        {filteredCareers.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No careers found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
