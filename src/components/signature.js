"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function Signature() {
  const { systemTheme, theme } = useTheme();

  return (
    <div className="flex mx-auto justify-center mt-16 select-none">
      <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
        tringuyenduc2903
      </span>
      {theme && (
        <Image
          src={theme === "dark" ? "love-white.svg" : "love-black.svg"}
          alt="love"
          className="-mt-4"
          loading="lazy"
          priority={false}
          width={30}
          height={30}
        />
      )}
    </div>
  );
}
