export interface Project {
  name: string;
  description: string;
  tags: string[];
  techStacks: string[];
  projectUrl: string;
  githubUrl: string;
  imageUrls: string[];
}

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  coverImage?: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Profile {
  name: string;
  titles: string[];
  description: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface TechStack {
  name: string;
  icon?: string;
  category?: string;
}
