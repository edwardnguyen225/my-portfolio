import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="size-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {process.env.SHOW_WORK_SECTION && <Works />}
        <Projects />
      </div>
    </main>
  );
}
