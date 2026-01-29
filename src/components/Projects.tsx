import { useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from './SectionHeader';

type ProjectCategory = 'all' | 'ai' | 'fullstack' | 'web';

const projects = [
  {
    id: 1,
    title: 'AgroBot – AI Farming Assistant',
    description: 'Full-stack AI assistant for agriculture with multilingual crop advice, pest control recommendations, disease detection, and voice interaction capabilities.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
    category: 'ai' as const,
    tech: ['React', 'Flask', 'Gemini API', 'Whisper', 'gTTS', 'Python'],
    github: 'https://github.com',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Smart Travel Budget Planner',
    description: 'RAG-based AI travel planner using LangChain and ChromaDB for semantic retrieval, real-time itinerary generation, and budget optimization.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    category: 'ai' as const,
    tech: ['LangChain', 'ChromaDB', 'HuggingFace', 'FastAPI', 'Streamlit'],
    github: 'https://github.com',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Chatbot Platform',
    description: 'Intelligent conversational AI platform with natural language understanding, context awareness, and multi-turn dialogue capabilities.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    category: 'ai' as const,
    tech: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'React'],
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'E-Commerce Dashboard',
    description: 'Modern admin dashboard for e-commerce with real-time analytics, inventory management, and order tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'fullstack' as const,
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
    github: 'https://github.com',
    featured: false,
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'web', label: 'Web Dev' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <SectionHeader
          tag="Portfolio"
          title="Featured Projects"
          description="Real-world applications showcasing my expertise in AI and full-stack development"
        />

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProjectCategory)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'glass-card hover:border-accent/30 text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span className="text-xs font-medium text-accent">Featured</span>
                  </div>
                )}

                {/* Links overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card hover:border-accent transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card hover:border-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-secondary/50 rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-primary/50 hover:border-accent hover:text-accent"
            asChild
          >
            <a href="https://github.com/haricharanreddy" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
