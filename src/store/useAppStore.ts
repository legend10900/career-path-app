import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { QuizResult, StreamCategory } from '../types';

interface AppState {
  quizResult: QuizResult | null;
  savedCareers: string[];
  isAssistantOpen: boolean;
  setQuizResult: (result: QuizResult) => void;
  toggleSavedCareer: (careerId: string) => void;
  toggleAssistant: () => void;
  reset: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      quizResult: null,
      savedCareers: [],
      isAssistantOpen: false,
      setQuizResult: (result) => set({ quizResult: result }),
      toggleSavedCareer: (careerId) =>
        set((state) => ({
          savedCareers: state.savedCareers.includes(careerId)
            ? state.savedCareers.filter((id) => id !== careerId)
            : [...state.savedCareers, careerId],
        })),
      toggleAssistant: () => set((state) => ({ isAssistantOpen: !state.isAssistantOpen })),
      reset: () => set({ quizResult: null, savedCareers: [] }),
    }),
    {
      name: 'career-app-storage',
    }
  )
);
