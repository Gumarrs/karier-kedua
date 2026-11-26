"use client";import {useState} from "react";import {workshops} from "@/data/workshops";
export default function WorkshopList(){const [t,s]=useState("Semua");const l=workshops.filter(w=>t==="Semua"||w.type===t);
return(<div className="mx-auto max-w-4xl px-6 py-16"><div className="flex gap-3 mb-8">{["Semua","Online","Inhouse","Publik"].map(x=><button key={x} onClick={()=>s(x)} className={`px-4 py-2 border ${t===x?"bg-navy text-ivory":""}`}>{x}</button>)}</div>
<ul className="divide-y">{l.map((w,i)=><li key={i} className="py-4 md:flex gap-6"><span className="w-48 text-gold-dark">{w.date}</span><span>{w.title} <em className="text-sm">({w.type})</em></span></li>)}</ul></div>)}
