export type ExerciseType = 'MULTIPLE_CHOICE' | 'TRUE_FALSE' | 'SHORT_ANSWER' | 'ESSAY';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect?: boolean; // For checking answers
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: QuestionOption[]; // For Multiple Choice
  correctAnswer?: boolean | string; // For True/False (boolean) or Short Answer (string)
  explanation?: string; // Explanation for the answer
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown supported - This is the THEORY part
  imageUrl?: string;
  exercises?: Exercise[]; // New optional field for exercises
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

export type AIProvider = 'GEMINI' | 'OPENAI' | 'OPENROUTER';

export interface AIConfig {
  provider: AIProvider;
  apiKey: string;
  model: string;
}
