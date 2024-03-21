import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="size-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
      </div>
    </main>
  );
}
