import type { RoleSlug } from '../config/routes'

export const roadmapImages: Record<RoleSlug, string> = {
  'bi-analyst': '/assets/roadmaps/bi-analyst.png',
  'data-analyst': '/assets/roadmaps/data-analyst.png',
  'data-engineer': '/assets/roadmaps/data-engineer.png',
  'data-scientist': '/assets/roadmaps/data-scientist.png',
  'ml-engineer': '/assets/roadmaps/ml-engineer.png',
  'ai-engineer': '/assets/roadmaps/ai-engineer.png',
  'ui-ux-designer': '/assets/roadmaps/ui-ux-designer.png',
  'backend-engineer': '/assets/roadmaps/backend-engineer.png',
}

export const getRoadmapImage = (slug: RoleSlug): string => {
  return roadmapImages[slug]
}

