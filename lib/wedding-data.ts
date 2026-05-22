export const WEDDING = {
  coupleShort: "Juniar & Geulis",
  groom: {
    name: "dr. Juniar Wahyu Triatmojo",
    order: "Anak Ketiga dari Pasangan",
    parents: "Bapak Agus Sucianto (Alm) & Ibu Ratna Wahyu Setyaningtyas, S.H., M.Si.",
    instagram: "@juniarwahyu",
    photo:
      "/element/laki.jpeg",
  },
  bride: {
    name: "Geulis Fahma Astria, S.H.",
    order: "Anak Ketiga dari Pasangan",
    parents: "Bapak Maman Suparman (Alm) & Ibu Nadhiroh",
    instagram: "@geulfahma",
    photo:
      "/element/wanita.jpeg",
  },
  couplePhoto:
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
  verse: {
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    reference: "Ar-Rum · Ayat 21",
  },
  greeting: {
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
    intro:
      "Atas Berkah dan Rahmat Allah Subhanahu Wa Ta'ala. Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat untuk menghadiri acara ngunduh mantu kami :",
  },
  countdownTarget: new Date("2026-06-07T15:00:00+07:00"),
  events: {
    akad: {
      title: "Ngunduh Mantu",
      date: "Sabtu, 07 Juni 2026",
      time: "Pukul 15.00 - 17.30 WIB",
      location: "Gama Candi Resto BSB City\nJl. West CBD 1 No.3, BSB City, Semarang",
      mapsUrl: "https://maps.app.goo.gl/UdM1RVa8ekcu8g9aA",
    },
  },
  venueHero:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b0?w=1200&h=600&fit=crop",
  closingMessage:
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran dan doa restunya kami ucapkan terima kasih.",
  gallery: [
    {
      src: "/element/1.jpeg",
      alt: "Foto Galeri 1",
      span: "col-span-full",
      aspect: "aspect-[16/9]",
    },
    {
      src: "/element/3.jpeg",
      alt: "Foto Galeri 2",
      span: "",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/element/2.jpeg",
      alt: "Foto Galeri 3",
      span: "",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/element/4.jpeg",
      alt: "Foto Galeri 4",
      span: "",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/element/7.jpeg",
      alt: "Foto Galeri 5",
      span: "",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/element/6.jpeg",
      alt: "Foto Galeri 6",
      span: "",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/element/8.jpeg",
      alt: "Foto Galeri 7",
      span: "",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/element/5.jpeg",
      alt: "Foto Galeri 8",
      span: "col-span-full",
      aspect: "aspect-[16/9]",
    },
  ],
} as const;

export function getCalendarUrl(): string {
  const start = "20260607T150000";
  const end = "20260607T173000";
  const title = encodeURIComponent("Ngunduh Mantu Juniar & Geulis");
  const details = encodeURIComponent("Ngunduh Mantu");
  const location = encodeURIComponent(
    "Gama Candi Resto BSB City\nJl. West CBD 1 No.3, BSB City, Semarang",
  );
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}
