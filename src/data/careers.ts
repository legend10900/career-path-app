import { Career } from '../types';

export const careers: Career[] = [
  {
    id: 'c-software-engineer',
    title: 'Software Engineer',
    description: 'Architect, develop, and maintain complex software ecosystems that solve real-world problems at scale.',
    industry: 'Technology',
    isTech: true,
    recommendedStreams: ['Science PCM'],
    entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT'],
    coreSkills: ['Systems Design', 'Algorithms', 'Cloud Architecture', 'Agile Methodologies'],
    firstJobRoles: ['Junior SDE', 'Frontend Engineer', 'Backend Engineer'],
    salaryRange: '₹8L - ₹25L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Collaborating in daily stand-ups, writing and reviewing code, debugging production issues, and designing new system features.',
    internationalPath: {
      description: 'Highly globalized field. MS in Computer Science abroad is a very common pathway for senior engineering roles.',
      exams: ['GRE', 'TOEFL', 'IELTS'],
      topDestinations: ['USA', 'Canada', 'Germany', 'UK']
    }
  },
  {
    id: 'c-data-scientist',
    title: 'Data Scientist',
    description: 'Transform raw data into strategic insights using advanced statistical models and machine learning algorithms.',
    industry: 'Technology / Business',
    isTech: true,
    recommendedStreams: ['Science PCM', 'Commerce with Math'],
    entranceExams: ['JEE Main', 'CUET (for B.Sc Stats/Math)'],
    coreSkills: ['Machine Learning', 'Deep Learning', 'Statistical Inference', 'Data Storytelling'],
    firstJobRoles: ['Data Analyst', 'Junior Data Scientist', 'Machine Learning Engineer'],
    salaryRange: '₹10L - ₹30L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Cleaning massive datasets, training predictive models, and presenting data visualizations to stakeholders to guide business strategy.',
    internationalPath: {
      description: 'Massive demand globally, particularly for AI/ML specialists. Strong math background required.',
      exams: ['GRE', 'TOEFL', 'IELTS'],
      topDestinations: ['USA', 'UK', 'Australia']
    }
  },
  {
    id: 'c-chartered-accountant',
    title: 'Chartered Accountant (CA)',
    description: 'Ensure financial integrity by managing corporate finances, executing audits, and formulating tax strategies.',
    industry: 'Finance',
    isTech: false,
    recommendedStreams: ['Commerce with Math', 'Commerce without Math'],
    entranceExams: ['CA Foundation'],
    coreSkills: ['Corporate Taxation', 'Forensic Accounting', 'Financial Compliance', 'Strategic Advisory'],
    firstJobRoles: ['Article Assistant', 'Audit Executive', 'Financial Analyst'],
    salaryRange: '₹8L - ₹20L+ / year (India)',
    growthTrend: 'Steady',
    dayInTheLife: 'Reviewing financial statements, consulting clients on tax laws, forecasting budgets, and ensuring regulatory compliance.',
    internationalPath: {
      description: 'Indian CA is well-recognized, but passing CPA (USA) or ACCA (UK) unlocks global mobility.',
      exams: ['CPA', 'ACCA', 'IELTS'],
      topDestinations: ['UK', 'UAE', 'Singapore', 'USA']
    }
  },
  {
    id: 'c-doctor-mbbs',
    title: 'Medical Doctor (MBBS)',
    description: 'Diagnose illnesses, perform critical medical procedures, and lead healthcare initiatives to improve patient outcomes.',
    industry: 'Healthcare',
    isTech: false,
    recommendedStreams: ['Science PCB'],
    entranceExams: ['NEET UG'],
    coreSkills: ['Clinical Diagnostics', 'Surgical Precision', 'Patient Empathy', 'Crisis Management'],
    firstJobRoles: ['Junior Resident', 'Medical Officer'],
    salaryRange: '₹8L - ₹15L+ / year (India, starting)',
    growthTrend: 'Steady',
    dayInTheLife: 'Rounding wards, examining patients, analyzing lab results, performing procedures, and making life-saving decisions.',
    internationalPath: {
      description: 'Practicing abroad requires clearing country-specific medical licensing exams post-MBBS.',
      exams: ['USMLE (USA)', 'PLAB (UK)', 'AMC (Australia)'],
      topDestinations: ['USA', 'UK', 'Australia', 'New Zealand']
    }
  },
  {
    id: 'c-lawyer',
    title: 'Corporate Lawyer',
    description: 'Navigate complex legal landscapes, orchestrate mergers & acquisitions, and protect intellectual property for corporations.',
    industry: 'Legal',
    isTech: false,
    recommendedStreams: ['Humanities/Arts', 'Commerce without Math', 'Commerce with Math'],
    entranceExams: ['CLAT', 'AILET', 'LSAT India'],
    coreSkills: ['Contract Negotiation', 'Legal Research', 'Corporate Governance', 'Litigation Strategy'],
    firstJobRoles: ['Legal Associate', 'Junior Counsel', 'In-house Counsel'],
    salaryRange: '₹6L - ₹25L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Drafting multi-million dollar contracts, advising executives on legal risks, and researching legal precedents.',
    internationalPath: {
      description: 'Law is jurisdiction-specific. An LL.M. abroad is common, but practicing requires passing local bar exams (e.g., NY Bar).',
      exams: ['LSAT (for JD)', 'NY Bar Exam', 'Solicitors Qualifying Examination (UK)'],
      topDestinations: ['USA', 'UK', 'Singapore']
    }
  },
  {
    id: 'c-ux-designer',
    title: 'UX/UI Designer',
    description: 'Craft intuitive, accessible, and psychologically engaging digital experiences that merge human behavior with technology.',
    industry: 'Design / Technology',
    isTech: true,
    recommendedStreams: ['Humanities/Arts', 'Science PCM', 'Commerce with Math'],
    entranceExams: ['NID DAT', 'UCEED', 'NIFT'],
    coreSkills: ['Human-Computer Interaction (HCI)', 'Wireframing', 'User Research', 'Design Systems'],
    firstJobRoles: ['Junior UX Designer', 'UI Designer', 'Product Designer'],
    salaryRange: '₹6L - ₹18L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Conducting user interviews, mapping user journeys, creating high-fidelity prototypes in Figma, and collaborating with developers.',
    internationalPath: {
      description: 'High global demand. Portfolio quality matters more than degrees, though a Masters in HCI is highly valued.',
      exams: ['TOEFL', 'IELTS', 'Portfolio Review'],
      topDestinations: ['USA', 'UK', 'Netherlands', 'Canada']
    }
  },
  {
    id: 'c-psychologist',
    title: 'Clinical Psychologist',
    description: 'Provide evidence-based therapy and psychological interventions to treat mental, emotional, and behavioral disorders.',
    industry: 'Healthcare / Counseling',
    isTech: false,
    recommendedStreams: ['Humanities/Arts', 'Science PCB'],
    entranceExams: ['CUET (for BA/BSc Psychology)'],
    coreSkills: ['Cognitive Behavioral Therapy (CBT)', 'Psychometric Testing', 'Active Listening', 'Crisis Intervention'],
    firstJobRoles: ['Counselor', 'Assistant Psychologist', 'Clinical Trainee'],
    salaryRange: '₹5L - ₹12L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Conducting therapy sessions, writing clinical notes, administering psychological assessments, and developing treatment plans.',
    internationalPath: {
      description: 'Requires a doctorate (Psy.D or Ph.D) and state licensure to practice independently in most Western countries.',
      exams: ['GRE (Psychology subject test)', 'TOEFL'],
      topDestinations: ['USA', 'UK', 'Australia']
    }
  },
  {
    id: 'c-investment-banker',
    title: 'Investment Banker',
    description: 'Orchestrate major financial transactions, IPOs, and corporate restructuring for Fortune 500 companies.',
    industry: 'Finance',
    isTech: false,
    recommendedStreams: ['Commerce with Math', 'Science PCM'],
    entranceExams: ['CAT', 'GMAT', 'IPMAT'],
    coreSkills: ['Advanced Financial Modeling', 'M&A Valuation', 'Risk Assessment', 'Stakeholder Negotiation'],
    firstJobRoles: ['Financial Analyst', 'Investment Banking Associate'],
    salaryRange: '₹15L - ₹40L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Building complex financial models in Excel, preparing pitch books for client meetings, and working long, intense hours.',
    internationalPath: {
      description: 'Highly international. A top-tier MBA (e.g., Ivy League, LBS) is the standard route to global financial hubs.',
      exams: ['GMAT', 'GRE'],
      topDestinations: ['USA (Wall Street)', 'UK (London)', 'Hong Kong', 'Singapore']
    }
  }
];
