"use client";
import { useState, useEffect } from "react";

export default function RequestButton({ title }: { title: string }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn btn-primary w-full">Werk aanvragen</button>
      {open && (
        <div role="dialog" aria-modal="true" onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 grid place-items-center p-5">
          <div onClick={(e) => e.stopPropagation()} className="bg-[var(--color-bg)] max-w-md w-full p-10 relative border-t-4 border-[var(--color-accent)]">
            <button onClick={() => setOpen(false)} aria-label="Sluiten" className="absolute top-3 right-4 text-3xl text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] serif">×</button>
            {!sent ? (
              <>
                <span className="eyebrow">Aanvraag</span>
                <h2 className="serif text-3xl font-medium mb-2">{title}</h2>
                <p className="text-sm text-[var(--color-ink-soft)] mb-6">Laat een bericht achter — we reageren binnen één werkdag, persoonlijk.</p>
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4">
                  <Field label="Je naam"><input required type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full p-3 border border-[var(--color-line)] bg-white normal-case tracking-normal" /></Field>
                  <Field label="E-mailadres"><input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full p-3 border border-[var(--color-line)] bg-white normal-case tracking-normal" /></Field>
                  <Field label="Bericht (optioneel)"><textarea rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full p-3 border border-[var(--color-line)] bg-white normal-case tracking-normal" placeholder="Bezichtiging? Vraag over herkomst?" /></Field>
                  <button type="submit" className="btn btn-primary w-full">Aanvraag versturen</button>
                </form>
              </>
            ) : (
              <div>
                <h2 className="serif text-3xl font-medium mb-3">Bedankt, {form.name.split(" ")[0] || "even"} —</h2>
                <p className="text-[var(--color-ink-soft)] mb-6">Je aanvraag voor <em className="serif text-[var(--color-ink)]">{title}</em> is binnen. We sturen je binnen één werkdag een persoonlijk antwoord op <strong>{form.email}</strong>.</p>
                <button onClick={() => setOpen(false)} className="btn btn-primary">Sluiten</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="grid gap-1.5 text-xs uppercase tracking-widest text-[var(--color-ink-soft)]">{label}{children}</label>;
}
