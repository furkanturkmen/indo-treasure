"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Artwork } from "@/lib/artworks";
import Frame from "@/components/Frame";
import { CATEGORIES, REGIONS, PRICE_RANGES } from "@/lib/artworks";
import { formatEUR } from "@/lib/format";

export default function CatalogFilters({ artworks }: { artworks: Artwork[] }) {
  const [cat, setCat] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [sort, setSort] = useState("nieuw");
  const [open, setOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const clearAll = () => { setCat(""); setRegion(""); setPrice(""); };
  const activeCount = (cat ? 1 : 0) + (region ? 1 : 0) + (price ? 1 : 0);
  const priceLabel = price ? PRICE_RANGES.find((p) => p.id === price)?.label : null;

  const list = useMemo(() => {
    let arr = artworks.filter((a) => {
      if (cat && a.category !== cat) return false;
      if (region && a.region !== region) return false;
      if (price) {
        const p = PRICE_RANGES.find((r) => r.id === price);
        if (p && (a.price < p.min || a.price > p.max)) return false;
      }
      return true;
    });
    if (sort === "prijs-laag") arr = [...arr].sort((a,b) => a.price - b.price);
    else if (sort === "prijs-hoog") arr = [...arr].sort((a,b) => b.price - a.price);
    else if (sort === "alfabet") arr = [...arr].sort((a,b) => a.title.localeCompare(b.title, "nl"));
    return arr;
  }, [artworks, cat, region, price, sort]);

  return (
    <>
      <div className="border-y border-[var(--color-line)] py-5 mb-9 flex items-center justify-between flex-wrap gap-x-8 gap-y-3">
        <div className="flex items-center flex-wrap gap-x-6 gap-y-2.5">
          <div ref={popRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-haspopup="true"
              className={`text-sm inline-flex items-center gap-2 border-b py-1 transition-colors ${open || activeCount > 0 ? "border-[var(--color-ink)] text-[var(--color-ink)]" : "border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-ink)]"}`}
            >
              Filters
              {activeCount > 0 && <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1.5 text-[10px] font-semibold rounded-full bg-[var(--color-accent-2)] text-white">{activeCount}</span>}
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={`ml-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}><path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div
              className={`absolute top-full mt-3 left-0 origin-top-left bg-[var(--color-paper)] border border-[var(--color-line)] p-6 z-20 w-[320px] shadow-[0_30px_60px_-20px_rgba(31,29,20,0.25)] transition-all duration-200 ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-[0.97] -translate-y-1 pointer-events-none"}`}
              role="dialog"
              aria-label="Filters"
            >
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[var(--color-ink)] m-0">Filters</h3>
                {activeCount > 0 && (
                  <button onClick={clearAll} className="text-xs text-[var(--color-accent-2)] underline-offset-4 hover:underline">Wis alles</button>
                )}
              </div>
              <div className="flex flex-col gap-5">
                <SelectFilter label="Categorie" value={cat} onChange={setCat} options={CATEGORIES.map((c) => ({ value: c, label: c }))} block />
                <SelectFilter label="Regio" value={region} onChange={setRegion} options={REGIONS.map((r) => ({ value: r, label: r }))} block />
                <SelectFilter label="Prijs" value={price} onChange={setPrice} options={PRICE_RANGES.map((p) => ({ value: p.id, label: p.label }))} block />
                <SelectFilter label="Sorteer op" value={sort} onChange={setSort} options={[
                  { value: "nieuw", label: "nieuw binnen" },
                  { value: "prijs-laag", label: "prijs — laag naar hoog" },
                  { value: "prijs-hoog", label: "prijs — hoog naar laag" },
                  { value: "alfabet", label: "alfabetisch" },
                ]} alwaysShow block />
              </div>
              <div className="mt-6 pt-5 border-t border-[var(--color-line)] flex justify-between items-center text-xs text-[var(--color-ink-soft)]">
                <span><strong className="text-[var(--color-ink)]">{list.length}</strong> {list.length === 1 ? "werk" : "werken"} gevonden</span>
                <button onClick={() => setOpen(false)} className="text-[var(--color-ink)] underline-offset-4 hover:underline">Sluiten</button>
              </div>
            </div>
          </div>
          {activeCount > 0 && (
            <>
              {cat && <RemovableChip onRemove={() => setCat("")}>{cat}</RemovableChip>}
              {region && <RemovableChip onRemove={() => setRegion("")}>{region}</RemovableChip>}
              {priceLabel && <RemovableChip onRemove={() => setPrice("")}>{priceLabel}</RemovableChip>}
            </>
          )}
        </div>
        <span className="text-sm text-[var(--color-ink-soft)]"><strong className="text-[var(--color-ink)]">{list.length}</strong> {list.length === 1 ? "werk" : "werken"}</span>
      </div>

      {list.length === 0 ? (
        <div className="border border-dashed border-[var(--color-line)] py-20 px-6 text-center mb-20">
          <p className="serif italic text-2xl text-[var(--color-ink)] m-0 mb-3">Geen werken gevonden.</p>
          <p className="text-[var(--color-ink-soft)] m-0 mb-6 max-w-[40ch] mx-auto">Probeer een andere combinatie van filters, of wis ze om alle {artworks.length} werken te zien.</p>
          <button onClick={clearAll} className="btn btn-primary">Wis alle filters</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pb-20">
          {list.map((a) => (
            <Link key={a.slug} href={`/catalogus/${a.slug}`} className="block group">
              <Frame className="mb-3.5">
                <div className="relative aspect-[4/5] bg-black overflow-hidden">
                  <Image src={a.images[0]} alt={`${a.title} — ${a.artist}, ${a.region}`} fill sizes="(max-width:768px)100vw,33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <span className="absolute top-3 left-3 bg-[var(--color-paper)]/95 text-[var(--color-ink)] text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1.5 backdrop-blur-sm shadow-[0_2px_8px_-2px_rgba(0,0,0,0.25)]">{a.category}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="text-white">
                      <p className="text-[10px] tracking-widest uppercase text-white/70 m-0 mb-1.5">{a.year} · {a.dimensions}</p>
                      <p className="text-sm text-white/90 m-0 mb-3 leading-snug line-clamp-2">{a.materials}</p>
                      <span className="serif italic text-base border-b border-white/70 pb-0.5">Bekijk werk →</span>
                    </div>
                  </div>
                </div>
              </Frame>
              <h3 className="serif text-xl font-medium m-0 mb-1">{a.title}</h3>
              <p className="text-sm text-[var(--color-ink-soft)] m-0 mb-1">{a.artist} · {a.region}</p>
              <p className="serif italic text-[var(--color-accent)] text-base m-0">{formatEUR(a.price)}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function SelectFilter({ label, value, onChange, options, alwaysShow, block }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  alwaysShow?: boolean;
  block?: boolean;
}) {
  if (block) {
    return (
      <label className="block">
        <span className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] font-semibold mb-1.5 block">{label}</span>
        <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-[var(--color-paper)] border border-[var(--color-line)] focus:border-[var(--color-ink)] outline-none text-[var(--color-ink)] px-3 py-2 text-sm">
          {!alwaysShow && <option value="">Alle</option>}
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </label>
    );
  }
  return (
    <label className="text-sm text-[var(--color-ink-soft)] inline-flex items-center gap-2">
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value)} className="bg-[var(--color-paper)] border-b border-[var(--color-line)] text-[var(--color-ink)] py-1">
        {!alwaysShow && <option value="">alle</option>}
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}

function RemovableChip({ children, onRemove }: { children: React.ReactNode; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-[var(--color-ink)] text-[var(--color-bg)]">
      {children}
      <button onClick={onRemove} aria-label="Verwijder filter" className="hover:opacity-70 leading-none -mr-0.5">×</button>
    </span>
  );
}
