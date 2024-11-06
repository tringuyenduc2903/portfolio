import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="h-max xl:px-12 lg:h-[22rem] p-6 sm:p-8 md:px-10 pt-32 md:pt-40 lg:pt-10 bg-gradient-to-tr dark:from-[#df51ad3e] dark:to-[#eb587d2a] from-[#f6ebeb90] to-[#fff8ec60] flex flex-col lg:flex-row mx-auto rounded-3xl shadow-md drop-shadow-2xl backdrop-blur-xl items-center justify-center lg:justify-between">
      <div className="order-2 sm:w-[75%] lg:w-[80%] lg:basis-[60%] flex flex-col space-y-6 cirGradient bg-clip-text">
        <h2 className="tracking-normal bg-gradient-to-br from-blue-400 via-indigo-600 to-red-500 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-semibold selection:text-gray-700 dark:selection:text-white/90">
          Liên lạc
        </h2>
        <p className="text-sm md:text-md font-normal lg:text-lg xl:text-lg">
          Nếu bạn có bất kỳ thắc mắc nào hoặc muốn thảo luận về các cơ hội tiềm
          năng, vui lòng liên hệ với tôi bằng các liên kết sau:
        </p>
        <div className="grid grid-cols-2 text-[0.7rem] md:text-[0.85rem] lg:text-base gap-2 md:gap-3 lg:gap-4">
          <Link
            href="tel:+84982213854"
            className="flex align-middle items-center font-jak font-bold space-x-1 w-max"
          >
            <FaPhoneAlt className="text-[#518FC7] dark:text-[#2498fe] h-3 w-3 md:h-4 md:w-4" />
            <h5 className="text-transparent dark:text-[#2498fe]">Gọi điện</h5>
          </Link>
          <Link
            href="mailto:nguyenductri2k3@gmail.com"
            className="flex align-middle items-center font-jak font-bold space-x-1 w-max"
          >
            <IoMdMail className="text-[#CA6298] dark:text-[#ff339c] h-4 w-4 md:h-5 md:w-5" />
            <h5 className="text-transparent dark:text-[#ff339c]">Gửi thư</h5>
          </Link>
        </div>
      </div>
      <div className="order-1 lg:order-2 absolute -rotate-[15deg] lg:rotate-0 lg:flex top-6 right-4 md:top-10 md:right-12 lg:basis-[40%]">
        <Image
          src="/Rectangle.png"
          className="select-none backdrop-shadow-xl h-24 w-24 md:h-40 md:w-44 lg:w-[15rem] lg:h-[16rem] xl:w-[16rem] xl:h-[18rem]"
          alt="boo"
          loading="lazy"
          priority={false}
          width={750}
          height={650}
        />
      </div>
    </div>
  );
}
