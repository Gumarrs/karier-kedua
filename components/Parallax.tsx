"use client";
import {useEffect,useRef} from "react";import gsap from "gsap";import {ScrollTrigger} from "gsap/ScrollTrigger";
// speed: parallax distance in px. reveal: clip-path image reveal on enter.
export default function Parallax({children,speed=0,reveal=false,className=""}:{children:React.ReactNode;speed?:number;reveal?:boolean;className?:string}){const r=useRef<HTMLDivElement>(null);
useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches||!r.current)return;gsap.registerPlugin(ScrollTrigger);const el=r.current;const ts:gsap.core.Tween[]=[];
if(speed)ts.push(gsap.fromTo(el,{y:-speed},{y:speed,ease:"none",scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:true}}));
if(reveal)ts.push(gsap.fromTo(el.firstElementChild,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:1.2,ease:"power4.inOut",scrollTrigger:{trigger:el,start:"top 85%"}}));
return()=>ts.forEach(t=>{t.scrollTrigger?.kill();t.kill()})},[speed,reveal]);
return <div ref={r} className={className}>{children}</div>}
