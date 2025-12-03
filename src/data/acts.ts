import type { Act } from '../types';

export const acts: Act[] = [
  // WORLD 1 - Brain Boss Plains
  {
    id: 'w1-act-1',
    name: 'Meet the Brain Boss',
    worldId: 'world-1',
    learningObjective: 'Ask AI for multiple explanation styles to reduce confusion fast.',
    knowledgeTiles: [
      {
        title: 'Why Your Brain Panics at Hard Topics',
        content: [
          'Your brain can get overwhelmed by information overload',
          'Too much complexity at once creates confusion',
          'Multiple input formats help your brain process information better',
        ],
      },
      {
        title: 'How AI Shrinks Confusion',
        content: [
          'AI can explain the same concept in different ways',
          'Choose the explanation style that works for you',
          'Before: Complex jargon. After: Simple, clear language',
        ],
      },
      {
        title: 'Multiple Format Learning Helps You Remember',
        content: [
          'Text explanations provide detailed information',
          'Stories make concepts relatable and memorable',
          'Visual diagrams help you see the big picture',
        ],
      },
    ],
    demo: {
      description: 'See how AI can explain the same topic in multiple ways',
      steps: [
        'Enter a confusing topic',
        'AI shows 5th-grade version',
        'AI provides 20-second summary',
        'AI gives everyday analogy',
      ],
    },
    miniGame: {
      name: 'Confusion Blocks',
      description: 'Smash confusion blocks to reveal different explanation styles',
      instructions: [
        'Enter a topic you find confusing',
        'Tap blocks to smash them',
        'Each block reveals a new explanation style',
      ],
      completionCriteria: 'View at least two different explanation styles',
    },
    promptRecipe: {
      id: 'prompt-1',
      name: 'Triple Explanation Prompt',
      worldId: 'world-1',
      actId: 'w1-act-1',
      description: 'Get any confusing topic explained three ways for fast overview',
      prompt: `Explain [TOPIC] in three ways:
1. 5th-grade level
2. 20-second summary
3. Analogy using real-life examples`,
    },
  },
  {
    id: 'w1-act-2',
    name: 'Teaching Pipes',
    worldId: 'world-1',
    learningObjective: 'Match explanation format to learning style.',
    knowledgeTiles: [
      {
        title: 'Why Explanation Style Matters',
        content: [
          'Step-by-step works great for processes',
          'Summaries are perfect when you need the big picture',
          'Different situations call for different formats',
        ],
      },
      {
        title: 'When to Ask for Visuals or Stories',
        content: [
          'Diagrams help with complex systems',
          'Stories make abstract concepts concrete',
          'Choose the format that matches your learning goal',
        ],
      },
    ],
    demo: {
      description: 'Compare the same concept in story mode vs diagram mode',
      steps: [
        'Select a concept to learn',
        'View it as a story',
        'View it as a diagram',
        'See which format works better for you',
      ],
    },
    miniGame: {
      name: 'Pipe Picker',
      description: 'Choose different pipes to see the same topic in different formats',
      instructions: [
        'Enter a concept you want to learn',
        'Choose a pipe (step by step, visual, story, or quick summary)',
        'Try at least two different pipes for the same topic',
      ],
      completionCriteria: 'Use two or more different pipes for one topic',
    },
    promptRecipe: {
      id: 'prompt-2',
      name: 'Format Picker',
      worldId: 'world-1',
      actId: 'w1-act-2',
      description: 'Get any topic explained in your preferred learning format',
      prompt: 'Teach me [TOPIC] in [FORMAT: step by step, story, diagram, quick summary].',
    },
  },
  {
    id: 'w1-act-3',
    name: 'Hint Ladder',
    worldId: 'world-1',
    learningObjective: 'Use hints instead of full answers at once.',
    knowledgeTiles: [
      {
        title: 'Why Hints Help You Learn Deeper',
        content: [
          'Getting the full answer immediately reduces learning',
          'Hints keep you engaged and thinking',
          'Progressive hints build understanding step by step',
        ],
      },
      {
        title: 'How to Ask AI for Hints Not Answers',
        content: [
          'Request small hints first, not complete solutions',
          'Try to solve with each hint before asking for more',
          'Build your problem-solving skills incrementally',
        ],
      },
    ],
    demo: {
      description: 'See how progressive hints lead to better learning',
      steps: [
        'Start with a question',
        'Get a small hint',
        'Try to solve it',
        'Get a stronger hint if needed',
        'Finally see the full explanation',
      ],
    },
    miniGame: {
      name: 'Clarity Climb',
      description: 'Climb the ladder using progressive hints',
      instructions: [
        'Input your question',
        'Level 1: Get a vague hint and make a guess',
        'Level 2: Get a stronger hint and refine your answer',
        'Level 3: See the full explanation',
      ],
      completionCriteria: 'Reach Level 3 and see the full explanation',
    },
    promptRecipe: {
      id: 'prompt-3',
      name: 'Hint Helper',
      worldId: 'world-1',
      actId: 'w1-act-3',
      description: 'Get progressive hints instead of instant answers',
      prompt: `Help me solve [PROBLEM].
Step 1: give me a small hint.
Step 2: if I ask again, give a bigger hint.
Step 3: only then show the full solution.`,
    },
  },

  // WORLD 2 - Dungeon of Hard Tasks
  {
    id: 'w2-act-1',
    name: 'Door of Avoidance',
    worldId: 'world-2',
    learningObjective: 'Break big tasks into tiny steps.',
    knowledgeTiles: [
      {
        title: 'Why Big Tasks Feel Impossible',
        content: [
          'Our brains avoid tasks that seem overwhelming',
          'Breaking tasks down removes the intimidation factor',
          'Small steps are easier to start and complete',
        ],
      },
      {
        title: 'The Power of Tiny First Steps',
        content: [
          'Every big project is just a series of small actions',
          'Focus on what you can do right now',
          'One small step creates momentum for the next',
        ],
      },
      {
        title: 'How AI Helps You See the Path',
        content: [
          'AI can generate detailed checklists',
          'Turn vague goals into concrete actions',
          'See the full path from start to finish',
        ],
      },
    ],
    demo: {
      description: 'Watch a big task transform into manageable steps',
      steps: [
        'Input: "Write a research paper"',
        'Output: Choose topic → Find 3 sources → Read and take notes',
        '→ Create outline → Write introduction → etc.',
      ],
    },
    miniGame: {
      name: 'Break Down the Door',
      description: 'Break a big task into steps and arrange them in order',
      instructions: [
        'Type a real task (homework, work project)',
        'AI suggests steps as blocks',
        'Drag blocks into the correct order',
      ],
      completionCriteria: 'Arrange steps into a valid sequence; door opens',
    },
    promptRecipe: {
      id: 'prompt-4',
      name: 'Task Breaker',
      worldId: 'world-2',
      actId: 'w2-act-1',
      description: 'Break any overwhelming task into tiny, actionable steps',
      prompt: 'Break [TASK] into tiny steps in order, like a checklist a beginner could follow.',
    },
  },
  {
    id: 'w2-act-2',
    name: 'Torchlight Mode',
    worldId: 'world-2',
    learningObjective: 'Identify what\'s blocking progress and find the easiest first step.',
    knowledgeTiles: [
      {
        title: 'The Fog of Starting',
        content: [
          'We often freeze because we don\'t know where to begin',
          'Common blockers: missing info, unclear goal, too many options',
          'Identifying the blocker is the first step to progress',
        ],
      },
      {
        title: 'Shine Light on What\'s Missing',
        content: [
          'AI can help identify what information you need',
          'Clarify assumptions you didn\'t know you were making',
          'Find the gaps in your understanding',
        ],
      },
      {
        title: 'Find the Easiest Meaningful Step',
        content: [
          'Not just easy, but moves you forward',
          'Look for low-effort, high-value actions',
          'Build momentum with quick wins',
        ],
      },
    ],
    demo: {
      description: 'See how AI helps you identify blockers and find the easiest first step',
      steps: [
        'Describe a task you\'re stuck on',
        'AI asks clarifying questions',
        'AI suggests "easiest first step that still matters"',
      ],
    },
    miniGame: {
      name: 'Light the Path',
      description: 'Choose the right torch to illuminate your next step',
      instructions: [
        'Enter a task you\'re stuck on',
        'Three torches light up with options',
        'Select the easiest meaningful first step',
      ],
      completionCriteria: 'Select an "easiest meaningful first step" from AI options',
    },
    promptRecipe: {
      id: 'prompt-5',
      name: 'Clarity Torch',
      worldId: 'world-2',
      actId: 'w2-act-2',
      description: 'Identify blockers and find the easiest meaningful first step',
      prompt: `For this task [TASK], tell me:
1. What info I am missing
2. What assumptions I am making
3. The easiest first step that still moves me forward.`,
    },
  },
  {
    id: 'w2-act-3',
    name: 'Distraction Mini Boss',
    worldId: 'world-2',
    learningObjective: 'Focus on high-impact actions, not busy work.',
    knowledgeTiles: [
      {
        title: 'Busy vs. Effective',
        content: [
          'Time spent doesn\'t equal value created',
          '3 hours formatting vs. 30 minutes on core argument',
          'Focus on what actually moves the needle',
        ],
      },
      {
        title: 'How AI Challenges Your Plan',
        content: [
          'AI can critique your approach objectively',
          'Get honest feedback on what matters most',
          'Challenge your assumptions about priority',
        ],
      },
      {
        title: 'The 80/20 Rule for Learning',
        content: [
          '20% of actions create 80% of results',
          'Identify the high-leverage activities',
          'Cut the low-impact busy work',
        ],
      },
    ],
    demo: {
      description: 'Watch AI rank actions by impact',
      steps: [
        'List 3 possible actions',
        'AI ranks them by impact',
        'AI explains why one is most effective',
      ],
    },
    miniGame: {
      name: 'Boss Battle: Choose Your Move',
      description: 'Pick the highest impact action to defeat the mini-boss',
      instructions: [
        'Review three action cards (A, B, C)',
        'AI shows impact score for each',
        'Pick the highest impact action',
      ],
      completionCriteria: 'Select the most impactful step at least once and defeat the boss',
    },
    promptRecipe: {
      id: 'prompt-6',
      name: 'Impact Checker',
      worldId: 'world-2',
      actId: 'w2-act-3',
      description: 'Compare options and find the most effective action',
      prompt: `For this goal [GOAL], here are three options I am considering: [A], [B], [C].
Which is most effective and why? Challenge my reasoning if I am wrong.`,
    },
  },

  // WORLD 3 - AI Marketplace
  {
    id: 'w3-act-1',
    name: 'Hype Trap',
    worldId: 'world-3',
    learningObjective: 'Spot marketing hype vs. real value.',
    knowledgeTiles: [
      {
        title: 'The Hype Cycle',
        content: [
          'New AI tools follow predictable hype patterns',
          'Initial excitement → reality check → actual value',
          'Don\'t get caught in the hype peak',
        ],
      },
      {
        title: 'Red Flags in AI Marketing',
        content: [
          '"Revolutionary" with no specifics',
          '"No learning curve" (everything has a learning curve)',
          '"One size fits all" (nothing actually does)',
        ],
      },
      {
        title: 'What Actually Matters',
        content: [
          'Does it solve YOUR specific use case?',
          'How does it integrate with your workflow?',
          'Is the learning curve worth the value?',
        ],
      },
    ],
    demo: {
      description: 'Compare hype-heavy vs. specific tool descriptions',
      steps: [
        'View two AI tool descriptions',
        'One is hype-heavy, one is specific',
        'Identify the key differences',
      ],
    },
    miniGame: {
      name: 'Trap Spotter',
      description: 'Identify hype language in AI tool marketing',
      instructions: [
        'Read 3 tool descriptions',
        'Identify which ones have hype language',
        'Click to "spot the trap"',
      ],
      completionCriteria: 'Correctly identify at least 2 hype patterns',
    },
    promptRecipe: {
      id: 'prompt-7',
      name: 'Hype Detector',
      worldId: 'world-3',
      actId: 'w3-act-1',
      description: 'Cut through marketing hype to find real value',
      prompt: `Evaluate this AI tool: [TOOL DESCRIPTION].
1. What specific problem does it solve?
2. What are the real limitations?
3. Is this hype or useful for [MY USE CASE]?`,
    },
  },
  {
    id: 'w3-act-2',
    name: 'Tool Test Chamber',
    worldId: 'world-3',
    learningObjective: 'Test before you invest time.',
    knowledgeTiles: [
      {
        title: 'The 5-Minute Test',
        content: [
          'Try one specific task with the tool',
          'Does it actually save time vs. doing it yourself?',
          'Quick tests reveal real value (or lack thereof)',
        ],
      },
      {
        title: 'Questions to Ask Before Committing',
        content: [
          'What\'s the real cost (time, money, learning)?',
          'How hard is it to switch away later?',
          'What are the alternatives?',
        ],
      },
      {
        title: 'How to Compare Tools',
        content: [
          'Test them side-by-side on the same task',
          'Compare speed, quality, and ease of use',
          'Use a simple comparison matrix',
        ],
      },
    ],
    demo: {
      description: 'Watch a side-by-side tool comparison',
      steps: [
        'Pick a task (e.g., "summarize meeting notes")',
        'Test 2 tools on same input',
        'Compare output quality, speed, ease',
      ],
    },
    miniGame: {
      name: 'Test Chamber',
      description: 'Compare AI tools in the testing lab',
      instructions: [
        'Select a task to test',
        'Choose 2 tools to compare',
        'Rank them based on criteria (speed, quality, ease)',
      ],
      completionCriteria: 'Complete one tool comparison',
    },
    promptRecipe: {
      id: 'prompt-8',
      name: 'Tool Tester',
      worldId: 'world-3',
      actId: 'w3-act-2',
      description: 'Create a simple test to compare AI tools',
      prompt: `I need a tool for [TASK]. Here are my top 3 options: [A], [B], [C].
Help me create a simple test to compare them on:
1. Speed
2. Quality
3. Ease of use`,
    },
  },
  {
    id: 'w3-act-3',
    name: 'Build Your Loadout',
    worldId: 'world-3',
    learningObjective: 'Create a personal AI toolkit for your workflow.',
    knowledgeTiles: [
      {
        title: 'Your AI Stack',
        content: [
          'Core tools for daily work',
          'Specialized tools for specific needs',
          'Keep it simple: quality over quantity',
        ],
      },
      {
        title: 'Weekly Routines with AI',
        content: [
          'Morning: planning and priorities',
          'Midday: problem-solving',
          'End of day: review and learning',
        ],
      },
      {
        title: 'Integration Over Accumulation',
        content: [
          'Better to use 3 tools well than 10 poorly',
          'Build habits around your tools',
          'Consistent use beats tool hopping',
        ],
      },
    ],
    demo: {
      description: 'See how AI suggests a personalized tool stack',
      steps: [
        'Describe your typical week',
        'AI suggests 3-tool stack',
        'View example routine',
      ],
    },
    miniGame: {
      name: 'Loadout Builder',
      description: 'Assemble your personal AI toolkit',
      instructions: [
        'Drag tools into slots: Daily driver, Specialized helper, Learning companion',
        'Write one weekly habit for each tool',
      ],
      completionCriteria: 'Create a 3-tool loadout with one habit per tool',
    },
    promptRecipe: {
      id: 'prompt-9',
      name: 'Loadout Builder',
      worldId: 'world-3',
      actId: 'w3-act-3',
      description: 'Build your personal AI tool stack and weekly routine',
      prompt: `Based on my work [DESCRIBE WORK], suggest:
1. A core AI tool for daily tasks
2. A specialized tool for [SPECIFIC NEED]
3. One weekly routine to use them consistently`,
    },
  },

  // WORLD 4 - Memory Mountain
  {
    id: 'w4-act-1',
    name: 'Mnemonic Forge',
    worldId: 'world-4',
    learningObjective: 'Generate memory aids with AI.',
    knowledgeTiles: [
      {
        title: 'Why We Forget',
        content: [
          'The forgetting curve: we lose 50% in the first hour',
          'Memories fade without reinforcement',
          'Active techniques help information stick',
        ],
      },
      {
        title: 'How Mnemonics Work',
        content: [
          'Acronyms turn lists into memorable words',
          'Stories create narrative connections',
          'Visual hooks engage spatial memory',
        ],
      },
      {
        title: 'AI as Memory Partner',
        content: [
          'Generate custom mnemonics instantly',
          'Try multiple approaches to find what sticks',
          'Personalize memory aids to your context',
        ],
      },
    ],
    demo: {
      description: 'Watch AI create multiple mnemonic options',
      steps: [
        'Enter a list to remember (e.g., steps in a process)',
        'AI generates 3 mnemonic options: Acronym, Story, Visual metaphor',
        'Pick your favorite',
      ],
    },
    miniGame: {
      name: 'Forge the Memory',
      description: 'Forge a memorable mnemonic in the blacksmith shop',
      instructions: [
        'Enter something to remember',
        'Click to "forge" different mnemonic types',
        'Select the one that clicks for you',
      ],
      completionCriteria: 'Create and select one mnemonic',
    },
    promptRecipe: {
      id: 'prompt-10',
      name: 'Mnemonic Maker',
      worldId: 'world-4',
      actId: 'w4-act-1',
      description: 'Create memorable ways to remember anything',
      prompt: `Create a memorable way to remember [LIST/CONCEPT]:
1. As an acronym
2. As a short story
3. As a visual metaphor`,
    },
  },
  {
    id: 'w4-act-2',
    name: 'Recall Arena',
    worldId: 'world-4',
    learningObjective: 'Test your knowledge with AI-generated questions.',
    knowledgeTiles: [
      {
        title: 'Active Recall Beats Re-reading',
        content: [
          'Testing yourself is more effective than reviewing',
          'Retrieval practice strengthens memory',
          'Struggle = learning happening',
        ],
      },
      {
        title: 'AI as Quiz Master',
        content: [
          'Generate questions on any topic instantly',
          'Adjust difficulty to your level',
          'Get unlimited practice',
        ],
      },
      {
        title: 'The Feedback Loop',
        content: [
          'Wrong answers are learning opportunities',
          'AI explains the "why" behind answers',
          'Each test strengthens your understanding',
        ],
      },
    ],
    demo: {
      description: 'See AI generate and explain quiz questions',
      steps: [
        'Enter a topic you studied',
        'AI generates 3 questions',
        'Answer them',
        'Get feedback with explanations',
      ],
    },
    miniGame: {
      name: 'Question Arena',
      description: 'Face questions flying at you in the arena',
      instructions: [
        'Input a topic you want to test',
        'AI generates questions',
        'Answer them (multiple choice or short answer)',
        'Get immediate feedback with explanations',
      ],
      completionCriteria: 'Answer at least 3 questions on your chosen topic',
    },
    promptRecipe: {
      id: 'prompt-11',
      name: 'Quiz Generator',
      worldId: 'world-4',
      actId: 'w4-act-2',
      description: 'Generate quiz questions with answers and explanations',
      prompt: `Generate 5 quiz questions about [TOPIC] at [DIFFICULTY: beginner/intermediate/advanced].
Include answers and brief explanations.`,
    },
  },
  {
    id: 'w4-act-3',
    name: 'Spaced Checkpoint',
    worldId: 'world-4',
    learningObjective: 'Schedule reviews with AI reminders.',
    knowledgeTiles: [
      {
        title: 'The Spacing Effect',
        content: [
          'Review at increasing intervals: 1 day, 3 days, 1 week, 1 month',
          'Spaced repetition fights the forgetting curve',
          'Each review session should be shorter than the last',
        ],
      },
      {
        title: 'AI-Powered Review Schedules',
        content: [
          'Generate custom review plans instantly',
          'Adapt based on what you tend to forget',
          'Get reminded at optimal intervals',
        ],
      },
      {
        title: 'Build a Review Habit',
        content: [
          '5-minute daily reviews are enough',
          'Focus on weak spots first',
          'Consistency beats intensity',
        ],
      },
    ],
    demo: {
      description: 'See AI create a spaced review schedule',
      steps: [
        'Enter topics learned this week',
        'AI creates a spaced review schedule',
        'View calendar with checkpoints',
      ],
    },
    miniGame: {
      name: 'Set Your Checkpoints',
      description: 'Place checkpoint flags on the mountain path',
      instructions: [
        'Input topics to review',
        'Place checkpoint flags at review intervals',
        'AI suggests optimal spacing',
      ],
      completionCriteria: 'Create a review schedule for at least one topic',
    },
    promptRecipe: {
      id: 'prompt-12',
      name: 'Review Scheduler',
      worldId: 'world-4',
      actId: 'w4-act-3',
      description: 'Create a spaced review schedule with key questions',
      prompt: `Create a spaced review schedule for [TOPIC].
Include:
1. Review dates (1 day, 3 days, 1 week, 2 weeks, 1 month)
2. Key questions to test myself at each checkpoint`,
    },
  },
];
