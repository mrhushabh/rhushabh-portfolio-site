import { useState, useMemo } from "react";

import { skillGroups } from "../data";
import { SectionTitle } from "./ui/SectionTitle";
import { cn } from "../lib/utils";

export function Skills() {
    const [active, setActive] = useState("All");

    const categories = useMemo(() => ["All", ...skillGroups.map(g => g.category)], []);
    const allSkills = useMemo(
        () => Array.from(new Set(skillGroups.flatMap(g => g.items))),
        []
    );

    const visible = useMemo(() => {
        if (active === "All") return allSkills;
        const group = skillGroups.find(g => g.category === active);
        return group ? group.items : [];
    }, [active, allSkills]);

    return (
        <section id="skills" className="py-20 px-6 bg-black/20">
            <div className="max-w-4xl mx-auto">
                <SectionTitle>Skills</SectionTitle>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                active === cat
                                    ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                                    : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div
                    className="flex flex-wrap gap-3"
                >
                    {visible.map((s) => (
                        <span
                            key={s}
                            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors cursor-default animate-in zoom-in spin-in-1 duration-300"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
