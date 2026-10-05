import { Question } from '../types';

export const quizQuestions: Question[] = [
  {
    id: 'q1',
    question: 'How do you prefer to solve a difficult problem?',
    options: [
      { text: 'Break it down into logical steps and use data/formulas.', weight: { 'Analytical/Tech': 3, 'Business/Finance': 1 } },
      { text: 'Look at the human element and how people feel about it.', weight: { 'Creative/Humanities': 3, 'Healthcare/Bio-Sciences': 1 } },
      { text: 'Analyze the costs, benefits, and long-term value.', weight: { 'Business/Finance': 3 } },
      { text: 'Understand the biological or physical root cause.', weight: { 'Healthcare/Bio-Sciences': 3, 'Analytical/Tech': 1 } }
    ]
  },
  {
    id: 'q2',
    question: 'If you had a free weekend, what would you most likely do?',
    options: [
      { text: 'Code a small project, build a PC, or play strategy games.', weight: { 'Analytical/Tech': 3 } },
      { text: 'Read about successful companies or manage a small side hustle.', weight: { 'Business/Finance': 3 } },
      { text: 'Read a novel, write, paint, or debate current events.', weight: { 'Creative/Humanities': 3 } },
      { text: 'Watch nature documentaries, volunteer, or read about human health.', weight: { 'Healthcare/Bio-Sciences': 3 } }
    ]
  },
  {
    id: 'q3',
    question: 'Which of these topics sounds most interesting to study for 4 hours?',
    options: [
      { text: 'Artificial Intelligence and Space Exploration.', weight: { 'Analytical/Tech': 3 } },
      { text: 'Stock markets, cryptocurrencies, and global trade.', weight: { 'Business/Finance': 3 } },
      { text: 'Human history, psychology, or constitutional law.', weight: { 'Creative/Humanities': 3 } },
      { text: 'Genetics, human anatomy, and neuroscience.', weight: { 'Healthcare/Bio-Sciences': 3 } }
    ]
  },
  {
    id: 'q4',
    question: 'When working in a group project, what is usually your role?',
    options: [
      { text: 'The technical lead or the one who organizes the data/structure.', weight: { 'Analytical/Tech': 2, 'Business/Finance': 1 } },
      { text: 'The manager who assigns tasks and keeps track of the budget/timeline.', weight: { 'Business/Finance': 3 } },
      { text: 'The creative lead who writes the content or designs the presentation.', weight: { 'Creative/Humanities': 3 } },
      { text: 'The empathetic mediator who ensures everyone is doing okay.', weight: { 'Healthcare/Bio-Sciences': 2, 'Creative/Humanities': 1 } }
    ]
  },
  {
    id: 'q5',
    question: 'How comfortable are you with advanced mathematics (Calculus, Algebra)?',
    options: [
      { text: 'I love it. Give me more complex equations!', weight: { 'Analytical/Tech': 3, 'Business/Finance': 1 } },
      { text: 'I am okay with practical math for finance, but not abstract calculus.', weight: { 'Business/Finance': 2, 'Creative/Humanities': 1 } },
      { text: 'I can do basic math, but I prefer reading and writing.', weight: { 'Creative/Humanities': 3, 'Healthcare/Bio-Sciences': 1 } },
      { text: 'I prefer studying living things over numbers.', weight: { 'Healthcare/Bio-Sciences': 2, 'Creative/Humanities': 1 } }
    ]
  }
];
