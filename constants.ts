import type { Project, Skill, EducationInfo } from './types';

export interface Experience {
  title: string;
  company_name: string;
  date: string;
  points: string[];
}

export const SKILLS: Skill[] = [
  { name: 'Java', level: 0.8 },
  { name: 'Python', level: 0.9 },
  { name: 'JavaScript', level: 0.9 },
  { name: 'Node.js', level: 0.85 },
  { name: 'Express.js', level: 0.85 },
  { name: 'React.js', level: 0.9 },
  { name: 'MongoDB', level: 0.8 },
  { name: 'SQL', level: 0.75 },
  { name: 'Git', level: 0.9 },
  { name: 'GitHub', level: 0.9 },
  { name: 'Postman', level: 0.8 },
  { name: 'Docker', level: 0.7 },
  { name: 'REST APIs', level: 0.9 },
  { name: 'AWS', level: 0.7 },
];

export const PROJECTS: Project[] = [
  {
    title: 'AI-Powered Accident Detection',
    description:
      'Developed a real-time accident detection system using CCTV and AI/ML algorithms. Automated emergency alerts to authorities, reducing average response time significantly.',
    tags: ['Python', 'AI/ML', 'OpenCV', 'Emergency Services'],
    image: 'https://picsum.photos/seed/accident/400/300',
  },
  {
    title: 'Finverse - Finance Management',
    description:
      'A platform to redefine personal finance management through tech, simplicity, and smart automation, featuring AI-powered budgeting and a financial health dashboard.',
    tags: ['React', 'Node.js', 'AI', 'Automation'],
    image: 'https://picsum.photos/seed/finverse/400/300',
  },
  {
    title: 'Airbnb Clone (Full-Stack)',
    description:
      'Built a responsive, full-featured Airbnb clone using the MERN stack. Integrated user authentication, booking logic, search filters, and a mobile-first UI/UX.',
    tags: ['MERN', 'React', 'MongoDB', 'Auth'],
    image: 'https://picsum.photos/seed/airbnb/400/300',
  },
];

export const EXPERIENCES: Experience[] = [
    {
        title: 'Backend Developer',
        company_name: 'Hackathon Projects',
        date: 'Dec 2024 – Jan 2025',
        points: [
            'Built and deployed backend services during fast-paced hackathons using Node.js and MongoDB.',
            'Designed RESTful APIs and integrated with frontend via React.js for real-time data updates.',
            'Reduced latency by 30% through optimized database queries and caching techniques.',
        ],
    },
    {
        title: 'AWS APAC Solutions Architecture Virtual Experience',
        company_name: 'Forage',
        date: 'Sep 2025',
        points: [
            'Designed a simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth.',
            'Proposed architecture in plain language, ensuring the client understood its functionality and cost calculations.',
        ],
    },
    {
        title: 'Technical Lead',
        company_name: 'TKR College of Engineering',
        date: 'Jan 2023 – Jun 2023',
        points: [
            'Led technical evaluations and interview preparation sessions for engineering students.',
            'Collaborated with faculty to design assessment frameworks and question banks for technical skill evaluation.',
        ],
    },
];

export const EDUCATION: EducationInfo = {
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  college: 'TKR College of Engineering and Technology, Telangana',
  period: 'Nov 2022 – Jun 2026',
};

export const ACHIEVEMENTS: string[] = [
  'HackerRank Problem Solving Certificate: Validated data structures and algorithm skills.',
  'Led team to build AI-powered emergency alert system.',
  'Successfully mentored and led peers in technical workshops and coding sessions.',
];

export const CERTIFICATIONS: string[] = [
  'HackerRank Problem Solving',
  'Oracle Cloud Infrastructure Certified AI Foundations Associate',
  'AWS Solution Architecture',
];


export const NAV_LINKS = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'education', title: 'Education' },
  { id: 'projects', title: 'Projects' },
  { id: 'achievements', title: 'Achievements' },
  { id: 'contact', title: 'Contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/shashank3115',
  linkedin: 'https://linkedin.com/in/shashank-padmasali',
};