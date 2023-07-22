"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import {
  UserCircle2,
  Phone,
  Linkedin,
  Github,
  GraduationCap,
} from "lucide-react";
import About from "./components/about";
import { useState } from "react";

type pages = "about" | "contact" | "graduation";

export default function Home() {
  const [page, setPage] = useState<pages>("about");

  return (
    <div className="h-screen flex flex-row items-center px-28">
      <aside className="flex flex-col justify-center items-center bg-zinc-800  h-5/6 w-12 space-y-9">
        <a onClick={() => setPage("about")} className="cursor-pointer">
          <UserCircle2
            className={`${page === "about" ? "text-fuchsia-700" : ""}`}
          />
        </a>
        <a onClick={() => setPage("graduation")} className="cursor-pointer">
          <GraduationCap
            className={`${page === "graduation" ? "text-fuchsia-700" : ""}`}
          />
        </a>
        <a onClick={() => setPage("contact")} className="cursor-pointer">
          <Phone
            className={`${page === "contact" ? "text-fuchsia-700" : ""}`}
            size="30px"
          />
        </a>
      </aside>
      <main className="flex flex-1 flex-row bg-zinc-800 h-5/6">
        <div className="relative">
          <img
            src="https://pm1.aminoapps.com/6369/85c1b0231ad9ae26f9c768b2a3a79d58286fc0ef_hq.jpg"
            className="object-cover h-full w-96"
          />
          <div className="absolute  bottom-1/4 left-0 right-0 px-4 py-2 bg-zinc-950 opacity-75">
            <div className="flex flex-col w-full items-center space-y-2">
              <p className="text-3xl text-slate-300">Matheus Ferreira</p>
              <p className="text-xl text-fuchsia-700">Developer</p>
              <div className="flex flex-row space-x-3">
                <Linkedin className="text-slate-300" />
                <Github className="text-slate-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 overflow-auto">
          <About />
        </div>
      </main>
    </div>
  );
}
