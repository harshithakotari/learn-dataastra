# Learn DataAstra

Interactive learning platform for data and tech roles with roadmaps, skills tracking, and project-based learning.

## Features

- 🎯 **8 Role Pathways**: BI Analyst, Data Analyst, Data Engineer, Data Scientist, ML Engineer, AI Engineer, UI/UX Designer, Backend Engineer
- 📊 **Progress Tracking**: Persistent progress tracking at subtask, project, category, role, and global levels
- 🗺️ **Visual Roadmaps**: Interactive flowchart roadmaps for each role
- 📚 **Structured Learning**: Skills organized by categories with Basic, Intermediate, and Advanced levels
- ⚡ **Project-Based**: Hands-on project for each level to apply your learning
- 🎨 **Modern UI**: Built with React, Tailwind CSS, and Framer Motion

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

## Deployment (GitHub Pages)

```bash
npm run deploy
```

This will build and deploy to GitHub Pages.

## Project Structure

```
learn-dataastra/
  src/
    app/                # routing, layout, theme
    pages/              # page components
    components/         # reusable UI and composite components
    content/            # role data and content
    state/              # progress tracking state
    styles/             # global styles and theme
    config/             # app configuration
  public/
    assets/roadmaps/    # roadmap images
```

## Adding Roadmap Images

Drop PNG files into `/public/assets/roadmaps/` with the following names:
- `bi-analyst.png`
- `data-analyst.png`
- `data-engineer.png`
- `data-scientist.png`
- `ml-engineer.png`
- `ai-engineer.png`
- `ui-ux-designer.png`
- `backend-engineer.png`

## License

MIT

