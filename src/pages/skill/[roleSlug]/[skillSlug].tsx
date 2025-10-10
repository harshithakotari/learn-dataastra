import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../../../components/ui/Button'
import { Badge } from '../../../components/ui/Badge'
import { Card } from '../../../components/ui/Card'
import { getRoleBySlug } from '../../../content/roles'
import type { RoleSlug } from '../../../config/routes'
import type { Level } from '../../../content/roles/types'

export default function SkillPage() {
  const { roleSlug, skillSlug } = useParams<{ roleSlug: string; skillSlug: string }>()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'basic' | 'intermediate' | 'advanced' | 'projects'>('basic')

  const role = getRoleBySlug(roleSlug as RoleSlug)
  
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

  const category = role.categories.find(cat => 
    cat.name.toLowerCase().replace(/[^a-z0-9]/g, '-') === skillSlug
  )

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            Skill not found
          </h1>
          <Button onClick={() => navigate(`/role/${roleSlug}`)}>
            Back to {role.role}
          </Button>
        </motion.div>
      </div>
    )
  }

  const levels: Level[] = ['Basic', 'Intermediate', 'Advanced']

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
            onClick={() => navigate(`/role/${roleSlug}`)}
            className="mb-6"
          >
            ← Back to {role.role}
          </Button>
          
          <div className="flex items-start gap-6 mb-6">
            <div className="text-6xl">{role.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                {category.name}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                Master {category.name} skills across all levels
              </p>
              <Badge variant="info">
                Part of {role.role} Learning Path
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {levels.map((level) => (
            <SkillCard
              key={level}
              level={level}
              category={category}
              roleSlug={roleSlug!}
              skillSlug={skillSlug!}
              isActive={activeTab === level.toLowerCase() as any}
              onClick={() => setActiveTab(level.toLowerCase() as any)}
            />
          ))}
          
          {/* Projects Card */}
          <SkillCard
            level="Projects"
            category={category}
            roleSlug={roleSlug!}
            skillSlug={skillSlug!}
            isActive={activeTab === 'projects'}
            onClick={() => setActiveTab('projects')}
            isProject={true}
          />
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="mt-12"
        >
          {activeTab !== 'projects' && (
            <SkillLevelContent
              level={activeTab.charAt(0).toUpperCase() + activeTab.slice(1) as Level}
              category={category}
              roleSlug={roleSlug!}
              skillSlug={skillSlug!}
            />
          )}
          {activeTab === 'projects' && (
            <ProjectsContent
              category={category}
              roleSlug={roleSlug!}
              skillSlug={skillSlug!}
            />
          )}
        </motion.div>
      </div>
    </div>
  )
}

interface SkillCardProps {
  level: string
  category: any
  roleSlug: string
  skillSlug: string
  isActive: boolean
  onClick: () => void
  isProject?: boolean
}

function SkillCard({ level, category, isActive, onClick, isProject = false }: SkillCardProps) {
  const levelContent = isProject ? null : category.levels[level as Level]
  const itemCount = isProject ? 1 : levelContent?.subtasks.length || 0
  
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        hover
        onClick={onClick}
        className={`
          cursor-pointer h-full flex flex-col relative overflow-hidden
          transition-all duration-200
          ${isActive 
            ? 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-slate-950 bg-primary-50 dark:bg-primary-900/20' 
            : 'hover:bg-slate-50 dark:hover:bg-slate-800'
          }
        `}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{isProject ? '⚡' : getLevelIcon(level)}</span>
          <div className="flex-1">
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              {level}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {isProject ? 'Hands-on Project' : `${itemCount} skills to learn`}
            </p>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {isProject 
              ? 'Apply your skills in a real-world project'
              : `Master ${level.toLowerCase()} concepts and techniques`
            }
          </p>
        </div>

        {isActive && (
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

function SkillLevelContent({ level, category }: any) {
  const levelContent = category.levels[level]
  
  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
          {level} Level - {category.name}
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Master the fundamental concepts and build a strong foundation.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-body font-semibold text-slate-700 dark:text-slate-300">
          Skills to Learn
        </h3>
        <div className="space-y-3">
          {levelContent.subtasks.map((subtask: string, index: number) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 dark:text-slate-300">{subtask}</p>
            </div>
          ))}
        </div>

        {levelContent.project && (
          <div className="mt-6 p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
            <h4 className="text-lg font-body font-semibold text-primary-700 dark:text-primary-300 mb-2">
              ⚡ Project: {levelContent.project}
            </h4>
            <p className="text-primary-600 dark:text-primary-400">
              Apply your skills in a hands-on project to reinforce your learning.
            </p>
          </div>
        )}
      </div>
    </Card>
  )
}

function ProjectsContent({ category }: any) {
  const projects = Object.values(category.levels).map((level: any) => level.project).filter(Boolean)
  
  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
          {category.name} Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Apply your skills through hands-on projects that build real-world experience.
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((project: string, index: number) => (
          <div key={index} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div className="flex-1">
                <h4 className="text-lg font-body font-semibold text-slate-900 dark:text-white mb-2">
                  {project}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  Hands-on project to reinforce your learning and build practical experience.
                </p>
                <Button size="sm" variant="outline">
                  Start Project
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

function getLevelIcon(level: string): string {
  switch (level.toLowerCase()) {
    case 'basic': return '🌱'
    case 'intermediate': return '🌿'
    case 'advanced': return '🌳'
    default: return '📚'
  }
}
