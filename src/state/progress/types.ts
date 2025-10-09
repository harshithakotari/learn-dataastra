export interface SubtaskProgress {
  id: string // Stable ID: ${roleSlug}:${categoryName}:${level}:${index}
  subtaskIndex: number
  completed: boolean
}

export interface LevelProgress {
  level: 'Basic' | 'Intermediate' | 'Advanced'
  subtasks: SubtaskProgress[]
  projectCompleted: boolean
  projectId: string // Stable ID for project
}

export interface CategoryProgress {
  categoryIndex: number
  categoryName: string
  levels: LevelProgress[]
}

export interface RoleProgress {
  roleSlug: string
  categories: CategoryProgress[]
  lastUpdated: number
}

export interface ProgressState {
  roles: Record<string, RoleProgress>
}

export interface ProgressStats {
  completed: number
  total: number
  percentage: number
}

// Helper function to generate stable IDs
export const generateTaskId = (roleSlug: string, categoryName: string, level: string, index: number): string => {
  return `${roleSlug}:${categoryName}:${level}:${index}`
}

export const generateProjectId = (roleSlug: string, categoryName: string, level: string): string => {
  return `${roleSlug}:${categoryName}:${level}:project`
}

