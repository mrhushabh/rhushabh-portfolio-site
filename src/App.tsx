import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Publications } from "./components/Publications";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Publications />
      <Contact />
    </Layout>
  );
}
