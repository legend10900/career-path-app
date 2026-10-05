import { Stream } from '../types';

export const streams: Stream[] = [
  {
    id: 'sci-pcm',
    name: 'Science PCM',
    description: 'Focuses on Physics, Chemistry, and Mathematics. Ideal for students aiming for engineering, architecture, computer science, and aviation.',
    coreSubjects: ['Physics', 'Chemistry', 'Mathematics'],
    electives: ['Computer Science', 'Physical Education', 'Economics', 'Fine Arts'],
    pros: ['Keeps maximum career options open', 'Builds strong analytical and problem-solving skills', 'Gateway to top tech fields'],
    challenges: ['Highly competitive', 'Requires consistent and rigorous study habits', 'Math can be abstract and demanding'],
    competitiveExams: ['JEE Main & Advanced', 'BITSAT', 'State Level Engineering Exams (MHT CET, KCET etc.)', 'NDA'],
    icon: 'Rocket'
  },
  {
    id: 'sci-pcb',
    name: 'Science PCB',
    description: 'Centers around Physics, Chemistry, and Biology. The primary choice for students aspiring to become doctors, dentists, or pursue research in life sciences.',
    coreSubjects: ['Physics', 'Chemistry', 'Biology'],
    electives: ['Psychology', 'Biotechnology', 'Physical Education', 'Home Science'],
    pros: ['Direct path to medical professions', 'Opportunities in emerging fields like biotech and genetics', 'Noble and respected career paths'],
    challenges: ['Extensive memorization required', 'NEET is incredibly competitive', 'Long duration for medical studies'],
    competitiveExams: ['NEET', 'AIIMS', 'ICAR AIEEA'],
    icon: 'Stethoscope'
  },
  {
    id: 'comm-math',
    name: 'Commerce with Math',
    description: 'Combines business studies with mathematics. Excellent for those aiming for finance, economics, actuarial science, or management at top universities.',
    coreSubjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
    electives: ['Informatics Practices', 'Physical Education', 'Entrepreneurship'],
    pros: ['Opens doors to premium courses like B.Com (Hons) and Economics (Hons)', 'Strong foundation for CA/CFA/Actuary', 'High earning potential in finance'],
    challenges: ['Balancing theoretical commerce subjects with practical math', 'Complex accounting principles'],
    competitiveExams: ['CUET', 'CA Foundation', 'CLAT', 'IPMAT'],
    icon: 'TrendingUp'
  },
  {
    id: 'comm-nomath',
    name: 'Commerce without Math',
    description: 'Focuses purely on business, accounting, and economics. Suitable for students who want to pursue business management, law, or traditional commerce without advanced math.',
    coreSubjects: ['Accountancy', 'Business Studies', 'Economics'],
    electives: ['Informatics Practices', 'Physical Education', 'Entrepreneurship', 'Legal Studies'],
    pros: ['Less stress without advanced mathematics', 'Good for standard management degrees (BBA)', 'Allows focus on core business concepts'],
    challenges: ['Restricts entry to some premium economics/commerce degree programs', 'Limits quantitative finance options'],
    competitiveExams: ['CUET', 'CA Foundation', 'CLAT'],
    icon: 'Briefcase'
  },
  {
    id: 'humanities',
    name: 'Humanities/Arts',
    description: 'A diverse stream covering human society, culture, and behavior. Ideal for careers in civil services, law, journalism, design, and psychology.',
    coreSubjects: ['History', 'Political Science', 'Geography', 'Sociology', 'Psychology'],
    electives: ['Economics', 'Fine Arts', 'Physical Education', 'Legal Studies', 'Mass Media'],
    pros: ['Highly diverse career options', 'Develops strong critical thinking and communication skills', 'Excellent foundation for UPSC/Civil Services'],
    challenges: ['Can be perceived as having less straightforward paths than STEM', 'Heavy reading and writing involved'],
    competitiveExams: ['CUET', 'CLAT', 'NID DAT', 'UPSC (post-graduation)'],
    icon: 'Palette'
  }
];
