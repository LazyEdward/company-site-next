import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courtney Lanka",
  description: "Company Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="portal-body" className={`${poppins.className} relative text-default-text w-screen h-screen flex flex-col overflow-hidden`}>
        <TopBar/>
        <section id="portal-section" className="relative flex flex-col flex-1 overflow-auto">
          <div className="flex flex-col flex-1">
            {children}
          </div>
          <Footer/>
        </section>
      </body>
    </html>
  );
}
