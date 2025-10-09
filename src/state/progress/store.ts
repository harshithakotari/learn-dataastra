import type { ProgressState, RoleProgress } from './types'
import { generateTaskId, generateProjectId } from './types'

const STORAGE_KEY = 'learn-dataastra-progress'

// Load progress from localStorage
export const loadProgress = (): ProgressState => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('Failed to load progress:', error)
  }
  return { roles: {} }
}

// Save progress to localStorage
export const saveProgress = (state: ProgressState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error('Failed to save progress:', error)
  }
}

// Initialize role progress if it doesn't exist
export const initializeRoleProgress = (
  state: ProgressState,
  roleSlug: string,
  categoriesCount: number,
  categoriesData: { 
    name: string; 
    levels: { level: string; subtasksCount: number }[] 
  }[]
): ProgressState => {
  if (!state.roles[roleSlug]) {
    const categories = Array.from({ length: categoriesCount }, (_, categoryIndex) => {
      const categoryData = categoriesData[categoryIndex]
      const levels = categoryData.levels.map(({ level, subtasksCount }) => ({
        level: level as 'Basic' | 'Intermediate' | 'Advanced',
        subtasks: Array.from({ length: subtasksCount }, (_, subtaskIndex) => ({
          id: generateTaskId(roleSlug, categoryData.name, level, subtaskIndex),
          subtaskIndex,
          completed: false,
        })),
        projectCompleted: false,
        projectId: generateProjectId(roleSlug, categoryData.name, level),
      }))
      return {
        categoryIndex,
        categoryName: categoryData.name,
        levels,
      }
    })

    state.roles[roleSlug] = {
      roleSlug,
      categories,
      lastUpdated: Date.now(),
    }
  }
  return state
}

// Get role progress
export const getRoleProgress = (state: ProgressState, roleSlug: string): RoleProgress | undefined => {
  return state.roles[roleSlug]
}

// Toggle subtask completion
export const toggleSubtask = (
  state: ProgressState,
  roleSlug: string,
  categoryIndex: number,
  levelIndex: number,
  subtaskIndex: number
): ProgressState => {
  const role = state.roles[roleSlug]
  if (!role) return state

  const category = role.categories[categoryIndex]
  if (!category) return state

  const level = category.levels[levelIndex]
  if (!level) return state

  const subtask = level.subtasks[subtaskIndex]
  if (!subtask) return state

  subtask.completed = !subtask.completed
  role.lastUpdated = Date.now()

  return { ...state }
}

// Toggle project completion
export const toggleProject = (
  state: ProgressState,
  roleSlug: string,
  categoryIndex: number,
  levelIndex: number
): ProgressState => {
  const role = state.roles[roleSlug]
  if (!role) return state

  const category = role.categories[categoryIndex]
  if (!category) return state

  const level = category.levels[levelIndex]
  if (!level) return state

  level.projectCompleted = !level.projectCompleted
  role.lastUpdated = Date.now()

  return { ...state }
}

// Clear all progress
export const clearAllProgress = (): ProgressState => {
  const state = { roles: {} }
  saveProgress(state)
  return state
}

// Clear role progress
export const clearRoleProgress = (state: ProgressState, roleSlug: string): ProgressState => {
  delete state.roles[roleSlug]
  saveProgress(state)
  return { ...state }
}

