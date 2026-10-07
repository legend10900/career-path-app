import { Question } from '../types';

export const quizQuestions: Question[] = [
  {
    id: 'q1',
    question: 'When you are working on a group project, what role do you usually take?',
    options: [
      { text: 'The Coder/Techie: I handle the technology, research the data, and fix the technical issues.', weight: { 'Analytical/Tech': 4, 'Business/Finance': 1 } },
      { text: 'The Manager: I organize the team, manage the budget, and make sure we hit our goals.', weight: { 'Business/Finance': 4, 'Analytical/Tech': 1 } },
      { text: 'The Creator: I design the presentation, write the content, and make it look amazing.', weight: { 'Creative/Humanities': 4 } },
      { text: 'The Helper: I focus on the human impact, help teammates who are stuck, and care about the social message.', weight: { 'Healthcare/Bio-Sciences': 4, 'Creative/Humanities': 1 } }
    ]
  },
  {
    id: 'q2',
    question: 'What sounds like the most fun way to spend a free afternoon?',
    options: [
      { text: 'Building a computer, coding a game, or learning about new gadgets.', weight: { 'Analytical/Tech': 4 } },
      { text: 'Trading stocks on a simulator, reading about successful businesses, or planning a side hustle.', weight: { 'Business/Finance': 4 } },
      { text: 'Reading a great book, painting, writing a story, or debating politics with friends.', weight: { 'Creative/Humanities': 4 } },
      { text: 'Watching a medical documentary, volunteering, or learning about how the human body works.', weight: { 'Healthcare/Bio-Sciences': 4 } }
    ]
  },
  {
    id: 'q3',
    question: 'If you had to pick one superpower, which would it be?',
    options: [
      { text: 'The ability to instantly calculate complex math and hack any computer system.', weight: { 'Analytical/Tech': 4 } },
      { text: 'The ability to predict the future to make perfect investments and business decisions.', weight: { 'Business/Finance': 4 } },
      { text: 'The ability to speak every language in the world and read people\'s emotions.', weight: { 'Creative/Humanities': 4 } },
      { text: 'The ability to instantly heal anyone\'s injuries or illnesses.', weight: { 'Healthcare/Bio-Sciences': 4 } }
    ]
  },
  {
    id: 'q4',
    question: 'Which of these subjects do you genuinely not mind studying for?',
    options: [
      { text: 'Math, Physics, or Computer Science.', weight: { 'Analytical/Tech': 4 } },
      { text: 'Economics, Accounts, or Business Studies.', weight: { 'Business/Finance': 4 } },
      { text: 'History, English Literature, Political Science, or Art.', weight: { 'Creative/Humanities': 4 } },
      { text: 'Biology, Chemistry, or Psychology.', weight: { 'Healthcare/Bio-Sciences': 4, 'Analytical/Tech': 1 } }
    ]
  },
  {
    id: 'q5',
    question: 'What is your ultimate career goal?',
    options: [
      { text: 'To invent a new technology or app that changes how the world works.', weight: { 'Analytical/Tech': 4 } },
      { text: 'To become a CEO or start my own highly successful company.', weight: { 'Business/Finance': 4 } },
      { text: 'To influence culture through writing, design, law, or public policy.', weight: { 'Creative/Humanities': 4 } },
      { text: 'To save lives, cure diseases, or help people improve their mental health.', weight: { 'Healthcare/Bio-Sciences': 4 } }
    ]
  }
];
