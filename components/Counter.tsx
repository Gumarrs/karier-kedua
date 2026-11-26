"use client";
import {useEffect,useRef} from "react";import gsap from "gsap";import {ScrollTrigger} from "gsap/ScrollTrigger";
export default function Counter({to,suffix=""}:{to:number;suffix?:string}){const r=useRef<HTMLSpanElement>(null);
useEffect(()=>{const el=r.current;if(!el)return;const fmt=(v:number)=>Math.round(v).toLocaleString("id-ID")+suffix;
if(matchMedia("(prefers-reduced-motion: reduce)").matches){el.textContent=fmt(to);return}
gsap.registerPlugin(ScrollTrigger);const o={v:0};
const t=gsap.to(o,{v:to,duration:2,ease:"power2.out",onUpdate:()=>{el.textContent=fmt(o.v)},scrollTrigger:{trigger:el,start:"top 90%",once:true}});
return()=>{t.scrollTrigger?.kill();t.kill()}},[to,suffix]);
return <span ref={r}>{to.toLocaleString("id-ID")}{suffix}</span>}
