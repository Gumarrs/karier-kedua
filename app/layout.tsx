import "./globals.css";import type {Metadata} from "next";import {Navbar,Footer} from "@/components/Layout";
export const metadata:Metadata={title:"Karier Kedua — Pelatihan Persiapan Pensiun & Outplacement",description:"Persiapan pensiun holistik sejak 2009: finansial, psikologis, kesehatan, spiritual, dan keluarga.",openGraph:{title:"Karier Kedua",description:"Pensiun BeBAS",locale:"id_ID"}};
export default function L({children}:{children:React.ReactNode}){return(<html lang="id"><body id="top"><Navbar/><main className="pt-16">{children}</main><Footer/></body></html>)}
