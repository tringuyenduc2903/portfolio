"use client";

import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { useState } from "react";
import Image from "next/image";
import TechCard from "@/components/tech-card";

export default function TechStack() {
  const data = [
    {
      title: "Laravel",
      id: 0,
      main: "/Laravel.png",
      desc: "Framework PHP mạnh mẽ, dễ sử dụng, hỗ trợ MVC và bảo mật.",
    },
    {
      title: "Magento 2",
      id: 1,
      main: "/Adobe Commerce (Magneto).png",
      desc: "Nền tảng eCommerce mạnh mẽ, mở rộng, dễ tùy chỉnh.",
    },
    {
      title: "jQuery",
      id: 2,
      main: "/jQuery.png",
      desc: "Thư viện JavaScript nhẹ, giúp thao tác DOM, xử lý sự kiện dễ dàng.",
    },
    {
      title: "MySQL",
      id: 3,
      main: "/MySQL.png",
      desc: "Hệ quản trị cơ sở dữ liệu quan hệ, mã nguồn mở, mạnh mẽ.",
    },
    {
      title: "MongoDB",
      id: 4,
      main: "/MongoDB.png",
      desc: "Cơ sở dữ liệu NoSQL, lưu trữ dữ liệu dạng tài liệu, linh hoạt.",
    },
    {
      title: "Redis",
      id: 5,
      main: "/Redis.png",
      desc: "Cơ sở dữ liệu lưu trữ in-memory, nhanh, hỗ trợ cấu trúc dữ liệu.",
    },
    {
      title: "NextJs",
      id: 6,
      main: "/Next.js.png",
      desc: "Framework React, hỗ trợ SSR, tối ưu hiệu suất, dễ triển khai.",
    },
    {
      title: "Bootstrap",
      id: 7,
      main: "/Bootstrap.png",
      desc: "Framework CSS phổ biến, giúp thiết kế giao diện responsive, dễ sử dụng.",
    },
    {
      title: "Tailwind",
      id: 8,
      main: "/Tailwind CSS.png",
      desc: "Framework CSS tiện lợi, tùy chỉnh, linh hoạt, nhanh chóng.",
    },
    {
      title: "Elasticsearch",
      id: 9,
      main: "/Elastic Search.png",
      desc: "Công cụ tìm kiếm, phân tích dữ liệu mạnh mẽ, mở rộng.",
    },
    {
      title: "Meilisearch",
      id: 10,
      main: "/meilisearch.jpeg",
      desc: "Công cụ tìm kiếm mạnh mẽ, nhanh chóng, dễ sử dụng.",
    },
    {
      title: "VS Code",
      id: 11,
      main: "/Visual Studio Code (VS Code).png",
      desc: "Trình soạn thảo mã nguồn nhẹ, mạnh mẽ, hỗ trợ nhiều ngôn ngữ.",
    },
    {
      title: "PHPStorm",
      id: 12,
      main: "/PhpStorm.png",
      desc: "IDE mạnh mẽ cho PHP, hỗ trợ debug, testing, database và deployment.",
    },
    {
      title: "WebStorm",
      id: 13,
      main: "/WebStorm.png",
      desc: "IDE mạnh mẽ dành cho JavaScript, hỗ trợ tối ưu và tích hợp.",
    },
  ];
  const [idNumber, setIdNumber] = useState(0);
  const changeId = (id) => {
    setIdNumber(id);
  };
  const rightArrow = () => {
    if (idNumber + 1 >= data.length) {
      setIdNumber(0);
    } else {
      setIdNumber(idNumber + 1);
    }
  };
  const leftArrow = () => {
    if (idNumber === 0) {
      setIdNumber(data.length - 1);
    } else {
      setIdNumber(idNumber - 1);
    }
  };

  return (
    <>
      <div className="flex mx-auto justify-between mt-12 space-x-4 md:space-x-6 lg:space-x-auto items-center">
        <button
          className="font-space group bg-[#c7dada] dark:bg-[#939f9f] dark:hover:bg-[#828686] h-max w-max hover:bg-[#f7eeff] px-1 py-1 rounded-full select-none"
          onClick={leftArrow}
        >
          <HiOutlineArrowLongLeft className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
        </button>
        <div className="bg-gradient-to-tr dark:from-[#dbfefe25] dark:via-[#f9f2ff10] dark:to-[#fff2ec20] from-[#dbfefe] via-[#f9f2ff] to-[#fff2ec] flex p-2 py-2 sm:p-3 md:p-4 lg:p-6 rounded-xl sm:rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] mx-auto items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 md:h-max lg:space-x-6 transition-all duration-700 ease-linear">
          <div className="basis-[30%] lg:basis-[25%] h-16 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-2xl">
            <div className="flex mx-auto rounded-2xl relative w-full h-full bg-white">
              <Image
                src={data[idNumber].main}
                alt="tech"
                fill
                loading="lazy"
                className="select-none p-1 sm:p-2 md:p-3 lg:p-4 h-full w-full flex mx-auto object-contain rounded-2xl"
              />
            </div>
          </div>
          <div className="basis-[70%] lg:basis-[75%] mx-auto transition-all duration-500">
            <div className="flex mb-1 justify-between items-center">
              <h3 className="text-xl font-semibold tracking-wide">
                {data[idNumber].title}
              </h3>
            </div>
            <p className="text-[1.015rem] font-normal md:w-[90%]">
              {data[idNumber].desc}
            </p>
          </div>
        </div>
        <button
          className="bg-[#fce4fe] dark:bg-[#a995ab] dark:hover:bg-[#7a747b] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none"
          onClick={rightArrow}
        >
          <HiOutlineArrowLongRight className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
        </button>
      </div>
      <div className="mt-12 pb-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center">
        {data.map((obj, i) => {
          return (
            <TechCard
              key={i}
              changeId={changeId}
              id={obj.id}
              main={obj.main}
              alt={obj.title}
            />
          );
        })}
      </div>
    </>
  );
}
