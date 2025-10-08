import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { ProgressBar } from '../ui/ProgressBar'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../config/routes'
import type { ProgressStats } from '../../state/progress'

interface RoleCardProps {
  role: string
  slug: string
  description: string
  icon: string
  progress?: ProgressStats
  index?: number
}

export const RoleCard = ({ role, slug, description, icon, progress, index = 0 }: RoleCardProps) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Card
        hover
        onClick={() => navigate(ROUTES.role(slug))}
        className="cursor-pointer h-full flex flex-col"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="text-4xl">{icon}</div>
          <div className="flex-1">
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-1">
              {role}
            </h3>
            {progress && progress.total > 0 && (
              <Badge variant={progress.percentage === 100 ? 'success' : 'info'} size="sm">
                {progress.completed}/{progress.total} completed
              </Badge>
            )}
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
          {description}
        </p>
        
        {progress && progress.total > 0 && (
          <ProgressBar
            value={progress.percentage}
            showLabel={false}
            size="sm"
          />
        )}
      </Card>
    </motion.div>
  )
}

