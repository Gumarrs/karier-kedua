"use client";
import Link from "next/link";import {useState} from "react";import {Menu,X} from "lucide-react";import {nav,brand} from "@/data/brand";import {WA} from "@/lib/utils";
export function Navbar(){const [o,s]=useState(false);return(<header className="fixed top-0 z-50 w-full bg-navy/90 backdrop-blur text-ivory"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"><Link href="/" className="font-serif text-xl">Karier <span className="text-gold">Kedua</span></Link>
<nav aria-label="Utama" className="hidden xl:flex gap-6 text-sm">{nav.map(([n,h])=><Link key={h} href={h} className="hover:text-gold-light">{n}</Link>)}</nav>
<a href={WA} className="hidden xl:inline bg-gold px-5 py-2 text-navy text-sm font-medium hover:bg-gold-light">Konsultasi Program</a>
<button aria-label="Menu" aria-expanded={o} className="xl:hidden p-2" onClick={()=>s(!o)}>{o?<X/>:<Menu/>}</button></div>
{o&&<div className="xl:hidden bg-navy px-6 pb-8 flex flex-col gap-4 text-lg">{nav.map(([n,h])=><Link key={h} href={h} onClick={()=>s(false)}>{n}</Link>)}<a href={WA} className="bg-gold text-navy px-5 py-3 text-center">Diskusikan Program</a></div>}</header>)}
export function Footer(){return(<><a href={WA} aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 bg-gold text-navy px-4 py-3 shadow-lg text-sm font-medium">WhatsApp</a>
<footer className="bg-navy text-ivory/80 px-6 py-16"><div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-3"><div><p className="font-serif text-2xl text-ivory">Karier Kedua</p><p>{brand.company}</p><p className="mt-3">Pensiun BeBAS: Berkecukupan. Bahagia. Aktif. Sehat.</p></div>
<ul className="space-y-1">{nav.map(([n,h])=><li key={h}><Link href={h}>{n}</Link></li>)}</ul>
<div><p>{brand.email}</p><p>{brand.phone}</p><a href={WA} className="inline-block mt-4 bg-gold text-navy px-5 py-2">Diskusikan Program untuk Perusahaan Anda</a></div></div>
<p className="mx-auto max-w-7xl mt-10 text-sm">© {new Date().getFullYear()} {brand.company}. <a href="#top" className="underline">Kembali ke atas</a></p></footer></>)}
