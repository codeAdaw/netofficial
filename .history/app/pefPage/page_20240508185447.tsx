"use client";
//import logo from '@/assets/Netreel_logo@2x.png';
export default function Home() {
  return (
    <main className="h-full w-full">
        <iframe 
          className="h-full w-full" 
          src="/NetReel.pdf"
          style={{
            height: 'calc(100% - 60px)',
            position: 'absolute',
            top: '60px',
          }}
        ></iframe>
    </main>
  );
}
