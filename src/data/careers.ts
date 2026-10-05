import { Career } from '../types';

export const careers: Career[] = [
  {
    id: 'c-software-engineer',
    title: 'Software Engineer',
    description: 'Design, develop, and maintain software applications and systems.',
    industry: 'Technology',
    isTech: true,
    recommendedStreams: ['Science PCM'],
    entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT'],
    coreSkills: ['Programming (Python, Java, C++)', 'Problem Solving', 'Data Structures', 'Logical Thinking'],
    firstJobRoles: ['Junior Developer', 'Frontend Engineer', 'Backend Engineer'],
    salaryRange: '₹6L - ₹20L+ / year (India)',
    growthTrend: 'High'
  },
  {
    id: 'c-data-scientist',
    title: 'Data Scientist',
    description: 'Analyze complex data to help companies make better business decisions.',
    industry: 'Technology / Business',
    isTech: true,
    recommendedStreams: ['Science PCM', 'Commerce with Math'],
    entranceExams: ['JEE Main', 'CUET (for B.Sc Stats/Math)'],
    coreSkills: ['Statistics', 'Machine Learning', 'Python/R', 'Data Visualization'],
    firstJobRoles: ['Data Analyst', 'Junior Data Scientist', 'Business Analyst'],
    salaryRange: '₹8L - ₹25L+ / year (India)',
    growthTrend: 'High'
  },
  {
    id: 'c-chartered-accountant',
    title: 'Chartered Accountant (CA)',
    description: 'Manage finances, provide financial advice, and audit accounts for businesses and individuals.',
    industry: 'Finance',
    isTech: false,
    recommendedStreams: ['Commerce with Math', 'Commerce without Math'],
    entranceExams: ['CA Foundation'],
    coreSkills: ['Accounting', 'Taxation', 'Financial Analysis', 'Attention to Detail'],
    firstJobRoles: ['Article Assistant', 'Audit Executive', 'Financial Analyst'],
    salaryRange: '₹7L - ₹15L+ / year (India)',
    growthTrend: 'Steady'
  },
  {
    id: 'c-doctor-mbbs',
    title: 'Medical Doctor (MBBS)',
    description: 'Diagnose and treat illnesses, prescribe medications, and improve patient health.',
    industry: 'Healthcare',
    isTech: false,
    recommendedStreams: ['Science PCB'],
    entranceExams: ['NEET UG'],
    coreSkills: ['Empathy', 'Diagnostic Skills', 'Patience', 'Resilience'],
    firstJobRoles: ['Junior Resident', 'Medical Officer'],
    salaryRange: '₹6L - ₹12L+ / year (India, starting)',
    growthTrend: 'Steady'
  },
  {
    id: 'c-lawyer',
    title: 'Corporate Lawyer',
    description: 'Advise businesses on their legal rights, responsibilities, and obligations.',
    industry: 'Legal',
    isTech: false,
    recommendedStreams: ['Humanities/Arts', 'Commerce without Math', 'Commerce with Math'],
    entranceExams: ['CLAT', 'AILET', 'LSAT India'],
    coreSkills: ['Negotiation', 'Analytical Thinking', 'Public Speaking', 'Research'],
    firstJobRoles: ['Legal Associate', 'Junior Counsel'],
    salaryRange: '₹5L - ₹18L+ / year (India)',
    growthTrend: 'High'
  },
  {
    id: 'c-ux-designer',
    title: 'UX/UI Designer',
    description: 'Design user-friendly interfaces and experiences for digital products.',
    industry: 'Design / Technology',
    isTech: true,
    recommendedStreams: ['Humanities/Arts', 'Science PCM', 'Commerce with Math'],
    entranceExams: ['NID DAT', 'UCEED', 'NIFT'],
    coreSkills: ['Wireframing', 'Prototyping', 'User Research', 'Visual Design (Figma)'],
    firstJobRoles: ['Junior UX Designer', 'UI Designer', 'Product Designer'],
    salaryRange: '₹5L - ₹15L+ / year (India)',
    growthTrend: 'High'
  },
  {
    id: 'c-psychologist',
    title: 'Clinical Psychologist',
    description: 'Assess, diagnose, and treat mental, emotional, and behavioral disorders.',
    industry: 'Healthcare / Counseling',
    isTech: false,
    recommendedStreams: ['Humanities/Arts', 'Science PCB'],
    entranceExams: ['CUET (for BA/BSc Psychology)'],
    coreSkills: ['Active Listening', 'Empathy', 'Critical Thinking', 'Communication'],
    firstJobRoles: ['Counselor', 'Assistant Psychologist', 'HR Executive'],
    salaryRange: '₹4L - ₹10L+ / year (India)',
    growthTrend: 'High'
  },
  {
    id: 'c-investment-banker',
    title: 'Investment Banker',
    description: 'Help organizations raise capital and provide financial consultancy services.',
    industry: 'Finance',
    isTech: false,
    recommendedStreams: ['Commerce with Math', 'Science PCM'],
    entranceExams: ['CAT', 'GMAT', 'IPMAT'],
    coreSkills: ['Financial Modeling', 'Valuation', 'Networking', 'High Stress Tolerance'],
    firstJobRoles: ['Financial Analyst', 'Associate'],
    salaryRange: '₹10L - ₹30L+ / year (India)',
    growthTrend: 'High'
  }
];
