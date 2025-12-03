# Super Learner Bros – AI Learning Adventure 🎮

An interactive, retro-platformer web application that teaches adults how to learn faster with AI.

![Super Learner Bros](https://github.com/user-attachments/assets/5ab9e0c1-519a-4d08-aa64-6c749d021c9e)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:5173` to start your learning journey!

## 📖 What is Super Learner Bros?

Super Learner Bros is a **complete, fully-functional web application** that transforms AI learning into an engaging, game-like experience. Through 4 themed worlds and 12 interactive acts, users discover and unlock 12 powerful AI prompt recipes they can use in real work.

### Why It's Different

- **Learn by Playing**: Interactive mini-games make AI concepts stick
- **Real-World Focus**: Use your own topics and tasks, not dummy data  
- **Collect Power-Ups**: Unlock reusable AI prompt recipes
- **Track Progress**: Your journey persists across sessions
- **Choose Your Path**: Chill, Normal, or Boss difficulty modes

## 🌍 The Four Worlds

| World | Theme | What You Learn |
|-------|-------|----------------|
| **🌱 Brain Boss Plains** | Your brain is dramatic. AI makes things simple. | Multiple explanation styles to reduce confusion |
| **⚔️ Dungeon of Hard Tasks** | Learn while you solve real problems. | Breaking down overwhelming tasks |
| **🏪 AI Marketplace** | Avoid hype. Pick tools that matter. | Evaluating AI tools critically |
| **⛰️ Memory Mountain** | Make knowledge stick. | Memory techniques with AI |

Each world contains **3 Acts**, and each Act follows a proven learning flow:
1. **📖 Read** - Knowledge tiles explaining concepts
2. **👁️ Watch** - Demonstrations of techniques
3. **🎮 Play** - Interactive mini-games for practice
4. **✨ Unlock** - Prompt recipe added to your library

## ✨ Key Features

### For Learners
- **12 Unlockable Prompt Recipes**: Practical AI techniques you can use immediately
- **Progressive Difficulty**: Choose Chill, Normal, or Boss mode
- **Personal Prompt Library**: "My AI Moves" - your collection of power-ups
- **Progress Tracking**: Pick up where you left off anytime
- **Learning Preferences**: Start with reading or jump into games

### Technical Highlights
- ⚛️ **React 18** + TypeScript for type safety
- 🚀 **Vite** for lightning-fast development
- 🧭 **React Router** for smooth navigation
- 💾 **LocalStorage** for progress persistence
- 🎨 **Retro-platformer aesthetic** with responsive design
- ♿ **WCAG AA accessible** with keyboard navigation
- 🔒 **Zero security vulnerabilities** (CodeQL verified)

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx              # Global navigation
│   ├── OnboardingOverlay.tsx   # First-time setup
│   ├── KnowledgeTilesSection.tsx
│   ├── DemoSection.tsx
│   ├── MiniGameSection.tsx
│   ├── PromptUnlockedModal.tsx
│   └── Toast.tsx              # Notifications
├── pages/              # Main application pages
│   ├── HomePage.tsx           # Landing with hero
│   ├── WorldMapPage.tsx       # 4 worlds overview
│   ├── WorldDetailPage.tsx    # Acts within a world
│   ├── ActPage.tsx           # Read → Watch → Play
│   └── MyAIMovesPage.tsx     # Prompt library
├── data/               # Game content
│   ├── worlds.ts      # 4 world definitions
│   └── acts.ts        # 12 acts with full content
├── hooks/
│   └── useProgress.tsx  # State management
├── types/
│   └── index.ts        # TypeScript definitions
└── App.tsx            # Main app with routing
```

## 🎯 Target Audience

**Primary Persona: "Jess the Busy Learner"**
- Age 24, junior marketing specialist
- Curious about AI but overwhelmed by tutorials
- Has 20 minutes between tasks to learn
- Wants practical skills for real work

**Design Principle**: Every screen should make sense in under 10 seconds.

## 💻 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build optimized production bundle
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint checks
```

### Deployment

The application is configured to deploy to GitHub Pages automatically via GitHub Actions.

**Automatic Deployment:**
- Push to the `main` branch to trigger deployment
- GitHub Actions workflow builds and deploys to GitHub Pages
- View your site at: `https://unnamedmistress.github.io/AppliedAI/`

**Manual Deployment:**
1. Build the project: `npm run build`
2. The `dist` folder contains the production build
3. Deploy the `dist` folder to your hosting platform

**GitHub Pages Configuration:**
- The app uses a base path of `/AppliedAI/` for GitHub Pages
- Client-side routing is handled via `404.html` fallback
- Enable GitHub Pages in repository settings (Settings → Pages → GitHub Actions)

### Technology Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite |
| Routing | React Router v6 |
| State | Context API + LocalStorage |
| Styling | Vanilla CSS |
| Code Quality | ESLint |

## 📚 The Complete Prompt Recipe Collection

### World 1: Understanding (🌱)
1. **Triple Explanation Prompt** - Get any topic explained three ways
2. **Format Picker** - Match learning format to your style
3. **Hint Helper** - Progressive hints instead of instant answers

### World 2: Task Management (⚔️)
4. **Task Breaker** - Break overwhelming tasks into steps
5. **Clarity Torch** - Identify blockers and find next steps
6. **Impact Checker** - Focus on high-impact actions

### World 3: Tool Evaluation (🏪)
7. **Hype Detector** - Spot marketing hype vs real value
8. **Tool Tester** - Test before you invest time
9. **Loadout Builder** - Create your personal AI toolkit

### World 4: Memory & Retention (⛰️)
10. **Mnemonic Maker** - Generate memory aids with AI
11. **Quiz Generator** - Test your knowledge
12. **Review Scheduler** - Spaced repetition plans

## 🎨 Design Philosophy

1. **Practical Skills** - Users leave with reusable AI habits
2. **Real Connections** - Every interaction maps to a real skill
3. **Low Friction** - Clear instructions, few clicks, obvious next steps
4. **Real-World Transfer** - Users practice with their own tasks

## ♿ Accessibility

- ✅ WCAG AA color contrast
- ✅ Keyboard navigation support
- ✅ Focus states on all interactives
- ✅ 44px minimum touch targets
- ✅ Screen reader friendly

## 📸 Screenshots

| Screen | Description |
|--------|-------------|
| ![Home](https://github.com/user-attachments/assets/5ab9e0c1-519a-4d08-aa64-6c749d021c9e) | Landing page with onboarding |
| ![World Map](https://github.com/user-attachments/assets/c80c9e89-be34-4b7c-a922-c113eab50520) | Choose your world |
| ![Act Page](https://github.com/user-attachments/assets/c06c7899-bcee-485b-a0d0-e4a14f6f32e9) | Learn through Read → Watch → Play |
| ![My AI Moves](https://github.com/user-attachments/assets/ad4d4f83-49a5-461e-a8f2-e32fd37c5c2f) | Your prompt library |

## 📄 Additional Documentation

- **[PRD v2.0](./PRD-v2.0-Super-Learner-Bros.md)** - Complete product requirements
- **[Quick Start Guide](./QUICKSTART.md)** - Navigate the PRD efficiently
- **[Validation Checklist](./VALIDATION-CHECKLIST.md)** - Requirements verification

## 🎯 Success Metrics

Target ranges for v1 beta:

- **Activation**: ≥ 60% start World 1, Act 1
- **Completion**: ≥ 40% complete one full World
- **Engagement**: ≥ 50% unlock 3+ prompt recipes
- **Value**: ≥ 70% find it helpful
- **Application**: ≥ 40% save/copy prompts

## 🤝 Contributing

This project implements the full PRD v2.0 specification. For questions or feedback:

1. Review the [PRD v2.0](./PRD-v2.0-Super-Learner-Bros.md)
2. Check the [Validation Checklist](./VALIDATION-CHECKLIST.md)
3. Open an issue with specific concerns

## 📝 License

Copyright © 2024. All rights reserved.

---

**Version**: 2.0  
**Last Updated**: December 2024  
**Status**: ✅ Complete Web Application - Production Ready

Built with ❤️ using React, TypeScript, and Vite
