import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Tabs } from '../ui/Tabs'
import { Checkbox } from '../ui/Checkbox'
import { Badge } from '../ui/Badge'
import { ProgressBar } from '../ui/ProgressBar'
import type { Category, Level } from '../../content/roles/types'
import type { CategoryProgress, LevelProgress } from '../../state/progress'

interface SkillCategoryCardProps {
  category: Category
  categoryIndex: number
  progress?: CategoryProgress
  progressStats?: { completed: number; total: number; percentage: number }
  onToggleSubtask: (levelIndex: number, subtaskIndex: number) => void
  onToggleProject: (levelIndex: number) => void
}

export const SkillCategoryCard = ({
  category,
  categoryIndex,
  progress,
  progressStats,
  onToggleSubtask,
  onToggleProject,
}: SkillCategoryCardProps) => {
  const levels: Level[] = ['Basic', 'Intermediate', 'Advanced']
  
  const getLevelProgress = (levelIndex: number): LevelProgress | undefined => {
    return progress?.levels[levelIndex]
  }

  const tabs = levels.map((level, levelIndex) => {
    const levelContent = category.levels[level]
    const levelProgress = getLevelProgress(levelIndex)

    return {
      id: level.toLowerCase(),
      label: level,
      content: (
        <div className="space-y-4">
          {/* Subtasks */}
          <div>
            <h4 className="text-sm font-body font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Skills & Subtasks
            </h4>
            <div className="space-y-2">
              {levelContent.subtasks.map((subtask, subtaskIndex) => {
                const isCompleted = levelProgress?.subtasks[subtaskIndex]?.completed || false
                return (
                  <motion.div
                    key={subtaskIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: subtaskIndex * 0.03 }}
                  >
                    <Checkbox
                      checked={isCompleted}
                      onChange={() => onToggleSubtask(levelIndex, subtaskIndex)}
                      label={subtask}
                      className={isCompleted ? 'opacity-60' : ''}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Project */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-lg">⚡</span>
              <h4 className="text-sm font-body font-semibold text-slate-700 dark:text-slate-300">
                Project
              </h4>
            </div>
            <Checkbox
              checked={levelProgress?.projectCompleted || false}
              onChange={() => onToggleProject(levelIndex)}
              label={levelContent.project}
              className={`${levelProgress?.projectCompleted ? 'opacity-60' : ''}`}
            />
          </div>
        </div>
      ),
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: categoryIndex * 0.1, duration: 0.3 }}
    >
      <Card>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
              {category.name}
            </h3>
            {progressStats && progressStats.total > 0 && (
              <Badge variant={progressStats.percentage === 100 ? 'success' : 'info'}>
                {progressStats.completed}/{progressStats.total}
              </Badge>
            )}
          </div>
          {progressStats && progressStats.total > 0 && (
            <ProgressBar
              value={progressStats.percentage}
              showLabel={false}
              size="sm"
            />
          )}
        </div>
        
        <Tabs tabs={tabs} />
      </Card>
    </motion.div>
  )
}

