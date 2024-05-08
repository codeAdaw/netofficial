// 切换语言组件
import {useState},React from 'react';
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
  const handleSelect = (value:any) => {
    props.onchange(value)
  };
  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
        <Button>{}</Button>
    </Dropdown>
  );
}