import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & tagline */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text mb-2 inline-block">
              HC<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Building intelligent systems that matter.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex justify-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* Social & back to top */}
          <div className="flex items-center justify-end gap-4">
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/hari-charan-reddy-2b5431330"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card hover:border-accent/50 transition-all"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
              </a>
              <a
                href="https://github.com/HARI-CHARAN122"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card hover:border-accent/50 transition-all"
              >
                <Github className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
              </a>
              <a
                href="mailto:haricharanreddy618@gmail.com"
                className="p-2 glass-card hover:border-accent/50 transition-all"
              >
                <Mail className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-2 glass-card hover:border-accent/50 transition-all"
            >
              <ArrowUp className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Govardhanagiri Hari Charan Reddy. Made with
            <Heart className="w-4 h-4 text-destructive inline" />
            in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
