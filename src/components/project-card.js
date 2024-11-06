import Link from "next/link";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {[
        {
          id: 1,
          image: "/galle.png",
          title: "Đồng hồ Galle",
          description: "Hệ thống phân phối đồng hồ chính hãng.",
          link: "https://galle.vn",
          target: "blank",
        },
        {
          id: 2,
          image: "/routine.jpeg",
          title: "Routine",
          description: "Thương hiệu thời trang Việt Nam cao cấp.",
          link: "https://routine.vn",
          target: "blank",
        },
        {
          id: 3,
          image: "/agilts.png",
          title: "Agilts",
          description: "Hệ thống phân phối xe máy Honda, Yamaha.",
          link: "#",
          target: "self",
        },
      ].map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              rel="noopener noreferrer"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="rounded-lg drop-shadow-2xl hover:scale-110"
                loading="lazy"
                width={200}
                height={200}
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                <Link
                  href={project.link}
                  target={project.target}
                  rel="noopener noreferrer"
                >
                  {project.title}
                </Link>
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
