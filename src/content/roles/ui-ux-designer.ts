import type { RoleContent } from './types'

export const uiUxDesignerContent: RoleContent = {
  role: 'UI/UX Designer',
  slug: 'ui-ux-designer',
  description: 'Design intuitive and beautiful user experiences through research, prototyping, and visual design.',
  icon: '🎨',
  categories: [
    {
      name: 'Foundations',
      levels: {
        Basic: {
          subtasks: [
            'Understand design principles (contrast, hierarchy, balance)',
            'Learn color theory and typography basics',
            'Use design tools (Figma, Adobe XD, or Sketch)',
            'Create wireframes and mockups',
            'Understand grid systems and spacing',
          ],
          project: 'Design a landing page with proper typography, color scheme, and visual hierarchy',
        },
        Intermediate: {
          subtasks: [
            'Master design systems and component libraries',
            'Apply Gestalt principles to layouts',
            'Design responsive and adaptive interfaces',
            'Use advanced typography techniques',
            'Implement accessibility standards (WCAG)',
          ],
          project: 'Create a responsive web app design with a cohesive design system and component library',
        },
        Advanced: {
          subtasks: [
            'Build scalable design systems for enterprises',
            'Apply advanced motion design principles',
            'Design for multiple platforms and devices',
            'Create design tokens and variables',
            'Lead design critiques and reviews',
          ],
          project: 'Design a comprehensive design system with documentation, tokens, and governance guidelines',
        },
      },
    },
    {
      name: 'User Research & IA',
      levels: {
        Basic: {
          subtasks: [
            'Conduct user interviews and surveys',
            'Create user personas and journey maps',
            'Perform competitive analysis',
            'Understand information architecture basics',
            'Create site maps and user flows',
          ],
          project: 'Conduct user research for an app idea and create personas, journey maps, and user flows',
        },
        Intermediate: {
          subtasks: [
            'Perform usability testing and analyze results',
            'Use card sorting for IA',
            'Create empathy maps and service blueprints',
            'Conduct contextual inquiry',
            'Synthesize research into actionable insights',
          ],
          project: 'Conduct usability testing on an existing product and present findings with recommendations',
        },
        Advanced: {
          subtasks: [
            'Design and execute comprehensive research strategies',
            'Use advanced research methods (ethnography, diary studies)',
            'Perform quantitative analysis (analytics, A/B tests)',
            'Create research repositories and insights libraries',
            'Lead cross-functional research initiatives',
          ],
          project: 'Design a multi-method research study combining qualitative and quantitative methods',
        },
      },
    },
    {
      name: 'Prototyping & Interaction',
      levels: {
        Basic: {
          subtasks: [
            'Create low-fidelity prototypes',
            'Use prototyping tools for basic interactions',
            'Design micro-interactions',
            'Understand states and transitions',
            'Create clickable prototypes for testing',
          ],
          project: 'Build an interactive prototype for a mobile app with key user flows',
        },
        Intermediate: {
          subtasks: [
            'Design high-fidelity interactive prototypes',
            'Use advanced animations and transitions',
            'Implement conditional logic in prototypes',
            'Create realistic data-driven prototypes',
            'Design for touch gestures and interactions',
          ],
          project: 'Create a high-fidelity prototype with advanced animations and micro-interactions',
        },
        Advanced: {
          subtasks: [
            'Build code-based prototypes (React, Vue)',
            'Design complex interaction patterns',
            'Use motion design for storytelling',
            'Create VR/AR prototypes',
            'Prototype with real APIs and data',
          ],
          project: 'Build a fully functional coded prototype with real data and advanced interactions',
        },
      },
    },
    {
      name: 'Visual & Brand Design',
      levels: {
        Basic: {
          subtasks: [
            'Apply brand guidelines to designs',
            'Create mood boards and style tiles',
            'Design icons and illustrations',
            'Use photography and imagery effectively',
            'Maintain visual consistency',
          ],
          project: 'Design a brand identity including logo, color palette, and typography system',
        },
        Intermediate: {
          subtasks: [
            'Create comprehensive brand guidelines',
            'Design for different brand expressions',
            'Use advanced composition techniques',
            'Create custom illustrations and graphics',
            'Design for emotional impact',
          ],
          project: 'Design a marketing website that expresses brand personality across multiple pages',
        },
        Advanced: {
          subtasks: [
            'Lead brand evolution and redesigns',
            'Create motion graphics and animations',
            'Design for emerging technologies',
            'Use data visualization for storytelling',
            'Build brand systems at scale',
          ],
          project: 'Lead a complete brand redesign with system, guidelines, and implementation strategy',
        },
      },
    },
    {
      name: 'Handoff & Collaboration',
      levels: {
        Basic: {
          subtasks: [
            'Prepare design specs for developers',
            'Use design-to-code tools (Figma Dev Mode)',
            'Document design decisions',
            'Collaborate with developers on implementation',
            'Conduct basic QA on implemented designs',
          ],
          project: 'Create a complete design handoff package with specs, assets, and documentation',
        },
        Intermediate: {
          subtasks: [
            'Use version control for designs',
            'Write design documentation for teams',
            'Facilitate design workshops',
            'Create component specifications',
            'Implement design QA processes',
          ],
          project: 'Document a design system with usage guidelines and integration instructions for developers',
        },
        Advanced: {
          subtasks: [
            'Build design ops workflows',
            'Create automated design-to-code pipelines',
            'Lead cross-functional collaboration',
            'Establish design quality standards',
            'Mentor designers and developers',
          ],
          project: 'Establish a DesignOps practice with workflows, tools, and collaboration frameworks',
        },
      },
    },
  ],
}

