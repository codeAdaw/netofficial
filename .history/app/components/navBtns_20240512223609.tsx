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
  const [initDone, setInitDone] = useState(false);
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
  return (
    <>
        {
            initDone && <a  href="/?language=en-US" className="text-sm font-semibold leading-6 text-wright">{intl.get("H1")}</a>
        } 
        {
            initDone &&      
                <a href="/pefPage" className="text-sm font-semibold leading-6 text-wright">{intl.get("H2")}</a>
        }
    </>
  );
}