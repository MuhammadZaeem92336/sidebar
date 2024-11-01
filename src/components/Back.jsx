import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
      <h2
        className="bg-clip-text text-transparent text-center text-white bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Muhammad Zaeem<br />Saeed
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg  dark:text-neutral-400 text-center text-white">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
    </BackgroundLines>)
  );
}