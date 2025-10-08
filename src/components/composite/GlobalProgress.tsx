import { motion } from 'framer-motion'
import { ProgressBar } from '../ui/ProgressBar'
import type { ProgressStats } from '../../state/progress'

interface GlobalProgressProps {
  stats: ProgressStats
}

export const GlobalProgress = ({ stats }: GlobalProgressProps) => {
  if (stats.total === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 shadow-sm"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-body font-semibold text-slate-700 dark:text-slate-300">
          Global Progress
        </h3>
        <span className="text-lg">🎯</span>
      </div>
      <ProgressBar
        value={stats.percentage}
        showLabel={false}
        size="md"
      />
      <div className="mt-2 text-xs text-slate-600 dark:text-slate-400">
        {stats.completed} of {stats.total} tasks completed
      </div>
    </motion.div>
  )
}

