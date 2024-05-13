"use client";
//import logo from '@/assets/Netreel_logo@2x.png';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
export default function Home() {
  // 判断是否是移动端
   const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
    const isM = useMediaQuery('(max-width: 768px)');
     setIsMobile(isM);
   }, [isMobile]);
  return (
    <main className="h-full w-full">
        <iframe 
          className="h-full w-full" 
          src="/nren.pdf"
          style={{
            height: 'calc(100% - 60px)',
            position: 'absolute',
            top: '60px',
          }}
        ></iframe>
    </main>
  );
}
