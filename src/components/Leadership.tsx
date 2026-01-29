import { Target, Lightbulb, Rocket, Users, Heart, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';

const strengths = [
  {
    icon: Target,
    title: 'Analytical Mindset',
    description: 'Breaking down complex problems into manageable components for effective solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Finding innovative approaches to tackle challenges and deliver results.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies, frameworks, and methodologies.',
  },
  {
    icon: Rocket,
    title: 'Hands-On Builder',
    description: 'Translating ideas into functional, real-world applications.',
  },
  {
    icon: Users,
    title: 'Team Leader & Mentor',
    description: 'Guiding teams and sharing knowledge to foster growth and collaboration.',
  },
  {
    icon: Heart,
    title: 'Open Source Advocate',
    description: 'Passionate about contributing to and supporting open-source communities.',
  },
];

const Leadership = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <SectionHeader
          tag="Strengths"
          title="Leadership & Personal Qualities"
          description="The qualities that drive my work and collaboration"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={strength.title}
              className="glass-card p-6 group hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <strength.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {strength.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
