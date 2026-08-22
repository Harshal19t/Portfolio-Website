import { profile, collage } from '../data/content';

export default function About() {
  return (
    <section id="about" className="bg-ink px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start py-10 md:py-16">
        <div>
          <span className="dots text-paper/40 text-xs" />
          <h3 className="font-display uppercase text-3xl md:text-4xl leading-tight mt-4 max-w-md">
            Designing &amp; building things that feel as clear as they are
            memorable.
          </h3>

          <div className="grid grid-cols-3 gap-3 mt-10">
            {collage.map((item, i) => (
              <div
                key={item.label}
                className={`aspect-[3/4] bg-neutral-900 border border-line flex items-end p-2 ${
                  i === 1 ? 'translate-y-4' : ''
                }`}
              >
                <span className="text-[9px] uppercase tracking-widest text-paper/40">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-paper/30 max-w-xs">
            Selected screens from recent work — swap in real project imagery
            here.
          </p>
        </div>

        <div className="md:pt-24">
          <p className="text-sm leading-relaxed text-paper/60 max-w-md">
            {profile.bio}
          </p>
          <p className="mt-6 text-xs leading-relaxed text-paper/40 max-w-md uppercase tracking-wide">
            {profile.location}
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 text-[11px] tracking-[0.2em] uppercase underline-fade"
          >
            [ about me ]
          </a>
        </div>
      </div>
    </section>
  );
}
