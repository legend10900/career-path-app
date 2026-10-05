'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, BookX, LightbulbOff } from 'lucide-react';

const myths = [
  {
    icon: ShieldAlert,
    myth: "Science is the only 'safe' option.",
    truth: "Commerce and Humanities offer equally high-paying and stable careers like Investment Banking, Corporate Law, and UX Design."
  },
  {
    icon: BookX,
    myth: "Humanities is only for civil services.",
    truth: "Arts students excel in Design, Psychology, Journalism, Public Policy, and corporate HR roles globally."
  },
  {
    icon: LightbulbOff,
    myth: "Without Math in 11th, you can't succeed in Business.",
    truth: "While helpful for quant finance, you can still pursue excellent BBA, Law, and Marketing degrees without advanced high school math."
  }
];

export default function MythsGrid() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Busting High School Myths</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Don't let outdated advice dictate your future. Here is the reality.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {myths.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
              >
                <div className="w-12 h-12 bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Myth: {m.myth}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">Truth: {m.truth}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
