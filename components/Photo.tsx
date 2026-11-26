"use client";
import {useState} from "react";import {Camera} from "lucide-react";
// Shows the photo; if the file is missing, shows a neutral placeholder with the shot brief (no broken icons).
export default function Photo({src,label,className=""}:{src?:string;label:string;className?:string}){const [bad,setBad]=useState(!src);
return bad?<div role="img" aria-label={label} className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EDE6D6] to-[#D9CFBA] p-4 text-center text-xs text-navy/55 ${className}`}><Camera size={22} aria-hidden/><span className="max-w-[16rem]">{label}</span></div>:<img src={src} alt={label} loading="lazy" onError={()=>setBad(true)} className={`object-cover ${className}`}/>}
