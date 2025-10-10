import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { allRoles } from '../content/roles'
import { getRoadmapImage } from '../content/roadmapImages'
import { useProgress } from '../state/progress'
import type { RoleSlug } from '../config/routes'

export default function RoadmapPage() {
  const navigate = useNavigate()
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const { getRoleProgressStats } = useProgress()

  // Ensure page loads properly on navigation
  useEffect(() => {
    // Force a re-render if needed
    const timer = setTimeout(() => {
      if (!document.querySelector('#root > div')) {
        console.log('RoadmapPage: Content not loaded, reloading...')
        window.location.reload()
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        setFocusedIndex(prev => (prev + 1) % allRoles.length)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        setFocusedIndex(prev => (prev - 1 + allRoles.length) % allRoles.length)
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (focusedIndex >= 0 && focusedIndex < allRoles.length) {
          navigate(`/role/${allRoles[focusedIndex].slug}`)
        }
      } else if (e.key === 'Escape') {
        setFocusedIndex(-1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate, focusedIndex])

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            Learning Paths
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Choose your learning path. Each role guides you through structured skills and hands-on projects.
            Use arrow keys to navigate, Enter or Space to select.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {allRoles.map((role, index) => (
              <RoadmapCard
                key={role.slug}
                role={role}
                index={index}
                isFocused={focusedIndex === index}
                progress={getRoleProgressStats(role.slug)}
                onClick={() => navigate(`/role/${role.slug}`)}
                onFocus={() => setFocusedIndex(index)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

interface RoadmapCardProps {
  role: {
    role: string
    slug: string
    description: string
    icon: string
  }
  index: number
  isFocused: boolean
  progress: { completed: number; total: number; percentage: number }
  onClick: () => void
  onFocus: () => void
}

function RoadmapCard({ role, index, isFocused, progress, onClick, onFocus }: RoadmapCardProps) {
  const [imageError, setImageError] = useState(false)
  const imagePath = getRoadmapImage(role.slug as RoleSlug)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.16 }}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Card
        hover
        onClick={onClick}
        onFocus={onFocus}
        className={`
          cursor-pointer h-full flex flex-col relative overflow-hidden
          transition-all duration-200
          ${isFocused 
            ? 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-slate-950' 
            : 'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-slate-950'
          }
        `}
        tabIndex={0}
        role="button"
        aria-label={`View ${role.role} roadmap`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick()
          }
        }}
      >
        {/* Progress indicator */}
        {progress.total > 0 && (
          <div className="absolute top-3 right-3">
            <Badge variant={progress.percentage === 100 ? 'success' : 'info'} size="sm">
              {progress.percentage}%
            </Badge>
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{role.icon}</span>
          <div className="flex-1">
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              {role.role}
            </h3>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1 text-sm">
          {role.description}
        </p>

        {/* Roadmap preview */}
        <div className="relative w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
          {!imageError ? (
            <img
              src={imagePath}
              alt={`${role.role} Roadmap`}
              className="w-full h-32 object-cover"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-1">🗺️</div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Roadmap preview
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Keyboard navigation hint */}
        {isFocused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-primary-500/5 border-2 border-primary-500 rounded-2xl pointer-events-none"
          />
        )}
      </Card>
    </motion.div>
  )
}
