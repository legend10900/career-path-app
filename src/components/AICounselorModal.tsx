'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import { X, Send, Bot } from 'lucide-react';
import { useChat } from 'ai/react';

export default function AICounselorModal() {
  const { isAssistantOpen, toggleAssistant, pendingCustomInterest, clearPendingInterest } = useAppStore();
  
  const { messages, input, handleInputChange, handleSubmit, setMessages, append } = useChat({
    api: '/api/chat',
    initialMessages: [
      { 
        id: '1',
        role: 'assistant', 
        text: "Hi! I'm your AI Career Counselor powered by Grok. Whether you're confused about taking Math in 11th grade, wondering how to study abroad, or want me to analyze your hobbies, ask me anything!",
        content: "Hi! I'm your AI Career Counselor powered by Grok. Whether you're confused about taking Math in 11th grade, wondering how to study abroad, or want me to analyze your hobbies, ask me anything!"
      }
    ]
  });

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle pending custom interest
  useEffect(() => {
    if (isAssistantOpen && pendingCustomInterest) {
      append({
        role: 'user',
        content: `Here are my interests: ${pendingCustomInterest}. Can you analyze this and suggest some career paths or high school streams?`
      });
      clearPendingInterest();
    }
  }, [isAssistantOpen, pendingCustomInterest, append, clearPendingInterest]);

  return (
    <AnimatePresence>
      {isAssistantOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-blue-600">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-white" />
              <h3 className="font-semibold text-white">AI Counselor</h3>
            </div>
            <button onClick={() => toggleAssistant()} className="text-blue-100 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-900/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role !== 'user' && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                )}
                <div className={`p-3 rounded-2xl max-w-[85%] text-sm whitespace-pre-wrap leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about streams, careers..."
                className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-800 dark:text-slate-200 shadow-inner"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
