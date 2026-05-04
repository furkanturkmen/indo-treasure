export type Category = "Schilderij" | "Beeldhouwwerk" | "Textiel" | "Masker";
export type Region = "Java" | "Bali" | "Sumatra";

export interface Artwork {
  slug: string;
  title: string;
  artist: string;
  region: Region;
  category: Category;
  year: number;
  price: number;
  dimensions: string;
  materials: string;
  aspect: number;
  images: string[];
  blurb: string;
  provenance: string;
}

const IMG = {
  mask1: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80",
  mask2: "https://images.unsplash.com/photo-1551845041-63e8e76836ea?w=1200&q=80",
  textile1: "https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?w=1200&q=80",
  textile2: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1200&q=80",
  scene1: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1600&q=85",
  scene2: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=85",
  scene3: "https://images.unsplash.com/photo-1565711561500-49678a10a63f?w=1600&q=85",
  scene4: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1600&q=85",
  scene5: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=1600&q=85",
  scene6: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=1600&q=85",
};

export const ARTWORKS: Artwork[] = [
  { slug: "garuda-masker-bali", title: "Garuda — Bali", artist: "I Wayan Surya", region: "Bali", category: "Masker", year: 1998, price: 1850, dimensions: "42 × 28 × 18 cm", materials: "Pulé-hout, natuurlijke pigmenten, bladgoud", aspect: 1.25, images: [IMG.mask1, IMG.scene4, IMG.scene6], blurb: "Een ceremonieel Garuda-masker, gesneden in de bergen boven Ubud. De rode bek en gouden details verwijzen naar de mythische adelaar — drager van Vishnu — die in het Balinese hindoeïsme staat voor moed en bescherming.", provenance: "Gekocht in 2023 in het atelier van I Wayan Surya, een derde-generatie maskersnijder in Mas, Bali." },
  { slug: "batik-tulis-parang", title: "Parang Rusak Barong", artist: "Ibu Sumarni", region: "Java", category: "Textiel", year: 2019, price: 2400, dimensions: "250 × 105 cm", materials: "Katoen, indigo, soga-bruin, was", aspect: 1.5, images: [IMG.textile1, IMG.textile2, IMG.scene5], blurb: "Een batik tulis met het klassieke Parang Rusak Barong-motief — een diagonaal patroon dat ooit alleen door de sultans van Yogyakarta gedragen mocht worden. Acht maanden werk, volledig met de hand getekend.", provenance: "Vervaardigd in de werkplaats van Ibu Sumarni in Imogiri, ten zuiden van Yogyakarta." },
  { slug: "wayang-arjuna", title: "Arjuna — Wayang Kulit", artist: "Ki Purbo Asmoro studio", region: "Java", category: "Schilderij", year: 2015, price: 680, dimensions: "75 × 38 cm", materials: "Buffelhuid, bamboe, gouden inkt", aspect: 1.8, images: [IMG.scene6, IMG.scene4], blurb: "Een traditionele wayang kulit-schaduwfiguur van de held Arjuna uit het Mahabharata.", provenance: "Uit het atelier van dalang Ki Purbo Asmoro in Solo." },
  { slug: "ikat-sumba", title: "Hinggi Kombu", artist: "Maramba weverscoöperatief", region: "Sumatra", category: "Textiel", year: 2021, price: 1290, dimensions: "260 × 120 cm", materials: "Handgesponnen katoen, morinda-wortel, indigo", aspect: 1.4, images: [IMG.textile2, IMG.textile1], blurb: "Een ikat-doek met paarden- en mamuli-motieven.", provenance: "Geweven door drie zussen in Oost-Soemba over een periode van veertien maanden." },
  { slug: "ganesha-batu", title: "Ganesha in vulkanische steen", artist: "Made Sutama", region: "Bali", category: "Beeldhouwwerk", year: 2020, price: 3200, dimensions: "65 × 38 × 32 cm, 41 kg", materials: "Batu paras (vulkanisch zandsteen)", aspect: 1.15, images: [IMG.scene1, IMG.scene3], blurb: "Een zittende Ganesha, wegnemer van obstakels, gehouwen uit één blok batu paras.", provenance: "Made Sutama werkt in een open atelier in Batubulan." },
  { slug: "topeng-tua", title: "Topeng Tua", artist: "I Made Djimat (toegeschreven)", region: "Bali", category: "Masker", year: 1972, price: 4600, dimensions: "22 × 17 × 11 cm", materials: "Pulé-hout, natuurlijke pigmenten, mensenhaar", aspect: 1.05, images: [IMG.mask2, IMG.mask1], blurb: "Het masker van de oude man — gebruikt in de Topeng Tua dans.", provenance: "Verworven uit een privécollectie in Singapadu." },
  { slug: "songket-palembang", title: "Songket Lepus", artist: "Hj. Cek Aisyah atelier", region: "Sumatra", category: "Textiel", year: 2018, price: 1750, dimensions: "200 × 90 cm", materials: "Zijde, gouddraad", aspect: 1.3, images: [IMG.textile1, IMG.textile2], blurb: "Een ceremoniële songket uit Palembang, geweven met echte gouddraad.", provenance: "Geweven in vier maanden in het atelier van wijlen Hj. Cek Aisyah." },
  { slug: "kris-jawa", title: "Keris Luk Sapta", artist: "Empu Sungkowo Harumbrodjo", region: "Java", category: "Beeldhouwwerk", year: 2010, price: 5400, dimensions: "Lemmet 38 cm, totaal 52 cm", materials: "Damascus-staal (pamor), nikkel, tegelhout", aspect: 2.2, images: [IMG.scene6, IMG.scene4], blurb: "Een keris met zeven golvingen (luk sapta) en een wolkenpamor.", provenance: "Direct uit de smederij in Yogyakarta." },
  { slug: "lukisan-ubud", title: "Sawah, vroeg ochtend", artist: "Dewa Putu Mokoh (school)", region: "Bali", category: "Schilderij", year: 2003, price: 920, dimensions: "60 × 80 cm", materials: "Acryl op canvas", aspect: 0.85, images: [IMG.scene2, IMG.scene1], blurb: "Een sawah-landschap in de naïef-figuratieve stijl van de Pengosekan-school.", provenance: "Aangekocht in een klein atelier in Pengosekan, Ubud, in 2023." },
  { slug: "patung-primitif", title: "Hampatong", artist: "Onbekend, Dayak", region: "Sumatra", category: "Beeldhouwwerk", year: 1950, price: 2750, dimensions: "110 × 24 × 22 cm", materials: "IJzerhout (ulin)", aspect: 2.4, images: [IMG.scene3, IMG.scene4], blurb: "Een hampatong — een staande figuur die traditioneel als beschermer bij Dayak-huizen werd geplaatst.", provenance: "Verworven uit een Nederlandse privécollectie." },
  { slug: "batik-cirebon", title: "Mega Mendung", artist: "Katura AR", region: "Java", category: "Textiel", year: 2017, price: 1450, dimensions: "240 × 110 cm", materials: "Katoen, was, natuurlijke kleurstoffen", aspect: 1.45, images: [IMG.textile2, IMG.textile1], blurb: "Het beroemde Mega Mendung-wolkenmotief uit Cirebon.", provenance: "Gemaakt door batikmeester Katura AR in Trusmi, Cirebon." },
  { slug: "rangda-masker", title: "Rangda", artist: "I Ketut Muja", region: "Bali", category: "Masker", year: 2014, price: 3900, dimensions: "38 × 32 × 22 cm", materials: "Pulé-hout, leer, mensenhaar, varkenstanden", aspect: 1.1, images: [IMG.mask1, IMG.mask2], blurb: "Rangda — de heks-koningin, tegenstander van Barong in het kosmische evenwicht.", provenance: "Gemaakt door I Ketut Muja, één van de meest gerespecteerde maker van sacrale maskers op Bali." },
  { slug: "lukisan-affandi-school", title: "Pasar pagi", artist: "Toegeschreven aan Affandi-school", region: "Java", category: "Schilderij", year: 1985, price: 6200, dimensions: "90 × 130 cm", materials: "Olie op canvas", aspect: 0.75, images: [IMG.scene2, IMG.scene5], blurb: "Een ochtendmarkt in expressionistische, dik-aangebrachte verfstreken.", provenance: "Uit een Yogyakartaanse familiecollectie." },
  { slug: "tenun-toraja", title: "Pa'tedong", artist: "Mama Lien atelier", region: "Sumatra", category: "Textiel", year: 2020, price: 980, dimensions: "180 × 65 cm", materials: "Katoen, natuurlijke kleurstoffen", aspect: 1.55, images: [IMG.textile1, IMG.textile2], blurb: "Een Toraja-weefsel met het pa'tedong-motief (waterbuffel).", provenance: "Geweven in Rantepao door Mama Lien en haar twee dochters." },
];

