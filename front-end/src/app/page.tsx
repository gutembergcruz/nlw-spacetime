import { User } from "lucide-react";

import { Copyright } from "@/Components/Copyright";
import { Hero } from "@/Components/Hero";
import { SignIn } from "@/Components/SignIn";
import { EmptyMemories } from "@/Components/EmptyMemories";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* LEFT */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover p-16 px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[256px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
        <SignIn />
        <Hero />
        <Copyright />
      </div>
      {/* RIHT */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  );
}
