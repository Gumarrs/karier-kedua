import {clients} from "@/data/clients";
const sl=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
export default function ClientStrip(){const l=["Pertamina","Chevron Pacific Indonesia","Bank MUFG","Telkom Indonesia","Pelindo","Kompas Gramedia","Merck","Alfamart"];
return(<section aria-label="Klien" className="px-6"><p className="text-center text-sm text-navy/60 mb-6">Dipercaya perusahaan dan institusi terkemuka</p><div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 items-center">{l.filter(n=>Object.values(clients).flat().includes(n)).map(n=><img key={n} src={`/images/clients/${sl(n)}.svg`} alt={n} className="h-12 w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"/>)}</div></section>)}
