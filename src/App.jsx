import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Work from './components/Work';
import Writing from './components/Writing';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-ink text-paper font-sans selection:bg-paper selection:text-ink">
      <Hero />
      <About />
      <Marquee />
      <Work />
      <Writing />
      <Contact />
    </div>
  );
}
