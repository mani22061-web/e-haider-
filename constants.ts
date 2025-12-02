import { ServiceItem, TeamMember, Project, Achievement, SectionId } from './types';

export const PRIMARY_ORANGE = '#FF6A00';

export const NAV_LINKS = [
  { id: SectionId.OVERVIEW, label: 'Overview' },
  { id: SectionId.SERVICES, label: 'Services' },
  { id: SectionId.PROJECTS, label: 'Projects' },
  { id: SectionId.CONTACT, label: 'Contact' },
];

export const SERVICES: ServiceItem[] = [
  { id: '1', title: 'Town Planning', description: 'Strategic urban development frameworks.', iconName: 'Map' },
  { id: '2', title: 'Architecture', description: 'Avant-garde structural design.', iconName: 'Hexagon' },
  { id: '3', title: 'Interior Design', description: 'Human-centric spatial experiences.', iconName: 'Layout' },
  { id: '4', title: 'Landscape', description: 'Sustainable biophilic integration.', iconName: 'TreePine' },
  { id: '5', title: 'Construction', description: 'Precision engineering & execution.', iconName: 'Hammer' },
  { id: '6', title: 'Project Mgmt', description: 'End-to-end supervision excellence.', iconName: 'ClipboardCheck' },
  { id: '7', title: '3D Visualization', description: 'Photorealistic immersive renders.', iconName: 'Box' },
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Alexander Vane', role: 'Principal Architect', image: 'https://picsum.photos/id/1005/400/500' },
  { id: '2', name: 'Elena Cross', role: 'Head of Urban Design', image: 'https://picsum.photos/id/338/400/500' },
  { id: '3', name: 'Marcus Thorne', role: 'Chief Structural Engineer', image: 'https://picsum.photos/id/177/400/500' },
  { id: '4', name: 'Sarah Isobel', role: 'Interior Director', image: 'https://picsum.photos/id/342/400/500' },
];

export const PROJECTS: Project[] = [
  { id: 'p1', title: 'The Onyx Spire', category: 'Commercial', year: '2024', image: 'https://picsum.photos/id/1040/800/600' },
  { id: 'p2', title: 'Neo-Tokyo Residence', category: 'Residential', year: '2023', image: 'https://picsum.photos/id/122/800/600' },
  { id: 'p3', title: 'Verde Urban Park', category: 'Landscape', year: '2023', image: 'https://picsum.photos/id/10/800/600' },
  { id: 'p4', title: 'Aeon Mall Extension', category: 'Master Planning', year: '2022', image: 'https://picsum.photos/id/48/800/600' },
  { id: 'p5', title: 'Silence Library', category: 'Interior', year: '2024', image: 'https://picsum.photos/id/24/800/600' },
  { id: 'p6', title: 'Horizon Bridge', category: 'Construction', year: '2025', image: 'https://picsum.photos/id/229/800/600' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'a1', metric: '150+', label: 'Projects Delivered' },
  { id: 'a2', metric: '45', label: 'Global Awards' },
  { id: 'a3', metric: '12', label: 'Countries Served' },
  { id: 'a4', metric: '2M+', label: 'Sq Ft Developed' },
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for AXIS GROUP, a premium architecture firm.
Tone: Professional, elegant, architectural, concise, and helpful.
Firm Details:
- Name: AXIS GROUP
- Style: Minimalist, Ultra-modern, Black & White aesthetic.
- Services: Town Planning, Architecture, Interior Design, Landscape, Construction, PM, 3D Vis.
- Philosophy: "Beyond Structures" - creating experiences, not just buildings.
- Contact: Based in London/New York. Email: contact@axisgroup.com.
Your goal is to answer visitor questions about the firm's services, style, or help them start a project enquiry.
Always keep responses relatively short (under 100 words) unless asked for detail.`;
