import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Activity, 
  Newspaper, 
  Eye, 
  Cpu, 
  Users, 
  ArrowRight, 
  Database, 
  BrainCircuit, 
  Globe, 
  ShieldCheck, 
  Zap,
  Layers,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  Plus,
  CheckCircle2,
  Sparkles,
  UserCircle
} from 'lucide-react';
import { useState, useRef } from 'react';
import { PLATFORM_LAYERS, SERVICES, AGENT_PERSONAS } from './constants';
import { AgentPersona } from './types';

const IconMap: Record<string, any> = {
  Activity,
  Newspaper,
  Eye,
  Cpu,
  Users
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [personas, setPersonas] = useState<AgentPersona[]>(AGENT_PERSONAS);
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>(AGENT_PERSONAS[0].id);
  const [isAddingPersona, setIsAddingPersona] = useState(false);
  const [newPersona, setNewPersona] = useState<Partial<AgentPersona>>({
    name: '',
    role: '',
    description: '',
    traits: [],
    color: 'emerald'
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  const handleAddPersona = () => {
    if (newPersona.name && newPersona.role) {
      const persona: AgentPersona = {
        id: Date.now().toString(),
        name: newPersona.name!,
        role: newPersona.role!,
        description: newPersona.description || 'Custom AI Agent persona.',
        traits: newPersona.traits || ['Custom'],
        avatar: `https://picsum.photos/seed/${newPersona.name}/200`,
        color: newPersona.color || 'emerald'
      };
      setPersonas([...personas, persona]);
      setIsAddingPersona(false);
      setNewPersona({ name: '', role: '', description: '', traits: [], color: 'emerald' });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-bottom border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <BrainCircuit className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">RaidanAi</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#layers" className="hover:text-emerald-400 transition-colors">Platform</a>
            <a href="#personas" className="hover:text-emerald-400 transition-colors">Personas</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#workflow" className="hover:text-emerald-400 transition-colors">Workflow</a>
            <button className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-full transition-all font-semibold">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-zinc-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-zinc-950 pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-lg font-medium">
            <a href="#layers" onClick={() => setIsMenuOpen(false)}>Platform</a>
            <a href="#personas" onClick={() => setIsMenuOpen(false)}>Personas</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#workflow" onClick={() => setIsMenuOpen(false)}>Workflow</a>
            <button className="w-full py-4 bg-emerald-500 text-zinc-950 rounded-xl font-bold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 text-center max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Zap className="w-3 h-3" /> Enterprise AI Platform
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter"
          >
            Intelligence <br />
            <span className="gradient-text">Without Limits.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            A comprehensive ecosystem of specialized AI agents, smart data pipelines, and governance frameworks designed for the modern enterprise.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group">
              Explore Platform <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-xl font-bold transition-all">
              View Documentation
            </button>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
        </div>
      </section>

      {/* Platform Layers Section */}
      <section id="layers" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Core Platform Layers</h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Our architecture is built on six foundational layers that ensure seamless data flow, robust training, and secure agent deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORM_LAYERS.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-emerald-500/30 transition-all cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-${layer.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {index === 0 && <Database className={`text-${layer.color}-400 w-6 h-6`} />}
                {index === 1 && <BrainCircuit className={`text-${layer.color}-400 w-6 h-6`} />}
                {index === 2 && <Globe className={`text-${layer.color}-400 w-6 h-6`} />}
                {index === 3 && <Layers className={`text-${layer.color}-400 w-6 h-6`} />}
                {index === 4 && <ShieldCheck className={`text-${layer.color}-400 w-6 h-6`} />}
                {index === 5 && <Zap className={`text-${layer.color}-400 w-6 h-6`} />}
              </div>
              <h3 className="text-xl font-bold mb-3">{layer.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {layer.description}
              </p>
              <ul className="space-y-2">
                {layer.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-xs text-zinc-500 flex items-center gap-2">
                    <div className={`w-1 h-1 rounded-full bg-${layer.color}-500`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Agent Personas Section */}
      <section id="personas" className="py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Agent Persona Management</h2>
              <p className="text-zinc-400 text-lg">
                Define and select specialized AI personalities tailored for specific tasks, ensuring the right tone and expertise for every interaction.
              </p>
            </div>
            <button 
              onClick={() => setIsAddingPersona(true)}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl font-bold flex items-center gap-2 transition-all"
            >
              <Plus className="w-5 h-5" /> Create Persona
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Persona List */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {personas.map((persona) => (
                <motion.div
                  key={persona.id}
                  layoutId={persona.id}
                  onClick={() => setSelectedPersonaId(persona.id)}
                  className={`glass-card p-6 cursor-pointer transition-all border-2 ${
                    selectedPersonaId === persona.id ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'border-transparent hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={persona.avatar} 
                      alt={persona.name} 
                      className="w-16 h-16 rounded-2xl object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{persona.name}</h3>
                        {selectedPersonaId === persona.id && (
                          <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                        )}
                      </div>
                      <p className="text-emerald-400 text-sm font-medium">{persona.role}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                    {persona.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {persona.traits.map((trait, i) => (
                      <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {trait}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Persona Detail / Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card p-8 sticky top-28">
                <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Active Persona</h4>
                {personas.find(p => p.id === selectedPersonaId) && (
                  <div className="text-center">
                    <img 
                      src={personas.find(p => p.id === selectedPersonaId)?.avatar} 
                      alt="Active" 
                      className="w-24 h-24 rounded-3xl mx-auto mb-6 border-2 border-emerald-500/50 p-1"
                      referrerPolicy="no-referrer"
                    />
                    <h3 className="text-2xl font-bold mb-1">{personas.find(p => p.id === selectedPersonaId)?.name}</h3>
                    <p className="text-emerald-400 font-medium mb-6">{personas.find(p => p.id === selectedPersonaId)?.role}</p>
                    
                    <div className="space-y-4 text-left">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Primary Objective</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {personas.find(p => p.id === selectedPersonaId)?.description}
                        </p>
                      </div>
                      <button className="w-full py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" /> Configure Agent
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create Persona Modal */}
      {isAddingPersona && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsAddingPersona(false)}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative glass-card w-full max-w-xl p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-display font-bold">New Agent Persona</h3>
              <button onClick={() => setIsAddingPersona(false)} className="text-zinc-500 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Agent Name</label>
                <input 
                  type="text" 
                  value={newPersona.name}
                  onChange={(e) => setNewPersona({...newPersona, name: e.target.value})}
                  placeholder="e.g. Sentinel-7"
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Designated Role</label>
                <input 
                  type="text" 
                  value={newPersona.role}
                  onChange={(e) => setNewPersona({...newPersona, role: e.target.value})}
                  placeholder="e.g. Security Auditor"
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Persona Description</label>
                <textarea 
                  value={newPersona.description}
                  onChange={(e) => setNewPersona({...newPersona, description: e.target.value})}
                  placeholder="Describe the agent's behavior and expertise..."
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors h-24 resize-none"
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => setIsAddingPersona(false)}
                  className="flex-1 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-xl font-bold transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddPersona}
                  className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl font-bold transition-all"
                >
                  Deploy Persona
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Services Section */}
// ... existing code ...
      <section id="services" className="py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Specialized Ecosystems</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Domain-specific AI agents and tools tailored for healthcare, journalism, and enterprise visibility.
            </p>
          </div>

          <div className="space-y-8">
            {SERVICES.map((service, index) => {
              const Icon = IconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden flex flex-col lg:flex-row"
                >
                  <div className="lg:w-1/3 p-10 bg-white/5 border-r border-white/5">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8">
                      <Icon className="text-emerald-400 w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-4">{service.name}</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:w-2/3 p-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.subdomains.map((sub, sIndex) => (
                      <a
                        key={sIndex}
                        href={`https://${sub.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 rounded-xl bg-zinc-950/50 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all flex items-center justify-between"
                      >
                        <div>
                          <div className="text-sm font-bold mb-1 group-hover:text-emerald-400 transition-colors">{sub.name}</div>
                          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{sub.url}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Data & Workflow Flow</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            How intelligence moves through the RaidanAi ecosystem.
          </p>
        </div>

        <div className="relative p-12 glass-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { title: 'Ingest', desc: 'Satellite, IoT, & Real-time feeds', icon: Database },
              { title: 'Train', desc: 'Multi-modal model refinement', icon: BrainCircuit },
              { title: 'Deploy', desc: 'API & SDK integration', icon: Globe },
              { title: 'Execute', desc: 'Specialized Agent interaction', icon: Cpu },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                  <step.icon className="text-emerald-400 w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-zinc-500">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent -translate-x-4 z-0" />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-20 pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-emerald-400 w-5 h-5" /> Governance Layer
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Monitors all AI agent activity, ensures compliance with HIPAA/GDPR, manages permissions via RBAC, and optimizes resource allocation automatically.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="text-emerald-400 w-5 h-5" /> Consultation Services
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Provides enterprise advisory and technical support, receiving insights from AI agents to deliver data-driven recommendations for institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <BrainCircuit className="text-emerald-500 w-6 h-6" />
            <span className="font-display font-bold text-xl">RaidanAi</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm text-zinc-600">
            © 2026 RaidanAi Enterprise. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
