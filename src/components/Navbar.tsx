import { useState, useEffect } from "react";

import { cn } from "../lib/utils";
import data from "../data";

const SECTIONS = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
];

export function Navbar() {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

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

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            obs.disconnect();
        };
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-background/80 backdrop-blur-md border-white/10" : "bg-transparent py-4"
            )}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#home" className="text-lg font-bold tracking-tighter hover:text-blue-400 transition-colors">
                    {data.name}
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    {SECTIONS.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={cn(
                                "relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors",
                                active === id ? "text-white" : "text-slate-400 hover:text-white"
                            )}
                            onClick={() => setActive(id)}
                        >
                            {active === id && (
                                <div
                                    className="absolute inset-0 bg-white/10 rounded-full transition-all duration-300"
                                />
                            )}
                            <span className="relative z-10">{label}</span>
                        </a>
                    ))}
                </div>

                <a
                    href={data.links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors"
                >
                    Resume
                </a>
            </div>
        </nav>
    );
}