export const CATEGORIES: Category[] = ["Schilderij", "Beeldhouwwerk", "Textiel", "Masker"];
export const REGIONS: Region[] = ["Java", "Bali", "Sumatra"];

export const PRICE_RANGES = [
  { id: "0-1000", label: "tot € 1.000", min: 0, max: 1000 },
  { id: "1000-2500", label: "€ 1.000 – € 2.500", min: 1000, max: 2500 },
  { id: "2500-5000", label: "€ 2.500 – € 5.000", min: 2500, max: 5000 },
  { id: "5000+", label: "€ 5.000 en hoger", min: 5000, max: Number.POSITIVE_INFINITY },
] as const;

export const TEAM = [
  { name: "Marieke van Doorn", role: "Oprichter & curator", bio: "Vijftien jaar geleden voor het eerst in Ubud beland, nooit meer weggegaan met haar hoofd. Studeerde kunstgeschiedenis in Leiden, woonde drie jaar in Yogyakarta.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
  { name: "Bas Hendriks", role: "Inkoop & logistiek", bio: "Reist twee tot drie keer per jaar de archipel rond. Spreekt redelijk Bahasa Indonesia en wat Javaans.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Sari Wijaya", role: "Onderzoek & herkomst", bio: "Indonesisch-Nederlands, kunsthistorica. Schrijft de herkomstdossiers en houdt contact met de makers.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" },
];

export function getArtwork(slug: string): Artwork | undefined {
  return ARTWORKS.find((a) => a.slug === slug);
}

export function relatedArtworks(slug: string, n = 3): Artwork[] {
  const a = getArtwork(slug);
  if (!a) return [];
  return ARTWORKS.filter((x) => x.slug !== slug && (x.region === a.region || x.category === a.category)).slice(0, n);
}
