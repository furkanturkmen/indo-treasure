"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = [
    { href: "/", label: "Home" },
    { href: "/catalogus", label: "Catalogus" },
    { href: "/over-ons", label: "Over ons" },
  ];
  const isActive = (h: string) => h === "/" ? pathname === "/" : pathname.startsWith(h);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_srgb,var(--color-bg)_86%,transparent)] border-b border-transparent">
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,4vw,64px)] py-4 flex items-center justify-between gap-4 md:grid md:grid-cols-[auto_1fr_auto] md:gap-8">
        <Link href="/" className="flex items-center gap-2.5 no-underline text-[var(--color-ink)]" aria-label="Indo Treasure — home">
          <Logo size={28} />
          <span className="serif text-xl font-medium">Indo <em className="italic">Treasure</em></span>
        </Link>
        <nav aria-label="Hoofdnavigatie" className="hidden md:flex gap-7 justify-center">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className={`relative text-sm font-medium py-1.5 transition ${isActive(it.href) ? "text-[var(--color-ink)]" : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"}`}>
              {it.label}
              {isActive(it.href) && <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-[var(--color-accent)]" />}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-3 md:justify-self-end">
          <ThemeToggle />
          {!pathname.startsWith("/catalogus") && (
            <Link href="/catalogus" className="hidden md:inline-block text-sm font-medium border-b border-[var(--color-ink)] pb-0.5 hover:text-[var(--color-accent-2)] hover:border-[var(--color-accent-2)]">Bekijk collectie →</Link>
          )}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-[var(--color-ink)] hover:bg-[var(--color-line)] transition-colors"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6 L18 18 M18 6 L6 18" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16 M4 12h16 M4 17h16" /></svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-[var(--color-line)] ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}
      >
        <nav className="px-[clamp(20px,4vw,64px)] py-4 flex flex-col gap-1 bg-[var(--color-bg)]">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={`serif text-2xl py-3 border-b border-[var(--color-line)] transition ${isActive(it.href) ? "text-[var(--color-accent)] italic" : "text-[var(--color-ink)]"}`}
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
