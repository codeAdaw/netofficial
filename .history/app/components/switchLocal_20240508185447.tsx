// 切换语言组件
import React from 'react';
import intl from 'react-intl-universal';
// import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
//import { useIntl } from 'react-intl';
// const { Option } = Select;
// const locales = {
//   "en-US": require('@/locales/en-US.json'),
//   "zh-CH": require('@/locales/zh-CN.json'),
//   "zh-TW": require('@/locales/zh-TW.json'),
// };
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
  //const intl = useIntl();
  const handleSelect = (value:any) => {
    props.onchange(value)
    console.log('--handleSelect---',value);
  };
  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
        <Button>EN</Button>
    </Dropdown>
  );
}