"use client";
import {useCallback,useEffect,useRef,useState} from "react";import gsap from "gsap";import {X,ChevronLeft,ChevronRight} from "lucide-react";import Photo from "./Photo";import {categories,gallery} from "@/data/gallery";
const tone=["from-navy-700 to-navy","from-[#2a3a4d] to-navy-800","from-[#3b3226] to-navy"];
function Img({g,className=""}:{g:typeof gallery[number];className?:string}){return g.src?<Photo src={g.src} label={g.title} className={`w-full ${className}`}/>:<div role="img" aria-label={g.title} className={`bg-gradient-to-br ${tone[g.id%3]} flex items-end p-4 text-gold-light/80 text-xs uppercase tracking-widest w-full ${className}`}>{g.category}</div>}
export default function Gallery(){const [cat,setCat]=useState<string>("Semua");const [open,setOpen]=useState<number|null>(null);const grid=useRef<HTMLDivElement>(null);
const list=gallery.filter(g=>cat==="Semua"||g.category===cat);
useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;gsap.fromTo(grid.current?.children??[],{y:30,opacity:0},{y:0,opacity:1,duration:.6,stagger:.05,ease:"power3.out"})},[cat]);
const step=useCallback((d:number)=>setOpen(o=>o===null?o:(o+d+list.length)%list.length),[list.length]);
useEffect(()=>{if(open===null)return;const k=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(null);if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1)};addEventListener("keydown",k);document.body.style.overflow="hidden";return()=>{removeEventListener("keydown",k);document.body.style.overflow=""}},[open,step]);
const cur=open!==null?list[open]:null;
return(<div className="mx-auto max-w-7xl px-6 py-16"><div role="tablist" className="flex flex-wrap gap-2 mb-10">{categories.map(x=><button key={x} role="tab" aria-selected={cat===x} onClick={()=>setCat(x)} className={`px-5 py-2 text-sm border transition ${cat===x?"bg-navy text-gold-light border-navy":"border-navy/20 hover:border-gold"}`}>{x}</button>)}</div>
<div ref={grid} className="columns-1 sm:columns-2 lg:columns-3 gap-4">{list.map((g,i)=><button key={g.id} onClick={()=>setOpen(i)} className="group relative mb-4 block w-full overflow-hidden text-left break-inside-avoid" aria-label={`Buka ${g.title}`}><Img g={g} className={`${g.ratio} transition duration-700 group-hover:scale-105`}/><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 p-4 text-ivory translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">{g.title}</span></button>)}</div>
{cur&&<div role="dialog" aria-modal="true" aria-label={cur.title} className="fixed inset-0 z-[60] bg-navy/95 flex items-center justify-center p-4" onClick={()=>setOpen(null)}>
<button autoFocus aria-label="Tutup" className="absolute top-5 right-5 text-ivory p-3"><X/></button>
<button aria-label="Sebelumnya" onClick={e=>{e.stopPropagation();step(-1)}} className="absolute left-3 text-ivory p-3"><ChevronLeft size={36}/></button>
<figure onClick={e=>e.stopPropagation()} className="w-full max-w-3xl"><Img g={cur} className="aspect-[4/3] max-h-[75vh]"/><figcaption className="mt-3 text-ivory flex justify-between"><span>{cur.title}</span><span className="text-gold-light">{open!+1} / {list.length}</span></figcaption></figure>
<button aria-label="Berikutnya" onClick={e=>{e.stopPropagation();step(1)}} className="absolute right-3 text-ivory p-3"><ChevronRight size={36}/></button></div>}</div>)}
