
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Skill {
  name: string;
  level: number; // e.g., 0.8 for 80%
}

export interface EducationInfo {
  degree: string;
  college: string;
  period: string;
}
