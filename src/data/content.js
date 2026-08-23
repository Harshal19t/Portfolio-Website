// ---------------------------------------------------------------------------
// All the editable copy for the site lives in this one file.
// A few fields are still placeholders (marked below) until you share the
// missing details -- nothing else needs to change for the site to update.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Harshal Trivedi',
  tagline: 'AI ENGINEER & FULL-STACK DEVELOPER',
  subheading: 'TURNING\nDATA INTO\nINTELLIGENCE',
  role: 'AI Engineer & Full-Stack Developer',
  intro:
    "MSc Advanced Computer Science student at the University of Sheffield, building RAG pipelines, fine-tuned LLMs, and full-stack products.",
  bio: "I'm an AI Engineer and full-stack developer currently completing an MSc in Advanced Computer Science at the University of Sheffield. I work across retrieval-augmented generation, LLM fine-tuning, and product engineering -- most recently building production RAG systems, and interning as an AI Engineer at Genta, where I integrated LLMs into conversational systems for public libraries.",
  location: 'Sheffield, United Kingdom',
  email: 'harshal1901@gmail.com', // placeholder -- confirm which email you want listed publicly
  social: [
    { label: 'GitHub', href: 'https://github.com/Harshal19t' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/harshal-trivedi-702145208/',
    },
    { label: 'Twitter / X', href: 'https://x.com/daemian1901' },
    { label: 'Medium', href: 'https://medium.com/@harshal1901' },
  ],
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    name: 'FinDocIQ',
    role: 'Financial RAG Assistant',
    year: '2025',
    href: 'https://github.com/Harshal19t/FinDocIQ-',
  },
  {
    name: 'AI Triage Copilot',
    role: 'AI Automation / RAG',
    year: '2025',
    href: 'https://github.com/Harshal19t/AI-Triage-Copilot',
  },
  {
    name: 'SBOM Agent',
    role: 'Security Tooling / AI Automation',
    year: '2025',
    href: 'https://github.com/Harshal19t/sbom-agent',
  },
  {
    name: 'AI Web Scrapper',
    role: 'Prompt Engineering / Automation',
    year: '2025',
    href: 'https://github.com/Harshal19t/AI_Webscrapper',
  },
  {
    name: 'PDF Summarizer',
    role: 'NLP / Automation',
    year: '2025',
    href: 'https://github.com/Harshal19t/PDF_Summarizer',
  },
  {
    name: 'Solarlize',
    role: 'Frontend Development /UI Design',
    year: '2025',
    href: 'https://github.com/Harshal19t/Solarlize-Solar_Funding',
  },
];

export const collage = [
  { label: 'Selected screens' },
  { label: 'Product exploration' },
  { label: 'Case study preview' },
];

export const marqueeText = 'TURNING COMPLEXITY INTO CLARITY';

export const articles = [
  {
    title:
      'Building FinDocIQ: How I Built an End-to-End Financial RAG Assistant with Qwen2.5',
    tag: 'RAG / LLMs',
    href: 'https://medium.com/@harshal1901/building-findociq-how-i-built-an-end-to-end-financial-rag-assistant-with-qwen2-5-e2175ab9b50d',
  },
  {
    title: 'More articles coming soon',
    tag: 'Writing',
    href: 'https://medium.com/@harshal1901',
  },
];

export const footerColumns = [
  {
    heading: 'Site',
    links: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#work' },
      { label: 'Writing', href: '#writing' },
    ],
  },
  {
    heading: 'Focus',
    links: [
      { label: 'RAG & LLM Engineering', href: '#' },
      { label: 'Full-Stack Development', href: '#' },
      { label: 'Machine Learning', href: '#' },
      { label: 'UI/UX & Prototyping', href: '#' },
    ],
  },
  {
    heading: 'Elsewhere',
    links: profile.social,
  },
];
