/*
 * @Author: codeAdaw 18810539364@sina.cn
 * @Date: 2024-05-12 22:33:29
 * @LastEditors: codeAdaw 18810539364@sina.cn
 * @LastEditTime: 2024-05-22 21:44:04
 * @FilePath: /netofficial/app/components/navBtns.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 切换页面
"use client";
import React, {useState, useEffect} from 'react';
import intl from 'react-intl-universal'
import { useMediaQuery } from 'react-responsive';
import { message } from "antd";
const locales = {
    "en-US": require('./../locales/en-US.json'),
    "zh-CH": require('./../locales/zh-CN.json'),
    "zh-TW": require('./../locales/zh-TW.json'),
  };
export default function SwitchPage(props:any) {
  const [initDone, setInitDone] = useState(false);
  const isM = useMediaQuery({ query: '(max-width: 768px)' });
  const [messageApi, contextHolder] = message.useMessage();
  let path = '';
  if (typeof window !== 'undefined') {
    // 在浏览器环境下执行的代码
    path = window.location.pathname;
  }
    useEffect(() => {
      intl.init({
          currentLocale: intl.determineLocale({urlLocaleKey: "language", cookieLocaleKey: "language"}),
          locales,
      }).then(() => {
          setInitDone(true);
      });
      intl.determineLocale({
          urlLocaleKey: "language",
          cookieLocaleKey: "language"
      });
  }, []);
  const handelPdfPage = ()=>{
    // if(isM){
    //   //  alert('请在pc端查看白皮书。')
    //    messageApi.info('请在pc端查看白皮书');
    // }else{
      window.location.href = '/pefPage';
    // }
  }
  return (
    <>
        {contextHolder}
        {
            initDone && path != '/' && <a  href="/?language=en-US" className="text-sm font-semibold leading-6 text-wright">{intl.get("H1")}</a>
        } 
        {
            initDone && path == '/' &&  <a onClick={handelPdfPage} style={isM ? {marginLeft:'70px'} : {}} href="#" className="text-sm font-semibold leading-6 text-wright">{intl.get("H2")}</a>
        }
    </>
  );
}