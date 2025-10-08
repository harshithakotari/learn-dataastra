import type { RoleContent } from './types'

export const backendEngineerContent: RoleContent = {
  role: 'Backend Engineer',
  slug: 'backend-engineer',
  description: 'Build robust server-side applications, APIs, and systems that power modern applications.',
  icon: '⚡',
  categories: [
    {
      name: 'Programming & APIs',
      levels: {
        Basic: {
          subtasks: [
            'Master a backend language (Python, Node.js, Java, or Go)',
            'Build RESTful APIs with proper HTTP methods',
            'Handle request/response cycles',
            'Implement input validation and error handling',
            'Use JSON for data exchange',
          ],
          project: 'Build a RESTful API for a todo app with CRUD operations',
        },
        Intermediate: {
          subtasks: [
            'Design API architecture and versioning',
            'Implement authentication (JWT, OAuth)',
            'Use middleware and request interceptors',
            'Handle file uploads and streaming',
            'Implement rate limiting and pagination',
          ],
          project: 'Build a user authentication system with JWT, role-based access control, and refresh tokens',
        },
        Advanced: {
          subtasks: [
            'Design microservices architectures',
            'Implement GraphQL APIs',
            'Use API gateways and service mesh',
            'Build real-time APIs with WebSockets',
            'Implement advanced API security patterns',
          ],
          project: 'Design a microservices-based e-commerce backend with API gateway and event-driven communication',
        },
      },
    },
    {
      name: 'Databases & Modeling',
      levels: {
        Basic: {
          subtasks: [
            'Design relational database schemas',
            'Write SQL queries for CRUD operations',
            'Understand primary/foreign keys and constraints',
            'Use an ORM (SQLAlchemy, Sequelize, Prisma)',
            'Perform basic database migrations',
          ],
          project: 'Design and implement a database for a blog platform with users, posts, and comments',
        },
        Intermediate: {
          subtasks: [
            'Optimize queries with indexes',
            'Use transactions and ACID properties',
            'Implement caching strategies (Redis)',
            'Work with NoSQL databases (MongoDB, DynamoDB)',
            'Design data models for scale',
          ],
          project: 'Build a social media backend with optimized queries, caching, and both SQL and NoSQL databases',
        },
        Advanced: {
          subtasks: [
            'Design distributed database systems',
            'Implement database sharding and replication',
            'Use event sourcing and CQRS patterns',
            'Optimize for high-throughput workloads',
            'Handle database migrations at scale',
          ],
          project: 'Design a multi-region database architecture with replication, sharding, and eventual consistency',
        },
      },
    },
    {
      name: 'Systems & Architecture',
      levels: {
        Basic: {
          subtasks: [
            'Understand client-server architecture',
            'Use environment variables and config',
            'Implement logging and error tracking',
            'Deploy applications to cloud platforms',
            'Use containerization basics (Docker)',
          ],
          project: 'Deploy a Node.js/Python app to a cloud platform with proper logging and configuration',
        },
        Intermediate: {
          subtasks: [
            'Design scalable system architectures',
            'Implement load balancing and reverse proxies',
            'Use message queues (RabbitMQ, Kafka)',
            'Implement background job processing',
            'Design for high availability',
          ],
          project: 'Build a job processing system with queues, workers, and retry logic for failed jobs',
        },
        Advanced: {
          subtasks: [
            'Design distributed systems at scale',
            'Implement service discovery and orchestration',
            'Use event-driven and reactive architectures',
            'Design for fault tolerance and resilience',
            'Implement chaos engineering practices',
          ],
          project: 'Design a resilient distributed system with circuit breakers, bulkheads, and graceful degradation',
        },
      },
    },
    {
      name: 'Testing & Quality',
      levels: {
        Basic: {
          subtasks: [
            'Write unit tests for business logic',
            'Use testing frameworks (Jest, pytest, JUnit)',
            'Test API endpoints with integration tests',
            'Understand test coverage and TDD basics',
            'Mock external dependencies',
          ],
          project: 'Write comprehensive tests for an API achieving 80%+ code coverage',
        },
        Intermediate: {
          subtasks: [
            'Implement end-to-end testing',
            'Use test doubles (mocks, stubs, fakes)',
            'Perform load testing and benchmarking',
            'Implement contract testing for APIs',
            'Use continuous testing in CI/CD',
          ],
          project: 'Build a testing strategy with unit, integration, and load tests for a production API',
        },
        Advanced: {
          subtasks: [
            'Design testing strategies for microservices',
            'Implement chaos testing and fault injection',
            'Use property-based testing',
            'Perform security testing (OWASP)',
            'Build test automation frameworks',
          ],
          project: 'Create a comprehensive testing framework for a distributed system with chaos engineering',
        },
      },
    },
    {
      name: 'Deployment & Ops',
      levels: {
        Basic: {
          subtasks: [
            'Use version control (Git) effectively',
            'Set up CI/CD pipelines',
            'Deploy with Docker containers',
            'Monitor application logs',
            'Implement health checks and readiness probes',
          ],
          project: 'Set up a CI/CD pipeline that builds, tests, and deploys a containerized app',
        },
        Intermediate: {
          subtasks: [
            'Use Kubernetes for container orchestration',
            'Implement infrastructure as code (Terraform)',
            'Set up monitoring and alerting (Prometheus, Grafana)',
            'Manage secrets and configuration',
            'Implement blue-green or canary deployments',
          ],
          project: 'Deploy a microservices app on Kubernetes with monitoring, logging, and automated rollouts',
        },
        Advanced: {
          subtasks: [
            'Design multi-region deployment strategies',
            'Implement GitOps workflows',
            'Use service mesh (Istio, Linkerd)',
            'Optimize cloud costs and resource usage',
            'Build platform engineering capabilities',
          ],
          project: 'Build a multi-region platform with automated deployments, observability, and cost optimization',
        },
      },
    },
  ],
}

