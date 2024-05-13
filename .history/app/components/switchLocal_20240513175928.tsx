// 切换语言组件
"use client";
import React, {useState, useEffect} from 'react';
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
export default function SwitchLocal() {
  const [lan, setLan] = useState('EN');
  let path = '';
  if (typeof window !== 'undefined') {
    // 在浏览器环境下执行的代码
    path = window.location.pathname;
  }
  const onClick = ({key}:any)=>{
    const obj = ['EN','简','蘩']
    setLan(obj[key-1])
  }
  useEffect(()=>{
      const surl = window.location.search;
      if(surl == ""){
         window.history.pushState({}, '', `?language=en-US`);
         window.location.reload()
      }
      else {
         const obj:any = {
           'en-US': 'EN',
           'zh-CH': '简',
           'zh-TW': '蘩',
         }
         setLan(obj[surl.split('=')[1]])
      }
  },[])
  return (
      <>
        {
          path == '/'  && 
          <Dropdown menu={{ items,onClick }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
            <a onClick={(e) => e.preventDefault()}>
                <Button>{lan}</Button>
            </a>
          </Dropdown>
        }
      </>
  );
}