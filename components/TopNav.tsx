"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

export default function TopNav() {
  const pathname = usePathname();
  const items = [
    { href: "/", label: "Home" },
    { href: "/catalogus", label: "Catalogus" },
    { href: "/over-ons", label: "Over ons" },
  ];
  const isActive = (h: string) => h === "/" ? pathname === "/" : pathname.startsWith(h);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_srgb,var(--color-bg)_86%,transparent)] border-b border-transparent">
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,4vw,64px)] py-4 grid grid-cols-[auto_1fr_auto] items-center gap-8">
        <Link href="/" className="flex items-center gap-2.5 no-underline text-[var(--color-ink)]" aria-label="Indo Treasure — home">
          <Logo size={28} />
          <span className="serif text-xl font-medium">Indo <em className="italic">Treasure</em></span>
        </Link>
        <nav aria-label="Hoofdnavigatie" className="flex gap-7 justify-center">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className={`relative text-sm font-medium py-1.5 transition ${isActive(it.href) ? "text-[var(--color-ink)]" : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"}`}>
              {it.label}
              {isActive(it.href) && <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-[var(--color-accent)]" />}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 justify-self-end">
          <ThemeToggle />
          <Link href="/catalogus" className="text-sm font-medium border-b border-[var(--color-ink)] pb-0.5 hover:text-[var(--color-accent-2)] hover:border-[var(--color-accent-2)]">Bekijk collectie →</Link>
        </div>
      </div>
    </header>
  );
}
