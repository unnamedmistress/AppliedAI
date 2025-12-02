# Super Learner Bros – Product Requirements Document v2.0

## 0. Document Metadata

- **Product Name**: Super Learner Bros – AI Learning Adventure
- **Document Type**: Product Requirements Document (PRD)
- **Version**: 2.0
- **Owner**: [YOUR NAME HERE]
- **Date**: [INSERT DATE]

---

## 1. Product Overview

### 1.1 Vision

Create an interactive, retro-platformer learning experience that teaches adults how to learn faster with AI.

Users move through a simple world map. Each tile is a real learning technique, not a fake game.

The experience should feel like a Mario-style world map, but every click helps the user:

- Understand new topics faster with AI
- Break real tasks into steps with AI
- Evaluate AI tools and avoid hype
- Use AI to remember more with mnemonics and recall

Visual style is inspired by classic side-scrolling platformers but uses original art only.

### 1.2 Elevator Pitch

"Super Learner Bros" is a playable mini-course for AI-curious adults. It turns proven AI learning patterns into a simple world of levels, tricks, and "prompt recipes" they can re-use.

### 1.3 What We Are Building Now

- A high-fidelity, clickable prototype in Canva (desktop-first, responsive hints)
- A blueprint that can later become a real web app
- No live AI integration in this phase

---

## 2. Target Audience and Persona

### 2.1 Primary Audience

**Demographics:**
- Adults 18–35
- Students and young professionals
- Comfortable with basic tech, but not "power users"
- Curious about AI, skeptical of hype, time-poor

**Context:**
- Using a laptop or tablet
- 10–30 minute sessions
- Often with other tabs open

### 2.2 Primary Persona – "Jess the Busy Learner"

- **Age**: 24, junior marketing specialist
- **Challenge**: Has heard "AI can help you learn," but feels lost
- **Pain Point**: Overwhelmed by long tutorials and jargon
- **Goal**: Wants quick wins she can use on real work (reports, decks, emails)
- **Time Constraint**: Has 20 minutes between tasks to "get smarter"

**Design anchor**: Every screen should make sense to Jess in under 10 seconds.

---

## 3. Goals and Success Metrics

### 3.1 Product Goals

1. **Teach practical AI learning skills**
   - Users leave with reusable prompt recipes and habits

2. **Connect every interaction to a real skill**
   - No pure decoration. Every mini-game maps to a prompt pattern or mental model

3. **Keep friction low**
   - Clear instructions visible on each screen
   - Few clicks per Act
   - Obvious "what to do next"

4. **Encourage real-life transfer**
   - Users plug in their own tasks and topics, not dummy data

### 3.2 Success Metrics (for real web version)

Target ranges for v1 beta:

**Activation:**
- ≥ 60% of visitors start World 1, Act 1

**Learning involvement:**
- ≥ 40% of users complete at least one full World (3 Acts)
- ≥ 50% of users unlock at least 3 prompt recipes

**Perceived value:**
- "Did this help you learn a new way to use AI?" → ≥ 70% "Yes"

**Application intent:**
- ≥ 40% of users save or copy at least one prompt recipe

---

## 4. Information Architecture and Screens

### 4.1 Screen Inventory

1. Home Screen
2. Difficulty & Onboarding Overlay
3. World Map
4. World Detail Wrapper (per World)
5. Act Screen Template (used 12 times)
6. My AI Moves (Prompt Library)
7. Help & About / How This Works

All Worlds and Acts reuse the same Act Screen Template with different content.

### 4.2 Home Screen

**Purpose**: Explain the experience in under 10 seconds and pull users into World 1.

**Key elements:**
- **Hero title**: "Super Learner Bros – Learn Faster With AI"
- **Sub-copy** (one line): "Play through worlds. Unlock prompt moves. Use them on real work."
- **Primary CTA**: [Start World 1]
- **Secondary CTA**: [Browse Worlds] (scrolls to overview cards)
- **Short "How it works" strip** with 3 steps:
  1. Pick a world
  2. Read, watch, play
  3. Save AI moves you like

**Acceptance criteria:**
- User can tell what this is and what to click in 5 seconds
- Only one primary button visible above the fold
- No more than three short lines of copy above the fold

### 4.3 Difficulty & Onboarding Overlay

Appears on first start (entering World 1 or Home).

Simple modal or side panel.

