import { profile, nav } from '../data/content';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-7">
        <a
          href="#"
          className="font-display text-lg tracking-tight lowercase"
        >
          {profile.name}
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] uppercase text-paper/80">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="underline-fade">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="md:hidden text-[11px] tracking-[0.2em] uppercase"
        >
          Menu
        </a>
      </div>
    </header>
  );
}
