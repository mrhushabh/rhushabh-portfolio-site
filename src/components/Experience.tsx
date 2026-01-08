
import data, { type ExperienceItem } from "../data";
import { SectionTitle } from "./ui/SectionTitle";

export function Experience() {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <SectionTitle>Experience</SectionTitle>

                <div className="relative border-l border-white/10 space-y-12 ml-4">
                    {data.experience.map((exp: ExperienceItem, index: number) => (
                        <div
                            key={index}
                            className="relative pl-12 animate-in fade-in slide-in-from-left-4 duration-500"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                                    <h3 className="text-xl font-bold text-white">
                                        {exp.title}
                                        <span className="text-blue-400"> @ {exp.company}</span>
                                    </h3>
                                    <span className="text-sm font-mono text-slate-500 whitespace-nowrap">{exp.period}</span>
                                </div>

                                <ul className="space-y-2">
                                    {exp.bullets.map((bullet: string, i: number) => (
                                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                                            <span className="block mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
