import { Brain, Globe, Code, Cog, MessageSquare, Users, Workflow, Database } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services = [
  {
    icon: Brain,
    title: 'AI/ML Model Development',
    description: 'Custom machine learning models for classification, prediction, and intelligent automation.',
  },
  {
    icon: MessageSquare,
    title: 'LLM & RAG Applications',
    description: 'Building intelligent chatbots and retrieval-augmented generation systems using LangChain.',
  },
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications with React, Flask/FastAPI, and modern cloud infrastructure.',
  },
  {
    icon: Database,
    title: 'REST API Development',
    description: 'Scalable and secure APIs for seamless integration with ML models and services.',
  },
  {
    icon: Workflow,
    title: 'Automation Workflows',
    description: 'Streamlining processes with intelligent automation and workflow optimization.',
  },
  {
    icon: Cog,
    title: 'AI-Powered Assistants',
    description: 'Voice-enabled and text-based AI assistants for various domains and use cases.',
  },
  {
    icon: Code,
    title: 'Code Review & Optimization',
    description: 'Improving code quality, performance optimization, and best practices implementation.',
  },
  {
    icon: Users,
    title: 'Technical Mentoring',
    description: 'Guiding teams on AI/ML concepts, full-stack development, and modern technologies.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <SectionHeader
          tag="Services"
          title="What I Offer"
          description="Professional services in AI/ML and software development"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-6 text-center group hover:border-accent/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
