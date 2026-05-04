"use client";
import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        <Image src={images[active]} alt={`${title} — afbeelding ${active+1} van ${images.length}`} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" priority />
      </div>
      {images.length > 1 && (
        <div role="tablist" className="flex gap-3 mt-3.5 flex-wrap">
          {images.map((img, i) => (
            <button key={i} role="tab" aria-selected={i===active} onClick={() => setActive(i)}
              className={`relative w-21 h-21 overflow-hidden border ${i===active ? "border-[var(--color-accent)] border-2" : "border-[var(--color-line)] hover:border-[var(--color-ink)]"}`}
              style={{ width: 84, height: 84 }}>
              <Image src={img} alt={`Detail ${i+1}`} fill sizes="84px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
