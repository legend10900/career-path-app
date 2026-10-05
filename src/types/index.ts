export type StreamCategory = 'Science PCM' | 'Science PCB' | 'Commerce with Math' | 'Commerce without Math' | 'Humanities/Arts' | 'Vocational';

export interface Stream {
  id: string;
  name: StreamCategory;
  description: string;
  coreSubjects: string[];
  electives: string[];
  pros: string[];
  challenges: string[];
  competitiveExams: string[];
  icon: string; // name of lucide icon
}

export interface Career {
  id: string;
  title: string;
  description: string;
  industry: string;
  isTech: boolean;
  recommendedStreams: StreamCategory[];
  entranceExams: string[];
  coreSkills: string[];
  firstJobRoles: string[];
  salaryRange: string;
  growthTrend: 'High' | 'Medium' | 'Steady';
}

export type Archetype = 'Analytical/Tech' | 'Business/Finance' | 'Creative/Humanities' | 'Healthcare/Bio-Sciences';

export interface AnswerOption {
  text: string;
  weight: Partial<Record<Archetype, number>>;
}

export interface Question {
  id: string;
  question: string;
  options: AnswerOption[];
}

export interface QuizResult {
  archetype: Archetype;
  recommendedStreams: StreamCategory[];
  recommendedSubjects: string[];
  careerMatches: Career[];
}
