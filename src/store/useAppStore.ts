import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { QuizResult, StreamCategory } from '../types';

interface AppState {
  quizResult: QuizResult | null;
  savedCareers: string[];
  setQuizResult: (result: QuizResult) => void;
  toggleSavedCareer: (careerId: string) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      quizResult: null,
      savedCareers: [],
      setQuizResult: (result) => set({ quizResult: result }),
      toggleSavedCareer: (careerId) =>
        set((state) => ({
          savedCareers: state.savedCareers.includes(careerId)
            ? state.savedCareers.filter((id) => id !== careerId)
            : [...state.savedCareers, careerId],
        })),
      reset: () => set({ quizResult: null, savedCareers: [] }),
    }),
    {
      name: 'career-app-storage',
    }
  )
);
