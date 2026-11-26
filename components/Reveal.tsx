"use client";
import {useEffect,useRef} from "react";import gsap from "gsap";import {ScrollTrigger} from "gsap/ScrollTrigger";
export default function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){const r=useRef<HTMLDivElement>(null);
useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches||!r.current)return;gsap.registerPlugin(ScrollTrigger);
const t=gsap.from(r.current,{y:40,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:r.current,start:"top 85%"}});return()=>{t.scrollTrigger?.kill();t.kill()}},[]);
return <div ref={r} className={className}>{children}</div>}