**Step 1: Select difficulty**
- Chill mode
- Normal mode
- Boss mode

**Step 2: "How do you want to start?"**
- "Start with a quick read"
- "Jump into interactive mode"

**Behavior:**
- Difficulty affects hint density, reading complexity, and how quickly direct answers show in examples
- "Read vs Play preference" decides whether Acts open on Knowledge Tiles or Mini Game first

**Acceptance criteria:**
- Difficulty choice takes < 10 seconds
- User can change difficulty later from a global menu
- Copy explaining modes fits in one short sentence per mode

### 4.4 World Map Screen

**Purpose**: Show progress across 4 Worlds and invite a clear next step.

**Layout:**

4 World icons in a horizontal row or grid:

1. **World 1 – Brain Boss Plains**
2. **World 2 – Dungeon of Hard Tasks**
3. **World 3 – AI Marketplace**
4. **World 4 – Memory Mountain**

Each World tile shows:
- Short tagline (1 line)
- Progress: 0/3, 1/3, 3/3 Acts complete
- Status: Locked / Unlocked / Complete

**Progress rules:**
- World 1 unlocked by default
- World 2 unlocks when user completes at least 2 Acts in World 1
- World 3 unlocks when user completes at least 1 Act in World 2
- World 4 unlocks when user completes at least 1 Act in World 3

**Acceptance criteria:**
- User can see which Worlds are unlocked at a glance
- Clicking a World opens its World Detail Wrapper

### 4.5 World Detail Wrapper (per World)

**Contains:**
- Brief world intro (1–2 sentences)
- The global Read vs Play toggle for that World
- A list of 3 Acts with status (Not started / In progress / Complete)

**Each Act tile:**
- Name + short description
- Icon that hints the metaphor
- Start/Continue button

---

## 5. Global UX Components

### 5.1 Top HUD Strip (per Act)

Always visible (sticky bar).

**Shows:**
- **Skill title**: e.g., "Skill: Break big tasks into AI-ready steps"
- **Real-life use**: e.g., "Use for: homework, reports, side projects"
- **Act progress**: "Step 1: Read · Step 2: Watch · Step 3: Play"

**Acceptance criteria:**
- Fits in one line on desktop, two lines max on mobile
- Uses consistent style and position in all Acts

### 5.2 Instruction Banner (per Mini-game)

Fixed instruction bar above or below the interactive area.

**Example pattern:**
```
1. Enter a real task
2. Let AI break it down
3. Drag steps into the right order
```

**Acceptance criteria:**
- Never disappears until Act is complete
- Uses numbered steps (max 3 steps)
- Text fits within two short lines on desktop, three on mobile

### 5.3 Progress Map Indicator (Global)

- At top of page or side
- Small icons for Worlds 1–4
- Label under each icon
- Simple visual for "current world" and "completed worlds" (e.g., checkmark)

### 5.4 Difficulty Selector (Global)

Accessible from a small badge/menu in the header.

Shows current mode with a short label.

**Mode effects (for copy/demo only in this phase):**
- **Chill**: More examples, more hints, fewer "you try" steps
- **Normal**: Default balance
- **Boss**: Shorter hints, more user typing, fewer ready-made prompts

### 5.5 Read vs Play Preference Toggle

At the entrance of each World:
- "Start with a quick read"
- "Jump into interactive mode"

**Effect:**
- Default scroll position when opening an Act
- Both sections remain on the page

### 5.6 My AI Moves (Prompt Library)

Global page, reachable from top nav and from "prompt unlocked" states.

**Layout:**
- Grid or vertical list of cards

**Each card shows:**
- Prompt name (short label)
- World and Act where it was unlocked
- Short "when to use it" line
- Copy / Save icon

**Example card:**
```
Title: "Triple Explanation Prompt"
World 1 · Act 1
Use for: "Any confusing topic, fast overview."
[Copy icon]
```

**Acceptance criteria:**
- User can find and read a prompt in under 10 seconds
- Cards display in a simple, scrollable list on mobile

---

## 6. Detailed Feature Requirements By World and Act

All Acts share the same structure:
1. **Knowledge Tiles** (Read)
2. **Show Me Demo** (Watch)
3. **Mini Game** (Do)
4. **Prompt Recipe Unlock** (Card saved to My AI Moves)

**Completion rule per Act**: user must finish the Mini Game's completion condition.

