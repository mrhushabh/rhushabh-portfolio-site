import data from "./data";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold mb-4">{children}</h2>;
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-6 text-sm">
        <a className="font-medium" href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#publications">Publications</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="home" className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-sm text-slate-600">Hi, I’m</p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{data.name}</h1>
      <p className="mt-2 text-lg">{data.tagline}</p>
      {data.location && <p className="mt-2 text-slate-600">{data.location}</p>}
      <p className="mt-6 max-w-2xl">{data.about}</p>
      <div className="mt-6 flex gap-3">
        <a className="px-4 py-2 rounded-2xl bg-slate-900 text-white" href={data.links.resume}>
          Resume
        </a>
        <a className="px-4 py-2 rounded-2xl border" href="#projects">
          View projects
        </a>
      </div>
    </header>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 pb-16">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {data.projects.map((p) => (
          <article key={p.name} className="rounded-2xl border p-5 hover:shadow transition">
            <h3 className="text-xl font-medium">{p.name}</h3>
            <p className="mt-2">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs border rounded-full px-2 py-1">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {p.links.demo && <a className="underline" href={p.links.demo}>Demo</a>}
              {p.links.code && <a className="underline" href={p.links.code}>Code</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 pb-16">
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-4">
        {data.experience.map((e, i) => (
          <div key={i} className="rounded-2xl border p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">{e.title} • {e.company}</p>
              <p className="text-sm text-slate-600 whitespace-nowrap">{e.period}</p>
            </div>
            <ul className="mt-2 list-disc list-inside space-y-1">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 pb-16">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-4">
        {data.education.map((ed, i) => (
          <div key={i} className="rounded-2xl border p-5">
            <p className="font-medium">{ed.school}</p>
            <p>{ed.degree}</p>
            <p className="text-sm text-slate-600">{ed.period}</p>
            {ed.notes && <p className="mt-1 text-sm">{ed.notes}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 pb-16">
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((s) => (
          <span key={s} className="px-3 py-2 border rounded-2xl">{s}</span>
        ))}
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section id="publications" className="max-w-5xl mx-auto px-6 pb-16">
      <SectionTitle>Publications</SectionTitle>
      <ul className="space-y-3">
        {data.publications.map((p, i) => (
          <li key={i}>
            {p.link ? (
              <a className="underline" href={p.link} target="_blank" rel="noreferrer">
                {p.title}
              </a>
            ) : (
              <span>{p.title}</span>
            )}
            {", "} {p.venue}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 pb-20">
      <SectionTitle>Contact</SectionTitle>
      <div className="space-y-2">
        <a className="underline" href={`mailto:${data.links.email}`}>{data.links.email}</a>
        <div className="space-x-4">
          <a className="underline" href={data.links.github}>GitHub</a>
          <a className="underline" href={data.links.linkedin}>LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Publications />
      <Contact />
      <footer className="text-center text-sm text-slate-500 py-8 border-t">
        © {year} {data.name}
      </footer>
    </div>
  );
}
