interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ tag, title, description, align = 'center' }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-accent bg-accent/10 rounded-full border border-accent/20">
        {tag}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
