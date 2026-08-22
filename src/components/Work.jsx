import { projects } from '../data/content';

export default function Work() {
  return (
    <section id="work" className="bg-ink px-6 md:px-10 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="dots text-paper/40 text-xs" />
          <h3 className="font-display uppercase text-2xl md:text-3xl">
            Selected Work
          </h3>
        </div>

        <div className="border-t border-line">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href || '#'}
              target={project.href && project.href !== '#' ? '_blank' : undefined}
              rel={project.href && project.href !== '#' ? 'noopener noreferrer' : undefined}
              className="group grid grid-cols-[1fr_auto_auto] md:grid-cols-[2fr_1fr_auto] gap-4 md:gap-8 items-center border-b border-line py-5 transition-colors hover:bg-paper hover:text-ink px-2 -mx-2"
            >
              <span className="font-display uppercase text-base md:text-xl tracking-tight">
                {project.name}
              </span>
              <span className="text-[11px] md:text-xs uppercase tracking-widest text-paper/50 group-hover:text-ink/60 text-right md:text-left">
                {project.role}
              </span>
              <span className="text-[11px] md:text-xs uppercase tracking-widest text-paper/40 group-hover:text-ink/50 text-right">
                {project.year}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-widest text-paper/30 max-w-md">
          Click any project to view it on GitHub.
        </p>
      </div>
    </section>
  );
}
