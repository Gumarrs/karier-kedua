"use client";
import {Canvas,useFrame} from "@react-three/fiber";import {Float,MeshDistortMaterial} from "@react-three/drei";
import {useEffect,useMemo,useRef,useState} from "react";import * as THREE from "three";
function Orb(){const g=useRef<THREE.Group>(null);
useFrame(({pointer})=>{const o=g.current;if(!o)return;o.rotation.y+=(pointer.x*.7-o.rotation.y)*.05;o.rotation.x+=(-pointer.y*.5-o.rotation.x)*.05});
return <group ref={g}><Float speed={1.5} floatIntensity={1.2}><mesh><icosahedronGeometry args={[1.5,4]}/><MeshDistortMaterial color="#B99558" metalness={.6} roughness={.3} distort={.35} speed={1.5}/></mesh></Float></group>}
function Particles({n}:{n:number}){const r=useRef<THREE.Points>(null);
const pos=useMemo(()=>{const a=new Float32Array(n*3);for(let i=0;i<a.length;i++)a[i]=(Math.random()-.5)*10;return a},[n]);
useFrame((_,d)=>{if(r.current)r.current.rotation.y+=d*.03});
return <points ref={r}><bufferGeometry><bufferAttribute attach="attributes-position" count={n} array={pos} itemSize={3}/></bufferGeometry><pointsMaterial size={.035} color="#D5B777" transparent opacity={.7}/></points>}
export default function HeroScene(){const [ok,setOk]=useState(false);const [n,setN]=useState(500);
useEffect(()=>{try{const c=document.createElement("canvas");setOk(!!(c.getContext("webgl2")||c.getContext("webgl")))}catch{setOk(false)}
if(innerWidth<768)setN(150);if(matchMedia("(prefers-reduced-motion: reduce)").matches)setOk(false)},[]);
if(!ok)return <div aria-hidden className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,#B9955833,transparent_60%)]"/>;
return <Canvas dpr={[1,1.5]} camera={{position:[0,0,5],fov:45}} aria-hidden><ambientLight intensity={.6}/><directionalLight position={[3,4,5]} intensity={2}/><pointLight position={[-4,-2,2]} color="#D5B777" intensity={20}/><Orb/><Particles n={n}/></Canvas>}
