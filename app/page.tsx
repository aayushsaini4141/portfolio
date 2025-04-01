"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex  w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="flex flex-col w-full md:px-20 md:text-start text-center md:justify-center md:pt-0 pt-32 z-20 ">
          <h1 className="md:text-[50px] text-[25px] text-white font-semibold md:w-2/5">
            Make anything possible with
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 md:block md:w-2/5 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5 pt-2">
            <Link
              href="/my-skills"
              className=" rounded-full group relative bg-violet-600 hover:bg-violet-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-full group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-full z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-full group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-full z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden absolute flex-row bottom-[150px] flex gap-2 pt-2 z-20 px-2 justify-center items-center ">
      <Link
    href="/my-skills"
    className="rounded-full bg-violet-600 w-28 h-10 text-sm text-white flex items-center justify-center"
  >
    Learn more
  </Link>

        <Link
          href="/my-projects"
          className="bg-trasparent border border-white rounded-full w-28 h-10 text-sm text-white flex items-center justify-center"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="bg-trasparent border border-white rounded-full w-28 h-10 text-sm text-white flex items-center justify-center"
        >
          Contact me
        </Link>
      </div>
      {/* <div className=" absolute flex-row bottom-[200px] flex z-20 w-full  justify-center px-2">
      <Link
    href="/my-skills"
    className="md:hidden rounded-full bg-violet-600 w-full h-10 text-sm text-white flex items-center justify-center px-2"
  >
    My Resume
  </Link>
      </div> */}

        <div className="absolute bottom-0 right-0 md:z-10 ">
          <Image
            src="/horse.png"
            alt="horse"
            height={300}
            width={300}
            className="absolute md:right-[200px] right-[20px] md:top-[150px] top-[95px]"
          />

          <Image src="/cliff.webp" alt="cliff"  width={480} height={480} />
        </div>

        <div className="absolute bottom-0 z-[5] w-full h-auto">
          <Image
            src="/trees.webp"
            alt="trees"
            width={2000}
            height={2000}
            className="w-full h-full"
          />
        </div>

        <Image
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-0 left-0 z-[10]"
        />
    </main>
    
  );
}
