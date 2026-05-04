import type { Metadata } from "next";
import { ARTWORKS } from "@/lib/artworks";
import CatalogFilters from "@/components/CatalogFilters";

export const metadata: Metadata = {
  title: "Catalogus",
  description: "Ontdek onze collectie Indonesische kunst: schilderijen, beeldhouwwerk, textiel en maskers uit Java, Bali en Sumatra.",
};

export default function CatalogusPage() {
  return (
    <div className="max-w-[1320px] mx-auto px-[clamp(20px,4vw,64px)]">
      <header className="py-16 max-w-[720px]">
        <span className="eyebrow">De collectie</span>
        <h1 className="serif text-6xl md:text-8xl font-normal leading-none m-0">Catalogus</h1>
        <p className="text-[var(--color-ink-soft)] text-lg mt-6 max-w-[56ch]">
          {ARTWORKS.length} werken uit Java, Bali en Sumatra — schilderijen, beelden, textiel en maskers. Elk werk is in onze galerie te bezichtigen op afspraak.
        </p>
      </header>
      <CatalogFilters artworks={ARTWORKS} />
    </div>
  );
}
