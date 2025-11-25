export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HOME = 'home',
  PHILOSOPHY = 'philosophy',
  WORKS = 'works',
  CONTACT = 'contact'
}