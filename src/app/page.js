"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsArrowUpRight } from "react-icons/bs";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  const { systemTheme, theme } = useTheme();

  return (
    <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
        <div className="flex flex-row justify-start items-center mt-20">
          {theme && (
            <Image
              src={theme === "dark" ? "/Avatar-white.png" : "/Avatar-black.png"}
              alt="avatar"
              priority
              width={80}
              height={80}
            />
          )}
          <div className="flex flex-col ml-4">
            <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
              <span className="font-semibold">Nguyễn Đức Trí</span>
              <span>
                {theme && (
                  <Image
                    src={theme === "dark" ? "/boo-white.png" : "/boo-black.png"}
                    className="select-none"
                    alt="boo"
                    loading="lazy"
                    width={30}
                    height={30}
                  />
                )}
              </span>
            </h2>
            <h3>
              <Link
                href="https://www.linkedin.com/in/tringuyenduc2903"
                target="_blank"
                className="text-[#717171bb] flex items-center"
              >
                <p>@tringuyenduc2903</p>
                <BsArrowUpRight className="stroke-1 h-3" />
              </Link>
            </h3>
          </div>
        </div>
        <div className="mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
          <p className="sm:leading-6 md:leading-6 lg:leading-8">
            Là lập trình viên có kinh nghiệm làm việc trong các dự án vừa và
            nhỏ, tôi sẵn sàng tham gia phát triển framework Magento và Laravel.
          </p>
        </div>
      </div>
      <div className="mt-28 mx-auto">
        <Experience />
      </div>
      <div className="mt-28 mx-auto">
        <Contact />
      </div>
    </div>
  );
}
