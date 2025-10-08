import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface CardProps extends HTMLMotionProps<'div'> {
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = false, padding = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-card'
    
    const paddingStyles = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    const hoverProps = hover
      ? {
          whileHover: { y: -2, scale: 1.01, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
          transition: { duration: 0.2 },
        }
      : {}

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${paddingStyles[padding]} ${className}`}
        {...hoverProps}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