---

## WORLD 1 – BRAIN BOSS PLAINS

**Theme**: Your brain is dramatic. AI makes things simple.

**Goal**: Use AI to reduce confusion with multiple explanation styles.

### Act 1 – Meet the Brain Boss

**Learning objective**: Ask AI for multiple explanation styles to reduce confusion fast.

#### Knowledge Tiles

3–4 tiles in a grid or horizontal scroll.

**Examples:**

1. **"Why Your Brain Panics at Hard Topics"**
   - Bullets on overwhelm and info overload
   - Cartoon: brain with too many tabs open
   - Prompt snippet: "Explain this to me like I am 12 years old."

2. **"How AI Shrinks Confusion"**
   - Example: AI explaining a legal or science concept simply
   - Before/after visual

3. **"Multiple Format Learning Helps You Remember"**
   - Bullets on using text, story, visuals
   - Diagram of brain + three input icons

#### Show Me Demo

Static or simple animated frames.

**Flow:**
1. User enters "confusing topic"
2. AI shows:
   - 5th-grade version
   - 20-second summary
   - Emoji explanation
   - Everyday analogy

#### Mini Game – Confusion Blocks

**Visual**: Side-scroll style with floating blocks labeled: "Too hard", "Too many words", "Jargon."

**Interaction:**
1. User enters a topic in a text field
2. User taps blocks to "smash" them
3. Each smashed block reveals a new explanation style

**Completion**: User views at least two different explanation styles.

#### Prompt Recipe Unlocked

```
"Explain [TOPIC] in three ways:
1. 5th-grade level
2. 20-second summary
3. Analogy using real-life examples"
```

---

### Act 2 – Teaching Pipes

**Learning objective**: Match explanation format to learning style.

#### Knowledge Tiles

**Examples:**

1. **"Why Explanation Style Matters"**
   - Bullet: step-by-step vs summary vs overview

2. **"When to Ask for Visuals or Stories"**
   - Example of diagram vs story
   - Prompt: "Show me a simple diagram of this process."

#### Show Me Demo

Mockup showing the same concept in "story mode" vs "diagram mode" side by side.

#### Mini Game – Pipe Picker

**Visual**: Pipes labeled "Step by step", "Visual", "Story", "Quick summary."

**Interaction:**
1. User enters a concept
2. Chooses a pipe → shows that format
3. User tries at least two pipes for same topic

**Completion**: Use two or more different pipes for one topic.

#### Prompt Recipe Unlocked

```
"Teach me [TOPIC] in [FORMAT: step by step, story, diagram, quick summary]."
```

---

### Act 3 – Hint Ladder

**Learning objective**: Use hints instead of full answers at once.

#### Knowledge Tiles

1. **"Why Hints Help You Learn Deeper"**
2. **"How to Ask AI for Hints Not Answers"**
   - Prompt: "Give me a small hint for this problem, not the full answer."

#### Show Me Demo

**Sequence**: Question → Hint 1 → User tries → Hint 2 → User refines → Full answer at Hint 3.

#### Mini Game – Clarity Climb

**Visual**: Ladder with 3 levels.

**Interaction:**
1. User inputs a question
2. Level 1: vague hint, user types guess
3. Level 2: stronger hint, user refines
4. Level 3: full explanation and answer check

**Completion**: User reaches Level 3 and sees full explanation.

#### Prompt Recipe Unlocked

```
"Help me solve [PROBLEM].
Step 1: give me a small hint.
Step 2: if I ask again, give a bigger hint.
Step 3: only then show the full solution."
```

---

## WORLD 2 – DUNGEON OF HARD TASKS

**Theme**: Learn while you solve real problems.

**Goal**: Break down overwhelming tasks and find the right first step.

### Act 1 – Door of Avoidance

**Learning objective**: Break big tasks into tiny steps.

#### Knowledge Tiles

1. **"Why Big Tasks Feel Impossible"**
   - Psychology of task avoidance
   - Visual: giant door vs small steps

2. **"The Power of Tiny First Steps"**
   - Examples of breaking down homework, projects, reports
   - Prompt: "Break this task into the smallest possible steps."

3. **"How AI Helps You See the Path"**
   - AI can generate checklists
   - Before/after: vague goal → clear steps

#### Show Me Demo

One big task → visual waterfall of smaller steps.

