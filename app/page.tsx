import Link from "next/link";
import Image from "next/image";
import { ARTWORKS } from "@/lib/artworks";
import { formatEUR } from "@/lib/format";
import Frame from "@/components/Frame";

export default function Home() {
  const featured = ARTWORKS.slice(0, 6);
  return (
    <>
      <section className="max-w-[1480px] mx-auto px-[clamp(20px,4vw,64px)] pt-10 md:pt-16 pb-20 md:pb-28">
        <div className="flex justify-between items-baseline mb-8 md:mb-12">
          <span className="eyebrow">Galerie · Amsterdam</span>
          <span className="text-xs tracking-widest uppercase text-[var(--color-ink-soft)] hidden md:inline">Atelier · Voorjaar 2026</span>
        </div>
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <h1 className="serif font-normal leading-[0.95] tracking-tight m-0 text-[clamp(2.2rem,5.5vw,5.5rem)]">
              Indonesische<br/>kunst,<br/>
              <em className="italic text-[var(--color-accent)] font-semibold">uit ons<br/>eigen atelier.</em>
            </h1>
            <p className="text-[var(--color-ink-soft)] text-lg max-w-[44ch] mt-8 mb-7">
              In ons atelier in Amsterdam vervaardigen we schilderijen, beelden, textiel en maskers — geïnspireerd door de archipel. Elk werk uniek.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/catalogus" className="btn btn-primary">Naar de catalogus</Link>
              <Link href="/over-ons" className="btn btn-ghost">Ons verhaal →</Link>
            </div>
          </div>
          <div className="relative h-[460px] md:h-[620px] [perspective:1200px]">
            <Link href={`/catalogus/${featured[0].slug}`} className="absolute left-[6%] top-[6%] w-[58%] aspect-[3/4] bg-[var(--color-paper)] p-3 shadow-[0_30px_60px_-25px_rgba(31,29,20,0.45)] rotate-[-5deg] transition-transform duration-500 hover:rotate-[-2deg] hover:-translate-y-2 hover:z-30 z-10">
              <div className="relative w-full h-full bg-[var(--color-paper)] overflow-hidden">
                <Image src={featured[0].images[0]} alt={featured[0].title} fill sizes="(max-width:768px) 60vw, 350px" className="object-cover" priority />
              </div>
              <p className="serif italic text-xs text-[var(--color-ink-soft)] mt-2 truncate">{featured[0].title}</p>
            </Link>
            <Link href={`/catalogus/${featured[1].slug}`} className="absolute right-[4%] top-[2%] w-[48%] aspect-[4/5] bg-[var(--color-paper)] p-3 shadow-[0_30px_60px_-25px_rgba(31,29,20,0.45)] rotate-[4deg] transition-transform duration-500 hover:rotate-[1deg] hover:-translate-y-2 hover:z-30 z-20">
              <div className="relative w-full h-full bg-[var(--color-paper)] overflow-hidden">
                <Image src={featured[1].images[0]} alt={featured[1].title} fill sizes="(max-width:768px) 50vw, 300px" className="object-cover" />
              </div>
              <p className="serif italic text-xs text-[var(--color-ink-soft)] mt-2 truncate">{featured[1].title}</p>
            </Link>
            <Link href={`/catalogus/${featured[2].slug}`} className="absolute left-[18%] bottom-[2%] w-[54%] aspect-[5/4] bg-[var(--color-paper)] p-3 shadow-[0_30px_60px_-25px_rgba(31,29,20,0.45)] rotate-[-2deg] transition-transform duration-500 hover:rotate-[1deg] hover:-translate-y-2 hover:z-30 z-30">
              <div className="relative w-full h-full bg-[var(--color-paper)] overflow-hidden">
                <Image src={featured[2].images[0]} alt={featured[2].title} fill sizes="(max-width:768px) 60vw, 350px" className="object-cover" />
              </div>
              <p className="serif italic text-xs text-[var(--color-ink-soft)] mt-2 truncate">{featured[2].title}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="relative overflow-hidden py-44 md:py-64 manifest-aurora">
        <div className="relative max-w-[1100px] mx-auto px-[clamp(20px,4vw,64px)]">
          <div className="flex justify-between items-baseline mb-10 md:mb-14">
            <span className="eyebrow">Manifest</span>
            <span className="text-xs tracking-widest uppercase text-[var(--color-ink-soft)] hidden md:inline">§ 01</span>
          </div>
          <p className="serif font-normal italic leading-[1.15] tracking-tight text-[clamp(1.8rem,4.2vw,3.6rem)] max-w-[28ch] m-0 text-[var(--color-ink)]">
            Een masker, een doek, een beeld — niets is anoniem. Achter elk werk staat een naam, een dorp, een seizoen waarin het ontstond. <span className="not-italic font-semibold">Wij verzamelen die namen.</span>
          </p>
          <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-10 md:gap-14 pt-10 border-t border-[var(--color-line)]">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] m-0 mb-2">Bron</p>
              <p className="text-[var(--color-ink)] leading-snug m-0">Geen tussenhandel. Wij kopen rechtstreeks bij de maker of zijn nabestaanden.</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] m-0 mb-2">Dossier</p>
              <p className="text-[var(--color-ink)] leading-snug m-0">Elk werk komt met een geschreven herkomst, foto's van het atelier, en — waar mogelijk — het verhaal in eigen woorden.</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] m-0 mb-2">Eerlijke prijs</p>
              <p className="text-[var(--color-ink)] leading-snug m-0">Maker en galerie delen openlijk. De verdeling staat in elk dossier.</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="max-w-[1320px] mx-auto px-[clamp(20px,4vw,64px)] pt-20 md:pt-28">
        <div className="flex justify-between items-end gap-6 mb-7">
          <div>
            <span className="eyebrow">Uitgelicht</span>
            <h2 className="serif text-4xl md:text-5xl m-0 font-normal">Pas binnengekomen</h2>
          </div>
          <Link href="/catalogus" className="border-b border-[var(--color-ink)] pb-1 text-sm">Bekijk alles ({ARTWORKS.length}) →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-12 gap-7">
          {featured.map((a, i) => {
            const wide = i % 3 === 0;
            return (
              <Link key={a.slug} href={`/catalogus/${a.slug}`} className={`block ${wide ? "md:col-span-6" : "md:col-span-3"}`}>
                <Frame className="mb-4">
                  <div className="relative h-[320px] md:h-[420px] bg-black overflow-hidden">
                    <Image src={a.images[0]} alt={`${a.title} door ${a.artist}`} fill sizes={wide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"} className="object-cover" />
                  </div>
                </Frame>
                <h3 className="serif text-xl font-medium m-0 mb-1">{a.title}</h3>
                <p className="text-sm text-[var(--color-ink-soft)] m-0 mb-1">{a.artist} · {a.region}</p>
                <p className="serif italic text-[var(--color-accent)] m-0">{formatEUR(a.price)}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* <div className="text-center py-20 md:py-28 px-6">
        <p className="serif italic text-[var(--color-ink-soft)] text-lg max-w-[40ch] mx-auto m-0">
          Volgende reis: Soemba, augustus 2026 — voor de ikat-weefsters van Maramba.
        </p>
      </div> */}
    </>
  );
}
