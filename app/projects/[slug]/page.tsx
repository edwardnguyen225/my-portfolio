import UnderDevelopment from "@/components/UnderDevelopment";

export default function Home() {
  if (!process.env.SHOW_PROJECT_DETAIL) return <UnderDevelopment />;

  return (
    <main className="size-full">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Project Name
        </h1>
        <p>Project Description</p>
      </div>
    </main>
  );
}