**Example:**
- Input: "Write a research paper"
- Output: 
  1. Choose topic
  2. Find 3 sources
  3. Read and take notes
  4. Create outline
  5. Write introduction paragraph
  6. etc.

#### Mini Game – Break Down the Door

**Visual**: Big door with glowing lock.

**Interaction:**
1. User types a real task (homework, work project)
2. AI suggests steps as blocks
3. User drags blocks into correct order

**Completion**: User arranges steps into a valid sequence; door opens.

#### Prompt Recipe Unlocked

```
"Break [TASK] into tiny steps in order, like a checklist a beginner could follow."
```

---

### Act 2 – Torchlight Mode

**Learning objective**: Identify what's blocking progress and find the easiest first step.

#### Knowledge Tiles

1. **"The Fog of Starting"**
   - Why we freeze at the beginning
   - Common blockers: missing info, unclear goal, too many options

2. **"Shine Light on What's Missing"**
   - Ask AI to identify assumptions
   - Prompt: "What information am I missing to start this task?"

3. **"Find the Easiest Meaningful Step"**
   - Not just easy, but moves you forward
   - Example: research → outline → draft

#### Show Me Demo

**Flow:**
1. User describes a stuck point
2. AI asks clarifying questions
3. AI suggests "easiest first step that still matters"

#### Mini Game – Light the Path

**Visual**: Dark dungeon with three possible torches.

**Interaction:**
1. User enters a task they're stuck on
2. Three torches light up with options:
   - "Gather more info"
   - "Start with smallest piece"
   - "Get feedback first"
3. User selects one; torch reveals next step

**Completion**: User selects an "easiest meaningful first step" from AI options.

#### Prompt Recipe Unlocked

```
"For this task [TASK], tell me:
1. What info I am missing
2. What assumptions I am making
3. The easiest first step that still moves me forward."
```

---

### Act 3 – Distraction Mini Boss

**Learning objective**: Focus on high-impact actions, not busy work.

#### Knowledge Tiles

1. **"Busy vs. Effective"**
   - Chart: time spent vs. impact
   - Example: 3 hours formatting vs. 30 minutes on core argument

2. **"How AI Challenges Your Plan"**
   - AI can critique your approach
   - Prompt: "Which of these steps is most important? Challenge me if I'm wrong."

3. **"The 80/20 Rule for Learning"**
   - Focus on the 20% that creates 80% of results

#### Show Me Demo

**Flow:**
1. User lists 3 possible actions
2. AI ranks by impact
3. AI explains why one is most effective

#### Mini Game – Boss Battle: Choose Your Move

**Visual**: Mini-boss with three attack options.

**Interaction:**
1. User has three action cards (A, B, C)
2. AI shows impact score for each
3. User picks highest impact
4. Boss takes damage; wrong choice = wasted turn

**Completion**: User selects most impactful step at least once and sees "boss defeated" state.

#### Prompt Recipe Unlocked

```
"For this goal [GOAL], here are three options I am considering: [A], [B], [C].
Which is most effective and why? Challenge my reasoning if I am wrong."
```

---

## WORLD 3 – AI MARKETPLACE

**Theme**: Avoid hype. Pick tools that matter.

**Goal**: Evaluate AI tools based on real needs, not marketing.

### Act 1 – Hype Trap

**Learning objective**: Spot marketing hype vs. real value.

#### Knowledge Tiles

1. **"The Hype Cycle"**
   - Chart: hype peak → trough → real value
   - Examples from AI tools

2. **"Red Flags in AI Marketing"**
   - "Revolutionary", "No learning curve", "One size fits all"
   - Checklist of warning signs

3. **"What Actually Matters"**
   - Specific use case
   - Integration with your workflow
   - Learning curve vs. value

#### Show Me Demo

**Flow:**
1. Show two AI tool descriptions
2. One is hype-heavy, one is specific
3. Highlight key differences

#### Mini Game – Trap Spotter

**Visual**: Marketplace stalls with flashy signs.

**Interaction:**
1. User reads 3 tool descriptions
2. Identifies which ones have hype language
3. Clicks to "spot the trap"

**Completion**: User correctly identifies at least 2 hype patterns.

#### Prompt Recipe Unlocked

```
"Evaluate this AI tool: [TOOL DESCRIPTION].
1. What specific problem does it solve?
2. What are the real limitations?
3. Is this hype or useful for [MY USE CASE]?"
```

