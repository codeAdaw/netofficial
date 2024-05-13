"use client";
import Image from "next/image";
import React, {useState,useEffect,useLayoutEffect,useRef, MutableRefObject, Suspense} from 'react';
import intl from 'react-intl-universal'
import Typed from 'typed.js';
import ReactFullpage from '@fullpage/react-fullpage';
import { useMediaQuery } from 'react-responsive';
import 'animate.css';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
// import Spline from '@splinetool/react-spline';
// import { IntersectionObserverProps, IntersectionObserver } from 'react-intersection-observer';
const locales = {
    "en-US": require('./locales/en-US.json'),
    "zh-CH": require('./locales/zh-CN.json'),
    "zh-TW": require('./locales/zh-TW.json'),
  };
export default function Home() {
   const [initDone, setInitDone] = useState(false);
   const [typef,setTypef] = useState(false);
   const isM = useMediaQuery({ query: '(max-width: 768px)' });
   const typedel = React.useRef(null);
   useLayoutEffect(()=>{
        if(!initDone){return};
        const typed = new Typed('#tttt',{
            strings: ["NETREEL.AI"],
            typeSpeed:100,
            onComplete: (self) => {
                // 打完字
                setTypef(true);
            },
        })
    },[initDone]);
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
     { initDone &&
        <main className="bg-block h-fit w-full flex-1 absolute top-0 box-border bg-[#100F22] relative selector">
                <ReactFullpage
                    //fullpage options
                    licenseKey = {'YOUR_KEY_HERE'}
                    credits = {{
                        enabled:false,
                      }}
                    scrollingSpeed = {1200}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                  <div id="bannerWrap" className="section mx-auto w-full lg:h-screen bg-cover relative">
                                        {/* <Suspense> */}
                                        {/* <Spline className="lg:h-full lg:w-full sm:h-banner"  scene="https://prod.spline.design/3ORc254TAgLvqGLw/scene.splinecode" /> */}
                                        {/* </Suspense> */}
                                        <div className="lg:w-1/2 lg:h-24 md:h-96 m-auto text-center absolute sm:top-96 lg:top-0 bottom-0 left-0 right-0">
                                            <h1  id="tttt" className="lg:text-8xl md:text-6xl sm:text-5xl sm:mt-24 lg:mt-0 font-extrabold text-write-900"></h1>
                                            {typef && <p className="animate__animated animate__fadeIn mt-4 text-write-500 lg:text-4xl md:text-2xl">{intl.get("SLOGEN")}</p>}
                                        </div>
                                </div>
                            {/* part 1 */}
                                <div className="section bg-[#100F22] mx-auto w-full lg:h-screen sm:h-screen bg-cover lg:px-28  sm:px-mspace">
                                    <div className="flex lg:flex-row sm:flex-col-reverse sm:text-center items-center lg:gap-x-14 3xl:w-3/4 mx-auto">
                                        <img className="absolute left-0 top-96 lg:w-120 z-0"  src='/images/bgleft.png' alt=""/>
                                        <div className="z-10">
                                            <h2 className='lg:text-4xl sm:text-2xl mb-10 lg:text-left'>{intl.get("PART1H1")}</h2>
                                            <p className='text-justify leading-5'>{intl.get("PART1TEXT")}</p>
                                        </div>
                                        <div className="lg:w-120 lg:h-120 sm:w-100 sm:h-100 sm:mb-20  bg-s2bg bg-100% z-1">
                                            {
                                                isM && 
                                                <Suspense>
                                                    <Spline className="w-full h-full"  scene="https://prod.spline.design/PznbIkisUmcBequi/scene.splinecode" />
                                                </Suspense>
                                            }
                                            {
                                                !isM && 
                                                <Suspense>
                                                    <Spline className="w-100 h-100"  scene="https://prod.spline.design/PznbIkisUmcBequi/scene.splinecode" />
                                                </Suspense>
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            {/* part 2 */}
                                <div className="section bg-[#100F22] mx-auto w-full lg:h-screen sm:h-hpart2 bg-cover relative">
                                    <img className="absolute left-0 bottom-96 lg:w-120 z-0"  src='/images/bgleft.png' alt=""/>
                                    <div className='lg:h-1/2 sm:h-auto lg:absolute sm:relative lg:top-0 sm:top-4 bottom-0 m-auto w-auto  lg:px-28 sm:px-mspace  3xl:w-3/4 3xl:relative' >
                                        <h2 className='lg:text-4xl mb-12 text-center sm:text-2xl'>{intl.get('PART2H1')}</h2>
                                        <div className='mb-8 w-full h-5 relative'>
                                            <Image src='/images/part3img1.png' alt="" fill/>
                                        </div>
                                            <div className="flex lg:flex-row  sm:flex-col gap-8 z-9">
                                                <div className="lg:w-1/2 sm:w-auto">
                                                    <h3 className='mb-4 text-xl font-medium'>{intl.get('PART2H2')}</h3>
                                                    <p className="text-sm">
                                                        {intl.get('PART2TEXT1')}
                                                    </p>
                                                    <ul className='flex justify-around mt-12 mb-6'>
                                                            <li className='w-12 h-12 relative'>
                                                                <Image  src='/images/icon1.png' alt="" fill/>
                                                            </li>
                                                            <li className='w-12 h-12 relative'>
                                                                <Image  src='/images/icon2.png' alt="" fill/>
                                                            </li>
                                                            <li className='w-12 h-12 relative'>
                                                                <Image  src='/images/icon3.png' alt="" fill/>
                                                            </li>
                                                    </ul>
                                                </div>
                                                <div className="lg:w-1/2 sm:w-auto">
                                                    <h3 className='mb-4 text-xl font-medium'>{intl.get('PART2H3')}</h3>
                                                    <p className="text-sm">
                                                        {intl.get('PART2TEXT2')}
                                                    </p>
                                                    <ul className='flex justify-around mt-12 z-10 mb-5'>
                                                        <li className='w-12 h-12 relative'>
                                                            <Image  src='/images/icon4.png' alt="" fill/>
                                                        </li>
                                                        <li className='w-12 h-12 relative'>
                                                            <Image  src='/images/icon5.png' alt="" fill/>
                                                        </li>
                                                        <li className='w-12 h-12 relative'>
                                                            <Image  src='/images/icon6.png' alt="" fill/>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                            <div className='mb-8 w-full h-5  relative'>
                                                <Image  src='/images/part3img2.png' alt="" fill/>
                                            </div>
                                    </div>
                                    <img className="absolute right-0 top-96 z-0 lg:w-120 z-0"  src='/images/rightimg.png'  alt=""/>
                                </div>
                                <div className="section bg-[#100F22] mx-auto w-full lg:h-screen sm:h-hpart3 bg-cover relative z-9">
                                    <div className='lg:h-auto sm:h-80 lg:relative sm:relative top-0 bottom-0 right-0 left-0 mx-auto w-auto lg:px-28 sm:px-mspaces 3xl:w-3/4'>
                                        <h2 className='lg:text-4xl lg:mb-12 sm:text-2xl text-center font-medium'>{intl.get('PART3H1')}</h2>
                                        <img className='mx-auto h-auto realtive'  src='/type3 3.png' alt=""/>
                                        <p className='text-center text-base lg:mt-5'>{intl.get('PART3TEXT')}</p>
                                    </div>
                                </div>
                                <div className="section bg-[#100F22] mx-auto w-full lg:h-screen sm:h-hpart4 relative">
                                    <img className="absolute top-0 left-0 right-0 m-auto z-0 lg:w-120 lh:h-120" src="/images/part5_2img.png"/>
                                    <div className='lg:px-28 sm:px-mspace 3xl:w-3/4 3xl:relative' >
                                        <img className="mx-auto mb-10 lg:mt-24 animate__animated animate__fadeIn"  src='/images/part5img.png' alt=""/>
                                        <h2 className='lg:text-4xl font-medium mb-10 text-center border-solid border-b border-white lg:leading-maxx'>{intl.get('PART4H1')}</h2>
                                        <p className="text-justify">{intl.get('PART4TEXT')}</p>
                                    </div>
                                </div>
                                <div className="section bg-[#100F22] mx-auto w-full lg:h-screen sm:h-hpart5 bg-cover relative">
                                    <div className='flex lg:flex-row sm:flex-col items-center justify-around lg:px-28 sm:px-mspace 3xl:w-3/4 mx-auto'>
                                        {/* <div className='sm:w-48 lg:w-96 h-auto relative'> */}
                                        <img className='sm:w-48 lg:w-96 h-auto animate__animated animate__zoomIn'  src='/images/part6img.png'  alt=""/>
                                        {/* </div> */}
                                        <div className='lg:w-120'>
                                            <h3 className='lg:text-3xl sm:2xl mb-2.5'>{intl.get('PART5H1')}</h3>
                                            <p className="text-base text-justify mb-8">{intl.get('PART5TEXT1')}</p>
                                            <h3 className="lg:text-3xl sm:2xl mb-2.5">{intl.get('PART5H2')}</h3>
                                            <p className="text-base text-justify">{intl.get('PART5TEXT2')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="section bg-[#100F22]  sm:mb-4 text-center lg:text-3xl sm:text-2xl mx-auto font-blod leading-10 lg:px-28 3xl:w-3/4 3xl:mx-auto sm:px-mspace'">
                                     <h3> {intl.get('ENDING')}</h3>
                                     <h3>{intl.get('ENDING2')}</h3>
                                </div>
                            </ReactFullpage.Wrapper>
                        );}
                    }/>
        </main>
     }
    </>
  );
}
