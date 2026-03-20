export interface PlatformLayer {
  id: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface ServiceSubdomain {
  id: string;
  name: string;
  description: string;
  subdomains: {
    name: string;
    url: string;
    description?: string;
  }[];
  icon: string;
}

export interface WorkflowStep {
  from: string;
  to: string;
  label: string;
}

export interface AgentPersona {
  id: string;
  name: string;
  role: string;
  description: string;
  traits: string[];
  avatar: string;
  color: string;
}