---

### Act 2 – Tool Test Chamber

**Learning objective**: Test before you invest time.

#### Knowledge Tiles

1. **"The 5-Minute Test"**
   - Try one specific task
   - Does it save time vs. doing it yourself?

2. **"Questions to Ask Before Committing"**
   - Cost, learning curve, lock-in, alternatives

3. **"How to Compare Tools"**
   - Side-by-side on same task
   - Example comparison matrix

#### Show Me Demo

**Flow:**
1. User picks a task (e.g., "summarize meeting notes")
2. Demo shows testing 2 tools on same input
3. Comparison of output quality, speed, ease

#### Mini Game – Test Chamber

**Visual**: Lab with test tubes and tools.

**Interaction:**
1. User selects a task
2. Chooses 2 tools to test
3. Sees simulated results side by side
4. User ranks based on criteria (speed, quality, ease)

**Completion**: User completes one tool comparison.

#### Prompt Recipe Unlocked

```
"I need a tool for [TASK]. Here are my top 3 options: [A], [B], [C].
Help me create a simple test to compare them on:
1. Speed
2. Quality
3. Ease of use"
```

---

### Act 3 – Build Your Loadout

**Learning objective**: Create a personal AI toolkit for your workflow.

#### Knowledge Tiles

1. **"Your AI Stack"**
   - Core tools vs. specialized tools
   - Example: general chat + code helper + writing assistant

2. **"Weekly Routines with AI"**
   - Morning: planning and priorities
   - Midday: problem-solving
   - End of day: review and learning

3. **"Integration Over Accumulation"**
   - Better to use 3 tools well than 10 poorly

#### Show Me Demo

**Flow:**
1. User describes typical week
2. AI suggests 3-tool stack
3. Shows example routine

#### Mini Game – Loadout Builder

**Visual**: Equipment screen with slots for tools.

**Interaction:**
1. User drags tools into slots:
   - Daily driver
   - Specialized helper
   - Learning companion
2. User writes one weekly habit for each tool

**Completion**: User creates a 3-tool loadout with one habit per tool.

#### Prompt Recipe Unlocked

```
"Based on my work [DESCRIBE WORK], suggest:
1. A core AI tool for daily tasks
2. A specialized tool for [SPECIFIC NEED]
3. One weekly routine to use them consistently"
```

---

## WORLD 4 – MEMORY MOUNTAIN

**Theme**: Make knowledge stick.

**Goal**: Use AI to create memorable learning experiences.

### Act 1 – Mnemonic Forge

**Learning objective**: Generate memory aids with AI.

#### Knowledge Tiles

1. **"Why We Forget"**
   - Forgetting curve
   - The spacing effect

2. **"How Mnemonics Work"**
   - Acronyms, stories, visual hooks
   - Example: HOMES for Great Lakes

3. **"AI as Memory Partner"**
   - Generate custom mnemonics
   - Prompt: "Create a memorable acronym for [LIST]."

#### Show Me Demo

**Flow:**
1. User enters a list to remember (e.g., steps in a process)
2. AI generates 3 mnemonic options:
   - Acronym
   - Story
   - Visual metaphor
3. User picks favorite

#### Mini Game – Forge the Memory

**Visual**: Blacksmith forge with glowing materials.

**Interaction:**
1. User enters something to remember
2. Clicks to "forge" different mnemonic types
3. Selects the one that clicks

**Completion**: User creates and selects one mnemonic.

#### Prompt Recipe Unlocked

```
"Create a memorable way to remember [LIST/CONCEPT]:
1. As an acronym
2. As a short story
3. As a visual metaphor"
```

---

### Act 2 – Recall Arena

**Learning objective**: Test your knowledge with AI-generated questions.

#### Knowledge Tiles

1. **"Active Recall Beats Re-reading"**
   - Science of retrieval practice
   - Testing yourself = stronger memory

2. **"AI as Quiz Master"**
   - Generate questions on any topic
   - Adjustable difficulty

3. **"The Feedback Loop"**
   - Wrong answer = learning opportunity
   - AI explains the why

#### Show Me Demo

**Flow:**
1. User enters a topic they studied
2. AI generates 3 questions
3. User answers
4. AI provides feedback

#### Mini Game – Question Arena

**Visual**: Arena with question cards flying at player.

