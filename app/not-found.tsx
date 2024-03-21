import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="size-full text-white">
      <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-0 md:gap-20">
        <Image alt="" src="/lost.gif" width={300} height={300} />
        <div className="mr-10 flex flex-col items-center">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-slate-500 font-light">
            Oops, this page does not exist
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
