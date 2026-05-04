import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ARTWORKS, getArtwork, relatedArtworks } from "@/lib/artworks";
import { formatEUR } from "@/lib/format";
import Gallery from "@/components/Gallery";
import RequestButton from "@/components/RequestButton";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return ARTWORKS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArtwork(slug);
  if (!a) return { title: "Werk niet gevonden" };
  return { title: `${a.title} — ${a.artist}`, description: a.blurb.slice(0, 158) };
}

export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params;
  const a = getArtwork(slug);
  if (!a) notFound();
  const related = relatedArtworks(slug);

  return (
    <div className="max-w-[1320px] mx-auto px-[clamp(20px,4vw,64px)]">
      <nav aria-label="Kruimelpad" className="flex gap-2 text-xs text-[var(--color-ink-soft)] py-6 flex-wrap">
        <Link href="/">Home</Link><span>/</span>
        <Link href="/catalogus">Catalogus</Link><span>/</span>
        <span aria-current="page" className="text-[var(--color-ink)]">{a.title}</span>
      </nav>

      <article className="grid lg:grid-cols-[1.4fr_1fr] gap-12 pb-16">
        <Gallery images={a.images} title={a.title} />
        <aside className="lg:sticky lg:top-24 self-start">
          <span className="eyebrow">{a.category} · {a.region}</span>
          <h1 className="serif text-5xl font-normal leading-tight m-0 mb-3">{a.title}</h1>
          <p className="text-[var(--color-ink-soft)] m-0 mb-7">door <em className="serif italic text-[var(--color-ink)] text-lg">{a.artist}</em> · {a.year}</p>
          <p className="serif italic text-[var(--color-accent)] text-3xl m-0 mb-2">{formatEUR(a.price)}</p>
          <p className="text-base leading-relaxed mt-6 mb-7 max-w-[50ch]">{a.blurb}</p>
          <RequestButton title={a.title} />
          <p className="text-xs text-[var(--color-ink-soft)] text-center my-3">Gratis bezichtiging · Verzekerd transport</p>
          <dl className="border-t border-[var(--color-line)] pt-6 grid gap-3.5 mt-2">
            <Spec label="Afmetingen" value={a.dimensions} />
            <Spec label="Materialen" value={a.materials} />
            <Spec label="Jaar" value={String(a.year)} />
            <Spec label="Herkomst" value={`${a.region}, Indonesië`} />
          </dl>
        </aside>
      </article>

      {/* <section className="grid md:grid-cols-2 gap-12 py-16">
        <div>
          <span className="eyebrow">Herkomst</span>
          <h2 className="serif text-4xl font-normal mb-4">Hoe dit werk bij ons kwam</h2>
          <p className="text-[var(--color-ink-soft)] max-w-[50ch]">{a.provenance}</p>
        </div>
        <div>
          <span className="eyebrow">Over de maker</span>
          <h2 className="serif text-4xl font-normal mb-4">{a.artist}</h2>
          <p className="text-[var(--color-ink-soft)] max-w-[50ch]">We werken al jaren met {a.artist.split(" ")[0]} en bezoeken het atelier elke reis. Vraag ons gerust naar foto's, video's of een gesprek met de maker.</p>
        </div>
      </section> */}

      {related.length > 0 && (
        <section className="pb-20">
          <span className="eyebrow">Verwante werken</span>
          <h2 className="serif text-4xl font-normal mb-7">Misschien ook iets voor jou</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {related.map((r) => (
              <Link key={r.slug} href={`/catalogus/${r.slug}`} className="block group">
                <div className="bg-[var(--color-paper)] p-2 mb-3.5 border border-[var(--color-line)] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.15)]">
                  <div className="relative aspect-[4/5] bg-black overflow-hidden">
                    <Image src={r.images[0]} alt={r.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    <span className="absolute top-3 left-3 bg-[var(--color-paper)]/95 text-[var(--color-ink)] text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1.5 backdrop-blur-sm shadow-[0_2px_8px_-2px_rgba(0,0,0,0.25)]">{r.category}</span>
                  </div>
                </div>
                <h3 className="serif text-xl font-medium m-0 mb-1">{r.title}</h3>
                <p className="text-sm text-[var(--color-ink-soft)] m-0">{r.artist} · {r.region}</p>
                <p className="serif italic text-[var(--color-accent)] m-0 mt-1">{formatEUR(r.price)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 text-sm">
      <dt className="text-xs uppercase tracking-wider text-[var(--color-ink-soft)] pt-0.5">{label}</dt>
      <dd className="m-0">{value}</dd>
    </div>
  );
}
