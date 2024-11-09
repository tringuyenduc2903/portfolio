export default function CategoryCard() {
  const data = [
    {
      id: 0,
      main: "Framework",
      desc: "Laravel/Magento",
      bg: "bg-gradient-to-r from-[#ffe4e4] to-[#ffe2d4]",
      text: "text-[#cf3903]",
    },
    {
      id: 1,
      main: "Năm sinh",
      desc: "2003",
      bg: "bg-gradient-to-l from-[#e7ffdc] to-[#ddfff8] rounded-[0.89rem]",
      text: "text-[#097360]",
    },
    {
      id: 2,
      main: "Quê quán",
      desc: "Hà Nội",
      bg: "bg-gradient-to-l from-[#cde1ff] to-[#f9d2ff]",
      text: "text-[#4e0aa2]",
    },
    {
      id: 3,
      main: "Học vấn",
      desc: "VTC Academy",
      bg: "bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc]",
      text: "text-[#690c58]",
    },
  ];

  return (
    <div className="flex flex-col select-none max-w-lg text-base items-center font-semibold justify-between w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto mt-6 mb-8">
      {data.map((obj) => (
        <div
          key={obj.id}
          className={`${obj.bg} ${obj.text} m-2 rounded-[0.89rem] px-2 md:px-3 md:py-1`}
        >
          {obj.main} : {obj.desc}
        </div>
      ))}
    </div>
  );
}
