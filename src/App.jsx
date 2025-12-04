import { motion } from 'framer-motion';
import Chibi from './components/Chibi.jsx';
import './App.css';

const heroCopy = `Junior software programmer & data analyst with a year championing ERP operations and data cleanup quests. I wield Microsoft Excel, Python, and automation magic to sharpen reporting, and Iƒ?Tm always ready to dive into story-driven adventuresƒ?"digital or otherwise.`;

const projects = [
  {
    title: 'Crystal Ledger',
    status: 'In Progress',
    description:
      'Analytics hub that channels ERP exports into shimmering dashboards primed for rapid decisions.',
    tech: ['React', 'Vite', 'Python API'],
    repo: null,
    demo: null,
  },
  {
    title: 'Echoes of Support',
    status: 'Shipped',
    description:
      'Ticket triage suite that automates daily IT support rituals and keeps response times legendary.',
    tech: ['Node.js', 'Express', 'PostgreSQL'],
    repo: null,
    demo: null,
  },
  {
    title: 'Aurora Codex',
    status: 'Prototype',
    description:
      'Interactive lore compendium experimenting with narrative-driven UI flows and dynamic theming.',
    tech: ['React', 'Framer Motion', 'Supabase'],
    repo: null,
    demo: null,
  },
];

const skillBeacons = [
  'ERP Systems Stewardship',
  'Excel Automations & Power Query',
  'React Frontend Crafting',
  'Python Data Cleanup',
  'Story-driven UX Thinking',
];

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:haziq,afendi@yahoo.com',
    badge: 'Direct Message',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/neoziq',
    badge: 'Network',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/60133683980',
    badge: 'Instant Ping',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/neoziq',
    badge: 'Code Realm',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function App() {
  return (
    <div className="app-shell">
      <div className="starlight" aria-hidden />
      <header className="site-header">
        <span className="brand-mark">Neoziq.exe</span>
        <nav className="top-nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <motion.section className="hero" id="hero" {...fadeIn}>
          <div className="hero-content">
            <p className="hero-eyebrow">// Software Adventurer</p>
            <h1 className="hero-title">
              Neoziq ƒ?" Keeper of Clean Data & Crafted Interfaces
            </h1>
            <p className="hero-body">{heroCopy}</p>
            <div className="hero-cta">
              <a className="cta-primary" href="#projects">
                View quest log
              </a>
              <a className="cta-secondary" href="#contact">
                Open communication channel
              </a>
            </div>
            <div className="hero-highlights">
              {skillBeacons.slice(0, 3).map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="hero-companion">
            <Chibi />
          </div>
        </motion.section>

        <motion.section className="skills" id="about" {...fadeIn}>
          <h2 className="section-title">// Status Sheet</h2>
          <p className="section-body">
            I bridge IT support instincts with modern software craftsmanship. From stabilizing ERP
            pipelines to sculpting front-end journeys, I treasure clarity, data fidelity, and playful
            storytelling that keeps teammates engaged.
          </p>
          <div className="skill-grid">
            {skillBeacons.map((skill) => (
              <motion.span
                key={skill}
                className="skill-pip"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <motion.section className="projects" id="projects" {...fadeIn}>
          <h2 className="section-title">// Quest Log</h2>
          <p className="section-body">
            Each build below chronicles a chapter in my journeyƒ?"whether the mission is complete,
            mid-battle, or still gathering resources. Click through to inspect artifacts or track the
            next milestone.
          </p>
          <div className="project-grid">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="project-card"
                whileHover={{ translateY: -8 }}
                transition={{ type: 'spring', stiffness: 180, damping: 16 }}
              >
                <div className="project-header">
                  <span className="project-status">{project.status}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.demo ?? '#'}
                    className={`project-link${project.demo ? '' : ' disabled'}`}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo ?? '#'}
                    className={`project-link${project.repo ? '' : ' disabled'}`}
                  >
                    Repository
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="contact" id="contact" {...fadeIn}>
          <h2 className="section-title">// Contact Crystal</h2>
          <p className="section-body">
            Whether youƒ?Tre charting a new initiative or need a reliable party member for your product
            squad, reach out. Letƒ?Ts strategize the next quest.
          </p>
          <div className="contact-grid">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="contact-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 14 }}
              >
                <span className="contact-badge">{social.badge}</span>
                <span className="contact-label">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <span>Ac {new Date().getFullYear()} Neoziq. Crafted with curiosity & caffeine.</span>
        <span>Deployed via GitHub Pages ƒ?› Vite ƒ?› React</span>
      </footer>
    </div>
  );
}
