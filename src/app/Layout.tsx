import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useProgress } from '../state/progress'
import { ROUTES } from '../config/routes'
import { APP_CONFIG } from '../config/app'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode')
      return stored ? JSON.parse(stored) : false
    }
    return false
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { getGlobalProgressStats } = useProgress()
  const globalStats = getGlobalProgressStats()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Home', path: ROUTES.home },
    { label: 'Roles', path: ROUTES.roles },
    { label: 'Roadmap', path: ROUTES.roadmap },
    { label: 'Projects', path: ROUTES.projects },
    { label: 'Portfolio', path: ROUTES.portfolio },
    { label: 'Motivation', path: ROUTES.motivation },
    { label: 'References', path: ROUTES.references },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to={ROUTES.home} className="flex items-center gap-2 group">
              <span className="text-2xl">📊</span>
              <h1 className="text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {APP_CONFIG.name}
              </h1>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Global Progress */}
          {globalStats.total > 0 && (
            <div className="mt-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-body font-medium text-slate-700 dark:text-slate-300">
                    Overall Progress
                  </span>
                  <span className="text-sm font-body font-semibold text-slate-900 dark:text-slate-100">
                    {globalStats.percentage}%
                  </span>
                </div>
                <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${globalStats.percentage}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
                <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {globalStats.completed} of {globalStats.total} tasks completed
                </div>
              </motion.div>
            </div>
          )}
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800"
            >
              <nav className="container-custom py-4 flex flex-col gap-2">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg font-body font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {globalStats.total > 0 && (
                  <div className="mt-4">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-body font-medium text-slate-700 dark:text-slate-300">
                          Overall Progress
                        </span>
                        <span className="text-sm font-body font-semibold text-slate-900 dark:text-slate-100">
                          {globalStats.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${globalStats.percentage}%` }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        />
                      </div>
                      <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                        {globalStats.completed} of {globalStats.total} tasks completed
                      </div>
                    </motion.div>
                  </div>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2025 {APP_CONFIG.name}. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

