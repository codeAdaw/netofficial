import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import SwitchLocal  from "./components/switchLocal";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NETREEL",
  description: "NETREEL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handelLocalChange = (value:any) => {
        window.history.pushState({}, '', `?language=${value}`);
        window.location.reload()
    }
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-full w-full">
          <header className='z-10 fixed top-0 w-full sm:bg-black lg:bg-transparent'>
                  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                      <div className="flex lg:flex mr-24">
                          <a href="#" className="-m-1.5 p-1.5">
                              <Image className="h-8 w-auto" src="/logo.png" width="100" alt=""/>
                          </a>
                      </div>
                      <div className="hidden lg:flex lg:gap-x-8">
                          <a href="?language=en-US" className="text-sm font-semibold leading-6 text-wright">首页</a>
                          <a href="/pefPage" className="text-sm font-semibold leading-6 text-wright">白皮书</a>
                      </div>
                      <div className="flex">
                          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                              <span className="sr-only">Open main menu</span>
                              {/* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                              </svg> */}
                          </button>
                      </div>
                      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                          <SwitchLocal onchange={handelLocalChange}></SwitchLocal>
                      </div>
                  </nav>
              </header>
            {children}
        </main>
      </body>
    </html>
  );
}
