import Navbar from './Navbar';
import { profile } from '../data/content';
import portrait from '../assets/portrait.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-ink overflow-hidden grain">
      <Navbar />

      {/* full-bleed portrait, desaturated to keep the palette monochrome */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black" />
        <div className="absolute right-0 bottom-0 top-0 w-full md:w-[52%]">
          <img
            src={portrait}
            alt={profile.name}
            className="w-full h-full object-cover grayscale contrast-[1.15] brightness-90 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/10 to-transparent md:from-ink md:via-transparent md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 h-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-6 items-end pt-24">
          <div>
            <h1 className="font-display uppercase text-[13vw] md:text-[5.2vw] leading-[0.92] tracking-tightest">
              {profile.subheading.split('\n')[0]}
              <br />
              {profile.subheading.split('\n')[1]}
              <br />
              {profile.subheading.split('\n')[2]}
            </h1>
            <p className="mt-8 max-w-xs text-xs leading-relaxed text-paper/60">
              {profile.intro}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 md:text-right">
            <span className="dots text-paper/40 text-xs" />
            <h2 className="font-display uppercase text-[9vw] md:text-[3.4vw] leading-[0.95] text-paper/90">
              {profile.tagline}
            </h2>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-line pt-6">
          <p className="max-w-sm text-xs leading-relaxed text-paper/50 uppercase tracking-wide">
            {profile.role} working across strategy, code, and interface to
            help ideas ship with clarity and purpose.
          </p>
          <a
            href="#work"
            className="text-[11px] tracking-[0.2em] uppercase underline-fade shrink-0"
          >
            [ view selected work ]
          </a>
        </div>
      </div>
    </section>
  );
}
