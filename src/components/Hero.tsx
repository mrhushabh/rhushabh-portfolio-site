
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import data from "../data";


export function Hero() {
    return (
        <section id="home" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden px-6">

            <div className="max-w-4xl mx-auto w-full z-10">
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <p className="text-blue-400 font-medium tracking-wide mb-4">Hi, my name is</p>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-4">
                        {data.name}.
                    </h1>
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-400 mb-6">
                        {data.tagline}
                    </h2>
                    <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
                        {data.about}
                    </p>
                </div>

                <div
                    className="flex gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-backwards"
                >
                    <a
                        href={`mailto:${data.links.email}`}
                        className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300 hover:text-white"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                    <a
                        href={data.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300 hover:text-white"
                    >
                        <GitHubLogoIcon className="w-5 h-5" />
                    </a>
                    <a
                        href={data.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300 hover:text-white"
                    >
                        <LinkedInLogoIcon className="w-5 h-5" />
                    </a>
                </div>

                <div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 animate-in fade-in duration-1000 delay-500 fill-mode-backwards"
                >
                    <span className="text-sm">Scroll down</span>
                </div>

            </div>
        </section>
    );
}
