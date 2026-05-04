"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-[var(--color-line)] p-8 md:p-10 bg-[var(--color-paper)]">
        <p className="serif italic text-2xl text-[var(--color-accent)] m-0 mb-2">Bedankt voor je bericht.</p>
        <p className="text-[var(--color-ink-soft)] m-0">We reageren binnen twee werkdagen — vaak sneller.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] mb-1.5 block">Naam</span>
          <input required name="name" type="text" className="w-full bg-[var(--color-paper)] border border-[var(--color-line)] focus:border-[var(--color-ink)] outline-none px-4 py-3 text-base" />
        </label>
        <label className="block">
          <span className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] mb-1.5 block">E-mail</span>
          <input required name="email" type="email" className="w-full bg-[var(--color-paper)] border border-[var(--color-line)] focus:border-[var(--color-ink)] outline-none px-4 py-3 text-base" />
        </label>
      </div>
      <label className="block">
        <span className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] mb-1.5 block">Onderwerp</span>
        <input name="subject" type="text" className="w-full bg-[var(--color-paper)] border border-[var(--color-line)] focus:border-[var(--color-ink)] outline-none px-4 py-3 text-base" />
      </label>
      <label className="block">
        <span className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] mb-1.5 block">Bericht</span>
        <textarea required name="message" rows={6} className="w-full bg-[var(--color-paper)] border border-[var(--color-line)] focus:border-[var(--color-ink)] outline-none px-4 py-3 text-base resize-y" />
      </label>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-[var(--color-ink-soft)] m-0">We reageren binnen twee werkdagen.</p>
        <button type="submit" className="btn btn-primary">Versturen →</button>
      </div>
    </form>
  );
}
