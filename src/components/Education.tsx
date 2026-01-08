import data, { type EducationItem } from "../data";
import { SectionTitle } from "./ui/SectionTitle";

export function Education() {
    return (
        <section id="education" className="py-20 px-6 bg-white/5">
            <div className="max-w-4xl mx-auto">
                <SectionTitle>Education</SectionTitle>

                <div className="grid gap-6">
                    {data.education.map((edu: EducationItem, index: number) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                                <span className="text-sm font-mono text-slate-500">{edu.period}</span>
                            </div>
                            <p className="text-blue-400 font-medium mb-4">{edu.degree}</p>
                            {edu.notes && (
                                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                                    {edu.notes}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
