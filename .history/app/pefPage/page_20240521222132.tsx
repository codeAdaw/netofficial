"use client";
import { useMediaQuery } from 'react-responsive';
// import MobilePdf from './mobilePdf';
import dynamic from 'next/dynamic'
 
const DynamicMobilePdf = dynamic(() => import('./mobilePdf'), {
  ssr: false,
})
export default function PdfHome() {
  // 判断是否是移动端
   const isM = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <main className="h-full w-full">
      {
        isM && 
          <DynamicMobilePdf />
      }
      {
        !isM && 
          <iframe 
            className="h-full w-full" 
            src="/netreel.pdf"
            style={{
              height: 'calc(100% - 60px)',
              position: 'absolute',
              top: '60px',
            }}
          ></iframe>
      }
    </main>
  );
}
