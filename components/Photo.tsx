"use client";
import {useState} from "react";
// Shows /images/... photo if it exists, otherwise a soft gradient placeholder.
export default function Photo({src,label,className=""}:{src?:string;label:string;className?:string}){const [bad,setBad]=useState(!src);
return bad?<div role="img" aria-label={label} className={`flex items-end p-4 text-xs text-navy/50 bg-gradient-to-br from-sky-100 via-white to-amber-100 ${className}`}>{label}</div>:<img src={src} alt={label} onError={()=>setBad(true)} className={`object-cover ${className}`}/>}
