// 切换页面
"use client";
import React, {useState, useEffect} from 'react';
import intl from 'react-intl-universal'
import { useMediaQuery } from 'react-responsive';
const locales = {
    "en-US": require('./../locales/en-US.json'),
    "zh-CH": require('./../locales/zh-CN.json'),
    "zh-TW": require('./../locales/zh-TW.json'),
  };
export default function SwitchPage(props:any) {
  const [initDone, setInitDone] = useState(false);
  const isM = useMediaQuery({ query: '(max-width: 768px)' });
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
    if(isM){
       
    }else{
      window.location.href = '/pefPage';
    }
  }
  return (
    <>
        {
            initDone && path != '/' && <a  href="/?language=en-US" className="text-sm font-semibold leading-6 text-wright">{intl.get("H1")}</a>
        } 
        {
            initDone && path == '/' &&  <a onClick={handelPdfPage} href="#" className="text-sm font-semibold leading-6 text-wright">{intl.get("H2")}</a>
        }
    </>
  );
}