"use client";
import dynamic from "next/dynamic";import {useLayoutEffect,useRef} from "react";import gsap from "gsap";import {ScrollTrigger} from "gsap/ScrollTrigger";import {ArrowDown} from "lucide-react";import {WA} from "@/lib/utils";
const HeroScene=dynamic(()=>import("./three/HeroScene"),{ssr:false});
export default function HeroSection(){const root=useRef<HTMLElement>(null);
useLayoutEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;gsap.registerPlugin(ScrollTrigger);
const c=gsap.context(()=>{const tl=gsap.timeline({defaults:{ease:"power4.out"}});
tl.from(".line>span",{yPercent:110,duration:1.1,stagger:.15}).from(".h-fade",{y:24,opacity:0,duration:.8,stagger:.12},"-=.5").from(".h-scene",{opacity:0,scale:.85,duration:1.4},0);
gsap.to(".h-scene",{yPercent:15,ease:"none",scrollTrigger:{trigger:root.current,start:"top top",end:"bottom top",scrub:true}})},root);return()=>c.revert()},[]);
return(<section ref={root} className="relative overflow-hidden bg-navy text-ivory min-h-[92vh] flex items-center">
<div className="h-scene absolute inset-y-0 right-0 w-full md:w-3/5 opacity-80"><HeroScene/></div>
<div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-28"><p className="h-fade text-gold tracking-[.3em] text-xs uppercase mb-6">Pelatihan Pensiun &amp; Outplacement · Sejak 2009</p>
<h1 className="font-serif text-5xl md:text-8xl leading-[1.02] max-w-4xl"><span className="line"><span>Persiapkan Hari Esok.</span></span><span className="line"><span className="text-gold">Mulai Karier Kedua</span></span><span className="line"><span>Hari Ini.</span></span></h1>
<p className="h-fade mt-8 text-lg text-ivory/75 max-w-xl">Program persiapan pensiun dan outplacement yang membantu karyawan mempersiapkan masa depan secara finansial, mental, fisik, spiritual, dan personal.</p>
<div className="h-fade mt-10 flex flex-wrap gap-4"><a href={WA} className="bg-gold text-navy px-8 py-4 font-medium hover:bg-gold-light transition">Diskusikan Program Anda</a><a href="/program" className="border border-gold/50 px-8 py-4 hover:bg-gold/10 transition">Jelajahi Karier Kedua</a></div></div>
<ArrowDown aria-hidden className="absolute bottom-8 left-1/2 text-gold animate-bounce"/></section>)}
