import type { ProgressState, ProgressStats, CategoryProgress, LevelProgress } from './types'

// Calculate progress stats for a level
export const calculateLevelProgress = (level: LevelProgress): ProgressStats => {
  const subtasksCompleted = level.subtasks.filter(s => s.completed).length
  const subtasksTotal = level.subtasks.length
  const projectCompleted = level.projectCompleted ? 1 : 0
  const total = subtasksTotal + 1 // +1 for project

  const completed = subtasksCompleted + projectCompleted
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return { completed, total, percentage }
}

// Calculate progress stats for a category
export const calculateCategoryProgress = (category: CategoryProgress): ProgressStats => {
  let completed = 0
  let total = 0

  category.levels.forEach(level => {
    const levelStats = calculateLevelProgress(level)
    completed += levelStats.completed
    total += levelStats.total
  })

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return { completed, total, percentage }
}

// Calculate progress stats for a role
export const calculateRoleProgress = (roleSlug: string, state: ProgressState): ProgressStats => {
  const role = state.roles[roleSlug]
  if (!role) {
    return { completed: 0, total: 0, percentage: 0 }
  }

  let completed = 0
  let total = 0

  role.categories.forEach(category => {
    const categoryStats = calculateCategoryProgress(category)
    completed += categoryStats.completed
    total += categoryStats.total
  })

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return { completed, total, percentage }
}

// Calculate global progress across all roles
export const calculateGlobalProgress = (state: ProgressState): ProgressStats => {
  let completed = 0
  let total = 0

  Object.values(state.roles).forEach(role => {
    role.categories.forEach(category => {
      const categoryStats = calculateCategoryProgress(category)
      completed += categoryStats.completed
      total += categoryStats.total
    })
  })

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return { completed, total, percentage }
}

// Get all roles with their progress
export const getAllRolesProgress = (state: ProgressState, roleSlugs: string[]): Array<{ slug: string; stats: ProgressStats }> => {
  return roleSlugs.map(slug => ({
    slug,
    stats: calculateRoleProgress(slug, state),
  }))
}

