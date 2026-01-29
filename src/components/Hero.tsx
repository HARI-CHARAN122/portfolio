import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const roles = [
  'AI/ML Engineer',
  'Full-Stack Developer',
  'Problem Solver',
  'Tech Innovator',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      <div className="section-container py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-accent font-mono text-sm mb-4 animate-fade-in-up">
              &lt;Hello World /&gt;
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              I'm <span className="gradient-text">Hari Charan</span>
            </h1>
            
            <div className="h-12 sm:h-14 lg:h-16 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 sm:h-7 lg:h-8 ml-1 bg-accent animate-typing-blink" />
            </div>

            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Building intelligent systems and scalable web applications that solve 
              real-world problems through AI and automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="btn-glow bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:border-accent hover:text-accent"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://linkedin.com/in/haricharanreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:border-accent/50 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://github.com/haricharanreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:border-accent/50 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a
                href="mailto:haricharanreddy618@gmail.com"
                className="p-3 glass-card hover:border-accent/50 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 scale-110" />
              
              {/* Rotating border */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full gradient-border animate-float" />
                <div className="absolute inset-2 rounded-full overflow-hidden glass-card">
                  <img
                    src={profilePhoto}
                    alt="Hari Charan Reddy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 glass-card text-sm font-medium animate-float">
                <span className="text-accent">AI/ML</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card text-sm font-medium animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-primary">Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
