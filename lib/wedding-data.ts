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
      "Atas Berkah dan Rahmat Allah Subhanahu Wa Ta'ala. Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara ngunduh mantu kami :",
  },
  countdownTarget: new Date("2026-05-23T09:00:00+07:00"),
  events: {
    akad: {
      title: "Akad Nikah",
      date: "Sabtu, 23 Mei 2026",
      time: "Pukul 09:00 WIB - Selesai",
      location: "Masjid Badrussalam Lingkungan Mapak Indah",
      mapsUrl: "https://maps.google.com",
    },
  },
  venueHero:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b0?w=1200&h=600&fit=crop",
  closingMessage:
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran dan doa restunya kami ucapkan terima kasih.",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1606216794074-ff7113c3f0c5?w=1200&h=700&fit=crop",
      alt: "Couple portrait 1",
      span: "col-span-full",
      aspect: "aspect-[16/9]",
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-23d1d6a6d9f0?w=400&h=600&fit=crop",
      alt: "Couple portrait 2",
      span: "col-span-1",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop",
      alt: "Couple portrait 3",
      span: "col-span-1",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=600&fit=crop",
      alt: "Couple portrait 4",
      span: "col-span-1",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=600&fit=crop",
      alt: "Couple portrait 5",
      span: "col-span-1",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=500&fit=crop",
      alt: "Couple portrait 6",
      span: "col-span-2",
      aspect: "aspect-[16/10]",
    },
    {
      src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34a5?w=400&h=600&fit=crop",
      alt: "Couple portrait 7",
      span: "col-span-1",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop",
      alt: "Couple portrait 8",
      span: "col-span-1",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1469371670807-bbadc4139a1b?w=400&h=600&fit=crop",
      alt: "Couple portrait 9",
      span: "col-span-1",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1460970251674-e5efab37f6fa?w=400&h=600&fit=crop",
      alt: "Couple portrait 10",
      span: "col-span-1",
      aspect: "aspect-[3/4]",
    },
  ],
} as const;

export function getCalendarUrl(): string {
  const start = "20260523T090000";
  const end = "20260523T133000";
  const title = encodeURIComponent("Ngunduh Mantu Juniar & Geulis");
  const details = encodeURIComponent("Ngunduh Mantu");
  const location = encodeURIComponent(
    "Masjid Badrussalam Lingkungan Mapak Indah",
  );
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}
