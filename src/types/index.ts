export interface QuizQuestion {
  id: string;
  text: string;
  question: string;
  options: string[];
  answer: number;
  takeaway: string;
  unlock: string;
}

export interface MoneyTrait {
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
}

export interface LessonView {
  id: string;
  title: string;
  component?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  views: LessonView[];
  completed?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon?: string;
  lessons: Lesson[];
  completed?: boolean;
  locked?: boolean;
}

export interface UserProgress {
  completedModules: string[];
  completedLessons: string[];
  currentModuleId?: string;
  currentLessonId?: string;
  currentViewId?: string;
  totalSteps: number;
  completedSteps: number;
  unlockedTraits: string[];
}

export interface AppState {
  progress: UserProgress;
  currentModule?: Module;
  currentLesson?: Lesson;
  language: 'en' | 'es';
}

export interface BarterScenario {
  id: number;
  title: string;
  situation: string;
  trader: string;
  choice: string;
  options: {
    id: number;
    text: string;
    result: string;
    problem: string;
  }[];
}

export interface ComponentProps {
  onComplete?: (stepId?: number) => void;
  onNext?: () => void;
  onPrevious?: () => void;
  data?: any;
}
