import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { Button } from '../../components/ui/Button'
import { allRoles } from '../../content/roles'
import { useProgress } from '../../state/progress'
import { ROLE_SLUGS } from '../../config/routes'
export default function AchievementsPage() {
  const { getRoleProgressStats, getGlobalProgressStats, clearAllProgress } = useProgress()
  const [selectedRole, setSelectedRole] = useState<string>('all')
  
  const globalStats = getGlobalProgressStats()
  const roleStats = ROLE_SLUGS.map(slug => ({
    slug,
    stats: getRoleProgressStats(slug)
  }))

  const filteredStats = selectedRole === 'all' 
    ? roleStats 
    : roleStats.filter(r => r.slug === selectedRole)

  const totalCompleted = roleStats.reduce((sum, role) => sum + role.stats.completed, 0)

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
            Achievements & Progress
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Track your learning journey across all roles and celebrate your accomplishments.
          </p>
        </motion.div>

        {/* Global Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                  Overall Progress
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Your journey across all learning paths
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-heading font-bold text-primary-600 dark:text-primary-400">
                  {globalStats.percentage}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {globalStats.completed} of {globalStats.total} tasks
                </div>
              </div>
            </div>
            
            <ProgressBar
              value={globalStats.percentage}
              size="lg"
              showLabel={false}
              className="mb-4"
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge variant={globalStats.percentage === 100 ? 'success' : 'info'}>
                  {globalStats.percentage === 100 ? 'Master Achieved!' : 'In Progress'}
                </Badge>
                <Badge variant="purple">
                  {roleStats.filter(r => r.stats.total > 0).length} Active Roles
                </Badge>
              </div>
              
              {totalCompleted > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (confirm('Are you sure you want to clear all progress? This cannot be undone.')) {
                      clearAllProgress()
                    }
                  }}
                >
                  Clear All Progress
                </Button>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Role Filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4">
            <label className="text-sm font-body font-medium text-slate-700 dark:text-slate-300">
              Filter by Role:
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
        </motion.div>

        {/* Role Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStats.map((role, index) => {
            const roleData = allRoles.find(r => r.slug === role.slug)
            if (!roleData || role.stats.total === 0) return null

            return (
              <motion.div
                key={role.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{roleData.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                        {roleData.role}
                      </h3>
                      <Badge variant={role.stats.percentage === 100 ? 'success' : 'info'} size="sm">
                        {role.stats.percentage}%
                      </Badge>
                    </div>
                  </div>
                  
                  <ProgressBar
                    value={role.stats.percentage}
                    showLabel={false}
                    size="sm"
                    className="mb-3"
                  />
                  
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {role.stats.completed} of {role.stats.total} tasks completed
                  </div>
                  
                  <div className="text-xs text-slate-500 dark:text-slate-500">
                    {roleData.description}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Achievement Stats */}
        {globalStats.total > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            className="mt-12"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                Achievement Statistics
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {totalCompleted}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Tasks Completed
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    {roleStats.filter(r => r.stats.percentage === 100).length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Roles Mastered
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {roleStats.filter(r => r.stats.total > 0).length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Active Learning Paths
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
