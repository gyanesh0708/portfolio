export const profile = {
  name: 'Gyanesh Saikhedkar',
  title: 'Lead Technology · Node.js, AWS & Kubernetes',
  tagline:
    'I build backend systems that stay up when money, claims, flights, and bookings are on the line — from Lambda and Kubernetes in insurance to microservices in banking and high-traffic booking platforms.',
  summary:
    'For eight years I have turned complex business rules into calm, observable APIs. I lead small teams through design, delivery, and production hardening on AWS — wiring fraud ML into insurance flows, money movement for corporate banking, offline entertainment for aviation and rail, and end-to-end booking and partner integrations for mobility products. I have extensive, daily hands-on experience with Claude, Cursor, and GitHub Copilot — using them to accelerate design, implementation, tests, and refactors while keeping ownership, security, and review standards high. I care about clear contracts (Swagger), sensible observability, and code that the next engineer can own with confidence.',
  location: 'Pune & Indore, India',
  email: 'gyanesh.gyanesh@gmail.com',
  phone: '+91 9599962318',
  github: 'https://github.com/gyanesh0708',
  photo: 'gyanesh-profile.jpg',
  photoAlt: 'Gyanesh Saikhedkar — software engineer',
  languages: ['English', 'Hindi', 'Marathi'],
} as const

export const certifications = [
  {
    name: 'AWS Certified Developer – Associate',
    short: 'Developer Associate',
  },
  {
    name: 'AWS Certified AI Practitioner',
    short: 'AI Practitioner',
  },
] as const

export const industries = [
  { label: 'Banking', detail: 'Corporate microservices & money movement' },
  { label: 'Insurance', detail: 'Fraud risk, shared services, serverless' },
  { label: 'Aviation', detail: 'In-flight & transit entertainment at scale' },
  { label: 'Booking platforms', detail: 'Search, fare, partner APIs & payments' },
] as const

