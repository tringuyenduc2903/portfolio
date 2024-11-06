"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { systemTheme, theme } = useTheme();

  return (
    <div className="flex select-none text-sm py-16 mt-16 flex-col h-max items-center mx-auto justify-center">
      <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2">
        <Link
          href="https://www.linkedin.com/in/tringuyenduc2903"
          target="blank"
          className="dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          <Image
            src="/linkedin.png"
            alt="linkedin"
            loading="lazy"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://www.github.com/tringuyenduc2903"
          target="blank"
          className="dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          {theme && (
            <Image
              src={theme === "dark" ? "/github-dark.png" : "/github-light.png"}
              alt="github"
              loading="lazy"
              width={30}
              height={30}
            />
          )}
        </Link>
        <Link
          href="https://www.facebook.com/tringuyenduc2903"
          target="blank"
          className="dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          <Image
            src="/facebook.png"
            alt="facebook"
            loading="lazy"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
}
