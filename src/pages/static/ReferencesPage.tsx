import { motion } from 'framer-motion'
import { Card } from '../../components/ui/Card'

export const ReferencesPage = () => {
  const resources = [
    {
      category: 'Learning Platforms',
      items: [
        { name: 'Coursera', url: 'https://www.coursera.org' },
        { name: 'edX', url: 'https://www.edx.org' },
        { name: 'DataCamp', url: 'https://www.datacamp.com' },
        { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn' },
      ],
    },
    {
      category: 'Documentation & Guides',
      items: [
        { name: 'Python Official Docs', url: 'https://docs.python.org' },
        { name: 'SQL Tutorial (W3Schools)', url: 'https://www.w3schools.com/sql/' },
        { name: 'TensorFlow Guides', url: 'https://www.tensorflow.org/guide' },
        { name: 'React Documentation', url: 'https://react.dev' },
      ],
    },
    {
      category: 'Data Science & ML',
      items: [
        { name: 'Towards Data Science', url: 'https://towardsdatascience.com' },
        { name: 'Machine Learning Mastery', url: 'https://machinelearningmastery.com' },
        { name: 'Papers with Code', url: 'https://paperswithcode.com' },
        { name: 'Hugging Face', url: 'https://huggingface.co' },
      ],
    },
    {
      category: 'Design Resources',
      items: [
        { name: 'Figma Resources', url: 'https://www.figma.com/community' },
        { name: 'Nielsen Norman Group', url: 'https://www.nngroup.com' },
        { name: 'Laws of UX', url: 'https://lawsofux.com' },
        { name: 'Dribbble', url: 'https://dribbble.com' },
      ],
    },
    {
      category: 'Developer Tools',
      items: [
        { name: 'GitHub', url: 'https://github.com' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
        { name: 'Docker Documentation', url: 'https://docs.docker.com' },
        { name: 'AWS Documentation', url: 'https://docs.aws.amazon.com' },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            References & Resources
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
            Curated collection of learning resources, documentation, and tools to support your journey.
          </p>

          <div className="space-y-6">
            {resources.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Card>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                    {section.category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                      >
                        <span className="text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-body font-medium">
                          {item.name}
                        </span>
                        <svg
                          className="w-4 h-4 text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

