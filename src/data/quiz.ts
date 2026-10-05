import { Question } from '../types';

export const quizQuestions: Question[] = [
  {
    id: 'q1',
    question: 'You are leading a team to build a futuristic smart city. What is your primary focus?',
    options: [
      { text: 'Designing the underlying algorithms and data grids that control traffic and energy.', weight: { 'Analytical/Tech': 4, 'Business/Finance': 1 } },
      { text: 'Ensuring the city is economically viable, attracting investors, and managing the budget.', weight: { 'Business/Finance': 4, 'Analytical/Tech': 1 } },
      { text: 'Focusing on the architecture, cultural spaces, and how citizens emotionally connect with the environment.', weight: { 'Creative/Humanities': 4 } },
      { text: 'Developing the public health infrastructure, green spaces, and sustainable biosystems.', weight: { 'Healthcare/Bio-Sciences': 4, 'Analytical/Tech': 1 } }
    ]
  },
  {
    id: 'q2',
    question: 'When faced with a high-stakes, ambiguous problem with no clear right answer, how do you react?',
    options: [
      { text: 'I build a framework, test hypotheses using data, and optimize for the most logical outcome.', weight: { 'Analytical/Tech': 4 } },
      { text: 'I analyze the risks and rewards, looking at historical precedents to maximize value.', weight: { 'Business/Finance': 4, 'Analytical/Tech': 1 } },
      { text: 'I explore multiple perspectives, write down my thoughts, and look for unconventional narratives.', weight: { 'Creative/Humanities': 4, 'Healthcare/Bio-Sciences': 1 } },
      { text: 'I observe the human impact, consult experts, and prioritize the well-being of those affected.', weight: { 'Healthcare/Bio-Sciences': 4, 'Creative/Humanities': 2 } }
    ]
  },
  {
    id: 'q3',
    question: 'Which of the following achievements would make you feel most fulfilled?',
    options: [
      { text: 'Inventing a piece of technology that automates a complex, tedious process for millions.', weight: { 'Analytical/Tech': 4 } },
      { text: 'Scaling a startup into a global enterprise and negotiating a multi-million dollar merger.', weight: { 'Business/Finance': 4 } },
      { text: 'Publishing a critically acclaimed novel or designing an award-winning brand identity.', weight: { 'Creative/Humanities': 4 } },
      { text: 'Discovering a cure for a rare disease or directly saving someone\'s life in a crisis.', weight: { 'Healthcare/Bio-Sciences': 4 } }
    ]
  },
  {
    id: 'q4',
    question: 'How do you view failure?',
    options: [
      { text: 'As a bug in the system. I debug, refactor my approach, and run the test again.', weight: { 'Analytical/Tech': 3, 'Business/Finance': 1 } },
      { text: 'As a sunk cost. I cut my losses, pivot my strategy, and look for the next profitable opportunity.', weight: { 'Business/Finance': 4 } },
      { text: 'As a part of the human experience. It fuels my creativity and deepens my understanding of the world.', weight: { 'Creative/Humanities': 4 } },
      { text: 'As a diagnostic learning moment. I analyze the symptoms of the failure to prevent future harm.', weight: { 'Healthcare/Bio-Sciences': 3, 'Analytical/Tech': 1 } }
    ]
  },
  {
    id: 'q5',
    question: 'If you had to read a 500-page book this week, which topic would keep you awake at night?',
    options: [
      { text: 'The mathematics of quantum computing and the future of artificial intelligence.', weight: { 'Analytical/Tech': 4 } },
      { text: 'The behavioral economics behind the 2008 financial crash and market psychology.', weight: { 'Business/Finance': 4 } },
      { text: 'A philosophical analysis of human rights and the evolution of modern art.', weight: { 'Creative/Humanities': 4 } },
      { text: 'The intricate mapping of the human genome and evolutionary biology.', weight: { 'Healthcare/Bio-Sciences': 4 } }
    ]
  }
];
