import { articles, profile } from '../data/content';

export default function Writing() {
  return (
    <section id="writing" className="bg-ink px-6 md:px-10 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-10">
          <div>
            <span className="dots text-paper/40 text-xs" />
            <h3 className="font-display uppercase text-2xl md:text-3xl mt-4 max-w-sm">
              Notes &amp; articles from Medium
            </h3>
          </div>
          <p className="text-xs leading-relaxed text-paper/50 max-w-sm md:text-right md:ml-auto">
            A space to share what I'm building, what I'm learning, and the
            ideas behind the work. Replace these with links to your published
            Medium articles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.href}
              className="group border border-line p-6 aspect-[4/3] sm:aspect-[3/2] flex flex-col justify-between hover:bg-paper hover:text-ink transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest text-paper/40 group-hover:text-ink/50">
                {article.tag}
              </span>
              <span className="font-display text-sm md:text-base leading-snug">
                {article.title}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-paper/40 group-hover:text-ink/50">
                Read on Medium →
              </span>
            </a>
          ))}
        </div>

        <a
          href={profile.social.find((s) => s.label === 'Medium')?.href || '#'}
          className="inline-block mt-8 text-[11px] tracking-[0.2em] uppercase underline-fade"
        >
          [ view all articles ]
        </a>
      </div>
    </section>
  );
}
