import data from "../data";

function GridCard({
  name, image, summary, tech, href,
}: {
  name: string;
  image?: string;
  summary: string[];
  tech: string[];
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border overflow-hidden hover:shadow-lg transition bg-white"
    >
      {image && (
        <img
          src={`${import.meta.env.BASE_URL}${image}`}
          alt={name}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold group-hover:underline">{name}</h3>
        <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
          {summary.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs border rounded-full px-2 py-1 bg-white">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  const linkFor = (p: (typeof data.projects)[number]) =>
    p.links.demo || p.links.code || "#";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href={`${import.meta.env.BASE_URL}`} className="text-sm underline">
            ← Back
          </a>
          <h1 className="font-medium">All Projects</h1>
          <div />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((p) => (
            <GridCard
              key={p.slug}
              name={p.name}
              image={p.image}
              summary={p.summary}
              tech={p.tech}
              href={linkFor(p)}
            />
          ))}
        </div>
      </main>

      <footer className="text-center text-sm text-slate-500 py-8 border-t">
        © {new Date().getFullYear()} {data.name}
      </footer>
    </div>
  );
}
