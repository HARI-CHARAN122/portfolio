import { Code, Brain, Zap, Users, Rocket, Heart } from 'lucide-react';
import SectionHeader from './SectionHeader';

const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Expertise',
    description: 'Building intelligent systems with LangChain, RAG pipelines, and modern LLM frameworks.',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Creating scalable web applications with React, Flask, FastAPI, and modern tooling.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and frameworks to deliver solutions.',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Mentoring teams and leading AI learning sessions at IIIT Hyderabad.',
  },
  {
    icon: Rocket,
    title: 'Problem Solver',
    description: 'Focused on solving real-world problems with practical, impactful solutions.',
  },
  {
    icon: Heart,
    title: 'Open Source',
    description: 'Passionate about contributing to open-source projects and communities.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <SectionHeader
          tag="About Me"
          title="Passionate About Building"
          description="I'm an AI/ML Engineer and Full-Stack Developer based in Hyderabad, India, dedicated to creating intelligent systems that make a difference."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About text */}
          <div className="glass-card p-6 sm:p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hello! I'm <span className="text-foreground font-medium">Govardhanagiri Hari Charan Reddy</span>, 
              a passionate developer who thrives at the intersection of Artificial Intelligence and 
              Full-Stack Development. My journey in tech is driven by a desire to solve real-world 
              problems through innovative solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently, I'm working as an <span className="text-accent">AI/ML Intern at Tech Zita Innovations</span>, 
              where I develop AI/ML solutions for real-world business use cases, build REST APIs for ML integration, 
              and work extensively with LLMs and automation workflows. I'm also working as a <span className="text-accent">Web Designer at Locolock</span>, 
              creating modern and responsive web interfaces with user-friendly UI/UX experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I was also selected for the <span className="text-accent">Summer of AI program</span> at 
              IIIT Hyderabad in collaboration with Swecha and Meta, where I led AI learning sessions 
              and mentored intern teams on LLM research and model workflows.
            </p>

            {/* Journey cards */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="px-4 py-2 glass-card text-sm">
                <span className="text-muted-foreground">2023</span>
                <span className="mx-2 text-border">→</span>
                <span className="text-foreground">Started Coding Journey</span>
              </div>
              <div className="px-4 py-2 glass-card text-sm">
                <span className="text-muted-foreground">2024</span>
                <span className="mx-2 text-border">→</span>
                <span className="text-foreground">AI/ML Deep Dive</span>
              </div>
              <div className="px-4 py-2 glass-card text-sm">
                <span className="text-muted-foreground">2025</span>
                <span className="mx-2 text-border">→</span>
                <span className="text-accent">Industry Experience</span>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-5 group hover:border-accent/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
