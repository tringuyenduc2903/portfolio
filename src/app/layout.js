import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Nguyễn Đức Trí ✦ Lập trình viên",
  description: "Trang giới thiệu bản thân.",
};

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased back font-out mx-auto bg-[#fffdfd] dark:bg-[#000000] overflow-x-hidden lg:transform-gpu`}
      >
        {children}
      </body>
    </html>
  );
}
