# Learn DataAstra - Application Architecture

## 🏗️ **High-Level Architecture**

```
┌─────────────────────────────────────────────────────────────────┐
│                        GitHub Pages Hosting                    │
│                    https://harshithakotari.github.io/          │
└─────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Client-Side SPA                            │
│                    React + Vite + Router                       │
└─────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Browser Storage Layer                       │
│                   localStorage + sessionStorage                │
└─────────────────────────────────────────────────────────────────┘
```

## 📁 **Project Structure**

```
learn-dataastra/
├── public/                          # Static assets
│   ├── 404.html                    # SPA routing fallback
│   └── assets/
│       └── roadmaps/               # Role roadmap images
│           ├── bi-analyst.png
│           ├── data-analyst.png
│           ├── data-engineer.png
│           ├── data-scientist.png
│           ├── ml-engineer.png
│           ├── ai-engineer.png
│           ├── ui-ux-designer.png
│           └── backend-engineer.png
│
├── src/
│   ├── app/                        # Main application layout
│   │   └── Layout.tsx              # Global layout + navigation
│   │
│   ├── components/                 # Reusable UI components
│   │   ├── ui/                     # Basic UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── CategoryProgress.tsx
│   │   │   └── RoleProgress.tsx
│   │   └── composite/              # Complex components
│   │       ├── Hero.tsx
│   │       ├── RoleCard.tsx
│   │       ├── SkillCategoryCard.tsx
│   │       ├── RoadmapPanel.tsx
│   │       └── SearchBar.tsx
│   │
│   ├── pages/                      # Route components
│   │   ├── home/HomePage.tsx       # Landing page
│   │   ├── roles/RolesPage.tsx     # Roles directory
│   │   ├── role/[slug].tsx         # Individual role pages
│   │   ├── roadmap.tsx             # Roadmap overview
│   │   ├── projects/ProjectsPage.tsx
│   │   ├── achievements/AchievementsPage.tsx
│   │   └── static/                 # Static content pages
│   │       ├── PortfolioPage.tsx
│   │       ├── MotivationPage.tsx
│   │       └── ReferencesPage.tsx
│   │
│   ├── content/                    # Data and content
│   │   ├── roles/                  # Role-specific content
│   │   │   ├── types.ts            # TypeScript interfaces
│   │   │   ├── index.ts            # Role exports
│   │   │   ├── bi-analyst.ts
│   │   │   ├── data-analyst.ts
│   │   │   ├── data-engineer.ts
│   │   │   ├── data-scientist.ts
│   │   │   ├── ml-engineer.ts
│   │   │   ├── ai-engineer.ts
│   │   │   ├── ui-ux-designer.ts
│   │   │   └── backend-engineer.ts
│   │   └── roadmapImages.ts        # Image path mappings
│   │
│   ├── config/                     # Configuration
│   │   ├── app.ts                  # App constants
│   │   └── routes.ts               # Route definitions
│   │
│   ├── state/                      # State management
│   │   └── progress/               # Progress tracking
│   │       ├── types.ts            # Progress interfaces
│   │       ├── store.ts            # localStorage persistence
│   │       ├── selectors.ts        # Progress calculations
│   │       └── hooks.ts            # React hooks
│   │
│   ├── styles/                     # Styling
│   │   ├── globals.css             # Global styles
│   │   └── theme.css               # Theme variables
│   │
│   ├── App.tsx                     # Main app component
│   └── main.tsx                    # Entry point
│
├── .github/workflows/              # CI/CD
│   └── deploy.yml                  # GitHub Actions
│
├── package.json                    # Dependencies
├── vite.config.ts                  # Vite configuration
├── tailwind.config.ts              # Tailwind CSS config
├── tsconfig.json                   # TypeScript config
└── README.md                       # Documentation
```

## 🔄 **Data Flow Architecture**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   User Action   │───▶│  React Router   │───▶│   Component     │
│  (Navigation)   │    │   (Routing)     │    │   Rendering     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │                        │
                                ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Progress State │◀───│   localStorage  │◀───│  State Hooks    │
│   (Persistence) │    │   (Storage)     │    │ (useProgress)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🎯 **Component Architecture**

### **Layout Hierarchy**
```
App.tsx
└── Layout.tsx (Global Layout)
    ├── Header (Navigation + Theme Toggle)
    ├── Main Content (Route-based)
    │   ├── HomePage
    │   ├── RolesPage
    │   ├── RolePage (Dynamic)
    │   ├── RoadmapPage
    │   ├── ProjectsPage
    │   ├── AchievementsPage
    │   └── Static Pages
    └── Footer
```