**Interaction:**
1. User inputs a topic
2. AI generates questions
3. User answers (multiple choice or short answer)
4. Immediate feedback with explanations

**Completion**: User answers at least 3 questions on their chosen topic.

#### Prompt Recipe Unlocked

```
"Generate 5 quiz questions about [TOPIC] at [DIFFICULTY: beginner/intermediate/advanced].
Include answers and brief explanations."
```

---

### Act 3 – Spaced Checkpoint

**Learning objective**: Schedule reviews with AI reminders.

#### Knowledge Tiles

1. **"The Spacing Effect"**
   - Review at increasing intervals: 1 day, 3 days, 1 week, 1 month
   - Graph showing retention over time

2. **"AI-Powered Review Schedules"**
   - Generate custom review plans
   - Adapt based on what you forget

3. **"Build a Review Habit"**
   - 5-minute daily reviews
   - Focus on weak spots

#### Show Me Demo

**Flow:**
1. User enters topics learned this week
2. AI creates a spaced review schedule
3. Calendar view with checkpoints

#### Mini Game – Set Your Checkpoints

**Visual**: Mountain path with flag markers.

**Interaction:**
1. User inputs topics to review
2. Places checkpoint flags at review intervals
3. AI suggests optimal spacing

**Completion**: User creates a review schedule for at least one topic.

#### Prompt Recipe Unlocked

```
"Create a spaced review schedule for [TOPIC].
Include:
1. Review dates (1 day, 3 days, 1 week, 2 weeks, 1 month)
2. Key questions to test myself at each checkpoint"
```

---

## 7. Non-Functional Requirements

### Content and Tone

- **Reading level**: All visible copy ≤ 8th grade
- **Tone**: Friendly, clear, slightly witty. No sarcasm or condescension

### Accessibility

- High color contrast (WCAG AA minimum)
- Minimum 44px touch targets
- Clear focus states for interactive elements
- Alt text for key images
- Avoid rapid flashing or heavy motion

### Responsiveness

- Desktop layout is primary reference for Canva
- Include notes on how each mini-game collapses on tablet/mobile
- Touch-friendly interactions
- Readable text at mobile sizes

### Performance (for web version)

- Fast page loads (< 3 seconds on 4G)
- Smooth scrolling and animations
- No blocking scripts on initial load

### Browser Support (for web version)

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile Safari and Chrome on iOS/Android

---

## 8. Analytics and Feedback Hooks (Web Implementation)

### Event Tracking

Track:
- World and Act completion events
- Prompt recipe unlocked, viewed, and copied/saved
- Difficulty selection and changes
- Time spent per Act
- Drop-off points

### User Feedback

**Simple Yes/No survey per World:**
- "Did this help you learn a new way to use AI?"
- Optional open-ended feedback box

### Conversion Tracking

- Home page → World 1 start rate
- Act completion rate by World
- Prompt library engagement

### Optional Analytics

- Track which Worlds have highest drop-off (home → World 1; World 2 → 3, etc.)
- Most popular prompt recipes
- Average session length
- Returning user rate

---

## 9. Out of Scope (For Canva Prototype)

The following are NOT included in the Canva prototype phase:

- Live AI calls or prompt execution
- Sign-up, login, or user accounts
- Real data storage and progress persistence
- Complex physics or continuous side-scrolling gameplay
- Backend infrastructure
- API integrations
- Payment or subscription systems
- Social sharing features
- Multiplayer or collaborative features
- Mobile app versions (iOS/Android native)

---

## 10. Canva Prototype Requirements

### Deliverable Screens

The Canva artifact should include:

1. **Core Navigation**
   - Home Screen
   - Difficulty & Onboarding Overlay
   - World Map
   - My AI Moves (Prompt Library)
   - Help & About

2. **For Each World (1-4):**
   - World Detail Wrapper

3. **For Each Act (12 total across 4 Worlds):**
   - Knowledge Tiles view
   - Show Me Demo state
   - Mini-game default state
   - Mini-game "completed" state (with unlock card)

4. **Example States**
   - At least one example of the My AI Moves library filled with 4–6 cards
   - Progress states showing partial completion
   - Locked vs. unlocked worlds

### Design Guidelines

- Use original art only (no copyrighted characters)
- Retro-platformer visual style
- Consistent color palette across all screens
- Clear visual hierarchy
- Mobile-responsive considerations noted
- Interactive hotspots for clickable prototype

