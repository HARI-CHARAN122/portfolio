import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    title: 'Languages',
    color: 'primary',
    skills: ['Python', 'C', 'JavaScript', 'Java (Basics)'],
  },
  {
    title: 'Frontend',
    color: 'accent',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    color: 'primary',
    skills: ['Flask', 'FastAPI', 'REST APIs', 'Uvicorn'],
  },
  {
    title: 'AI/ML',
    color: 'accent',
    skills: ['LangChain', 'RAG Pipelines', 'ChromaDB', 'HuggingFace', 'Gemini API', 'Whisper', 'gTTS'],
  },
  {
    title: 'Tools',
    color: 'primary',
    skills: ['Git', 'GitHub', 'Streamlit', 'Postman', 'VS Code'],
  },
  {
    title: 'Concepts',
    color: 'accent',
    skills: ['Data Structures', 'OOP', 'Problem Solving', 'Full Stack Development'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <SectionHeader
          tag="Skills & Expertise"
          title="Tech Stack"
          description="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 group hover:border-accent/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-2 h-2 rounded-full ${
                    category.color === 'accent' ? 'bg-accent' : 'bg-primary'
                  }`}
                />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted/20 whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
