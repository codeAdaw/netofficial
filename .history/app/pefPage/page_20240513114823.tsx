"use client";
//import logo from '@/assets/Netreel_logo@2x.png';
export default function Home() {
  return (
    <main className="h-full w-full">
        <object src="/nren.pdf" type="application/pdf" className="h-full w-full" width="100%" height="100%" />
        {/* <iframe 
          className="h-full w-full" 
          src="/nren.pdf"
          style={{
            height: 'calc(100% - 60px)',
            position: 'absolute',
            top: '60px',
          }}
        ></iframe> */}
    </main>
  );
}
