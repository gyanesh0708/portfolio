export const profile = {
  name: 'Gyanesh Saikhedkar',
  title: 'Lead Technology · Node.js & Cloud',
  tagline:
    'Designing and shipping resilient backend systems — microservices, AWS, and Kubernetes — for insurance, banking, and product teams.',
  summary:
    'Self-motivated software engineer with 8+ years designing, planning, and maintaining software systems. I lead delivery of Lambda and Kubernetes services, integrate complex third-party APIs, and mentor small teams through production-grade releases.',
  location: 'Pune & Indore, India',
  email: 'gyanesh.gyanesh@gmail.com',
  phone: '+91 9599962318',
  github: 'https://github.com/gyanesh0708',
  languages: ['English', 'Hindi', 'Marathi'],
} as const

export const skillGroups = [
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Swagger'],
  },
  {
    label: 'Architecture',
    items: ['Microservices', 'Monolithic', 'Service-Oriented', 'Serverless'],
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
      'Lead Lambda and Kubernetes service delivery for a major insurance client (Asurion).',
      'Deliver fraud-risk assessment pipelines integrating ML models at scale.',
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
      'Built AWS Data Lab proof-of-concept solutions for enterprise clients.',
      'Demonstrated end-to-end AWS patterns for internal and customer-facing use cases.',
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
      'Delivered corporate microservices for First Republic Bank, including money-movement flows.',
      'Operated services on Docker, Kubernetes, and AWS with Oracle DB backends.',
    ],
    tech: ['Node.js', 'Oracle DB', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    role: 'Software Developer',
    company: 'Amm India Pvt. Ltd.',
    location: 'Bangalore, India · Hamburg, Germany (onsite)',
    period: 'Aug 2019 – Jan 2020',
    highlights: [
      'Developed end-to-end product for Epro with onsite delivery in Hamburg.',
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
      'Led VuScreen and Bharatbus — offline entertainment on Raspberry Pi for airlines, railways, and luxury buses.',
    ],
    tech: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Raspberry Pi'],
  },
  {
    role: 'Executive',
    company: 'Micromax Informatics Ltd.',
    location: 'Gurugram, India',
    period: 'Mar 2016 – May 2016',
    highlights: [
      'Backend and frontend analytics for Vuliv and Micromax device activation.',
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
}

export const projects: Project[] = [
  {
    name: 'Shared Services',
    client: 'Asurion',
    company: 'Synechron',
    description:
      'Lead delivery of Lambda and Kubernetes services to assess fraud risk using ML models.',
    tech: ['Node.js', 'AWS', 'Kubernetes'],
  },
  {
    name: 'AWS Data Lab',
    client: 'In-house',
    company: 'Impetus',
    description: 'Proof-of-concept AWS solutions for client evaluation and adoption.',
    tech: ['AWS'],
  },
  {
    name: 'Corporate Microservices',
    client: 'First Republic Bank',
    company: 'Mphasis',
    description:
      'Microservices for corporate banking capabilities such as money movement.',
    tech: ['Node.js', 'Oracle DB', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    name: 'VuScreen',
    client: 'SpiceJet, Indian Railways, Reliance Metro',
    company: 'Mobi Serv',
    description: 'Offline entertainment system hosted on Raspberry Pi for transit passengers.',
    tech: ['Node.js', 'MySQL', 'Raspberry Pi'],
  },
  {
    name: 'Bharatbus',
    client: 'Daimler–Mercedes Benz',
    company: 'Mobi Serv',
    description: 'Entertainment and social engagement platform for luxury intercity buses.',
    tech: ['Node.js', 'MongoDB', 'MySQL'],
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
