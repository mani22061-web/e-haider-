export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
}

export interface Achievement {
  id: string;
  metric: string;
  label: string;
}

export enum SectionId {
  HERO = 'hero',
  OVERVIEW = 'overview',
  VISION = 'vision',
  SERVICES = 'services',
  LEADERSHIP = 'leadership',
  ACHIEVEMENTS = 'achievements',
  CLIENTS = 'clients',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}