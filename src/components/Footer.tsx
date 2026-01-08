import data from "../data";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="py-8 text-center text-sm text-slate-500 border-t border-white/10 bg-black/20">
            <p>© {year} {data.name}. All rights reserved.</p>
            <p className="mt-1 text-xs text-slate-600">Built with React, Tailwind & Framer Motion</p>
        </footer>
    );
}
