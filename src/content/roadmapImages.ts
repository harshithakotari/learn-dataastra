import type { RoleSlug } from '../config/routes'

export const roadmapImages: Record<RoleSlug, string> = {
  'bi-analyst': '/learn-dataastra/assets/roadmaps/bi-analyst.png?v=2025',
  'data-analyst': '/learn-dataastra/assets/roadmaps/data-analyst.png?v=2025',
  'data-engineer': '/learn-dataastra/assets/roadmaps/data-engineer.png?v=2025.1',
  'data-scientist': '/learn-dataastra/assets/roadmaps/data-scientist.png?v=2025',
  'ml-engineer': '/learn-dataastra/assets/roadmaps/ml-engineer.png?v=2025',
  'ai-engineer': '/learn-dataastra/assets/roadmaps/ai-engineer.png?v=2025',
  'ui-ux-designer': '/learn-dataastra/assets/roadmaps/ui-ux-designer.png?v=2025.3',
  'backend-engineer': '/learn-dataastra/assets/roadmaps/backend-engineer.png?v=2025',
}

export const getRoadmapImage = (slug: RoleSlug): string => {
  return roadmapImages[slug]
}