### File Organization

- Organized Canva pages/sections by screen type
- Clear naming convention for all elements
- Reusable components for repeated elements
- Style guide page with colors, fonts, and component examples

---

## Appendix A: World and Act Summary Table

| World | Theme | Act 1 | Act 2 | Act 3 |
|-------|-------|-------|-------|-------|
| **1. Brain Boss Plains** | Your brain is dramatic. AI makes things simple. | Meet the Brain Boss | Teaching Pipes | Hint Ladder |
| **2. Dungeon of Hard Tasks** | Learn while you solve real problems. | Door of Avoidance | Torchlight Mode | Distraction Mini Boss |
| **3. AI Marketplace** | Avoid hype. Pick tools that matter. | Hype Trap | Tool Test Chamber | Build Your Loadout |
| **4. Memory Mountain** | Make knowledge stick. | Mnemonic Forge | Recall Arena | Spaced Checkpoint |

**Total**: 4 Worlds × 3 Acts = 12 Acts

---

## Appendix B: Complete Prompt Recipe List

### World 1 Prompts

1. **Triple Explanation Prompt** (Act 1)
   ```
   Explain [TOPIC] in three ways:
   1. 5th-grade level
   2. 20-second summary
   3. Analogy using real-life examples
   ```

2. **Format Picker** (Act 2)
   ```
   Teach me [TOPIC] in [FORMAT: step by step, story, diagram, quick summary].
   ```

3. **Hint Helper** (Act 3)
   ```
   Help me solve [PROBLEM].
   Step 1: give me a small hint.
   Step 2: if I ask again, give a bigger hint.
   Step 3: only then show the full solution.
   ```

### World 2 Prompts

4. **Task Breaker** (Act 1)
   ```
   Break [TASK] into tiny steps in order, like a checklist a beginner could follow.
   ```

5. **Clarity Torch** (Act 2)
   ```
   For this task [TASK], tell me:
   1. What info I am missing
   2. What assumptions I am making
   3. The easiest first step that still moves me forward.
   ```

6. **Impact Checker** (Act 3)
   ```
   For this goal [GOAL], here are three options I am considering: [A], [B], [C].
   Which is most effective and why? Challenge my reasoning if I am wrong.
   ```

### World 3 Prompts

7. **Hype Detector** (Act 1)
   ```
   Evaluate this AI tool: [TOOL DESCRIPTION].
   1. What specific problem does it solve?
   2. What are the real limitations?
   3. Is this hype or useful for [MY USE CASE]?
   ```

8. **Tool Tester** (Act 2)
   ```
   I need a tool for [TASK]. Here are my top 3 options: [A], [B], [C].
   Help me create a simple test to compare them on:
   1. Speed
   2. Quality
   3. Ease of use
   ```

9. **Loadout Builder** (Act 3)
   ```
   Based on my work [DESCRIBE WORK], suggest:
   1. A core AI tool for daily tasks
   2. A specialized tool for [SPECIFIC NEED]
   3. One weekly routine to use them consistently
   ```

### World 4 Prompts

10. **Mnemonic Maker** (Act 1)
    ```
    Create a memorable way to remember [LIST/CONCEPT]:
    1. As an acronym
    2. As a short story
    3. As a visual metaphor
    ```

11. **Quiz Generator** (Act 2)
    ```
    Generate 5 quiz questions about [TOPIC] at [DIFFICULTY: beginner/intermediate/advanced].
    Include answers and brief explanations.
    ```

12. **Review Scheduler** (Act 3)
    ```
    Create a spaced review schedule for [TOPIC].
    Include:
    1. Review dates (1 day, 3 days, 1 week, 2 weeks, 1 month)
    2. Key questions to test myself at each checkpoint
    ```

---

## Appendix C: Glossary

- **Act**: A single learning module within a World (3 Acts per World)
- **Prompt Recipe**: A reusable AI prompt template that users unlock and save
- **Knowledge Tiles**: Read-only educational content cards
- **Mini Game**: Interactive learning activity within an Act
- **World**: A thematic collection of 3 related Acts
- **My AI Moves**: The user's personal library of unlocked prompt recipes
- **HUD**: Heads-Up Display - persistent UI elements showing progress and context

---

**End of Product Requirements Document v2.0**
