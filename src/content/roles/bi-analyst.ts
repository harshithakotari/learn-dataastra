import type { RoleContent } from './types'

export const biAnalystContent: RoleContent = {
  role: 'BI Analyst',
  slug: 'bi-analyst',
  description: 'Transform raw data into actionable business insights using visualization and reporting tools.',
  icon: '📊',
  categories: [
    {
      name: 'Excel/Spreadsheets',
      levels: {
        Basic: {
          subtasks: [
            'Master cell references, formulas (SUM, AVERAGE, COUNT)',
            'Use basic formatting and conditional formatting',
            'Create simple charts (bar, line, pie)',
            'Apply filters and sort data',
            'Understand data types and basic validation',
          ],
          project: 'Build a personal budget tracker with charts showing spending by category',
        },
        Intermediate: {
          subtasks: [
            'Use VLOOKUP, HLOOKUP, INDEX-MATCH for data lookup',
            'Create PivotTables and PivotCharts',
            'Apply advanced functions (IF, SUMIFS, COUNTIFS)',
            'Use data validation and named ranges',
            'Create dynamic dashboards with slicers',
          ],
          project: 'Build a sales performance dashboard analyzing quarterly revenue by product and region',
        },
        Advanced: {
          subtasks: [
            'Master array formulas and dynamic arrays',
            'Use Power Query for data transformation',
            'Create complex calculated fields in PivotTables',
            'Build automated reports with macros (VBA basics)',
            'Implement advanced charting techniques',
          ],
          project: 'Create an executive KPI dashboard with automated data refresh and drill-down capabilities',
        },
      },
    },
    {
      name: 'SQL',
      levels: {
        Basic: {
          subtasks: [
            'Write SELECT statements with WHERE clauses',
            'Use basic aggregate functions (COUNT, SUM, AVG, MIN, MAX)',
            'Understand GROUP BY and HAVING',
            'Perform simple JOINs (INNER, LEFT)',
            'Sort results with ORDER BY and LIMIT',
          ],
          project: 'Query a sample database to analyze customer purchase patterns and generate basic reports',
        },
        Intermediate: {
          subtasks: [
            'Write complex multi-table JOINs',
            'Use subqueries and CTEs (Common Table Expressions)',
            'Apply window functions (ROW_NUMBER, RANK, LAG, LEAD)',
            'Handle NULL values and data type conversions',
            'Optimize queries with indexes understanding',
          ],
          project: 'Build a customer segmentation analysis using RFM (Recency, Frequency, Monetary) metrics',
        },
        Advanced: {
          subtasks: [
            'Master advanced window functions and partitioning',
            'Use recursive CTEs for hierarchical data',
            'Implement complex business logic with CASE statements',
            'Optimize query performance and execution plans',
            'Handle date/time calculations and time-series analysis',
          ],
          project: 'Create a cohort retention analysis showing user behavior over time with month-over-month trends',
        },
      },
    },
    {
      name: 'BI Tools',
      levels: {
        Basic: {
          subtasks: [
            'Connect to data sources (Excel, CSV, databases)',
            'Create basic visualizations (bar, line, pie charts)',
            'Use filters and slicers for interactivity',
            'Design simple dashboards with multiple visuals',
            'Understand data relationships and joins',
          ],
          project: 'Build a sales overview dashboard in Power BI or Tableau showing revenue trends',
        },
        Intermediate: {
          subtasks: [
            'Create calculated fields and measures (DAX/calculated fields)',
            'Build drill-down and drill-through functionality',
            'Implement parameters for dynamic reporting',
            'Design mobile-responsive dashboards',
            'Use bookmarks and buttons for navigation',
          ],
          project: 'Create an interactive marketing campaign performance dashboard with drill-downs by channel',
        },
        Advanced: {
          subtasks: [
            'Master advanced DAX patterns (time intelligence, ranking)',
            'Implement row-level security (RLS)',
            'Optimize data models for performance',
            'Create complex custom visuals or calculations',
            'Build automated refresh schedules and alerts',
          ],
          project: 'Design an enterprise-level financial reporting suite with RLS, dynamic KPIs, and automated alerts',
        },
      },
    },
    {
      name: 'Business Metrics & KPIs',
      levels: {
        Basic: {
          subtasks: [
            'Understand common business metrics (revenue, profit, growth rate)',
            'Calculate basic KPIs (conversion rate, average order value)',
            'Interpret percentages and ratios',
            'Compare period-over-period changes',
            'Recognize data quality issues',
          ],
          project: 'Create a KPI scorecard tracking 5 key metrics for a small business',
        },
        Intermediate: {
          subtasks: [
            'Define and track industry-specific metrics',
            'Calculate customer lifetime value (CLV) and acquisition cost (CAC)',
            'Perform cohort analysis and segmentation',
            'Build funnel analysis for conversion tracking',
            'Understand statistical significance basics',
          ],
          project: 'Analyze e-commerce funnel performance and identify drop-off points with recommendations',
        },
        Advanced: {
          subtasks: [
            'Design balanced scorecards with leading/lagging indicators',
            'Implement predictive metrics and forecasting',
            'Perform root cause analysis on KPI changes',
            'Align metrics with strategic objectives (OKRs)',
            'Conduct A/B test analysis and statistical validation',
          ],
          project: 'Build a comprehensive business health dashboard with predictive indicators and actionable insights',
        },
      },
    },
    {
      name: 'Data Storytelling',
      levels: {
        Basic: {
          subtasks: [
            'Structure presentations with clear beginning, middle, end',
            'Choose appropriate chart types for data',
            'Use titles and labels effectively',
            'Highlight key insights with color and annotations',
            'Present data to non-technical audiences',
          ],
          project: 'Create a 5-slide presentation telling a data story about customer behavior trends',
        },
        Intermediate: {
          subtasks: [
            'Build narrative flow across multiple dashboards',
            'Use progressive disclosure techniques',
            'Apply design principles (contrast, alignment, proximity)',
            'Create executive summaries with actionable recommendations',
            'Handle questions and objections with data',
          ],
          project: 'Design an interactive story-driven dashboard that guides users through a business problem and solution',
        },
        Advanced: {
          subtasks: [
            'Craft compelling narratives for C-level executives',
            'Use advanced visualization techniques (small multiples, sparklines)',
            'Apply cognitive psychology principles to viz design',
            'Create self-service analytics experiences',
            'Influence decision-making with data-driven storytelling',
          ],
          project: 'Present a strategic initiative proposal with data storytelling that drives executive decision-making',
        },
      },
    },
  ],
}

