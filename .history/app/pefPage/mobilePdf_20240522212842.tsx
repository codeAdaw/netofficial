'use client';
import { useCallback, useState } from 'react';
import { Button } from 'antd';
export default function Sample() {
  const [count, setCount] = useState(1);
  return (
    <div className="Example">
      <img src={`/pdfimg/${count}.png`}></img>
      <div>
        <button  onClick={useCallback(() => setCount(count - 1), [count])}>Prev</button>
        <span>{count}</span>
        <button onClick={useCallback(() => setCount(count + 1), [count])}>Next</button>
      </div>
    </div>
  );
}