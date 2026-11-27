import {notFound} from "next/navigation";import Photo from "@/components/Photo";import {PageHero,Sec,CtaBanner} from "@/components/UI";import {articles} from "@/data/content";
export const generateStaticParams=()=>articles.map(a=>({slug:a.slug}));
export default function P({params}:{params:{slug:string}}){const a=articles.find(x=>x.slug===params.slug);if(!a)notFound();
return(<><PageHero label={a.cat} title={a.title} sub={`${a.date} · ${a.min} menit baca`}/><Sec><article className="mx-auto max-w-3xl space-y-5 text-lg"><Photo src={a.img} alt={a.title} className="aspect-[16/9] w-full rounded-2xl"/>{a.body.map(b=><p key={b}>{b}</p>)}</article></Sec><CtaBanner/></>)}
