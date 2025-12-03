export type Difficulty = 'chill' | 'normal' | 'boss';

export type StartPreference = 'read' | 'play';

export interface PromptRecipe {
  id: string;
  name: string;
  worldId: string;
  actId: string;
  description: string;
  prompt: string;
}

export interface Act {
  id: string;
  name: string;
  worldId: string;
  learningObjective: string;
  knowledgeTiles: KnowledgeTile[];
  demo: Demo;
  miniGame: MiniGame;
  promptRecipe: PromptRecipe;
}

export interface KnowledgeTile {
  title: string;
  content: string[];
  icon?: string;
}

export interface Demo {
  description: string;
  steps: string[];
}

export interface MiniGame {
  name: string;
  description: string;
  instructions: string[];
  completionCriteria: string;
}

export interface World {
  id: string;
  name: string;
  theme: string;
  tagline: string;
  color: string;
  acts: string[]; // Array of act IDs
  unlockRequirement: string;
}

export interface UserProgress {
  completedActs: string[];
  unlockedPrompts: string[];
  difficulty: Difficulty;
  startPreference: StartPreference;
  hasOnboarded: boolean;
}
