export type Level = 'Basic' | 'Intermediate' | 'Advanced'

export interface LevelContent {
  subtasks: string[]
  project: string
}

export interface Category {
  name: string
  levels: Record<Level, LevelContent>
}

export interface RoleContent {
  role: string
  slug: string
  description: string
  icon: string
  categories: Category[]
}

