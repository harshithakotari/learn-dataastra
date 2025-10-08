import { motion } from 'framer-motion'
import { Card } from '../../components/ui/Card'

export const MotivationPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container-custom section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            Motivation & Learning Tips
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                🎯 Set Clear Goals
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Define specific, measurable objectives for your learning journey. Whether it's completing a role pathway, building a portfolio project, or landing a new job, having clear goals keeps you motivated.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                📅 Consistency Over Intensity
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Learning 30 minutes daily is more effective than cramming for hours once a week. Build a sustainable routine that fits your schedule and stick to it.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                🛠️ Build Real Projects
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Each level includes a hands-on project. Don't skip them! Building real projects solidifies your understanding and creates portfolio pieces.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                👥 Join Communities
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Connect with others on the same learning path. Share your progress, ask questions, and learn from peers in online communities and forums.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                🔄 Embrace Mistakes
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Every error is a learning opportunity. When you encounter bugs or challenges, dive deep to understand why something didn't work. That's where real learning happens.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                📊 Track Your Progress
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Use the built-in progress tracking to visualize your journey. Seeing your progress grow is incredibly motivating and helps you stay accountable.
              </p>
            </Card>
          </div>

          <Card className="mt-6">
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              💪 Remember
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 italic">
              "The expert in anything was once a beginner. Every data scientist, engineer, or analyst you admire started exactly where you are now. The only difference is they didn't give up."
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

