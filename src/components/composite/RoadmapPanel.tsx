import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import type { RoleSlug } from '../../config/routes'
import { getRoadmapImage } from '../../content/roadmapImages'

interface RoadmapPanelProps {
  roleSlug: RoleSlug
  roleName: string
}

export const RoadmapPanel = ({ roleSlug, roleName }: RoadmapPanelProps) => {
  const [imageError, setImageError] = useState(false)
  const imagePath = getRoadmapImage(roleSlug)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
          Learning Roadmap
        </h2>
        
        {!imageError ? (
          <div className="relative w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
            <img
              src={imagePath}
              alt={`${roleName} Roadmap`}
              className="w-full h-auto"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative w-full p-12 text-center bg-slate-100 dark:bg-slate-800 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-lg font-body font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Roadmap image not added yet
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Place a PNG file at: <code className="px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded text-xs">
                /public/assets/roadmaps/{roleSlug}.png
              </code>
            </p>
          </div>
        )}
      </Card>
    </motion.div>
  )
}

