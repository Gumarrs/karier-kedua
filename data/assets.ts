// PHOTO MANIFEST. Put real photos at these paths (JPG, ~1600px wide). Until then a neutral placeholder with the shot brief is shown.
const p=(f:string,brief:string)=>({src:`/images/photos/${f}`,brief});
export const assets={
hero:p("hero-couple.jpg","Pasangan senior Indonesia, tersenyum, outdoor, cahaya alami (portrait 4:5)"),
heroSmall:p("hero-workshop.jpg","Peserta workshop berdiskusi di ruang pelatihan (4:3)"),
problem:p("problem-reflection.jpg","Profesional usia 55 tahun, momen reflektif di kantor/rumah (3:4)"),
intro:p("intro-wide.jpg","Sesi pelatihan korporat, ruangan penuh peserta (21:9)"),
program:(n:number)=>p(`program-${n}.jpg`,`Foto program ${n} (4:3)`),
gallery:(n:number)=>p(`gallery-${String(n).padStart(2,"0")}.jpg`,`Dokumentasi pelatihan ${n}`),
cta:p("cta-lifestyle.jpg","Pasangan pensiun bersantai di taman/kota (4:5)")};
