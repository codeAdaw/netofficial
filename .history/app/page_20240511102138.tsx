"use client";
import Image from "next/image";
import React, {useState,useEffect,useLayoutEffect,useRef, MutableRefObject, Suspense} from 'react';
import intl from 'react-intl-universal'
import Typed from 'typed.js';
import ReactFullpage from '@fullpage/react-fullpage';
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
   //const [isVisible, setIsVisible] = useState(false);
    const sref:MutableRefObject<any> = useRef();
    const splineRef:any = useRef()
    const btext:MutableRefObject<any> = useRef(null);
   const typedel = React.useRef(null);
   useLayoutEffect(()=>{
        console.log('--typedel--',typedel)
        if(!initDone){return};
        const typed = new Typed('#tttt',{
            strings: ["NETREEL.AI"],
            typeSpeed:100
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
                scrollingSpeed = {1000}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                        {/* part 1 */}
                            <div className="mx-auto w-full lg:h-screen sm:h-auto bg-cover flex lg:flex-row sm:flex-col-reverse sm:text-center items-center lg:px-28 lg:gap-x-14 sm:px-mspace relative">
                                <img className="absolute left-0 top-96 lg:w-120 z-0"  src='/images/bgleft.png' alt=""/>
                                <div className="z-9 lg:basis-3/5 lax lax_preset_fadeIn:50:100 lax_preset_spin">
                                    <h2 className='lg:text-4xl sm:text-2xl mb-10 lg:text-left'>{intl.get("PART1H1")}</h2>
                                    <p className='text-justify leading-5'>{intl.get("PART1TEXT")}</p>
                                </div>
                                <div className="lg:w-120 lg:h-120 lg:basis-2/5 bg-s2bg bg-100%">
                                    <Suspense>
                                        <Spline className="w-full h-full"  scene="https://prod.spline.design/iCjOQX3y10yB57-y/scene.splinecode" />
                                    </Suspense>
                                </div>
                            </div>
                        {/* part 2 */}
                            <div className="section mx-auto w-full lg:h-screen sm:h-hpart2 bg-cover relative">
                                <div className='lg:h-1/2 sm:h-auto lg:absolute sm:relative lg:top-0 sm:top-4 bottom-0 m-auto w-auto  lg:px-28 sm:px-mspace z-9'>
                                    <h2 className='lg:text-4xl mb-12 text-center sm:text-2xl'>{intl.get('PART2H1')}</h2>
                                    <div className='mb-8 w-full h-5 relative'>
                                        <Image src='/images/part3img1.png' alt="" fill/>
                                    </div>
                                        <div className="flex lg:flex-row  sm:flex-col gap-8 z-9">
                                            <div>
                                                <h3 className='mb-4 text-xl font-medium'>{intl.get('PART2H2')}</h3>
                                                <p className="text-sm"> 
                                                    {intl.get('PART2TEXT1')}
                                                </p>
                                                <ul className='flex justify-around mt-12 mb-3.5'>
                                                        <li className='w-8 h-8 relative'>
                                                            <Image className='w-8' src='/images/icon1.png' alt="" fill/>
                                                        </li>
                                                        <li className='w-8 h-8 relative'>
                                                            <Image className='w-8' src='/images/icon2.png' alt="" fill/>
                                                        </li>
                                                        <li className='w-8 h-8 relative'>
                                                            <Image className='w-8' src='/images/icon3.png' alt="" fill/>
                                                        </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className='mb-4 text-xl font-medium'>{intl.get('PART2H3')}</h3>
                                                <p className="text-sm">
                                                    {intl.get('PART2TEXT2')}
                                                </p>
                                                <ul className='flex justify-around mt-12 z-1 mb-3.5'>
                                                    <li className='w-8 h-8 relative'>
                                                        <Image className='w-8' src='/images/icon4.png' alt="" fill/>
                                                    </li>
                                                    <li className='w-8 h-8 relative'>
                                                        <Image className='w-8' src='/images/icon5.png' alt="" fill/>
                                                    </li>
                                                    <li className='w-8 h-8 relative'>
                                                        <Image className='w-8' src='/images/icon6.png' alt="" fill/>
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
                             <div className="section mx-auto w-full lg:h-screen sm:h-hpart3 bg-cover relative z-9">
                                <div className='lg:h-4/5 sm:h-80 lg:absolute sm:relative top-0 bottom-0 right-0 left-0 mx-auto w-auto lg:px-28 sm:px-mspaces'>
                                    <h2 className='lg:text-4xl lg:mb-12 sm:text-2xl text-center font-medium'>{intl.get('PART3H1')}</h2>
                                        <img className='mx-auto lg:w-4/5 h-auto realtive'  src='/type3 3.png' alt=""/>
                                    <p className='text-center text-base lg:mt-5'>{intl.get('PART3TEXT')}</p>
                                </div>
                            </div>
                            <div className="section mx-auto w-full lg:h-screen sm:h-hpart4 relative">
                                <img className="absolute top-0 left-0 right-0 m-auto z-0 lg:w-120 lh:h-120" src="/images/part5_2img.png"/>
                                <div className='absolute top-0 bottom-0 m-auto w-auto  lg:px-28 sm:px-mspace'>
                                    <img className="mx-auto mb-10 lg:mt-24 lg:w-60"  src='/images/part5img.png' alt=""/>
                                    <h2 className='lg:text-4xl font-medium mb-10 text-center border-solid border-b border-white lg:leading-maxx'>{intl.get('PART4H1')}</h2>
                                    <p className="text-justify">{intl.get('PART4TEXT')}</p>
                                </div>
                            </div>
                            <div className="section mx-auto w-full lg:h-screen sm:h-hpart5 bg-cover relative">
                                <div className='flex lg:flex-row sm:flex-col items-center justify-around lg:px-28 sm:px-mspace'>
                                    {/* <div className='sm:w-48 lg:w-96 h-auto relative'> */}
                                    <img className='sm:w-48 lg:w-96 h-auto'  src='/images/part6img.png'  alt=""/>
                                    {/* </div> */}
                                    <div className='lg:w-120'>
                                        <h3 className='lg:text-3xl sm:2xl mb-2.5'>{intl.get('PART5H1')}</h3>
                                        <p className="text-base text-justify mb-8">{intl.get('PART5TEXT1')}</p>
                                        <h3 className="lg:text-3xl sm:2xl mb-2.5">{intl.get('PART5H2')}</h3>
                                        <p className="text-base text-justify">{intl.get('PART5TEXT2')}</p>
                                    </div>
                                </div>
                                <div className="absolute lg:bottom-12 sm:bottom-4 sm:mb-4 text-center lg:text-3xl sm:text-2xl font-blod leading-10 lg:px-28 sm:px-mspace'">
                                    {intl.get('ENDING')}
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );}
                }/>
        </main>
     }
    </>
  );
}