export const skillGroups = [
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Swagger', 'Third-party integrations'],
  },
  {
    label: 'Architecture',
    items: ['Microservices', 'Monolithic', 'Service-Oriented', 'Serverless', 'Event-driven flows'],
  },
  {
    label: 'Data',
    items: ['MySQL', 'MS SQL', 'MongoDB', 'DynamoDB', 'Oracle DB'],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      'AWS (S3, EC2, SQS, VPC, API Gateway, Lambda, Cognito)',
      'Docker',
      'Kubernetes',
      'OpenShift',
      'Argo CD',
      'Splunk',
      'OpenSearch',
    ],
  },
  {
    label: 'Platforms',
    items: ['Linux', 'CentOS 7', 'Windows', 'Git', 'VS Code'],
  },
  {
    label: 'AI-assisted development',
    items: [
      'Claude',
      'Cursor',
      'GitHub Copilot',
      'Agentic workflows & multi-file edits',
      'AI-assisted debugging, docs & code review',
    ],
  },
] as const

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  teamSize?: number
  highlights: string[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    role: 'Lead Technology',
    company: 'Synechron Technologies Pvt. Ltd.',
    location: 'Pune, India',
    period: 'Sept 2023 – Present',
    teamSize: 4,
    highlights: [
      'Own Lambda and Kubernetes delivery for a global insurance program — services that score fraud risk using production ML models.',
      'Shape team practices around releases, API design, and AWS-native patterns so shared services stay reliable under real claim volume.',
    ],
    tech: ['Node.js', 'AWS Lambda', 'Kubernetes', 'Docker'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Impetus Technologies Pvt. Ltd.',
    location: 'Pune, India',
    period: 'Apr 2023 – Aug 2023',
    teamSize: 4,
    highlights: [
      'Built AWS Data Lab POCs that let clients see working architectures before they commit — from idea to demo fast.',
      'Partnered with stakeholders to translate business questions into concrete AWS building blocks.',
    ],
    tech: ['AWS'],
  },
  {
    role: 'Software Engineer',
    company: 'Mphasis Ltd.',
    location: 'Pune, India',
    period: 'Jan 2020 – Apr 2023',
    teamSize: 10,
    highlights: [
      'Shipped corporate banking microservices for First Republic Bank — including sensitive money-movement paths with strong audit expectations.',
      'Ran services on Docker, Kubernetes, and AWS with Oracle DB, in a team culture of code review and operational ownership.',
    ],
    tech: ['Node.js', 'Oracle DB', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    role: 'Software Developer',
    company: 'Amm India Pvt. Ltd.',
    location: 'Bangalore, India · Hamburg, Germany (onsite)',
    period: 'Aug 2019 – Jan 2020',
    highlights: [
      'Delivered an end-to-end product for Epro with onsite work in Hamburg — full stack from API to UI with tight customer feedback loops.',
    ],
    tech: ['Node.js', 'HTML', 'CSS', 'jQuery'],
  },
  {
    role: 'Senior Java Developer',
    company: 'Mobi Serv Pvt. Ltd.',
    location: 'Gurugram, India',
    period: 'June 2016 – Aug 2019',
    teamSize: 2,
    highlights: [
      'Led VuScreen and Bharatbus: offline entertainment on Raspberry Pi for SpiceJet, Indian Railways, Reliance Metro, and Mercedes-Benz coaches.',
      'Balanced edge hardware constraints with content delivery, sync, and social features passengers actually used.',
    ],
    tech: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Raspberry Pi'],
  },
  {
    role: 'Executive',
    company: 'Micromax Informatics Ltd.',
    location: 'Gurugram, India',
    period: 'Mar 2016 – May 2016',
    highlights: [
      'Built analytics backend and dashboards for Vuliv and Micromax device activation — turning activation events into actionable product insight.',
    ],
    tech: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Angular.js'],
  },
]

export type Project = {
  name: string
  client: string
  company: string
  description: string
  tech: string[]
  domain?: string
}

export const projects: Project[] = [
  {
    name: 'Shared Services (Insurance)',
    client: 'Asurion',
    company: 'Synechron',
    domain: 'Insurance',
    description:
      'Lead engineer on Lambda and Kubernetes services that feed fraud-risk decisions — bridging ML outputs with low-latency APIs claims systems trust.',
    tech: ['Node.js', 'AWS', 'Kubernetes'],
  },
  {
    name: 'Corporate Microservices',
    client: 'First Republic Bank',
    company: 'Mphasis',
    domain: 'Banking',
    description:
      'Microservices for corporate banking journeys — money movement and related services with the rigor enterprise finance demands.',
    tech: ['Node.js', 'Oracle DB', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    name: 'Mobility booking platform',
    client: 'Travel & cab marketplace',
    company: 'Product engineering',
    domain: 'Booking platforms',
    description:
      'Backend for search, fare logic, bookings, payments, and partner integrations — APIs built for partners, ops, and high booking volume.',
    tech: ['Node.js', 'REST', 'AWS', 'MongoDB', 'MySQL'],
  },
  {
    name: 'VuScreen',
    client: 'SpiceJet, Indian Railways, Reliance Metro',
    company: 'Mobi Serv',
    domain: 'Aviation & transit',
    description:
      'Offline entertainment on Raspberry Pi so passengers watch and browse without relying on flaky connectivity at 35,000 feet or on the track.',
    tech: ['Node.js', 'MySQL', 'Raspberry Pi'],
  },
  {
    name: 'Bharatbus',
    client: 'Daimler–Mercedes Benz',
    company: 'Mobi Serv',
    domain: 'Aviation & mobility',
    description:
      'Entertainment and social engagement for luxury intercity buses — content, sync, and engagement tuned for long road trips.',
    tech: ['Node.js', 'MongoDB', 'MySQL'],
  },
  {
    name: 'AWS Data Lab',
    client: 'In-house & enterprise',
    company: 'Impetus',
    domain: 'Cloud',
    description:
      'Hands-on AWS POCs that de-risk adoption — show, don’t slide-deck, what production patterns look like.',
    tech: ['AWS'],
  },
]

export const education = {
  degree: 'B.E. Computer Science',
  institute: 'Indore Institute of Science and Technology II',
  university: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
  location: 'Indore, India',
  period: '2011 – 2015',
} as const

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const
