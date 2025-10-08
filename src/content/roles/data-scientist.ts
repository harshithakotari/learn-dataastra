import type { RoleContent } from './types'

export const dataScientistContent: RoleContent = {
  role: 'Data Scientist',
  slug: 'data-scientist',
  description: 'Apply statistical methods and machine learning to extract insights and build predictive models.',
  icon: '🔬',
  categories: [
    {
      name: 'Statistics & Probability',
      levels: {
        Basic: {
          subtasks: [
            'Master descriptive statistics (mean, median, variance)',
            'Understand probability distributions (normal, binomial)',
            'Calculate confidence intervals',
            'Perform hypothesis testing (t-tests, chi-square)',
            'Visualize statistical distributions',
          ],
          project: 'Analyze a dataset using statistical methods to identify significant patterns and trends',
        },
        Intermediate: {
          subtasks: [
            'Use regression analysis (linear, logistic)',
            'Understand sampling methods and bias',
            'Perform ANOVA and multivariate analysis',
            'Apply Bayesian inference basics',
            'Handle multiple testing corrections',
          ],
          project: 'Build a regression model to predict house prices and interpret feature importance',
        },
        Advanced: {
          subtasks: [
            'Master advanced statistical modeling',
            'Use time series analysis (ARIMA, seasonality)',
            'Implement causal inference methods',
            'Apply experimental design principles',
            'Use advanced Bayesian methods',
          ],
          project: 'Design and analyze a complex experiment with causal inference and propensity score matching',
        },
      },
    },
    {
      name: 'Machine Learning',
      levels: {
        Basic: {
          subtasks: [
            'Understand supervised vs unsupervised learning',
            'Use scikit-learn for basic models',
            'Train classification models (logistic, decision trees)',
            'Split data into train/test sets',
            'Evaluate models with accuracy, precision, recall',
          ],
          project: 'Build a classification model to predict customer churn with evaluation metrics',
        },
        Intermediate: {
          subtasks: [
            'Use ensemble methods (Random Forest, Gradient Boosting)',
            'Perform feature engineering and selection',
            'Handle imbalanced datasets',
            'Use cross-validation and hyperparameter tuning',
            'Understand bias-variance tradeoff',
          ],
          project: 'Create a fraud detection model with feature engineering and class imbalance handling',
        },
        Advanced: {
          subtasks: [
            'Master XGBoost, LightGBM, CatBoost',
            'Implement custom loss functions',
            'Use stacking and blending techniques',
            'Optimize model performance at scale',
            'Interpret complex models (SHAP, LIME)',
          ],
          project: 'Build an ensemble model for a Kaggle competition with advanced feature engineering and tuning',
        },
      },
    },
    {
      name: 'Deep Learning',
      levels: {
        Basic: {
          subtasks: [
            'Understand neural network fundamentals',
            'Use TensorFlow or PyTorch basics',
            'Build simple feedforward networks',
            'Understand activation functions and optimizers',
            'Train models with early stopping',
          ],
          project: 'Build a neural network for image classification on MNIST or CIFAR-10',
        },
        Intermediate: {
          subtasks: [
            'Use CNNs for computer vision tasks',
            'Implement RNNs and LSTMs for sequences',
            'Apply transfer learning with pretrained models',
            'Use data augmentation techniques',
            'Handle overfitting with regularization',
          ],
          project: 'Build a CNN for medical image classification using transfer learning',
        },
        Advanced: {
          subtasks: [
            'Design custom architectures',
            'Use attention mechanisms and Transformers',
            'Implement GANs or VAEs',
            'Optimize training (mixed precision, distributed)',
            'Deploy models with TensorFlow Serving or TorchServe',
          ],
          project: 'Build a Transformer-based model for NLP task with custom architecture and deployment',
        },
      },
    },
    {
      name: 'Data Processing & Feature Engineering',
      levels: {
        Basic: {
          subtasks: [
            'Clean and preprocess data (missing values, outliers)',
            'Encode categorical variables (one-hot, label encoding)',
            'Scale and normalize features',
            'Handle data types and formats',
            'Perform exploratory data analysis (EDA)',
          ],
          project: 'Perform comprehensive EDA on a dataset and prepare it for modeling',
        },
        Intermediate: {
          subtasks: [
            'Create polynomial and interaction features',
            'Extract date/time features',
            'Use dimensionality reduction (PCA, t-SNE)',
            'Handle text data (TF-IDF, word embeddings)',
            'Implement custom transformers with sklearn',
          ],
          project: 'Build a feature engineering pipeline for a Kaggle dataset with custom transformations',
        },
        Advanced: {
          subtasks: [
            'Use automated feature engineering (Featuretools)',
            'Implement target encoding and other advanced encodings',
            'Create domain-specific features',
            'Use embeddings for high-cardinality categoricals',
            'Build feature stores for production',
          ],
          project: 'Design a production feature engineering system with automated generation and versioning',
        },
      },
    },
    {
      name: 'MLOps & Production',
      levels: {
        Basic: {
          subtasks: [
            'Save and load trained models',
            'Create simple prediction APIs',
            'Version models and datasets',
            'Monitor model performance',
            'Understand model deployment basics',
          ],
          project: 'Deploy a trained model as a REST API using Flask or FastAPI',
        },
        Intermediate: {
          subtasks: [
            'Use experiment tracking (MLflow, Weights & Biases)',
            'Build model serving pipelines',
            'Implement A/B testing for models',
            'Monitor data drift and model decay',
            'Use containerization for deployment',
          ],
          project: 'Create an end-to-end ML pipeline with experiment tracking, deployment, and monitoring',
        },
        Advanced: {
          subtasks: [
            'Design ML platforms with feature stores',
            'Implement automated retraining pipelines',
            'Use model monitoring and observability',
            'Handle model versioning and rollback',
            'Build self-service ML infrastructure',
          ],
          project: 'Build a complete MLOps platform with automated training, deployment, and monitoring',
        },
      },
    },
  ],
}

