import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Head } from "next/head";

export const metadata = {
  title: "Nguyễn Đức Trí ✦ Lập trình viên",
  description: "Trang giới thiệu bản thân.",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="vi">
      <body className="back font-out mx-auto bg-[#fffdfd] dark:bg-[#000000] overflow-x-hidden lg:transform-gpu">
        <main className="land relative z-10">
          <ThemeProvider attribute="class">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
