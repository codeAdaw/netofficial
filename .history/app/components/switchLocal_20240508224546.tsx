// 切换语言组件
"use client";
import React, {useState, useEffect} from 'react';
import intl from 'react-intl-universal';
import { Button, Dropdown } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a  rel="noopener noreferrer" href="?language=en-US">
        English
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a  rel="noopener noreferrer" href="?language=zh-CH">
        简体中文
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a  rel="noopener noreferrer" href="?language=zh-TW">
        繁体中文
      </a>
    ),
  },
];
export default function SwitchLocal(props:any) {
  const [lan, setLan] = useState('EN');
  const onClick = ({key}:any)=>{
    const obj = ['EN','简','蘩']
    setLan(obj[key-1])
  }
  useEffect(()=>{
      const surl = window.location.search;
  },[])
  return (
    <Dropdown menu={{ items,onClick }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
       <a onClick={(e) => e.preventDefault()}>
            <Button>{lan}</Button>
        </a>
    </Dropdown>
  );
}