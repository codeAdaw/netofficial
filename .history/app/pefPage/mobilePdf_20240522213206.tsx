'use client';
import { useCallback, useState } from 'react';
import { Button } from 'antd';
export default function Sample() {
  const [count, setCount] = useState(1);
  return (
    <div className="mt-20">
      <img src={`/pdfimg/${count}.png`}></img>
      <div>
        <Button  onClick={useCallback(() => setCount(count - 1), [count])}>Prev</Button>
        <span>{count}</span>
        <Button onClick={useCallback(() => setCount(count + 1), [count])}>Next</Button>
      </div>
    </div>
  );
}