### **Component Dependencies**
```
Layout.tsx
├── Navigation Links
├── Mobile Menu
└── Theme Provider

RolePage
├── RoleProgress
├── SkillCategoryCard[]
│   ├── CategoryProgress
│   └── Subtask Lists
└── RoadmapPanel

HomePage
└── Hero Component
```

## 🗄️ **State Management Architecture**

### **Progress Tracking System**
```
ProgressState
├── RoleProgress (per role)
│   ├── CategoryProgress (per category)
│   │   ├── SubtaskProgress (per subtask)
│   │   └── ProjectProgress (per project)
│   └── Overall Role Percentage
└── GlobalProgress (across all roles)
```

### **Data Persistence**
```
localStorage Structure:
{
  "progress": {
    "bi-analyst": {
      "Excel/Spreadsheets": {
        "basic": {
          "subtasks": [true, false, true, ...],
          "project": false
        }
      }
    }
  },
  "darkMode": true
}
```

## 🚀 **Deployment Architecture**

```
Developer Machine
├── Git Commit
├── Push to GitHub
└── GitHub Actions Trigger

GitHub Actions Workflow:
├── Checkout Code
├── Setup Node.js
├── Install Dependencies
├── Build Production Bundle
├── Deploy to GitHub Pages
└── Cache Assets

GitHub Pages:
├── Static File Serving
├── SPA Routing (404.html)
├── Asset Optimization
└── CDN Distribution
```

## 🔧 **Technical Stack**

### **Frontend Framework**
- **React 18** - Component-based UI
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### **Routing & Navigation**
- **React Router DOM** - Client-side routing
- **Browser History API** - Navigation state
- **GitHub Pages SPA Support** - 404.html fallback

### **Styling & UI**
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and transitions
- **Custom Design System** - Consistent components

### **State Management**
- **React Context + Hooks** - Local state
- **localStorage** - Persistence
- **Custom Progress Tracking** - Granular state

### **Build & Deployment**
- **Vite Build** - Production bundling
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static hosting

## 🌐 **Routing Architecture**

### **Route Structure**
```
/ (Home)
├── /roles (Roles Directory)
├── /role/:slug (Individual Role Pages)
│   ├── /role/bi-analyst
│   ├── /role/data-analyst
│   ├── /role/data-engineer
│   ├── /role/data-scientist
│   ├── /role/ml-engineer
│   ├── /role/ai-engineer
│   ├── /role/ui-ux-designer
│   └── /role/backend-engineer
├── /roadmap (Roadmap Overview)
├── /projects (Projects Page)
├── /portfolio (Portfolio)
├── /achievements (Progress Tracking)
├── /motivation (Motivation)
└── /references (References)
```

### **Navigation Flow**
```
User Journey:
Home → Roles → Individual Role → Skills → Back Navigation
  ↓
Roadmap → Role Selection → Detailed View
  ↓
Progress Tracking → Achievement Monitoring
```

## 🔒 **Browser Navigation Handling**

### **SPA Routing on GitHub Pages**
```
Direct URL Access:
1. Browser requests /role/bi-analyst
2. GitHub Pages serves 404.html
3. 404.html redirects to /?/role/bi-analyst
4. App.tsx processes redirect
5. React Router navigates to correct route

Back/Forward Navigation:
1. User clicks back button
2. popstate event fires
3. Layout.tsx handles navigation
4. Scroll restoration
5. Component re-render
```

## 📊 **Performance Architecture**

### **Bundle Optimization**
- **Code Splitting** - Route-based chunks
- **Tree Shaking** - Dead code elimination
- **Asset Optimization** - Image compression
- **Caching Strategy** - Browser + CDN

### **Loading Strategy**
- **Lazy Loading** - Route components
- **Image Optimization** - WebP format
- **Progressive Enhancement** - Core functionality first

## 🔍 **Development Architecture**

### **Development Workflow**
```
Local Development:
├── npm run dev (Vite dev server)
├── Hot Module Replacement
├── TypeScript checking
└── ESLint validation

Production Build:
├── TypeScript compilation
├── Vite bundling
├── Asset optimization
└── GitHub Pages deployment
```

### **Code Organization Principles**
- **Feature-based structure** - Related code grouped
- **Separation of concerns** - UI, logic, data separated
- **Reusable components** - DRY principle
- **Type safety** - Full TypeScript coverage
- **Performance optimization** - Lazy loading and memoization

This architecture ensures scalability, maintainability, and optimal user experience across all devices and browsers.
