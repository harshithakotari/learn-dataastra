import type { RoleContent } from './types'

export const mlEngineerContent: RoleContent = {
  role: 'ML Engineer',
  slug: 'ml-engineer',
  description: 'Build production-grade machine learning systems with focus on deployment, scalability, and reliability.',
  icon: '⚙️',
  categories: [
    {
      name: 'Software Engineering',
      levels: {
        Basic: {
          subtasks: [
            'Master Python programming and OOP',
            'Use version control (Git) professionally',
            'Write unit tests and integration tests',
            'Understand design patterns and principles',
            'Use Docker for containerization',
          ],
          project: 'Build a Python package with tests, documentation, and CI/CD for a data processing library',
        },
        Intermediate: {
          subtasks: [
            'Design scalable software architectures',
            'Implement RESTful APIs with FastAPI',
            'Use message queues (RabbitMQ, Kafka)',
            'Implement caching strategies (Redis)',
            'Handle concurrency and async programming',
          ],
          project: 'Build a microservices architecture for a ML prediction service with API gateway and caching',
        },
        Advanced: {
          subtasks: [
            'Design distributed systems at scale',
            'Implement service mesh and observability',
            'Use event-driven architectures',
            'Optimize system performance and latency',
            'Handle fault tolerance and resilience',
          ],
          project: 'Design a high-throughput ML serving system with auto-scaling, load balancing, and monitoring',
        },
      },
    },
    {
      name: 'ML Model Development',
      levels: {
        Basic: {
          subtasks: [
            'Train models with scikit-learn',
            'Use deep learning frameworks (PyTorch/TensorFlow)',
            'Perform hyperparameter tuning',
            'Evaluate models with proper metrics',
            'Handle overfitting and regularization',
          ],
          project: 'Build and optimize a classification model with cross-validation and hyperparameter tuning',
        },
        Intermediate: {
          subtasks: [
            'Implement custom model architectures',
            'Use ensemble methods and stacking',
            'Optimize training speed and efficiency',
            'Handle large-scale datasets',
            'Implement online learning systems',
          ],
          project: 'Create a real-time recommendation system with online learning and model updates',
        },
        Advanced: {
          subtasks: [
            'Design multi-model ensemble systems',
            'Implement AutoML pipelines',
            'Use neural architecture search',
            'Optimize models for edge deployment',
            'Handle multi-task and transfer learning',
          ],
          project: 'Build an AutoML system that automatically selects and tunes models for different tasks',
        },
      },
    },
    {
      name: 'MLOps & Deployment',
      levels: {
        Basic: {
          subtasks: [
            'Deploy models with Flask/FastAPI',
            'Use model serialization (pickle, ONNX)',
            'Implement basic CI/CD for ML',
            'Monitor model serving performance',
            'Version models and experiments',
          ],
          project: 'Deploy a trained model as a production API with Docker and basic monitoring',
        },
        Intermediate: {
          subtasks: [
            'Use MLflow or Kubeflow for orchestration',
            'Implement feature stores',
            'Build automated training pipelines',
            'Monitor data drift and model performance',
            'Implement A/B testing infrastructure',
          ],
          project: 'Create an end-to-end ML pipeline with automated retraining, A/B testing, and monitoring',
        },
        Advanced: {
          subtasks: [
            'Design ML platforms for self-service',
            'Implement advanced model serving (batch, streaming)',
            'Use model optimization (quantization, pruning)',
            'Handle model versioning and rollback',
            'Build multi-region ML infrastructure',
          ],
          project: 'Build a complete ML platform with feature store, model registry, and automated deployment',
        },
      },
    },
    {
      name: 'Data Engineering for ML',
      levels: {
        Basic: {
          subtasks: [
            'Build ETL pipelines for training data',
            'Handle data versioning (DVC)',
            'Create data validation checks',
            'Store data efficiently (Parquet, HDF5)',
            'Use SQL for data extraction',
          ],
          project: 'Build a data pipeline that extracts, validates, and versions training datasets',
        },
        Intermediate: {
          subtasks: [
            'Design feature engineering pipelines',
            'Implement streaming data processing',
            'Use distributed computing (Spark)',
            'Handle large-scale data processing',
            'Build data quality monitoring',
          ],
          project: 'Create a real-time feature engineering pipeline processing streaming data with Spark',
        },
        Advanced: {
          subtasks: [
            'Design lakehouse architectures for ML',
            'Implement feature stores at scale',
            'Build data versioning systems',
            'Optimize data pipelines for cost',
            'Handle petabyte-scale data processing',
          ],
          project: 'Design a data platform with feature store, data versioning, and optimized for ML workloads',
        },
      },
    },
    {
      name: 'Production ML Systems',
      levels: {
        Basic: {
          subtasks: [
            'Understand inference optimization basics',
            'Implement logging and monitoring',
            'Handle error cases and fallbacks',
            'Use load testing tools',
            'Understand latency requirements',
          ],
          project: 'Deploy a model with proper error handling, logging, and load testing',
        },
        Intermediate: {
          subtasks: [
            'Optimize model inference speed',
            'Implement caching strategies',
            'Use batch prediction systems',
            'Handle high-throughput serving',
            'Monitor system health and alerts',
          ],
          project: 'Build a high-performance model serving system with caching and batch prediction',
        },
        Advanced: {
          subtasks: [
            'Design distributed serving systems',
            'Implement model ensembles in production',
            'Use GPU optimization for inference',
            'Handle multi-model serving',
            'Build chaos engineering for ML systems',
          ],
          project: 'Design a multi-model serving platform with GPU optimization and 99.99% uptime',
        },
      },
    },
  ],
}

