export const ROUTES = {
  home: '/',
  roles: '/roles',
  role: (slug: string) => `/role/${slug}`,
  roadmap: '/roadmap',
  projects: '/projects',
  portfolio: '/portfolio',
  achievements: '/achievements',
  motivation: '/motivation',
  references: '/references',
} as const

export const ROLE_SLUGS = [
  'bi-analyst',
  'data-analyst',
  'data-engineer',
  'data-scientist',
  'ml-engineer',
  'ai-engineer',
  'ui-ux-designer',
  'backend-engineer',
] as const

export type RoleSlug = typeof ROLE_SLUGS[number]

