import { profile, footerColumns } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="bg-ink px-6 md:px-10 pt-14 md:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-end border-b border-line pb-14">
          <h3 className="font-display uppercase text-4xl md:text-6xl leading-[0.95]">
            Let's create
            <br />
            something meaningful
          </h3>
          <div className="flex flex-col md:items-end gap-4">
            <p className="text-xs leading-relaxed text-paper/50 max-w-xs md:text-right">
              Whether it's a product to build, a project to collaborate on,
              or just a conversation, I'm here to help turn ideas into
              reality.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-[11px] tracking-[0.2em] uppercase underline-fade"
            >
              [ contact me ]
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
          <div>
            <span className="font-display lowercase text-lg">
              {profile.name}
            </span>
            <p className="text-[10px] uppercase tracking-widest text-paper/30 mt-3 max-w-[16ch]">
              All rights reserved
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <span className="text-[10px] uppercase tracking-widest text-paper/40">
                {col.heading}
              </span>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs uppercase tracking-wide text-paper/70 underline-fade"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="overflow-hidden select-none pointer-events-none -mb-4">
          <span className="font-display uppercase text-[16vw] leading-none text-transparent [-webkit-text-stroke:1px_rgba(244,243,241,0.15)] whitespace-nowrap block">
            {profile.name} • {profile.name} •
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 py-6 border-t border-line text-[10px] uppercase tracking-widest text-paper/30">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span>Built with React &amp; Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
}
