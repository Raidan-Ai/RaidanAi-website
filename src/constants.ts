import { PlatformLayer, ServiceSubdomain, AgentPersona } from './types';

export const PLATFORM_LAYERS: PlatformLayer[] = [
  {
    id: 'data-layer',
    title: 'Smart Data Layer',
    description: 'The foundation of intelligence, processing diverse data sources from IoT to satellite imagery.',
    features: [
      'Text, Audio, Video, IoT, Maps',
      'Satellite Imagery (Sentinel-2, Landsat 8)',
      'YemenAPI Integration',
      'Real-time streaming (Kafka, Kinesis)',
      'NVIDIA NGC Data Lake'
    ],
    color: 'emerald'
  },
  {
    id: 'training-layer',
    title: 'AI Training & Innovation',
    description: 'Advanced model development and continuous learning pipelines.',
    features: [
      'LLMs & Multi-Modal Models',
      'Domain-specific models',
      'Continuous learning pipelines',
      'AutoML & Hyperparameter Optimization',
      'Scenario simulation'
    ],
    color: 'blue'
  },
  {
    id: 'production-layer',
    title: 'Production & API Layer',
    description: 'Scalable infrastructure for deploying and managing AI services.',
    features: [
      'API Gateway & SDKs',
      'Intelligent Routing',
      'Versioning & Sandboxes',
      'Plugin Marketplace',
      'Automated API creation'
    ],
    color: 'indigo'
  },
  {
    id: 'agents-layer',
    title: 'AI Agents & Applications',
    description: 'The interface of intelligence, where specialized agents solve complex problems.',
    features: [
      'Hakeem (Healthcare)',
      'YemenJPT (Journalism)',
      'ZOHOR (Visibility)',
      'General AI Agents',
      'App Generator'
    ],
    color: 'violet'
  },
  {
    id: 'governance-layer',
    title: 'Governance & Security',
    description: 'Ensuring trust, compliance, and optimal resource management.',
    features: [
      'RBAC & Permission Management',
      'Audit & Compliance (HIPAA, GDPR)',
      'Subscription & Billing',
      'Auto-scaling',
      'Security Monitoring Agents'
    ],
    color: 'rose'
  },
  {
    id: 'innovation-layer',
    title: 'Innovation & Extensibility',
    description: 'Expanding the platform through collaboration and generative tools.',
    features: [
      'Multi-agent collaborative framework',
      'AI-as-a-Service',
      'Generative tools suite',
      'Scenario testing',
      'Automated workflows'
    ],
    color: 'amber'
  }
];

export const AGENT_PERSONAS: AgentPersona[] = [
  {
    id: 'analytical-expert',
    name: 'Dr. Analyst',
    role: 'Data Scientist & Researcher',
    description: 'Specializes in deep data analysis, statistical modeling, and objective reporting.',
    traits: ['Precise', 'Objective', 'Thorough'],
    avatar: 'https://picsum.photos/seed/analyst/200',
    color: 'blue'
  },
  {
    id: 'creative-strategist',
    name: 'Nova',
    role: 'Creative Director',
    description: 'Focuses on innovative solutions, brand storytelling, and out-of-the-box thinking.',
    traits: ['Imaginative', 'Bold', 'Visionary'],
    avatar: 'https://picsum.photos/seed/creative/200',
    color: 'purple'
  },
  {
    id: 'empathetic-guide',
    name: 'Sage',
    role: 'Customer Success & Support',
    description: 'Prioritizes user experience, empathy, and clear, supportive communication.',
    traits: ['Patient', 'Empathetic', 'Clear'],
    avatar: 'https://picsum.photos/seed/sage/200',
    color: 'emerald'
  },
  {
    id: 'technical-architect',
    name: 'Atlas',
    role: 'Systems Engineer',
    description: 'Expert in infrastructure, security, and complex technical problem-solving.',
    traits: ['Logical', 'Efficient', 'Secure'],
    avatar: 'https://picsum.photos/seed/atlas/200',
    color: 'zinc'
  }
];

export const SERVICES: ServiceSubdomain[] = [
  {
    id: 'hakeem',
    name: 'Hakeem',
    description: 'Healthcare AI ecosystem for patients and providers.',
    icon: 'Activity',
    subdomains: [
      { name: 'Nemotron Voice', url: 'nemotron.hakeem.raidan.pro' },
      { name: 'Pipecat Orchestration', url: 'pipecat.hakeem.raidan.pro' },
      { name: 'NVIDIA Riva', url: 'riva.hakeem.raidan.pro' },
      { name: 'Healthcare Models', url: 'models.hakeem.raidan.pro' }
    ]
  },
  {
    id: 'yjpt',
    name: 'YemenJPT',
    description: 'Advanced suite for modern journalism and media production.',
    icon: 'Newspaper',
    subdomains: [
      { name: 'YemenAPI', url: 'api.yjpt.raidan.pro' },
      { name: 'Insight Center', url: 'insight.yjpt.raidan.pro' },
      { name: 'NLP Models', url: 'nlp.yjpt.raidan.pro' },
      { name: 'Fact Checking', url: 'factcheck.yjpt.raidan.pro' },
      { name: 'Media Tools', url: 'media.yjpt.raidan.pro' },
      { name: 'Agent Orchestration', url: 'agents.yjpt.raidan.pro' }
    ]
  },
  {
    id: 'zohor',
    name: 'ZOHOR',
    description: 'AI Visibility and audit engine for the digital age.',
    icon: 'Eye',
    subdomains: [
      { name: 'Audit Engine', url: 'audit.zohor.raidan.pro' },
      { name: 'Visibility Hub', url: 'hub.zohor.raidan.pro' },
      { name: 'Simulator', url: 'simulator.zohor.raidan.pro' },
      { name: 'SEO Engine', url: 'seo.zohor.raidan.pro' }
    ]
  },
  {
    id: 'ai',
    name: 'General AI',
    description: 'Versatile AI agents and generative tools for any enterprise.',
    icon: 'Cpu',
    subdomains: [
      { name: 'Generative Suite', url: 'generative.ai.raidan.pro' },
      { name: 'App Generator', url: 'apps.ai.raidan.pro' },
      { name: 'Collab Framework', url: 'collab.ai.raidan.pro' },
      { name: 'Simulation Tools', url: 'simulation.ai.raidan.pro' }
    ]
  },
  {
    id: 'consult',
    name: 'Consultation',
    description: 'Expert advisory and technical support for AI transformation.',
    icon: 'Users',
    subdomains: [
      { name: 'Enterprise Advisory', url: 'aiadvisory.consult.raidan.pro' },
      { name: 'Digital Transformation', url: 'dt.support.consult.raidan.pro' },
      { name: 'Custom Deployment', url: 'customagents.consult.raidan.pro' },
      { name: 'Security Advisory', url: 'security.consult.raidan.pro' }
    ]
  }
];
