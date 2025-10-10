import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { Tabs } from '../../components/ui/Tabs'
import { Checkbox } from '../../components/ui/Checkbox'
import { CategoryProgress } from '../../components/ui/CategoryProgress'
import { RoleProgress } from '../../components/ui/RoleProgress'
import { getRoleBySlug } from '../../content/roles'
import { useProgress } from '../../state/progress'
import type { RoleSlug } from '../../config/routes'
import type { Level } from '../../content/roles/types'

export default function RolePage() {
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            Role not found
          </h1>
          <Button onClick={() => navigate('/roadmap')}>
            View All Roadmaps
          </Button>
        </motion.div>
      </div>
    )
  }

  const roleProgress = state.roles[role.slug]
  const roleStats = getRoleProgressStats(role.slug)

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-12"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              // Use browser history back if available, otherwise navigate to roadmap
              if (window.history.length > 1) {
                window.history.back()
              } else {
                navigate('/roadmap')
              }
            }}
            className="mb-6"
          >
            ← Back to Roadmaps
          </Button>
          
          <div className="flex items-start gap-6 mb-6">
            <div className="text-6xl">{role.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-3">
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

          {/* Role Progress */}
          <RoleProgress roleSlug={role.slug} stats={roleStats} />
        </motion.div>

        {/* Skills Section - FIRST */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-8">
            Skills & Learning Path
          </h2>
          
          <div className="space-y-8">
            {role.categories.map((category, categoryIndex) => {
              const categoryProgress = roleProgress?.categories[categoryIndex]
              const levels: Level[] = ['Basic', 'Intermediate', 'Advanced']
              
              const tabs = levels.map((level, levelIndex) => {
                const levelContent = category.levels[level]
                const levelProgress = categoryProgress?.levels[levelIndex]
                
                return {
                  id: level.toLowerCase(),
                  label: level,
                  content: (
                    <div className="space-y-6">
                      {/* Subtasks */}
                      <div>
                        <h4 className="text-sm font-body font-semibold text-slate-700 dark:text-slate-300 mb-4">
                          Skills & Subtasks
                        </h4>
                        <div className="space-y-3">
                          {levelContent.subtasks.map((subtask, subtaskIndex) => {
                            const isCompleted = levelProgress?.subtasks[subtaskIndex]?.completed || false
                            const taskId = `${role.slug}:${category.name}:${level}:${subtaskIndex}`
                            
                            return (
                              <motion.div
                                key={taskId}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subtaskIndex * 0.03 }}
                              >
                                <Checkbox
                                  checked={isCompleted}
                                  onChange={() => toggleSubtask(role.slug, categoryIndex, levelIndex, subtaskIndex)}
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
                        <div className="flex items-start gap-2 mb-3">
                          <span className="text-lg">⚡</span>
                          <h4 className="text-sm font-body font-semibold text-slate-700 dark:text-slate-300">
                            Project
                          </h4>
                        </div>
                        <Checkbox
                          checked={levelProgress?.projectCompleted || false}
                          onChange={() => toggleProject(role.slug, categoryIndex, levelIndex)}
                          label={levelContent.project}
                          className={levelProgress?.projectCompleted ? 'opacity-60' : ''}
                        />
                      </div>
                    </div>
                  ),
                }
              })

              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.2 }}
                >
                  <Card>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                          {category.name}
                        </h3>
                        <Badge variant="info">
                          {levels.length} Levels
                        </Badge>
                      </div>
                      
                      <CategoryProgress 
                        roleSlug={role.slug}
                        categoryIndex={categoryIndex}
                        categoryProgress={categoryProgress}
                      />
                    </div>
                    
                    <Tabs tabs={tabs} />
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

