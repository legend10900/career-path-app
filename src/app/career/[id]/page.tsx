import React from 'react';
import { notFound } from 'next/navigation';
import { careers } from '@/data/careers';
import { Map, GraduationCap, Briefcase, TrendingUp, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function CareerPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const career = careers.find(c => c.id === resolvedParams.id);
  
  if (!career) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans pb-24">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <Link href="/#roadmaps" className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Roadmaps
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-100 dark:border-indigo-800/50">
              {career.industry}
            </span>
            {career.isTech && (
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-100 dark:border-emerald-800/50">
                Tech / IT
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{career.title}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            {career.description}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Day in the Life */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 mb-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">A Day in the Life</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
            {career.dayInTheLife}
          </p>
        </div>

        {/* Roadmap Grid */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Your Step-by-Step Roadmap</h2>
        <div className="grid md:grid-cols-4 gap-6 relative">
          
          {/* Step 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm relative z-10 group hover:border-indigo-500 transition-colors">
            <div className="flex items-center gap-2 mb-4 text-indigo-600 dark:text-indigo-400 font-bold text-lg">
              <Map className="w-6 h-6" />
              <h4>1. High School</h4>
            </div>
            <ul className="space-y-3">
              {career.recommendedStreams.map(s => (
                <li key={s} className="flex items-start text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm relative z-10 group hover:border-purple-500 transition-colors">
            <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400 font-bold text-lg">
              <GraduationCap className="w-6 h-6" />
              <h4>2. College & Exams</h4>
            </div>
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Entrance Exams</span>
                <ul className="space-y-2">
                  {career.entranceExams.map(e => (
                    <li key={e} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              {career.targetScores && career.targetScores.length > 0 && (
                <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-100 dark:border-purple-800/30">
                  <span className="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider mb-2 block">Target Scores</span>
                  <ul className="space-y-1.5">
                    {career.targetScores.map(score => (
                      <li key={score} className="text-sm text-purple-800 dark:text-purple-300 flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-1.5 shrink-0" />
                        {score}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm relative z-10 group hover:border-rose-500 transition-colors">
            <div className="flex items-center gap-2 mb-4 text-rose-600 dark:text-rose-400 font-bold text-lg">
              <Briefcase className="w-6 h-6" />
              <h4>3. Core Skills</h4>
            </div>
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {career.coreSkills.map(skill => (
                  <span key={skill} className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
              {career.certificationsToGet && career.certificationsToGet.length > 0 && (
                <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30">
                  <span className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider mb-2 block">Certifications</span>
                  <ul className="space-y-2">
                    {career.certificationsToGet.map(cert => (
                      <li key={cert} className="text-sm text-rose-800 dark:text-rose-300 flex items-start leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-rose-500 mr-1.5 shrink-0" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm relative z-10 group hover:border-emerald-500 transition-colors">
            <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
              <TrendingUp className="w-6 h-6" />
              <h4>4. Career & Salary</h4>
            </div>
            <div className="mb-5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Expected Salary</span>
              <p className="text-base font-bold text-slate-900 dark:text-white">{career.salaryRange}</p>
            </div>
            <div className="mb-5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Growth Trend</span>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded inline-block border border-emerald-100 dark:border-emerald-800/30">
                {career.growthTrend}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">First Roles</span>
              <div className="flex flex-wrap gap-2">
                {career.firstJobRoles.map(role => (
                  <span key={role} className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* International Path */}
        {career.internationalPath && (
          <div className="mt-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-2xl p-6 md:p-8 border border-indigo-100 dark:border-indigo-800/30">
            <h4 className="text-lg font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center">
              🌎 International Pathway
            </h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {career.internationalPath.description}
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="block text-xs font-bold text-indigo-500 uppercase tracking-wider mb-2">Required Exams</span>
                  <div className="flex flex-wrap gap-2">
                    {career.internationalPath.exams.map(e => (
                      <span key={e} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded shadow-sm">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="block text-xs font-bold text-indigo-500 uppercase tracking-wider mb-2">Top Destinations</span>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 bg-white/50 dark:bg-slate-900/50 px-3 py-2 rounded-lg inline-block border border-indigo-100 dark:border-indigo-800/50">
                    {career.internationalPath.topDestinations.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
