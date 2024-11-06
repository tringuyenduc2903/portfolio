import Image from "next/image";

export default function CategoryCard() {
  return (
    <div className="flex flex-col select-none max-w-lg text-base items-center font-semibold justify-between w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto mt-6 mb-8">
      <div className="m-2 bg-gradient-to-r from-[#ffe4e4] to-[#ffe2d4] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#cf3903]">
        Framework: Laravel/Magento
      </div>
      <div className="m-2 bg-gradient-to-l from-[#e7ffdc] to-[#ddfff8] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#097360]">
        <span className="inline-flex items-baseline">
          <Image
            src="/Sparkles.png"
            alt="sparkles"
            className="self-center mx-1"
            loading="lazy"
            priority={false}
            width={25}
            height={25}
          />
        </span>
        Năm sinh: 2003
      </div>
      <div className="m-2 bg-gradient-to-l from-[#cde1ff] to-[#f9d2ff] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#4e0aa2]">
        <span className="inline-flex items-baseline">
          <Image
            src="/Rocket.png"
            alt="rocket"
            className="self-center mx-1"
            loading="lazy"
            priority={false}
            width={25}
            height={25}
          />
        </span>
        Quê quán: Hà Nội
      </div>
      <div className="m-2 bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#690c58]">
        <span className="inline-flex items-baseline">
          <Image
            src="/Flash.png"
            alt="flash"
            className="self-center mx-1"
            loading="lazy"
            priority={false}
            width={25}
            height={25}
          />
        </span>
        Học vấn: VTC Academy
      </div>
    </div>
  );
}
