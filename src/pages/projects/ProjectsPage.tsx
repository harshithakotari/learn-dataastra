import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { allRoles } from '../../content/roles'
import type { Level } from '../../content/roles/types'

interface Project {
  role: string
  roleSlug: string
  icon: string
  category: string
  level: Level
  project: string
}

export const ProjectsPage = () => {
  const [selectedRole, setSelectedRole] = useState<string>('all')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')

  const allProjects = useMemo(() => {
    const projects: Project[] = []
    allRoles.forEach(role => {
      role.categories.forEach(category => {
        const levels: Level[] = ['Basic', 'Intermediate', 'Advanced']
        levels.forEach(level => {
          projects.push({
            role: role.role,
            roleSlug: role.slug,
            icon: role.icon,
            category: category.name,
            level,
            project: category.levels[level].project,
          })
        })
      })
    })
    return projects
  }, [])

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      if (selectedRole !== 'all' && project.roleSlug !== selectedRole) return false
      if (selectedLevel !== 'all' && project.level !== selectedLevel) return false
      return true
    })
  }, [allProjects, selectedRole, selectedLevel])

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
            All Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
            Browse all hands-on projects across roles and skill levels. Each project helps you apply what you've learned.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-body font-medium text-slate-700 dark:text-slate-300 mb-2">
                Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-4 py-2 font-body bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Roles</option>
                {allRoles.map(role => (
                  <option key={role.slug} value={role.slug}>
                    {role.role}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-body font-medium text-slate-700 dark:text-slate-300 mb-2">
                Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 font-body bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Levels</option>
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {(selectedRole !== 'all' || selectedLevel !== 'all') && (
              <div className="flex items-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedRole('all')
                    setSelectedLevel('all')
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getLevelVariant = (level: Level) => {
    if (level === 'Basic') return 'success'
    if (level === 'Intermediate') return 'warning'
    return 'purple'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
    >
      <Card hover className="h-full">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">{project.icon}</span>
          <div className="flex-1">
            <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-1">
              {project.role}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {project.category}
            </p>
          </div>
          <Badge variant={getLevelVariant(project.level)}>
            {project.level}
          </Badge>
        </div>
        
        <div className="flex items-start gap-2">
          <span className="text-lg mt-0.5">⚡</span>
          <p className="text-slate-700 dark:text-slate-300 font-body">
            {project.project}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}

