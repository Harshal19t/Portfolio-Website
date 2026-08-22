import { marqueeText, profile } from '../data/content';

function Row({ reverse }) {
  const items = new Array(8).fill(marqueeText);
  return (
    <div className="marquee-row overflow-hidden border-y border-line py-4">
      <div
        className={`marquee-track flex w-max gap-8 whitespace-nowrap ${
          reverse ? '[animation-direction:reverse]' : ''
        }`}
      >
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-xs tracking-[0.25em] uppercase text-paper/60"
          >
            {text}
            <span className="text-paper/30">✦</span>
            <span className="text-paper/80">{profile.role}</span>
            <span className="text-paper/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="bg-ink -rotate-1 md:-rotate-2 my-10">
      <Row />
    </div>
  );
}
