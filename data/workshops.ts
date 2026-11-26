// Add a workshop: append an object. type: Online | Inhouse | Publik. NOTE: 2026 included; add 2022–2025 records here.
export type W={date:string;year:number;title:string;type:"Online"|"Inhouse"|"Publik"};
export const workshops:W[]=[
{date:"27 Juni 2026",year:2026,type:"Online",title:"Bagi Waris Secara Umum"},{date:"20 Juni 2026",year:2026,type:"Online",title:"Bagi Waris Secara Islam"},{date:"12 Maret 2026",year:2026,type:"Online",title:"Belajar Hidroponik"},{date:"3 Maret 2026",year:2026,type:"Online",title:"Perang Timur Tengah dan Saham Potensial"},{date:"14 Februari 2026",year:2026,type:"Online",title:"Tetap Eksis dalam Menjalankan Bisnis"},{date:"17 Januari 2026",year:2026,type:"Online",title:"Jualan Online Tanpa Ribet"},
{date:"21–22 Juli 2026",year:2026,type:"Inhouse",title:"Chandra Asri, Banten"},{date:"28–29 April 2026",year:2026,type:"Inhouse",title:"Chandra Asri, Banten"},{date:"20–24 April 2026",year:2026,type:"Inhouse",title:"Harbour Energy, Solo"},
{date:"4 Juni 2026",year:2026,type:"Publik",title:"Pelatihan Karier Kedua, Jakarta"}];
// ===== DUMMY 2025 entries =====
workshops.push({date:"12 Desember 2025",year:2025,type:"Online",title:"Contoh Workshop Online (dummy)"},{date:"5–6 November 2025",year:2025,type:"Inhouse",title:"Contoh Perusahaan, Jakarta (dummy)"},{date:"20 Agustus 2025",year:2025,type:"Publik",title:"Pelatihan Karier Kedua, Bandung (dummy)"});
