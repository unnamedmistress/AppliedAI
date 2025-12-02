import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { UserProgress, Difficulty, StartPreference } from '../types';

interface ProgressContextType {
  progress: UserProgress;
  completeAct: (actId: string) => void;
  unlockPrompt: (promptId: string) => void;
  setDifficulty: (difficulty: Difficulty) => void;
  setStartPreference: (preference: StartPreference) => void;
  completeOnboarding: () => void;
  isActCompleted: (actId: string) => boolean;
  isPromptUnlocked: (promptId: string) => boolean;
  getCompletedActsForWorld: (worldId: string) => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'super-learner-bros-progress';

const defaultProgress: UserProgress = {
  completedActs: [],
  unlockedPrompts: [],
  difficulty: 'normal',
  startPreference: 'read',
  hasOnboarded: false,
};

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeAct = (actId: string) => {
    setProgress(prev => ({
      ...prev,
      completedActs: [...new Set([...prev.completedActs, actId])],
    }));
  };

  const unlockPrompt = (promptId: string) => {
    setProgress(prev => ({
      ...prev,
      unlockedPrompts: [...new Set([...prev.unlockedPrompts, promptId])],
    }));
  };

  const setDifficulty = (difficulty: Difficulty) => {
    setProgress(prev => ({ ...prev, difficulty }));
  };

  const setStartPreference = (preference: StartPreference) => {
    setProgress(prev => ({ ...prev, startPreference: preference }));
  };

  const completeOnboarding = () => {
    setProgress(prev => ({ ...prev, hasOnboarded: true }));
  };

  const isActCompleted = (actId: string) => {
    return progress.completedActs.includes(actId);
  };

  const isPromptUnlocked = (promptId: string) => {
    return progress.unlockedPrompts.includes(promptId);
  };

  const getCompletedActsForWorld = (worldId: string) => {
    return progress.completedActs.filter(actId => actId.startsWith(worldId.replace('world-', 'w'))).length;
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeAct,
        unlockPrompt,
        setDifficulty,
        setStartPreference,
        completeOnboarding,
        isActCompleted,
        isPromptUnlocked,
        getCompletedActsForWorld,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
