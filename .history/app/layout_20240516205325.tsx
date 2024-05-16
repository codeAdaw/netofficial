/*
 * @Author: codeAdaw 18810539364@sina.cn
 * @Date: 2024-05-08 18:54:48
 * @LastEditors: codeAdaw 18810539364@sina.cn
 * @LastEditTime: 2024-05-16 20:53:22
 * @FilePath: /netofficial/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
// import { useRouter } from 'next/router';
import "./globals.css";
import SwitchLocal  from "./components/switchLocal";
import SwitchPage from "./components/navBtns";
const inter = Inter({ subsets: ["latin"] });
// Metadata
export const metadata: Metadata = {
  title: "NetReel.AI--Explore the AI-driven digital entertainment world.",
  description: "Explore the AI-driven digital entertainment world.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-full w-full">
          <header className='z-10 fixed top-0 w-full sm:bg-black lg:bg-transparent'>
                  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 3xl:w-3/4" aria-label="Global">
                      <div className="flex-initial lg:h-5 sm:h-5 sm:basis-24 lg:w-24 relative lg:gap-x-8 mr-8">
                            <Image className="h-5 w-auto" src="/logo.png"  alt="" fill/>
                      </div>
                      <div className="lg:flex lg:gap-x-8 sm:gap-x-4">
                        <SwitchPage></SwitchPage>
                      </div>
                      <div className="lg:flex lg:flex-1 lg:justify-end">
                          <SwitchLocal></SwitchLocal>
                      </div>
                  </nav>
              </header>
            {children}
        </main>
      </body>
    </html>
  );
}
