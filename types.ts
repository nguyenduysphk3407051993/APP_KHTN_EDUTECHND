export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown supported
  imageUrl?: string;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface GradeData {
  id: number;
  title: string;
  description: string;
  chapters: Chapter[];
  color: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type ViewState = 'HOME' | 'GRADE' | 'LESSON';
