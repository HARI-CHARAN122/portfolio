import { Calendar, MapPin, Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    title: 'AI/ML Intern',
    company: 'Tech Zita Innovations',
    location: 'India',
    period: 'Present',
    current: true,
    responsibilities: [
      'Developing AI/ML solutions for real-world business use cases',
      'Data preprocessing, model training, and optimization',
      'Building REST APIs for ML integration',
      'Working with LLMs and automation workflows',
      'Collaborating with cross-functional teams',
    ],
  },
  {
    title: 'Web Designer',
    company: 'Locolock',
    location: 'India',
    period: 'Present',
    current: true,
    responsibilities: [
      'Designing modern and responsive web interfaces',
      'Creating user-friendly UI/UX experiences',
      'Collaborating with development teams on design implementation',
      'Building brand-consistent visual designs',
    ],
  },
  {
    title: 'Tech Lead Intern',
    company: 'Viswam.AI (IIIT Hyderabad | Swecha | Meta)',
    location: 'Hyderabad, India',
    period: 'May 2025 – July 2025',
    current: false,
    responsibilities: [
      'Selected for Summer of AI program',
      'Led AI learning sessions for participants',
      'Mentored intern teams on AI/ML concepts',
      'Worked on LLM research and model workflows',
      'Contributed to open-source collaboration',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <SectionHeader
          tag="Experience"
          title="Professional Journey"
          description="My career path in AI/ML and software development"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent lg:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative flex flex-col lg:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_20px_hsl(183_100%_50%/0.5)] lg:-translate-x-1.5 translate-y-2">
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" />
                )}
              </div>

              {/* Content card */}
              <div
                className={`ml-12 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}
              >
                <div className="glass-card p-6 hover:border-accent/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
