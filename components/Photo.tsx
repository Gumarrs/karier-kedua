"use client";
import {useState} from "react";import {Camera} from "lucide-react";
export default function Photo({src,alt,className=""}:{src:string;alt:string;className?:string}){const [bad,setBad]=useState(false);
return bad?<div role="img" aria-label={alt} className={`flex items-center justify-center gap-2 bg-sky p-3 text-xs text-muted ${className}`}><Camera size={18}/>{alt}</div>:<img src={src} alt={alt} loading="lazy" onError={()=>setBad(true)} className={`object-cover ${className}`}/>}
