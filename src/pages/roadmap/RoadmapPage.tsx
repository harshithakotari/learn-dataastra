import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/ui/Card'
import { allRoles } from '../../content/roles'
import { getRoadmapImage } from '../../content/roadmapImages'
import { ROUTES } from '../../config/routes'
import type { RoleSlug } from '../../config/routes'

export const RoadmapPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            Learning Roadmaps
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Visual roadmaps showing the complete learning journey for each role. Click any roadmap to explore detailed skills and projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allRoles.map((role, index) => (
            <RoadmapCard
              key={role.slug}
              role={role.role}
              slug={role.slug as RoleSlug}
              icon={role.icon}
              index={index}
              onClick={() => navigate(ROUTES.role(role.slug))}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface RoadmapCardProps {
  role: string
  slug: RoleSlug
  icon: string
  index: number
  onClick: () => void
}

const RoadmapCard = ({ role, slug, icon, index, onClick }: RoadmapCardProps) => {
  const [imageError, setImageError] = useState(false)
  const imagePath = getRoadmapImage(slug)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Card hover onClick={onClick} className="cursor-pointer overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
            {role}
          </h3>
        </div>

        {!imageError ? (
          <div className="relative w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
            <img
              src={imagePath}
              alt={`${role} Roadmap`}
              className="w-full h-auto"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative w-full p-8 text-center bg-slate-100 dark:bg-slate-800 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700">
            <div className="text-4xl mb-2">🗺️</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Roadmap image not available
            </p>
          </div>
        )}
      </Card>
    </motion.div>
  )
}

