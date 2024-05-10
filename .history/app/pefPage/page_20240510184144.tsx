/*
 * @Author: codeAdaw 18810539364@sina.cn
 * @Date: 2024-05-08 18:54:48
 * @LastEditors: codeAdaw 18810539364@sina.cn
 * @LastEditTime: 2024-05-10 18:41:40
 * @FilePath: /netofficial/app/pefPage/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
//import logo from '@/assets/Netreel_logo@2x.png';
export default function Home() {
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
