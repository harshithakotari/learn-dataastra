import type { RoleContent } from './types'

export const dataEngineerContent: RoleContent = {
  role: 'Data Engineer',
  slug: 'data-engineer',
  description: 'Build and maintain scalable data pipelines and infrastructure for analytics and machine learning.',
  icon: '🔧',
  categories: [
    {
      name: 'Python & Programming',
      levels: {
        Basic: {
          subtasks: [
            'Master Python fundamentals (functions, classes, modules)',
            'Work with data structures (lists, dicts, sets)',
            'Handle file I/O and JSON/CSV parsing',
            'Use virtual environments and pip',
            'Write clean, documented code',
          ],
          project: 'Build a Python script to extract data from an API and save to CSV with error handling',
        },
        Intermediate: {
          subtasks: [
            'Write object-oriented code with design patterns',
            'Use Pandas and NumPy for data manipulation',
            'Implement error handling and logging',
            'Work with async programming and multithreading',
            'Use version control (Git) effectively',
          ],
          project: 'Create a data extraction framework that processes multiple file formats with retry logic',
        },
        Advanced: {
          subtasks: [
            'Optimize Python performance (profiling, vectorization)',
            'Build reusable data processing libraries',
            'Implement unit tests and CI/CD',
            'Use type hints and static analysis',
            'Understand memory management and garbage collection',
          ],
          project: 'Build a scalable ETL framework with plugins, configuration management, and monitoring',
        },
      },
    },
    {
      name: 'SQL & Database Design',
      levels: {
        Basic: {
          subtasks: [
            'Write complex SQL queries with JOINs',
            'Understand database normalization (1NF, 2NF, 3NF)',
            'Create tables with constraints and indexes',
            'Use transactions and ACID properties',
            'Perform basic query optimization',
          ],
          project: 'Design a normalized database schema for an e-commerce system with products, orders, and customers',
        },
        Intermediate: {
          subtasks: [
            'Design data warehouse schemas (star, snowflake)',
            'Create views, stored procedures, and triggers',
            'Implement partitioning strategies',
            'Optimize queries with execution plans',
            'Handle large-scale data migrations',
          ],
          project: 'Build a data warehouse with dimensional modeling for sales analytics',
        },
        Advanced: {
          subtasks: [
            'Design distributed database architectures',
            'Implement sharding and replication strategies',
            'Optimize for read/write workloads',
            'Use query tuning and index optimization',
            'Handle schema evolution and versioning',
          ],
          project: 'Design a multi-region database architecture with replication, failover, and performance optimization',
        },
      },
    },
    {
      name: 'ETL & Data Pipelines',
      levels: {
        Basic: {
          subtasks: [
            'Understand ETL concepts (Extract, Transform, Load)',
            'Use Apache Airflow or similar for scheduling',
            'Write data transformation scripts',
            'Handle data validation and quality checks',
            'Monitor pipeline execution and logs',
          ],
          project: 'Build an Airflow DAG that extracts data from an API, transforms it, and loads into a database',
        },
        Intermediate: {
          subtasks: [
            'Design idempotent and replayable pipelines',
            'Implement incremental data loading',
            'Use orchestration tools (Airflow, Prefect)',
            'Handle data lineage and metadata',
            'Implement error handling and alerting',
          ],
          project: 'Create a production-grade ETL pipeline with incremental loads, data quality checks, and monitoring',
        },
        Advanced: {
          subtasks: [
            'Build real-time streaming pipelines (Kafka, Spark Streaming)',
            'Implement CDC (Change Data Capture)',
            'Design event-driven architectures',
            'Optimize pipeline performance and costs',
            'Use data orchestration at scale',
          ],
          project: 'Build a real-time streaming pipeline processing millions of events with windowing and aggregations',
        },
      },
    },
    {
      name: 'Big Data Technologies',
      levels: {
        Basic: {
          subtasks: [
            'Understand distributed computing concepts',
            'Use Apache Spark for data processing',
            'Work with Hadoop ecosystem basics',
            'Store data in cloud object storage (S3, GCS)',
            'Understand data formats (Parquet, Avro, ORC)',
          ],
          project: 'Process a large dataset using Spark to perform aggregations and save results in Parquet format',
        },
        Intermediate: {
          subtasks: [
            'Optimize Spark jobs for performance',
            'Use PySpark DataFrame and SQL APIs',
            'Implement partitioning and bucketing',
            'Work with streaming data in Spark',
            'Use Delta Lake or Apache Iceberg',
          ],
          project: 'Build a Spark pipeline processing streaming logs with aggregations and storing in Delta Lake',
        },
        Advanced: {
          subtasks: [
            'Design lakehouse architectures',
            'Optimize cluster configurations',
            'Implement advanced Spark optimizations',
            'Use data lake best practices',
            'Handle petabyte-scale data processing',
          ],
          project: 'Design and implement a lakehouse architecture with tiered storage and optimized query performance',
        },
      },
    },
    {
      name: 'Cloud & Infrastructure',
      levels: {
        Basic: {
          subtasks: [
            'Use cloud platforms (AWS, GCP, or Azure)',
            'Deploy and manage virtual machines',
            'Store data in cloud storage services',
            'Use infrastructure as code basics (Terraform)',
            'Understand networking and security basics',
          ],
          project: 'Deploy a data pipeline on cloud infrastructure using Terraform and cloud storage',
        },
        Intermediate: {
          subtasks: [
            'Use managed data services (RDS, BigQuery, Redshift)',
            'Implement CI/CD for data pipelines',
            'Use containerization (Docker, Kubernetes)',
            'Monitor and log with cloud-native tools',
            'Implement IAM and security best practices',
          ],
          project: 'Build a containerized data pipeline deployed on Kubernetes with monitoring and auto-scaling',
        },
        Advanced: {
          subtasks: [
            'Design multi-cloud or hybrid architectures',
            'Optimize cloud costs and resource utilization',
            'Implement disaster recovery strategies',
            'Use service mesh and advanced networking',
            'Build platform engineering for data teams',
          ],
          project: 'Design a multi-region data platform with cost optimization, DR, and self-service capabilities',
        },
      },
    },
  ],
}

