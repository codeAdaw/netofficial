'use client';
import { useCallback, useState } from 'react';
import { Button } from 'antd';
export default function Sample() {
  const [count, setCount] = useState(1);
  return (
    <div className="mt-20">
      <img className="absolute top-0 bottom-0 m-auto" src={`/pdfimg/${count}.png`}></img>
      <div className="absolute flex gap-4 justify-center left-0 right-0 bottom-10 m-auto">
        <Button  onClick={useCallback(() => setCount(count - 1), [count])}>Prev</Button>
        <span>{count}</span>
        <Button onClick={useCallback(() => setCount(count + 1), [count])}>Next</Button>
      </div>
    </div>
  );
}