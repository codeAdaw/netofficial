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
  let path = '';
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-full w-full">
          <header className='z-10 fixed top-0 w-full sm:bg-black lg:bg-transparent'>
                  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 3xl:w-3/4" aria-label="Global">
                      <div className="flex-initial lg:h-5 lg:w-24 relative lg:gap-x-8 mr-8">
                            <Image className="h-5 w-auto" src="/logo.png"  alt="" fill/>
                      </div>
                      <div className="lg:flex lg:gap-x-8">
                        <SwitchPage></SwitchPage>
                      </div>
                      <div className="flex">
                          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                              <span className="sr-only">Open main menu</span>
                              {/* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                              </svg> */}
                          </button>
                      </div>
                      {
                        path != '/pefPage' &&
                        <div className="lg:flex lg:flex-1 lg:justify-end">
                          <SwitchLocal></SwitchLocal>
                        </div>
                      }
                  </nav>
              </header>
            {children}
        </main>
      </body>
    </html>
  );
}
