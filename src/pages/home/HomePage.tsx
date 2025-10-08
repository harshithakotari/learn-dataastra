import { useState } from 'react'
import { motion } from 'framer-motion'
import { Hero } from '../../components/composite/Hero'
import { RoleCard } from '../../components/composite/RoleCard'
import { SearchBar } from '../../components/composite/SearchBar'
import { allRoles } from '../../content/roles'
import { useProgress } from '../../state/progress'

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { getRoleProgressStats } = useProgress()

  const filteredRoles = allRoles.filter(role =>
    role.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    role.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const featuredRoles = filteredRoles.slice(0, 6)

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom section-spacing">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4 text-center">
              Choose Your Path
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto mb-6">
              Explore structured learning paths for data and tech roles with hands-on projects and progress tracking.
            </p>
            <div className="max-w-xl mx-auto">
              <SearchBar
                onSearch={setSearchQuery}
                placeholder="Search roles..."
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRoles.map((role, index) => (
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
      </section>
    </div>
  )
}

