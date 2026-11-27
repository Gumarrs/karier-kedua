"use client";
import {useEffect,useRef,useState} from "react";
export default function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){const r=useRef<HTMLDivElement>(null);const [v,setV]=useState(false);
useEffect(()=>{const e=r.current;if(!e)return;if(matchMedia("(prefers-reduced-motion: reduce)").matches){setV(true);return}const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){setV(true);o.disconnect()}},{threshold:.15});o.observe(e);return()=>o.disconnect()},[]);
return <div ref={r} className={`transition duration-700 ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-6"} ${className}`}>{children}</div>}
