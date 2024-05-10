/*
 * @Author: codeAdaw 18810539364@sina.cn
 * @Date: 2024-05-08 18:54:48
 * @LastEditors: codeAdaw 18810539364@sina.cn
 * @LastEditTime: 2024-05-09 14:29:59
 * @FilePath: /netofficial/app/components/switchLocal.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
export default function SwitchLocal(props:any) {
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