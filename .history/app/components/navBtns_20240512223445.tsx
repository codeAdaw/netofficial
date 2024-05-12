// 切换页面
"use client";
import React, {useState, useEffect} from 'react';
import { Inter } from "next/font/google";
import intl from 'react-intl-universal'
const locales = {
    "en-US": require('./locales/en-US.json'),
    "zh-CH": require('./locales/zh-CN.json'),
    "zh-TW": require('./locales/zh-TW.json'),
  };
export default function SwitchPage(props:any) {
  const [lan, setLan] = useState('EN');
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
    <Dropdown menu={{ items,onClick }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
       <a onClick={(e) => e.preventDefault()}>
            <Button>{lan}</Button>
        </a>
    </Dropdown>
  );
}