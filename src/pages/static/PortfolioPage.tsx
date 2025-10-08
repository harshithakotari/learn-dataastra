import { motion } from 'framer-motion'
import { Card } from '../../components/ui/Card'

export const PortfolioPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container-custom section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            Portfolio
          </h1>
          
          <Card>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                Showcase your completed projects and achievements here.
              </p>
              
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-4">
                Building Your Portfolio
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                As you complete projects from each learning path, document them here to build your professional portfolio. Include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-6">
                <li>Project descriptions and objectives</li>
                <li>Technologies and tools used</li>
                <li>Key learnings and challenges overcome</li>
                <li>Links to code repositories or live demos</li>
                <li>Screenshots or visualizations of results</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-4">
                Why Portfolio Matters
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                A strong portfolio demonstrates your practical skills to potential employers and clients. It shows not just what you know, but what you can build.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

