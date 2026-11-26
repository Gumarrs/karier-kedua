import "./globals.css";import type {Metadata} from "next";import {Playfair_Display,DM_Sans} from "next/font/google";import {Navbar,Footer} from "@/components/Layout";
const d=Playfair_Display({subsets:["latin"],variable:"--font-display"});const b=DM_Sans({subsets:["latin"],variable:"--font-body"});
export const metadata:Metadata={title:"Karier Kedua — Persiapan Pensiun & Outplacement",description:"Persiapan pensiun holistik sejak 2009: berkecukupan, bahagia, aktif, sehat.",openGraph:{title:"Karier Kedua",description:"Pensiun BeBAS",locale:"id_ID"}};
export default function L({children}:{children:React.ReactNode}){return(<html lang="id" className={`${d.variable} ${b.variable}`}><body id="top" className="font-sans"><Navbar/><main className="pt-16">{children}</main><Footer/></body></html>)}
