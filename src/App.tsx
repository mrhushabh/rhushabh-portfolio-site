import { useEffect, useState } from "react";
import data from "./data";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold mb-4">{children}</h2>;
}

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

function Nav() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-2 py-1 rounded-md transition ${
                active === id
                  ? "text-slate-900 bg-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={`data.links.resume`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-slate-900 text-white text-sm hover:opacity-90"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header
      id="home"
      className="relative max-w-5xl mx-auto px-6 py-16"
    >
      {/* soft gradient background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45rem_30rem_at_70%_-10%,rgba(59,130,246,0.08),transparent),radial-gradient(35rem_20rem_at_10%_10%,rgba(14,165,233,0.08),transparent)]"
      />
      <p className="text-sm text-slate-600">Hi, I’m</p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{data.name}</h1>
      <p className="mt-2 text-lg">{data.tagline}</p>
      {data.location && <p className="mt-2 text-slate-600">{data.location}</p>}
      <p className="mt-6 max-w-2xl leading-relaxed">{data.about}</p>
      {/* <div className="mt-6 flex flex-wrap gap-3">
        <a
          className="px-4 py-2 rounded-2xl bg-slate-900 text-white hover:opacity-90"
          href={data.links.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          View resume
        </a>
        <a className="px-4 py-2 rounded-2xl border hover:bg-slate-50" href="#projects">
          View projects
        </a>
      </div> */}
    </header>
  );
}

function Projects() {
  const linkFor = (p: (typeof data.projects)[number]) =>
    p.links.demo || p.links.code || "#";

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 pb-16">
      <div className="flex items-baseline justify-between mb-4">
        <SectionTitle>Projects</SectionTitle>
        <a
          href="/projects"
          className="text-sm underline"
          onClick={(e) => {
            e.preventDefault();
            // SPA navigate
            window.history.pushState(null, "", `${import.meta.env.BASE_URL}projects`);
            window.dispatchEvent(new PopStateEvent("popstate"));
          }}
        >
          All projects →
        </a>
      </div>

      {/* horizontal scroller */}
      <div
        className="overflow-x-auto pb-2 -mx-6 px-6"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-4">
          {data.projects.map((p) => (
            <a
              key={p.slug}
              href={linkFor(p)}
              target="_blank"
              rel="noreferrer"
              className="snap-start shrink-0 w-[85%] sm:w-[420px] md:w-[480px] rounded-2xl border hover:shadow-lg hover:-translate-y-0.5 transition bg-white"
              title={p.name}
            >
              {/* thumbnail */}
              {p.image && (
                <img
                  src={`${import.meta.env.BASE_URL}${p.image}`}
                  alt={p.name}
                  className="h-44 w-full object-cover rounded-t-2xl"
                  loading="lazy"
                />
              )}
              <div className="p-5">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                  {p.summary.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs border rounded-full px-2 py-1 bg-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
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
          <div key={i} className="rounded-2xl border p-5 hover:shadow-sm transition">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">{e.title} • {e.company}</p>
              <p className="text-sm text-slate-600 whitespace-nowrap">{e.period}</p>
            </div>
            <ul className="mt-2 list-disc list-inside space-y-1">
              {e.bullets.map((b: string, j: number) => <li key={j}>{b}</li>)}
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
          <div key={i} className="rounded-2xl border p-5 hover:shadow-sm transition">
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
          <span key={s} className="px-3 py-2 border rounded-2xl bg-white">{s}</span>
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
    <section id="contact" className="max-w-5xl mx-auto px-6 pb-24">
      <SectionTitle>Contact</SectionTitle>
      <div className="space-y-2">
        <a className="underline" href={`mailto:${data.links.email}`}>{data.links.email}</a>
        <div className="space-x-4">
          <a className="underline" href={data.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="underline" href={data.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 rounded-full border bg-white px-3 py-2 shadow hover:shadow-md"
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
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
      <BackToTop />
    </div>
  );
}
