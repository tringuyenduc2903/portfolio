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
      title: "PHPStorm",
      id: 0,
      main: "PhpStorm.svg",
      desc: "IDE yêu thích dùng cho phát triển PHP.",
      bg: "bg-red-50",
      text: "text-red-500",
    },
    {
      title: "WebStorm",
      id: 1,
      main: "WebStorm.svg",
      desc: "Lựa chọn không thể thiếu trong các dự án JavaScript.",
      bg: "bg-pink-50",
      text: "text-pink-500",
    },
    {
      title: "Laravel",
      id: 2,
      main: "Laravel.svg",
      desc: "Framework hàng đầu khi bắt đầu 1 dự án PHP mới.",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "Magento 2",
      id: 3,
      main: "Adobe Commerce (Magneto).svg",
      desc: "Với thương mại điện tử, tôi sẽ ưu tiên chọn Magento.",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "jQuery",
      id: 4,
      main: "jQuery.svg",
      desc: "Thao tác DOM nhanh chóng và giữ mã nguồn sạch với các dự án không yêu cầu tương tác cao.",
      bg: "bg-green-50",
      text: "text-green-500",
    },
    {
      title: "Next JS",
      id: 5,
      main: "Next.js.svg",
      desc: "Tách biệt mã nguồn Front-end và Back-end. Tăng hiệu suất, cải thiện trải nghiệm người dùng và SEO.",
      bg: "bg-gray-900",
      text: "text-gray-50",
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
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
