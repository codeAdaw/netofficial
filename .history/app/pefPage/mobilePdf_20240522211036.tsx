/*
 * @Author: codeAdaw 18810539364@sina.cn
 * @Date: 2024-05-21 21:57:15
 * @LastEditors: codeAdaw 18810539364@sina.cn
 * @LastEditTime: 2024-05-22 21:10:33
 * @FilePath: /netofficial/app/pefPage/mobilePdf.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { useCallback, useState } from 'react';
export default function Sample() {
  const [count, setCount] = useState(1);
  return (
    <div className="Example">
      <img src={`/pdfimg/${count}.png`}></img>
      <div>
        <button onClick={useCallback(() => setCount(count - 1), [count])}>Prev</button>
        <span>{count}</span>
        <button onClick={useCallback(() => setCount(count + 1), [count])}>Next</button>
      </div>
    </div>
  );
}