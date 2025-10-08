import { useState, useEffect, useCallback } from 'react'
import type { ProgressState, ProgressStats } from './types'
import {
  loadProgress,
  saveProgress,
  initializeRoleProgress,
  toggleSubtask as toggleSubtaskAction,
  toggleProject as toggleProjectAction,
  clearAllProgress as clearAllProgressAction,
  clearRoleProgress as clearRoleProgressAction,
} from './store'
import {
  calculateLevelProgress,
  calculateCategoryProgress,
  calculateRoleProgress,
  calculateGlobalProgress,
} from './selectors'
import type { RoleContent } from '../../content/roles/types'

export const useProgress = () => {
  const [state, setState] = useState<ProgressState>(() => loadProgress())

  useEffect(() => {
    saveProgress(state)
  }, [state])

  const initializeRole = useCallback((role: RoleContent) => {
    setState(currentState => {
      const newState = initializeRoleProgress(
        currentState,
        role.slug,
        role.categories.length,
        (categoryIndex) => {
          const category = role.categories[categoryIndex]
          return [
            { level: 'Basic', subtasksCount: category.levels.Basic.subtasks.length },
            { level: 'Intermediate', subtasksCount: category.levels.Intermediate.subtasks.length },
            { level: 'Advanced', subtasksCount: category.levels.Advanced.subtasks.length },
          ]
        }
      )
      return { ...newState }
    })
  }, [])

  const toggleSubtask = useCallback((
    roleSlug: string,
    categoryIndex: number,
    levelIndex: number,
    subtaskIndex: number
  ) => {
    setState(currentState => toggleSubtaskAction(currentState, roleSlug, categoryIndex, levelIndex, subtaskIndex))
  }, [])

  const toggleProject = useCallback((
    roleSlug: string,
    categoryIndex: number,
    levelIndex: number
  ) => {
    setState(currentState => toggleProjectAction(currentState, roleSlug, categoryIndex, levelIndex))
  }, [])

  const clearAllProgress = useCallback(() => {
    setState(clearAllProgressAction())
  }, [])

  const clearRoleProgress = useCallback((roleSlug: string) => {
    setState(currentState => clearRoleProgressAction(currentState, roleSlug))
  }, [])

  const getRoleProgressStats = useCallback((roleSlug: string): ProgressStats => {
    return calculateRoleProgress(roleSlug, state)
  }, [state])

  const getGlobalProgressStats = useCallback((): ProgressStats => {
    return calculateGlobalProgress(state)
  }, [state])

  return {
    state,
    initializeRole,
    toggleSubtask,
    toggleProject,
    clearAllProgress,
    clearRoleProgress,
    getRoleProgressStats,
    getGlobalProgressStats,
    calculateLevelProgress,
    calculateCategoryProgress,
  }
}

