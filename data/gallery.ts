// DUMMY DATA. Add an item: append {id,title,category,src?,ratio}. Real photo: put file in public/images/gallery/ and set src:"/images/gallery/xx.jpg".
export const categories=["Semua","Pelatihan","Workshop","Peserta","Fasilitator","Aktivitas"] as const;
export type G={id:number;title:string;category:Exclude<typeof categories[number],"Semua">;src?:string;ratio:"aspect-[4/5]"|"aspect-square"|"aspect-[4/3]"};
const t=["Sesi Kelas Pagi","Diskusi Kelompok","Workshop Bisnis Online","Peserta & Pasangan","Tim Fasilitator","Permainan Edukatif","Sesi Keuangan","Workshop Hidroponik","Foto Bersama","Konsultasi Ppribadi","Pelatihan Inhouse","Refleksi Spiritual"];
const c:G["category"][]=["Pelatihan","Aktivitas","Workshop","Peserta","Fasilitator","Aktivitas","Pelatihan","Workshop","Peserta","Fasilitator","Pelatihan","Peserta"];
const r:G["ratio"][]=["aspect-[4/5]","aspect-[4/3]","aspect-square","aspect-[4/3]","aspect-[4/5]","aspect-square"];
export const gallery:G[]=t.map((title,i)=>({id:i+1,title,category:c[i],ratio:r[i%6]}));
