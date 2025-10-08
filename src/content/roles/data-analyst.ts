import type { RoleContent } from './types'

export const dataAnalystContent: RoleContent = {
  role: 'Data Analyst',
  slug: 'data-analyst',
  description: 'Extract insights from data using statistical analysis, SQL, and Python to drive business decisions.',
  icon: '📈',
  categories: [
    {
      name: 'SQL & Databases',
      levels: {
        Basic: {
          subtasks: [
            'Write SELECT queries with filtering and sorting',
            'Use aggregate functions and GROUP BY',
            'Perform INNER and LEFT JOINs',
            'Understand primary and foreign keys',
            'Export query results for analysis',
          ],
          project: 'Analyze an e-commerce database to identify top-selling products and customer demographics',
        },
        Intermediate: {
          subtasks: [
            'Master all JOIN types and set operations',
            'Write subqueries and Common Table Expressions',
            'Use window functions for advanced analytics',
            'Understand query optimization basics',
            'Handle date/time operations and string manipulation',
          ],
          project: 'Build a customer churn analysis identifying at-risk customers using behavioral patterns',
        },
        Advanced: {
          subtasks: [
            'Optimize complex queries with execution plans',
            'Write stored procedures and functions',
            'Implement advanced window functions',
            'Design efficient database queries for reporting',
            'Handle large datasets with partitioning strategies',
          ],
          project: 'Create a comprehensive sales performance analysis with year-over-year growth and seasonality trends',
        },
      },
    },
    {
      name: 'Python for Analysis',
      levels: {
        Basic: {
          subtasks: [
            'Learn Python basics (variables, loops, functions)',
            'Use Pandas for data loading and exploration',
            'Perform basic data cleaning (missing values, duplicates)',
            'Create simple visualizations with Matplotlib',
            'Work with CSV and Excel files',
          ],
          project: 'Load a CSV dataset, clean it, and create 5 visualizations showing key trends',
        },
        Intermediate: {
          subtasks: [
            'Master Pandas operations (groupby, merge, pivot)',
            'Use NumPy for numerical computations',
            'Create advanced visualizations with Seaborn',
            'Perform statistical analysis (correlations, distributions)',
            'Work with dates, time series, and text data',
          ],
          project: 'Analyze customer purchase behavior with cohort analysis and seasonal patterns',
        },
        Advanced: {
          subtasks: [
            'Optimize Pandas performance for large datasets',
            'Use scipy for advanced statistical tests',
            'Create interactive dashboards with Plotly',
            'Implement custom data transformations',
            'Automate reporting workflows with Python scripts',
          ],
          project: 'Build an automated monthly reporting system with statistical analysis and anomaly detection',
        },
      },
    },
    {
      name: 'Statistics & A/B Testing',
      levels: {
        Basic: {
          subtasks: [
            'Understand descriptive statistics (mean, median, mode)',
            'Calculate and interpret standard deviation',
            'Visualize distributions with histograms',
            'Understand correlation vs causation',
            'Perform basic hypothesis testing concepts',
          ],
          project: 'Analyze survey data to identify trends and relationships between variables',
        },
        Intermediate: {
          subtasks: [
            'Conduct t-tests and chi-square tests',
            'Understand p-values and confidence intervals',
            'Design and analyze A/B tests',
            'Calculate statistical significance and power',
            'Handle sample size calculations',
          ],
          project: 'Design and analyze an A/B test for a website feature change with statistical validation',
        },
        Advanced: {
          subtasks: [
            'Perform multivariate testing and ANOVA',
            'Understand Bayesian inference basics',
            'Implement regression analysis',
            'Handle multiple testing corrections',
            'Design sequential testing strategies',
          ],
          project: 'Conduct a comprehensive experiment analysis with multiple variants and segment-level insights',
        },
      },
    },
    {
      name: 'Data Visualization',
      levels: {
        Basic: {
          subtasks: [
            'Choose appropriate chart types for data',
            'Create clear and labeled visualizations',
            'Use color effectively for emphasis',
            'Design simple dashboards',
            'Understand data-ink ratio principles',
          ],
          project: 'Create a dashboard in Tableau/Power BI showing business performance metrics',
        },
        Intermediate: {
          subtasks: [
            'Apply design principles (Gestalt, contrast)',
            'Create interactive dashboards with filters',
            'Use small multiples and sparklines',
            'Implement drill-down capabilities',
            'Design for different audiences (technical vs executive)',
          ],
          project: 'Build an interactive sales analytics dashboard with regional drill-downs and trend analysis',
        },
        Advanced: {
          subtasks: [
            'Master advanced visualization techniques',
            'Create custom visualizations with D3.js or similar',
            'Design self-service analytics platforms',
            'Implement accessibility best practices',
            'Optimize dashboard performance',
          ],
          project: 'Design a comprehensive analytics suite with role-based views and predictive insights',
        },
      },
    },
    {
      name: 'Business Intelligence',
      levels: {
        Basic: {
          subtasks: [
            'Understand business metrics and KPIs',
            'Connect to various data sources',
            'Create basic reports and dashboards',
            'Perform exploratory data analysis',
            'Present findings to stakeholders',
          ],
          project: 'Create a weekly business report highlighting key metrics and trends',
        },
        Intermediate: {
          subtasks: [
            'Define and track custom KPIs',
            'Build automated reporting pipelines',
            'Perform customer segmentation',
            'Analyze marketing campaign performance',
            'Create data-driven recommendations',
          ],
          project: 'Analyze marketing ROI across channels and recommend budget allocation',
        },
        Advanced: {
          subtasks: [
            'Design enterprise BI strategies',
            'Implement predictive analytics for forecasting',
            'Create balanced scorecards',
            'Perform competitive and market analysis',
            'Drive strategic initiatives with data insights',
          ],
          project: 'Build a strategic planning dashboard with market trends, forecasts, and scenario analysis',
        },
      },
    },
  ],
}

