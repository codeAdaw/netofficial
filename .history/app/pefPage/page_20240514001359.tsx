/*
 * @Author: codeAdaw 18810539364@sina.cn
 * @Date: 2024-05-08 18:54:48
 * @LastEditors: codeAdaw 18810539364@sina.cn
 * @LastEditTime: 2024-05-14 00:13:59
 * @FilePath: /netofficial/app/pefPage/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
//import logo from '@/assets/Netreel_logo@2x.png';
//import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
//import { pdfjs, Document, Page } from 'react-pdf';
//import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
// import 'pdfjs-dist/webpack';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/8.0.2/pdf.worker.js`;
// const options = {
//   cMapUrl: '/cmaps/',
//   standardFontDataUrl: '/standard_fonts/',
// };
// type PDFFile = string | File | null;
export default function Home() {
  // 判断是否是移动端
   const [isMobile, setIsMobile] = useState(false);
  // const [file, setFile] = useState('./NetReel.pdf');
    // 总页数
   // const [numPages, setNumPages] = useState(null);
   //const isM = useMediaQuery({ query: '(max-width: 768px)' });
   //console.log('isM----', isM);
  //  useEffect(() => {
  //   //const isM = useMediaQuery('(max-width: 768px)');
  //   // 判断是否是移动端
  //    setIsMobile(isM);
  //  }, [isMobile]);
  //  function onDocumentLoadSuccess() {
  //     // 可以在这里处理加载成功的事件
  //     setNumPages(numPages);
  //     console.log('PDF加载成功！');
  //   }
  return (
    <main className="h-full w-full">
      {/* {
        isMobile && 
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
         >
          {
            // 使用map函数渲染每一页
            Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))
          }
        </Document>
      } */}
      {/* {
        !isMobile &&  */}
          <iframe 
            className="h-full w-full" 
            src="/netreel.pdf"
            style={{
              height: 'calc(100% - 60px)',
              position: 'absolute',
              top: '60px',
            }}
          ></iframe>
      {/* } */}
    </main>
  );
}
