"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="serif italic text-[var(--color-accent)] text-sm m-0">Bedankt — controleer je inbox.</p>;
  }

  return (
    <form className="flex gap-2 max-w-[320px]" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <input
        type="email"
        required
        placeholder="je@email.nl"
        aria-label="E-mailadres"
        className="flex-1 bg-[var(--color-paper)] border border-[var(--color-line)] focus:border-[var(--color-ink)] outline-none px-3 py-2 text-sm"
      />
      <button type="submit" className="px-4 py-2 text-sm bg-[var(--color-ink)] text-[var(--color-bg)] hover:bg-[var(--color-accent-2)] transition-colors">Aanmelden</button>
    </form>
  );
}
