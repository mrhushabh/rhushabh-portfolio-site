import data from "../data";
import { SectionTitle } from "./ui/SectionTitle";

export function Contact() {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <SectionTitle className="mb-6 justify-center w-full flex flex-col items-center">
                    Get In Touch
                </SectionTitle>
                <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
                    I am currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                </p>

                <a
                    href={`mailto:${data.links.email}`}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-medium text-white transition-colors hover:bg-blue-700"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
}
