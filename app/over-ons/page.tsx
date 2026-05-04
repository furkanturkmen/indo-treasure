import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Hoe Indo Treasure werkt: directe relaties met makers in Indonesië, eerlijke prijzen, en een herkomstdossier bij elk werk.",
};

export default function OverOns() {
  return (
    <div className="max-w-[1320px] mx-auto px-[clamp(20px,4vw,64px)]">
      <section className="py-20 md:py-28">
        <span className="eyebrow">Over Indo Treasure</span>
        <h1 className="serif text-5xl md:text-6xl font-normal leading-tight mb-8">
          Indonesische kunst — <em className="italic text-[var(--color-accent)]">in eigen atelier vervaardigd.</em>
        </h1>
        <p className="text-lg text-[var(--color-ink-soft)] mb-5">
          Indo Treasure is in 2014 begonnen als een klein atelier aan de Westerstraat in Amsterdam. Wat begon als een persoonlijke fascinatie voor de visuele tradities van Java en Bali, groeide uit tot een werkplaats waar we eigen werken vervaardigen — schilderijen, beelden, textiel en maskers, geïnspireerd door de archipel.
        </p>
        <p className="text-lg text-[var(--color-ink-soft)] mb-5">
          Geen massaproductie, geen kitsch. Elk werk wordt met de hand gemaakt in onze studio. We nemen de tijd voor het materiaal, de techniek en het verhaal achter elke vorm.
        </p>
        <p className="text-lg text-[var(--color-ink-soft)] m-0">
          Onze galerie aan de Westerstraat is open op afspraak. Loop binnen om de werken in het echt te zien — en om te horen hoe ze tot stand kwamen.
        </p>
      </section>

      {/* <section className="py-16 md:py-20 max-w-[1100px]">
        <span className="eyebrow">Onze beloftes</span>
        <h2 className="serif text-4xl md:text-5xl font-normal mb-12 max-w-[22ch]">Drie beloftes die we bij elk werk waarmaken.</h2>
        <ol className="grid md:grid-cols-3 gap-10 list-none p-0 m-0">
          {[
            { n: "01", h: "We kennen de maker", p: "We kopen alleen van mensen die we hebben ontmoet, in ateliers die we hebben gezien." },
            { n: "02", h: "We betalen eerlijk", p: "We betalen vooraf en wat de maker zelf zegt dat een werk waard is." },
            { n: "03", h: "We documenteren", p: "Elk werk komt met een dossier: foto's van het maakproces en een herkomstgeschiedenis." },
          ].map((p) => (
            <li key={p.n} className="border-t border-[var(--color-ink)] pt-5">
              <span className="serif italic text-[var(--color-accent)] block mb-2">{p.n}</span>
              <h3 className="serif text-2xl font-medium mb-3">{p.h}</h3>
              <p className="text-[var(--color-ink-soft)] m-0">{p.p}</p>
            </li>
          ))}
        </ol>
      </section> */}

      <section className="border-t border-[var(--color-line)] mt-10 pt-20 md:pt-24 pb-24">
        <div className="mb-12 md:mb-16 max-w-[60ch]">
          <span className="eyebrow">Bezoek of contact</span>
          <h2 className="serif text-4xl md:text-5xl font-normal m-0 mb-4">Loop binnen, schrijf ons, of <em className="italic text-[var(--color-accent)]">stuur een vraag.</em></h2>
          <p className="text-lg text-[var(--color-ink-soft)] m-0">
            De galerie is open op afspraak. We nemen rustig de tijd om je rond te leiden — koffie staat klaar.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h3 className="serif text-2xl font-medium m-0 mb-6">Stuur ons een bericht</h3>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="relative w-full aspect-[5/4] overflow-hidden border border-[var(--color-line)]">
              <iframe
                title="Locatie van Indo Treasure op de kaart"
                src="https://www.google.com/maps?q=Westerstraat+Amsterdam&z=15&output=embed"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] m-0 mb-1.5">Adres</p>
                <address className="not-italic m-0 leading-relaxed">
                  Indo Treasure<br/>
                  Westerstraat 142<br/>
                  1015 MR Amsterdam
                </address>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] m-0 mb-1.5">Openingstijden</p>
                <p className="m-0 leading-relaxed">
                  Op afspraak<br/>
                  Di — za, 11:00 — 18:00
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] m-0 mb-1.5">E-mail</p>
                <a href="mailto:hallo@indotreasure.nl" className="m-0 underline-offset-4 hover:underline">hallo@indotreasure.nl</a>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] m-0 mb-1.5">Telefoon</p>
                <a href="tel:+31204123456" className="m-0 underline-offset-4 hover:underline">+31 (0)20 412 3456</a>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-sm pt-6 border-t border-[var(--color-line)]">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] m-0 mb-1.5">KvK</p>
                <p className="m-0">75123456</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[var(--color-ink-soft)] m-0 mb-1.5">BTW</p>
                <p className="m-0">NL860123456B01</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
