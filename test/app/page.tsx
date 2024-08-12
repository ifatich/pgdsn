"use client";

import { Index } from "pgdsn";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="w-screen h-screen">
        <Index />
        <button className="bg-rose-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Kontol</button>
      </div>
    </main>
  );
}
