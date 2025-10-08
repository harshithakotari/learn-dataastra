import { useState } from 'react'
import { motion } from 'framer-motion'
import { RoleCard } from '../../components/composite/RoleCard'
import { SearchBar } from '../../components/composite/SearchBar'
import { allRoles } from '../../content/roles'
import { useProgress } from '../../state/progress'

export const RolesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { getRoleProgressStats } = useProgress()

  const filteredRoles = allRoles.filter(role =>
    role.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    role.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
            All Roles
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
            Explore all {allRoles.length} learning paths with structured skills, roadmaps, and projects.
          </p>
          <div className="max-w-xl">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="Search roles..."
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role, index) => (
            <RoleCard
              key={role.slug}
              role={role.role}
              slug={role.slug}
              description={role.description}
              icon={role.icon}
              progress={getRoleProgressStats(role.slug)}
              index={index}
            />
          ))}
        </div>

        {filteredRoles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400">
              No roles found matching "{searchQuery}"
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

