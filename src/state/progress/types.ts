export interface SubtaskProgress {
  subtaskIndex: number
  completed: boolean
}

export interface LevelProgress {
  level: 'Basic' | 'Intermediate' | 'Advanced'
  subtasks: SubtaskProgress[]
  projectCompleted: boolean
}

export interface CategoryProgress {
  categoryIndex: number
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

