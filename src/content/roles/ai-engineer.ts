import type { RoleContent } from './types'

export const aiEngineerContent: RoleContent = {
  role: 'AI Engineer',
  slug: 'ai-engineer',
  description: 'Build and deploy AI applications using LLMs, computer vision, and cutting-edge AI technologies.',
  icon: '🤖',
  categories: [
    {
      name: 'Large Language Models',
      levels: {
        Basic: {
          subtasks: [
            'Use OpenAI API or similar LLM APIs',
            'Understand prompt engineering basics',
            'Build simple chatbot applications',
            'Use embeddings for semantic search',
            'Implement basic RAG (Retrieval Augmented Generation)',
          ],
          project: 'Build a chatbot that answers questions from your documentation using RAG',
        },
        Intermediate: {
          subtasks: [
            'Fine-tune LLMs for specific tasks',
            'Implement advanced prompt engineering',
            'Use LangChain or similar frameworks',
            'Build multi-step reasoning agents',
            'Optimize token usage and costs',
          ],
          project: 'Create an AI agent that performs multi-step research tasks with web search integration',
        },
        Advanced: {
          subtasks: [
            'Train custom LLMs from scratch',
            'Implement RLHF (Reinforcement Learning from Human Feedback)',
            'Build production LLM applications at scale',
            'Optimize inference for low latency',
            'Use model distillation and quantization',
          ],
          project: 'Build a production-grade LLM application with custom fine-tuning and optimized serving',
        },
      },
    },
    {
      name: 'Computer Vision',
      levels: {
        Basic: {
          subtasks: [
            'Use pretrained models for image classification',
            'Understand CNNs and transfer learning',
            'Perform object detection with YOLO or R-CNN',
            'Implement image preprocessing and augmentation',
            'Use OpenCV for image manipulation',
          ],
          project: 'Build an image classification system for a specific domain using transfer learning',
        },
        Intermediate: {
          subtasks: [
            'Implement semantic segmentation',
            'Use GANs for image generation',
            'Build face recognition systems',
            'Perform video analysis and tracking',
            'Optimize models for edge devices',
          ],
          project: 'Create a real-time object detection system that runs on edge devices',
        },
        Advanced: {
          subtasks: [
            'Design custom CV architectures',
            'Use 3D vision and depth estimation',
            'Implement neural rendering techniques',
            'Build multi-modal vision-language models',
            'Optimize CV pipelines for production',
          ],
          project: 'Build a multi-modal system combining vision and language for visual question answering',
        },
      },
    },
    {
      name: 'AI Application Development',
      levels: {
        Basic: {
          subtasks: [
            'Build web interfaces for AI models (Gradio, Streamlit)',
            'Create REST APIs for model serving',
            'Implement user authentication and authorization',
            'Handle file uploads and processing',
            'Deploy AI apps on cloud platforms',
          ],
          project: 'Build a web app that lets users upload images for AI-powered analysis',
        },
        Intermediate: {
          subtasks: [
            'Design conversational AI interfaces',
            'Implement streaming responses',
            'Build multi-modal applications',
            'Handle asynchronous processing',
            'Use vector databases (Pinecone, Weaviate)',
          ],
          project: 'Create a conversational AI app with streaming responses and semantic search',
        },
        Advanced: {
          subtasks: [
            'Build production-grade AI platforms',
            'Implement real-time AI features',
            'Design scalable AI architectures',
            'Use advanced caching and optimization',
            'Handle compliance and safety measures',
          ],
          project: 'Design an enterprise AI platform with multi-tenancy, security, and content filtering',
        },
      },
    },
    {
      name: 'Vector Databases & Embeddings',
      levels: {
        Basic: {
          subtasks: [
            'Understand embeddings and vector representations',
            'Use OpenAI embeddings or similar',
            'Implement semantic search',
            'Store vectors in databases (Pinecone, Weaviate)',
            'Perform similarity search',
          ],
          project: 'Build a semantic search engine for a document collection',
        },
        Intermediate: {
          subtasks: [
            'Optimize embedding models for domain',
            'Implement hybrid search (keyword + semantic)',
            'Use metadata filtering with vectors',
            'Handle large-scale vector collections',
            'Implement re-ranking strategies',
          ],
          project: 'Create a sophisticated search system with hybrid search and re-ranking',
        },
        Advanced: {
          subtasks: [
            'Build custom embedding models',
            'Implement approximate nearest neighbor algorithms',
            'Design distributed vector databases',
            'Optimize vector search performance',
            'Use multi-vector and late-interaction models',
          ],
          project: 'Design a high-performance vector search system handling millions of embeddings',
        },
      },
    },
    {
      name: 'AI Safety & Ethics',
      levels: {
        Basic: {
          subtasks: [
            'Understand AI bias and fairness',
            'Implement content filtering',
            'Use moderation APIs',
            'Handle PII and data privacy',
            'Implement basic safety guardrails',
          ],
          project: 'Add safety measures to an AI chatbot including content filtering and PII detection',
        },
        Intermediate: {
          subtasks: [
            'Design evaluation frameworks for AI safety',
            'Implement red-teaming strategies',
            'Use constitutional AI principles',
            'Handle adversarial inputs',
            'Monitor AI outputs for safety issues',
          ],
          project: 'Build a comprehensive safety system for an AI application with monitoring and alerts',
        },
        Advanced: {
          subtasks: [
            'Design AI governance frameworks',
            'Implement interpretability and explainability',
            'Build alignment mechanisms',
            'Handle complex ethical scenarios',
            'Create responsible AI policies',
          ],
          project: 'Design an enterprise AI governance platform with auditing, compliance, and safety measures',
        },
      },
    },
  ],
}

