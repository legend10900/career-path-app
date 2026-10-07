'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { careers } from '@/data/careers';
import { Career } from '@/types';
import { Search, Map, GraduationCap, Briefcase, TrendingUp, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CareerRoadmap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

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
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = c.title.toLowerCase().includes(searchLower) || 
                          c.description.toLowerCase().includes(searchLower) ||
                          c.recommendedStreams.some(s => s.toLowerCase().includes(searchLower));
    const matchesIndustry = selectedIndustry === 'All' || c.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6">
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        {/* Search & Filters */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text"
            placeholder="Search careers, streams, or keywords..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800 dark:text-slate-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-slate-200"
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
        >
          {industries.map(ind => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filteredCareers.map((career) => (
          <motion.div 
            key={career.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              href={`/career/${career.id}`}
              className="block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {career.industry}
                      </span>
                      {career.isTech && (
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                          Tech
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {career.title}
                    </h3>
                  </div>
                  <div className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    View Full Roadmap
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {career.description}
                </p>
                
                {/* Preview tags */}
                <div className="flex flex-wrap items-center gap-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="flex items-center text-xs text-slate-500 font-medium">
                    <Map className="w-4 h-4 mr-1.5 text-indigo-500" />
                    {career.recommendedStreams[0]} {career.recommendedStreams.length > 1 && `+${career.recommendedStreams.length - 1}`}
                  </div>
                  <div className="flex items-center text-xs text-slate-500 font-medium">
                    <GraduationCap className="w-4 h-4 mr-1.5 text-purple-500" />
                    {career.entranceExams.length} Exams
                  </div>
                  <div className="flex items-center text-xs text-slate-500 font-medium">
                    <TrendingUp className="w-4 h-4 mr-1.5 text-emerald-500" />
                    {career.salaryRange}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
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
