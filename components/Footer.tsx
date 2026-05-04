import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20">
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,4vw,64px)] py-16 grid md:grid-cols-[2fr_1fr_1fr_1.4fr] gap-9">
        <div>
          <h3 className="serif text-3xl font-medium mt-3.5 mb-2">Indo Treasure</h3>
          <p className="text-[var(--color-ink-soft)] text-sm m-0 max-w-[36ch]">Indonesische kunst,<br/>in eigen atelier vervaardigd.</p>
        </div>
        <Col title="Navigatie">
          <p>
            <Link href="/">Home</Link><br/>
            <Link href="/catalogus">Catalogus</Link><br/>
            <Link href="/over-ons">Over ons</Link>
          </p>
        </Col>
        <Col title="Volg ons">
          <p>
            <a href="#">Instagram</a><br/>
            <a href="#">Pinterest</a>
          </p>
        </Col>
        <Col title="Nieuwsbrief">
          <p className="text-[var(--color-ink-soft)] text-sm leading-snug !mb-3">Pas binnengekomen werken, één keer per maand.</p>
          <NewsletterForm />
        </Col>
      </div>
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,4vw,64px)] py-6 border-t border-[var(--color-line)] flex justify-between items-center text-xs text-[var(--color-ink-soft)] flex-wrap gap-3">
        <span>© {year} Indo Treasure</span>
        <div className="flex gap-5 [&_a]:no-underline [&_a:hover]:text-[var(--color-ink)]">
          <a href="#">Algemene voorwaarden</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-widest text-[var(--color-ink-soft)] font-semibold mb-3.5 m-0">{title}</h4>
      <div className="text-sm leading-7 [&_a]:no-underline [&_a]:border-b [&_a]:border-transparent [&_a:hover]:border-[var(--color-accent-2)] [&_a:hover]:text-[var(--color-accent-2)]">{children}</div>
    </div>
  );
}
