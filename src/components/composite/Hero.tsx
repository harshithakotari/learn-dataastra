import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../config/routes'

export const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Master Data & Tech Roles with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
              Interactive Learning
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 mb-10 text-balance max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Structured learning paths, hands-on projects, and progress tracking for BI Analysts, Data Engineers, ML Engineers, and more.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => navigate(ROUTES.roles)}
            >
              Explore Roles
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate(ROUTES.roadmap)}
            >
              View Learning Paths
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}

