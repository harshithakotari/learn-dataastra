import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { SkillCategoryCard } from '../../components/composite/SkillCategoryCard'
import { RoadmapPanel } from '../../components/composite/RoadmapPanel'
import { getRoleBySlug } from '../../content/roles'
import { useProgress } from '../../state/progress'
import { calculateCategoryProgress } from '../../state/progress/selectors'
import { ROUTES } from '../../config/routes'
import type { RoleSlug } from '../../config/routes'

export const RoleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const {
    state,
    initializeRole,
    toggleSubtask,
    toggleProject,
    getRoleProgressStats,
    clearRoleProgress,
  } = useProgress()

  const role = getRoleBySlug(slug as RoleSlug)

  useEffect(() => {
    if (role) {
      initializeRole(role)
    }
  }, [role, initializeRole])

  if (!role) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            Role not found
          </h1>
          <Button onClick={() => navigate(ROUTES.roles)}>
            View All Roles
          </Button>
        </div>
      </div>
    )
  }

  const roleProgress = state.roles[role.slug]
  const roleStats = getRoleProgressStats(role.slug)

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom section-spacing">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            ← Back
          </Button>
          
          <div className="flex items-start gap-4 mb-4">
            <div className="text-5xl">{role.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                {role.role}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                {role.description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="info">
                  {role.categories.length} Categories
                </Badge>
                {roleStats.total > 0 && (
                  <Badge variant={roleStats.percentage === 100 ? 'success' : 'purple'}>
                    {roleStats.completed}/{roleStats.total} completed
                  </Badge>
                )}
                {roleStats.total > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (confirm('Are you sure you want to clear all progress for this role?')) {
                        clearRoleProgress(role.slug)
                      }
                    }}
                  >
                    Clear Progress
                  </Button>
                )}
              </div>
            </div>
          </div>

          {roleStats.total > 0 && (
            <ProgressBar
              value={roleStats.percentage}
              size="lg"
            />
          )}
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
            Skills & Learning Path
          </h2>
          {role.categories.map((category, categoryIndex) => {
            const categoryProgress = roleProgress?.categories[categoryIndex]
            const categoryStats = categoryProgress
              ? calculateCategoryProgress(categoryProgress)
              : undefined

            return (
              <SkillCategoryCard
                key={categoryIndex}
                category={category}
                categoryIndex={categoryIndex}
                progress={categoryProgress}
                progressStats={categoryStats}
                onToggleSubtask={(levelIndex, subtaskIndex) => {
                  toggleSubtask(role.slug, categoryIndex, levelIndex, subtaskIndex)
                }}
                onToggleProject={(levelIndex) => {
                  toggleProject(role.slug, categoryIndex, levelIndex)
                }}
              />
            )
          })}
        </div>

        {/* Roadmap */}
        <RoadmapPanel roleSlug={role.slug as RoleSlug} roleName={role.role} />
      </div>
    </div>
  )
}

