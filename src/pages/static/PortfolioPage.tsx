import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  link: string
  challenges: string
  createdAt: string
  updatedAt: string
}

export const PortfolioPage = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [editingProject, setEditingProject] = useState<string | null>(null)

  // Load projects from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio-projects')
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects))
      } catch (error) {
        console.error('Error loading projects:', error)
      }
    }
  }, [])

  // Save projects to localStorage
  const saveProjects = (newProjects: Project[]) => {
    setProjects(newProjects)
    localStorage.setItem('portfolio-projects', JSON.stringify(newProjects))
  }

  const addProject = (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    saveProjects([newProject, ...projects])
    setIsAddingProject(false)
  }

  const updateProject = (id: string, updates: Partial<Omit<Project, 'id' | 'createdAt'>>) => {
    const updatedProjects = projects.map(project =>
      project.id === id
        ? { ...project, ...updates, updatedAt: new Date().toISOString() }
        : project
    )
    saveProjects(updatedProjects)
    setEditingProject(null)
  }

  const deleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      saveProjects(projects.filter(project => project.id !== id))
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white">
              Portfolio
            </h1>
            <Button onClick={() => setIsAddingProject(true)}>
              + Add Project
            </Button>
          </div>

          {/* Add Project Form */}
          <AnimatePresence>
            {isAddingProject && (
              <ProjectForm
                onSubmit={addProject}
                onCancel={() => setIsAddingProject(false)}
              />
            )}
          </AnimatePresence>

          {/* Edit Project Form */}
          <AnimatePresence>
            {editingProject && (
              <ProjectForm
                project={projects.find(p => p.id === editingProject)}
                onSubmit={(updates) => updateProject(editingProject, updates)}
                onCancel={() => setEditingProject(null)}
                isEditing={true}
              />
            )}
          </AnimatePresence>

          {/* Projects List */}
          <div className="space-y-6">
            {projects.length === 0 ? (
              <Card>
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🚀</div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                    Start Building Your Portfolio
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Add your first project to showcase your skills and achievements.
                  </p>
                  <Button onClick={() => setIsAddingProject(true)}>
                    Add Your First Project
                  </Button>
                </div>
              </Card>
            ) : (
              projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onEdit={() => setEditingProject(project.id)}
                  onDelete={() => deleteProject(project.id)}
                />
              ))
            )}
          </div>

          {/* Help Section */}
          {projects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-12"
            >
              <Card>
                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                    Portfolio Tips
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Include clear descriptions of what each project does</li>
                    <li>List all technologies and tools you used</li>
                    <li>Highlight challenges you overcame and what you learned</li>
                    <li>Add links to live demos or code repositories</li>
                    <li>Keep projects updated as you improve them</li>
                  </ul>
                </div>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

interface ProjectFormProps {
  project?: Project
  onSubmit: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void
  onCancel: () => void
  isEditing?: boolean
}

function ProjectForm({ project, onSubmit, onCancel, isEditing = false }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    tech: project?.tech.join(', ') || '',
    link: project?.link || '',
    challenges: project?.challenges || ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      tech: formData.tech.split(',').map(t => t.trim()).filter(Boolean)
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="mb-6">
        <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
          {isEditing ? 'Edit Project' : 'Add New Project'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Project Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Technologies Used (comma-separated)
            </label>
            <input
              type="text"
              value={formData.tech}
              onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
              placeholder="React, TypeScript, Tailwind CSS, Node.js"
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Project Link (optional)
            </label>
            <input
              type="url"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              placeholder="https://github.com/username/project"
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Challenges & Learnings
            </label>
            <textarea
              value={formData.challenges}
              onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
              rows={3}
              placeholder="Describe the challenges you faced and what you learned..."
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit">
              {isEditing ? 'Update Project' : 'Add Project'}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  onEdit: () => void
  onDelete: () => void
}

function ProjectCard({ project, index, onEdit, onDelete }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.2 }}
    >
      <Card>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={onEdit}>
              Edit
            </Button>
            <Button size="sm" variant="outline" onClick={onDelete}>
              Delete
            </Button>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>

        {project.tech.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <Badge key={techIndex} variant="info" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {project.link && (
          <div className="mb-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              View Project →
            </a>
          </div>
        )}

        {project.challenges && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Challenges & Learnings:
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {project.challenges}
            </p>
          </div>
        )}

        <div className="text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-700 pt-3">
          Created: {new Date(project.createdAt).toLocaleDateString()}
          {project.updatedAt !== project.createdAt && (
            <span> • Updated: {new Date(project.updatedAt).toLocaleDateString()}</span>
          )}
        </div>
      </Card>
    </motion.div>
  )
}

