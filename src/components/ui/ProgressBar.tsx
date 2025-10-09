import { HTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning'
  label?: string
  smooth?: boolean
}

export const ProgressBar = ({
  value,
  max = 100,
  showLabel = true,
  size = 'md',
  variant = 'default',
  label = 'Progress',
  smooth = true,
  className = '',
  ...props
}: ProgressBarProps) => {
  const percentage = Math.min(Math.round((value / max) * 100), 100)
  
  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  }

  const getVariantColor = () => {
    if (variant === 'success') return 'bg-emerald-500'
    if (variant === 'warning') return 'bg-amber-500'
    if (percentage === 100) return 'bg-emerald-500'
    if (percentage >= 70) return 'bg-blue-500'
    if (percentage >= 40) return 'bg-indigo-500'
    return 'bg-primary-600'
  }

  return (
    <div className={className} {...props}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-body font-medium text-slate-700 dark:text-slate-300">
            {label}
          </span>
          <span className="text-sm font-body font-semibold text-slate-900 dark:text-slate-100">
            {percentage}%
          </span>
        </div>
      )}
      <div className={`w-full ${sizes[size]} bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden`}>
        <motion.div
          className={`h-full ${getVariantColor()} rounded-full transition-all duration-300`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            duration: smooth ? 0.5 : 0.3, 
            ease: 'easeOut',
            delay: smooth ? 0 : 0
          }}
        />
      </div>
    </div>
  )
}

