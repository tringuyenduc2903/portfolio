export default function TimeLine() {
  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {[
          {
            id: 0,
            title: "Bảo vệ đồ án",
            duration: "12/2023 - 10/2024",
            org: "Dự án Hệ thống phân phối xe máy Agilts",
            skills: ["Laravel", "MariaDB"],
            class:
              "bg-red-100 text-red-800 text-sm font-medium m-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
          },
          {
            id: 1,
            title: "Nhân viên tại Ecommage",
            duration: "10/2023 - 11/2023",
            org: "Lập trình viên Backend",
            skills: ["Magento", "jQuery", "MySQL"],
            class:
              "bg-green-100 text-green-800 text-sm font-medium m-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
          },
          {
            id: 2,
            title: "Thực tập tại Ecommage",
            duration: "06/2023 - 09/2023",
            org: "Thực tập sinh Backend",
            skills: ["Magento"],
            class:
              "bg-yellow-100 text-yellow-800 text-sm font-medium m-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
          },
          {
            id: 3,
            title: "Học tập tại VTC Academy",
            duration: "10/2020 - 05/2023",
            org: "Lập trình Full-stack",
            skills: ["C", "C#", "PHP", "MySQL", "Go", "MongoDB"],
            class:
              "bg-pink-100 text-pink-800 text-sm font-medium m-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300",
          },
        ].map((item) => (
          <li className="mb-10 ms-6" key={item.id}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
              {item.id === 0 && (
                <span className="bg-red-500 text-[#fff] text-sm font-medium m-2 px-2.5 py-0.5 border-sky-100 rounded ms-3">
                  Mới nhất
                </span>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.duration}
            </time>
            <p>{item.org}</p>
            <div className="flex flex-wrap mt-8">
              {item.skills.map((i, idx) => (
                <span key={idx} className={`${item.class}`}>
                  {i}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
