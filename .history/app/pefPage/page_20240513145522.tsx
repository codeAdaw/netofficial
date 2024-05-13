"use client";
//import logo from '@/assets/Netreel_logo@2x.png';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
export default function Home() {
  // 判断是否是移动端
   const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
    //const isM = useMediaQuery('(max-width: 768px)');
    // 判断是否是移动端
    const isM = useMediaQuery({ query: '(max-width: 768px)' });
     setIsMobile(isM);
   }, [isMobile]);
   function onDocumentLoadSuccess() {
      // 可以在这里处理加载成功的事件
      console.log('PDF加载成功！');
    }
  return (
    <main className="h-full w-full">
      {
        isMobile && 
        <Document
          file="/nren.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
         >
          {
            // 使用map函数渲染每一页
            Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))
          }
        </Document>
      }
      {
        !isMobile && 
          <iframe 
            className="h-full w-full" 
            src="/nren.pdf"
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
