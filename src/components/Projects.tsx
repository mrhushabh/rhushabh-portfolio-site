
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink } from "lucide-react";
import data, { type ProjectItem } from "../data";
import { SectionTitle } from "./ui/SectionTitle";


export function Projects() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionTitle>Projects</SectionTitle>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {data.projects.map((project: ProjectItem, index: number) => (
                        <div
                            key={project.slug}
                            className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 hover:shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-4 duration-500"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                        <span className="text-slate-600 text-4xl font-bold opacity-20">{project.name[0]}</span>
                                    </div>
                                )}

                                {/* Overlay Links */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                    {project.links.code && (
                                        <a href={project.links.code} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" title="View Code">
                                            <GitHubLogoIcon className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" title="View Demo">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.name}
                                </h3>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((t: string) => (
                                        <span
                                            key={t}
                                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Summary (Optional, truncated) */}
                                {project.summary && project.summary.length > 0 && (
                                    <p className="text-slate-400 text-sm mt-4 line-clamp-3">
                                        {project.summary[0]}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
