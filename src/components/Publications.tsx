import data, { type PublicationItem } from "../data";
import { SectionTitle } from "./ui/SectionTitle";
import { ExternalLink } from "lucide-react";

export function Publications() {
    if (!data.publications || data.publications.length === 0) return null;

    return (
        <section id="publications" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <SectionTitle>Publications</SectionTitle>

                <ul className="space-y-6">
                    {data.publications.map((pub: PublicationItem, index: number) => (
                        <li
                            key={index}
                            className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                        {pub.title}
                                    </h3>
                                    <p className="text-slate-400 mt-1">{pub.venue}</p>
                                </div>
                                {pub.link && (
                                    <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
