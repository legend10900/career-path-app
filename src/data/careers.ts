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
    targetScores: ['JEE Main: 98+ Percentile', 'JEE Advanced: Top 10,000 Rank', 'BITSAT: 320+'],
    certificationsToGet: ['AWS Certified Developer', 'Meta Frontend Developer (Coursera)', 'CKAD (Kubernetes)'],
    coreSkills: ['Systems Design', 'Algorithms', 'Cloud Architecture', 'Agile Methodologies'],
    firstJobRoles: ['Junior SDE', 'Frontend Engineer', 'Backend Engineer'],
    salaryRange: '₹8L - ₹25L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Collaborating in daily stand-ups, writing and reviewing code, debugging production issues, and designing new system features.',
    internationalPath: {
      description: 'Highly globalized field. MS in Computer Science abroad is a very common pathway for senior engineering roles.',
      exams: ['GRE (320+)', 'TOEFL (100+)', 'IELTS (7.5+)'],
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
    targetScores: ['CUET: 99+ Percentile in Math/Stats', 'JEE Main: 95+ Percentile'],
    certificationsToGet: ['Google Data Analytics Professional', 'DeepLearning.AI Specialization'],
    coreSkills: ['Machine Learning', 'Deep Learning', 'Statistical Inference', 'Data Storytelling'],
    firstJobRoles: ['Data Analyst', 'Junior Data Scientist', 'Machine Learning Engineer'],
    salaryRange: '₹10L - ₹30L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Cleaning massive datasets, training predictive models, and presenting data visualizations to stakeholders to guide business strategy.',
    internationalPath: {
      description: 'Massive demand globally, particularly for AI/ML specialists. Strong math background required.',
      exams: ['GRE (325+ with max Quant)', 'TOEFL (105+)', 'IELTS (7.5+)'],
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
    entranceExams: ['CA Foundation', 'CA Intermediate', 'CA Final'],
    targetScores: ['Foundation: 60%+ aggregate', 'Inter: 55%+ aggregate', 'Final: Clear in 1st/2nd attempt for top firms'],
    certificationsToGet: ['CFA Level 1 (Optional for IB)', 'Financial Modeling (Corporate Finance Institute)'],
    coreSkills: ['Corporate Taxation', 'Forensic Accounting', 'Financial Compliance', 'Strategic Advisory'],
    firstJobRoles: ['Article Assistant', 'Audit Executive', 'Financial Analyst'],
    salaryRange: '₹8L - ₹20L+ / year (India)',
    growthTrend: 'Steady',
    dayInTheLife: 'Reviewing financial statements, consulting clients on tax laws, forecasting budgets, and ensuring regulatory compliance.',
    internationalPath: {
      description: 'Indian CA is well-recognized, but passing CPA (USA) or ACCA (UK) unlocks global mobility.',
      exams: ['CPA (USA)', 'ACCA (UK)', 'IELTS (7.0+)'],
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
    entranceExams: ['NEET UG', 'NEET PG'],
    targetScores: ['NEET UG: 650+ for Govt Colleges', 'AIIMS Cutoff: 680+'],
    certificationsToGet: ['BLS (Basic Life Support)', 'ACLS (Advanced Cardiovascular Life Support)'],
    coreSkills: ['Clinical Diagnostics', 'Surgical Precision', 'Patient Empathy', 'Crisis Management'],
    firstJobRoles: ['Junior Resident', 'Medical Officer'],
    salaryRange: '₹8L - ₹15L+ / year (India, starting)',
    growthTrend: 'Steady',
    dayInTheLife: 'Rounding wards, examining patients, analyzing lab results, performing procedures, and making life-saving decisions.',
    internationalPath: {
      description: 'Practicing abroad requires clearing country-specific medical licensing exams post-MBBS.',
      exams: ['USMLE Step 1/2 (USA)', 'PLAB 1/2 (UK)', 'AMC (Australia)'],
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
    targetScores: ['CLAT: Top 1000 Rank (for top 5 NLUs)', 'AILET: Top 100 Rank (for NLU Delhi)'],
    certificationsToGet: ['CS (Company Secretary - Optional)', 'Arbitration & Mediation Certification'],
    coreSkills: ['Contract Negotiation', 'Legal Research', 'Corporate Governance', 'Litigation Strategy'],
    firstJobRoles: ['Legal Associate', 'Junior Counsel', 'In-house Counsel'],
    salaryRange: '₹6L - ₹25L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Drafting multi-million dollar contracts, advising executives on legal risks, and researching legal precedents.',
    internationalPath: {
      description: 'Law is jurisdiction-specific. An LL.M. abroad is common, but practicing requires passing local bar exams.',
      exams: ['LSAT (165+ for JD)', 'NY Bar Exam', 'SQE (UK)'],
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
    targetScores: ['NID DAT: Top 100 Rank', 'UCEED: Top 150 Rank'],
    certificationsToGet: ['Google UX Design Certificate', 'Nielsen Norman Group (NN/g) UX Certification'],
    coreSkills: ['Human-Computer Interaction (HCI)', 'Wireframing', 'User Research', 'Design Systems'],
    firstJobRoles: ['Junior UX Designer', 'UI Designer', 'Product Designer'],
    salaryRange: '₹6L - ₹18L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Conducting user interviews, mapping user journeys, creating high-fidelity prototypes in Figma, and collaborating with developers.',
    internationalPath: {
      description: 'High global demand. Portfolio quality matters more than degrees, though a Masters in HCI is highly valued.',
      exams: ['TOEFL (100+)', 'IELTS (7.5+)', 'Portfolio Review'],
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
    targetScores: ['CUET: 98+ Percentile in Core Subjects'],
    certificationsToGet: ['RCI Licensure (India)', 'CBT Practitioner Certification'],
    coreSkills: ['Cognitive Behavioral Therapy (CBT)', 'Psychometric Testing', 'Active Listening', 'Crisis Intervention'],
    firstJobRoles: ['Counselor', 'Assistant Psychologist', 'Clinical Trainee'],
    salaryRange: '₹5L - ₹12L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Conducting therapy sessions, writing clinical notes, administering psychological assessments, and developing treatment plans.',
    internationalPath: {
      description: 'Requires a doctorate (Psy.D or Ph.D) and state licensure to practice independently in most Western countries.',
      exams: ['GRE (Psychology Subject Test)', 'TOEFL (105+)'],
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
    targetScores: ['CAT: 99.5+ Percentile (IIM A/B/C)', 'GMAT: 730+'],
    certificationsToGet: ['CFA Level 1/2', 'Financial Modeling (WSP / CFI)'],
    coreSkills: ['Advanced Financial Modeling', 'M&A Valuation', 'Risk Assessment', 'Stakeholder Negotiation'],
    firstJobRoles: ['Financial Analyst', 'Investment Banking Associate'],
    salaryRange: '₹15L - ₹40L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Building complex financial models in Excel, preparing pitch books for client meetings, and working long, intense hours.',
    internationalPath: {
      description: 'Highly international. A top-tier MBA (e.g., Ivy League, LBS) is the standard route to global financial hubs.',
      exams: ['GMAT (730+)', 'GRE (330+)'],
      topDestinations: ['USA (Wall Street)', 'UK (London)', 'Hong Kong', 'Singapore']
    }
  },
  {
    id: 'c-digital-marketer',
    title: 'Digital Marketing Strategist',
    description: 'Design and execute online marketing campaigns, analyze consumer data, and optimize brand presence across digital platforms.',
    industry: 'Marketing',
    isTech: false,
    recommendedStreams: ['Commerce without Math', 'Humanities/Arts', 'Commerce with Math'],
    entranceExams: ['BBA/BMS Entrance Exams (CUET, IPMAT)'],
    targetScores: ['CUET: 95+ Percentile'],
    certificationsToGet: ['Google Ads Certification', 'HubSpot Content Marketing', 'Meta Blueprint'],
    coreSkills: ['SEO/SEM', 'Data Analytics', 'Copywriting', 'Social Media Strategy'],
    firstJobRoles: ['Social Media Manager', 'SEO Specialist', 'Digital Marketing Executive'],
    salaryRange: '₹4L - ₹15L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Analyzing ad campaign performance, planning content calendars, and running A/B tests to optimize conversion rates.',
    internationalPath: {
      description: 'Global demand is massive for performance marketers. A Master’s in Digital Marketing abroad is popular.',
      exams: ['IELTS (7.0+)', 'GMAT/GRE (optional)'],
      topDestinations: ['UK', 'Canada', 'Australia']
    }
  },
  {
    id: 'c-commercial-pilot',
    title: 'Commercial Pilot',
    description: 'Fly commercial aircraft, ensure passenger safety, and travel the globe in one of the most exciting aviation careers.',
    industry: 'Aviation',
    isTech: false,
    recommendedStreams: ['Science PCM'],
    entranceExams: ['DGCA Medical & Written Exams', 'Cadet Pilot Programs (IndiGo, Air India)'],
    targetScores: ['Class 1 Medical Fitness', 'Clear DGCA papers (Navigation, Meteorology, etc.)'],
    certificationsToGet: ['Commercial Pilot License (CPL)', 'Instrument Rating (IR)', 'Multi-Engine Rating (MER)'],
    coreSkills: ['Spatial Awareness', 'Quick Decision Making', 'Communication', 'Aircraft Systems Knowledge'],
    firstJobRoles: ['First Officer', 'Junior Co-Pilot'],
    salaryRange: '₹15L - ₹30L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Performing pre-flight checks, coordinating with Air Traffic Control, navigating weather systems, and flying to various destinations.',
    internationalPath: {
      description: 'Many students get their CPL from flight schools abroad (USA, South Africa, New Zealand) and convert it in India.',
      exams: ['FAA Exams (if in USA)', 'EASA (if in Europe)'],
      topDestinations: ['USA', 'New Zealand', 'South Africa', 'Canada']
    }
  },
  {
    id: 'c-architect',
    title: 'Architect',
    description: 'Design buildings and structures that are functional, aesthetically pleasing, and structurally sound.',
    industry: 'Architecture & Design',
    isTech: false,
    recommendedStreams: ['Science PCM'],
    entranceExams: ['NATA', 'JEE Main Paper 2'],
    targetScores: ['NATA: 130+/200', 'JEE Paper 2: 98+ Percentile'],
    certificationsToGet: ['AutoCAD/Revit Certifications', 'LEED Green Associate'],
    coreSkills: ['Spatial Design', '3D Modeling', 'Structural Understanding', 'Client Communication'],
    firstJobRoles: ['Junior Architect', 'Design Assistant'],
    salaryRange: '₹4L - ₹12L+ / year (India)',
    growthTrend: 'Steady',
    dayInTheLife: 'Drafting floor plans in CAD software, visiting construction sites, and meeting clients to discuss design changes.',
    internationalPath: {
      description: 'M.Arch abroad is highly respected. Licensure is required to practice independently in countries like USA/UK.',
      exams: ['GRE', 'Portfolio Review'],
      topDestinations: ['Italy', 'UK', 'USA', 'Singapore']
    }
  },
  {
    id: 'c-entrepreneur',
    title: 'Startup Founder / Entrepreneur',
    description: 'Build innovative companies from scratch, secure venture capital funding, and solve real-world problems at scale.',
    industry: 'Business & Tech',
    isTech: false,
    recommendedStreams: ['Commerce with Math', 'Science PCM', 'Humanities/Arts'],
    entranceExams: ['None strictly required (Top MBAs/B-Schools help)'],
    targetScores: ['N/A'],
    certificationsToGet: ['Y Combinator Startup School (Free)', 'Product Management Certifications'],
    coreSkills: ['Leadership', 'Sales & Pitching', 'Product Strategy', 'Financial Modeling'],
    firstJobRoles: ['Founder', 'Early-stage Startup Employee', 'Product Manager'],
    salaryRange: 'Highly Variable (Equity-based)',
    growthTrend: 'High',
    dayInTheLife: 'Pitching to investors, recruiting top talent, reviewing product metrics, and constantly adapting business models.',
    internationalPath: {
      description: 'Many founders expand their startups globally or move to major tech hubs for better VC access.',
      exams: ['Startup Visa requirements vary by country'],
      topDestinations: ['USA (Silicon Valley)', 'Singapore', 'UK', 'UAE']
    }
  },
  {
    id: 'c-quant-finance',
    title: 'Quant & Fintech Analyst',
    description: 'Merge advanced mathematics, computer science, and finance to build algorithmic trading models and financial tech solutions.',
    industry: 'Finance / Technology',
    isTech: true,
    recommendedStreams: ['Science PCM', 'Commerce with Math'],
    entranceExams: ['JEE Advanced', 'ISI Entrance', 'CAT'],
    targetScores: ['Top Math/Engineering College Ranks'],
    certificationsToGet: ['CQF (Certificate in Quantitative Finance)', 'Python for Finance'],
    coreSkills: ['Probability & Statistics', 'C++/Python', 'Algorithmic Trading', 'Financial Engineering'],
    firstJobRoles: ['Quantitative Analyst', 'Risk Analyst', 'Fintech Data Scientist'],
    salaryRange: '₹20L - ₹50L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Writing high-frequency trading algorithms, analyzing massive financial datasets, and optimizing risk models.',
    internationalPath: {
      description: 'Extremely lucrative globally. Master of Financial Engineering (MFE) is a common global pathway.',
      exams: ['GRE (Perfect Quant Score)', 'TOEFL'],
      topDestinations: ['USA (New York/Chicago)', 'UK (London)', 'Hong Kong']
    }
  },
  {
    id: 'c-cybersecurity',
    title: 'Cybersecurity Architect',
    description: 'Protect critical infrastructure, thwart cyber attacks, and design secure systems for corporations and governments.',
    industry: 'Technology',
    isTech: true,
    recommendedStreams: ['Science PCM'],
    entranceExams: ['JEE Main', 'BITSAT'],
    targetScores: ['JEE Main: 95+ Percentile'],
    certificationsToGet: ['CEH (Certified Ethical Hacker)', 'CISSP', 'CompTIA Security+'],
    coreSkills: ['Network Security', 'Penetration Testing', 'Cryptography', 'Incident Response'],
    firstJobRoles: ['Security Analyst', 'Ethical Hacker', 'SOC Analyst'],
    salaryRange: '₹8L - ₹25L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Monitoring network traffic for anomalies, running penetration tests to find vulnerabilities, and patching security flaws.',
    internationalPath: {
      description: 'High global demand due to rising cyber threats. Government clearance is sometimes required for top roles.',
      exams: ['GRE', 'IELTS'],
      topDestinations: ['USA', 'Israel', 'UK', 'Australia']
    }
  },
  {
    id: 'c-ai-data-engineer',
    title: 'AI & Data Engineer',
    description: 'Design the massive data pipelines and infrastructure required to train powerful Artificial Intelligence models.',
    industry: 'Technology',
    isTech: true,
    recommendedStreams: ['Science PCM'],
    entranceExams: ['JEE Main & Advanced'],
    targetScores: ['Top ranks in Engineering Exams'],
    certificationsToGet: ['AWS Certified Machine Learning', 'Google Cloud Professional Data Engineer'],
    coreSkills: ['Python/Scala', 'Distributed Computing (Spark/Hadoop)', 'Machine Learning APIs', 'Cloud Architecture'],
    firstJobRoles: ['Data Engineer', 'Machine Learning Engineer', 'Backend Developer'],
    salaryRange: '₹12L - ₹30L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Building scalable data architectures, deploying ML models into production, and optimizing cloud compute costs.',
    internationalPath: {
      description: 'The backbone of the global AI boom. Top tech hubs heavily recruit data engineers.',
      exams: ['GRE', 'TOEFL'],
      topDestinations: ['USA', 'Canada', 'Germany', 'UK']
    }
  },
  {
    id: 'c-vlsi-semiconductor',
    title: 'VLSI / Semiconductor Engineer',
    description: 'Design and test the microchips and processors that power smartphones, EVs, and AI supercomputers.',
    industry: 'Electronics / Technology',
    isTech: true,
    recommendedStreams: ['Science PCM'],
    entranceExams: ['JEE Main & Advanced', 'GATE (for Masters)'],
    targetScores: ['Top ranks for Electronics/Electrical Engineering'],
    certificationsToGet: ['Verilog/VHDL Training', 'Physical Design Certifications'],
    coreSkills: ['Digital Logic Design', 'Verilog/SystemVerilog', 'Computer Architecture', 'ASIC/FPGA Design'],
    firstJobRoles: ['RTL Design Engineer', 'Verification Engineer', 'Physical Design Engineer'],
    salaryRange: '₹10L - ₹28L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Writing hardware description code, running intensive simulations, and collaborating with foundries for chip fabrication.',
    internationalPath: {
      description: 'Massive global push for localized semiconductor manufacturing. MS in VLSI abroad is highly valued.',
      exams: ['GRE', 'TOEFL'],
      topDestinations: ['USA (Silicon Valley/Texas)', 'Taiwan', 'Germany', 'South Korea']
    }
  },
  {
    id: 'c-ev-clean-energy',
    title: 'EV & Clean Energy Engineer',
    description: 'Develop next-generation electric vehicles, battery technologies, and renewable energy grids to combat climate change.',
    industry: 'Engineering / Energy',
    isTech: true,
    recommendedStreams: ['Science PCM'],
    entranceExams: ['JEE Main & Advanced'],
    targetScores: ['Target Mechanical, Electrical, or Chemical Engineering'],
    certificationsToGet: ['Battery Management Systems (BMS) Certification', 'Solar Energy Design'],
    coreSkills: ['Power Electronics', 'Thermodynamics', 'Battery Chemistry', 'CAD/CAM Design'],
    firstJobRoles: ['EV Design Engineer', 'Battery Testing Engineer', 'Solar Project Engineer'],
    salaryRange: '₹6L - ₹18L+ / year (India)',
    growthTrend: 'High',
    dayInTheLife: 'Simulating battery thermal dynamics, designing efficient electric motors, and testing prototype vehicles.',
    internationalPath: {
      description: 'Europe and North America are leading the green transition. Excellent opportunities for researchers and engineers.',
      exams: ['GRE', 'IELTS'],
      topDestinations: ['Germany', 'Norway', 'USA', 'Netherlands']
    }
  }
];
