"use client";
import { useMediaQuery } from 'react-responsive';
import { Document, Page } from 'react-pdf';
export default function PdfHome() {
  // 判断是否是移动端
   const isM = useMediaQuery({ query: '(max-width: 768px)' });
   function onDocumentLoadSuccess() {
      // 可以在这里处理加载成功的事件
     // setNumPages(numPages);
      console.log('PDF加载成功！');
    }
  return (
    <main className="h-full w-full">
      {
        isM && 
        <Document
          file={'/netreel.pdf'}
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
