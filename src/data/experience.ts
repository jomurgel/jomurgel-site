// Selected experience — the credibility layer for Work. Pulled from the résumé.
export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  impact: string;
  brands?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Lead Full-Stack Engineer · Architect',
    company: 'Rehab Media Group',
    period: 'Jul 2025 – Present',
    impact:
      'Sole technical owner of the partner dashboard. Rebuilt a high-debt codebase and shipped a premium subscription platform end-to-end — +39% app performance, +500% search, backlog cleared in under three months.',
  },
  {
    role: 'Principal Software Engineer · Tech Lead',
    company: 'PMC (Penske Media)',
    period: 'Mar 2022 – Aug 2024',
    impact:
      'Designed a JSON config framework unifying the Block Editor across 13 enterprise media brands; set engineering standards across a 60+ person org. ~43% faster time-to-publish, 100% WCAG 2.1 AA across brands.',
    brands: ['Rolling Stone', 'Variety', 'The Hollywood Reporter', 'Deadline'],
  },
  {
    role: 'Principal User Experience Developer',
    company: 'Alley',
    period: 'Sep 2019 – Mar 2022',
    impact:
      'Built accessible, headless data-visualization sites for grant-giving foundations and policy orgs — turning dense research into navigable, state-specific data. +50% task completion, +23% mobile conversion.',
    brands: ['Kaiser Family Foundation', 'Kauffman Foundation', 'Brookings Institution'],
  },
  {
    role: 'Senior Front-End Engineer & Designer',
    company: 'WebDevStudios',
    period: 'Sep 2016 – Mar 2019',
    impact:
      'Pushed semantic HTML5, accessibility, and mobile-first practice into a speed-first WordPress agency; contributed to early Gutenberg standards that stuck around for years.',
  },
  {
    role: 'Independent Consultant & Freelance',
    company: 'Self · Darkfound',
    period: '2007 – Present',
    impact:
      'Experience audits, accessibility & Section 508 reviews, and builds for 65+ organizations on WordPress, Next.js, and custom stacks — with a functional-prototype-first workflow clients accept far more readily than static design rounds.',
  },
];
