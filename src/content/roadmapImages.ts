import type { RoleSlug } from '../config/routes'

export const roadmapImages: Record<RoleSlug, string> = {
  'bi-analyst': '/learn-dataastra/assets/roadmaps/bi-analyst.png',
  'data-analyst': '/learn-dataastra/assets/roadmaps/data-analyst.png',
  'data-engineer': '/learn-dataastra/assets/roadmaps/data-engineer.png',
  'data-scientist': '/learn-dataastra/assets/roadmaps/data-scientist.png',
  'ml-engineer': '/learn-dataastra/assets/roadmaps/ml-engineer.png',
  'ai-engineer': '/learn-dataastra/assets/roadmaps/ai-engineer.png',
  'ui-ux-designer': '/learn-dataastra/assets/roadmaps/ui-ux-designer.png',
  'backend-engineer': '/learn-dataastra/assets/roadmaps/backend-engineer.png',
}

export const getRoadmapImage = (slug: RoleSlug): string => {
  return roadmapImages[slug]
}

