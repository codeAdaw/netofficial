'use client';
import { useCallback, useState } from 'react';
export default function Sample() {
  const [count, setCount] = useState(1);
  return (
    <div className="Example">
      <img src={`/pdfimg/${count}.png`}></img>
    </div>
  );
}