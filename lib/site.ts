// DEMO contact data (from the design reference). Replace with real data.
export const site={name:"PurnaHarmoni",tag:"Retirement Event Organizer",email:"halo@purnaharmoni.id",phone:"+62 812 1234 5678",wa:"6281212345678",address:"Jl. Melati No.123, Jakarta",
stats:[["500+","Acara Sukses"],["98%","Kepuasan Klien"],["10+","Tahun Pengalaman"]],statsNote:"*Angka contoh dari desain referensi; ganti dengan data terverifikasi."};
export const waLink=(t="Halo PurnaHarmoni, saya ingin konsultasi acara pensiun.")=>`https://wa.me/${site.wa}?text=${encodeURIComponent(t)}`;
