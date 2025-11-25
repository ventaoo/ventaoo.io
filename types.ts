export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  size?: string; // 'tall' | 'wide' | 'regular'
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HERO = 'home',
  PHILOSOPHY = 'philosophy',
  WORK = 'work',
  CONTACT = 'contact',
}