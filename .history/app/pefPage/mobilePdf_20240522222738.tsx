'use client';
import { useCallback, useState } from 'react';
import { Button } from 'antd';
export default function Sample() {
  const [count, setCount] = useState(1);
  return (
    <div className="mt-0">
      <img className="absolute top-0 bottom-0 m-auto" src={`/pdfimg/${count}.png`}></img>
      <div className="absolute flex gap-4 justify-center left-0 right-0 bottom-2.5 m-auto">
        <Button  onClick={useCallback(() => {
            if(count === 1) return;
            setCount(count - 1)
          }, [count])}>Prev</Button>
        <span className='inline-block leading-8'>{count}</span>
        <Button onClick={useCallback(() => {
          if(count === 77) return;
          setCount(count + 1)
          }, [count])}>Next</Button>
      </div>
    </div>
  );
}