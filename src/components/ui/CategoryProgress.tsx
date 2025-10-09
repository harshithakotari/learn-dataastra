import { motion } from 'framer-motion'
import { ProgressBar } from './ProgressBar'
import type { CategoryProgress as CategoryProgressType } from '../../state/progress'
import { calculateCategoryProgress } from '../../state/progress/selectors'

interface CategoryProgressProps {
  roleSlug: string
  categoryIndex: number
  categoryProgress?: CategoryProgressType
}

export function CategoryProgress({ categoryProgress }: CategoryProgressProps) {
  if (!categoryProgress) {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-body font-medium text-slate-700 dark:text-slate-300">
            Category Progress
          </span>
          <span className="text-sm font-body font-semibold text-slate-900 dark:text-slate-100">
            0%
          </span>
        </div>
        <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full w-0 bg-primary-600 rounded-full" />
        </div>
      </div>
    )
  }

  const stats = calculateCategoryProgress(categoryProgress)

  if (stats.total === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-body font-medium text-slate-700 dark:text-slate-300">
          Category Progress
        </span>
        <span className="text-sm font-body font-semibold text-slate-900 dark:text-slate-100">
          {stats.percentage}%
        </span>
      </div>
      <ProgressBar
        value={stats.percentage}
        showLabel={false}
        size="sm"
        className="transition-all duration-300"
      />
      <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
        {stats.completed} of {stats.total} items completed
      </div>
    </motion.div>
  )
}
