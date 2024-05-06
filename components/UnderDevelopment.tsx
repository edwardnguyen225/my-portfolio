import Image from "next/image";
import Link from "next/link";

export default function UnderDevelopment() {
  return (
    <main className="size-full text-white">
      <div className="w-full h-screen flex flex-col justify-center items-center gap-0 md:gap-20">
        <Image alt="" src="/working-astronaut.png" width={300} height={300} />
        <div className="mr-10 flex flex-col items-center">
          <h1 className="text-6xl font-bold text-center">
            Yay, you found secret page.
          </h1>
          <p className="mt-6 text-xl text-slate-500 font-light">
            But it is still under development.
          </p>
          <Link
            href="/"
            className="mt-11 px-4 py-3 button-primary text-xl text-center text-white cursor-pointer rounded-lg"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
