import type { World } from '../types';

export const worlds: World[] = [
  {
    id: 'world-1',
    name: 'Brain Boss Plains',
    theme: 'Your brain is dramatic. AI makes things simple.',
    tagline: 'Use AI to reduce confusion with multiple explanation styles',
    color: '#4CAF50',
    acts: ['w1-act-1', 'w1-act-2', 'w1-act-3'],
    unlockRequirement: 'none',
  },
  {
    id: 'world-2',
    name: 'Dungeon of Hard Tasks',
    theme: 'Learn while you solve real problems.',
    tagline: 'Break down overwhelming tasks and find the right first step',
    color: '#9C27B0',
    acts: ['w2-act-1', 'w2-act-2', 'w2-act-3'],
    unlockRequirement: 'Complete at least 2 Acts in World 1',
  },
  {
    id: 'world-3',
    name: 'AI Marketplace',
    theme: 'Avoid hype. Pick tools that matter.',
    tagline: 'Evaluate AI tools based on real needs, not marketing',
    color: '#FF9800',
    acts: ['w3-act-1', 'w3-act-2', 'w3-act-3'],
    unlockRequirement: 'Complete at least 1 Act in World 2',
  },
  {
    id: 'world-4',
    name: 'Memory Mountain',
    theme: 'Make knowledge stick.',
    tagline: 'Use AI to create memorable learning experiences',
    color: '#2196F3',
    acts: ['w4-act-1', 'w4-act-2', 'w4-act-3'],
    unlockRequirement: 'Complete at least 1 Act in World 3',
  },
];
