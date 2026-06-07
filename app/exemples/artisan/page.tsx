"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  ["apropos", "À propos"],
  ["services", "Services"],
  ["realisations", "Réalisations"],
  ["materiaux", "Matériaux"],
  ["contact", "Contact"],
];

const strengths = [
  { title: "Bois massifs", text: "sélectionnés", Icon: TreeIcon },
  { title: "Fabrication", text: "100% sur mesure", Icon: PencilIcon },
  { title: "Finitions haut", text: "de gamme", Icon: SunIcon },
  { title: "Engagement", text: "local & durable", Icon: LeafIcon },
];

const services = [
  ["Agencement intérieur", "Bibliothèques, dressings, rangements et meubles intégrés dessinés au millimètre."],
  ["Cuisine sur mesure", "Façades, plans de travail, îlots et rangements conçus pour votre usage quotidien."],
  ["Escaliers & garde-corps", "Créations solides et élégantes en bois massif, métal ou assemblages mixtes."],
  ["Mobilier unique", "Tables, bureaux, meubles de salle de bain et pièces signatures fabriquées à l’atelier."],
  ["Rénovation bois", "Restauration, reprise de finitions et adaptation de pièces existantes avec soin."],
  ["Conseil matériaux", "Choix des essences, finitions, teintes et traitements selon votre intérieur."],
];

const processSteps = [
  ["01", "Écoute", "Nous cadrons vos besoins, vos contraintes et l’atmosphère recherchée."],
  ["02", "Dessin", "Plans, choix des matériaux et validation des proportions avant fabrication."],
  ["03", "Atelier", "Découpe, assemblage, ponçage et finitions dans notre atelier nantais."],
  ["04", "Pose", "Installation soignée, ajustements sur place et livraison d’un projet prêt à vivre."],
];

const projects = [
  ["réalisation-1.png", "Escaliers", "sur mesure"],
  ["réalisation-2.png", "Cuisines", "sur mesure"],
  ["réalisation-3.png", "Agencements", "intérieurs"],
  ["réalisation-4.png", "Mobiliers", "sur mesure"],
];

function scrollToSection(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
}

function Monogram() {
  return (
    <svg viewBox="0 0 74 58" aria-hidden="true" className="h-11 w-14 stroke-[#b18355]">
      <path d="M8 50V8l29 36L66 8v42" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 12l18 23 18-23" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity=".55" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="none" stroke="currentColor" />
      <path d="M20 16l12 8-12 8V16Z" fill="currentColor" />
    </svg>
  );
}

function TreeIcon() {
  return <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true"><path d="M24 5c-7 6-12 12-12 19 0 5 4 9 9 10v7h6v-7c5-1 9-5 9-10 0-7-5-13-12-19Z" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M16 25h16M24 18v23" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}

function PencilIcon() {
  return <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true"><path d="M9 36l3 3 8-2 20-20-7-7-20 20-4 6Z" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M29 14l7 7M13 30l5 5" stroke="currentColor" strokeWidth="1.7" /></svg>;
}

function SunIcon() {
  return <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true"><circle cx="24" cy="24" r="7" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M24 4v8M24 36v8M4 24h8M36 24h8M10 10l6 6M32 32l6 6M38 10l-6 6M16 32l-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}

function LeafIcon() {
  return <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true"><path d="M39 9C22 8 10 18 10 32c0 5 4 8 9 8 14 0 23-13 20-31Z" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M14 35c8-7 14-12 22-18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}

export default function ArtisanPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function sendHeight() {
      window.parent.postMessage(
        {
          type: "preview-height",
          href: window.location.pathname,
          height: document.documentElement.scrollHeight,
        },
        "*"
      );
    }

    sendHeight();
    window.addEventListener("resize", sendHeight);

    return () => window.removeEventListener("resize", sendHeight);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goTo = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b08] text-white">
      {menuOpen && (
        <div className="pointer-events-none fixed inset-0 z-40 bg-black/55 backdrop-blur-md lg:hidden" />
      )}

      <header className="absolute left-0 top-0 z-[60] w-full px-4 py-5 sm:px-6 lg:px-16 lg:py-8">
        <nav className="relative mx-auto flex max-w-[1500px] items-start justify-between gap-6">
          <button type="button" onClick={() => goTo("accueil")} className="flex min-w-0 items-center gap-3 text-left sm:gap-4">
            <Monogram />
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm sm:tracking-[0.34em]">Atelier Moreau</span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.38em] text-white/70 sm:text-[10px] sm:tracking-[0.55em]">Menuisier</span>
            </span>
          </button>

          <div className="hidden items-center gap-10 pt-3 lg:flex">
            {navItems.map(([id, label]) => (
              <button key={id} type="button" onClick={() => goTo(id)} className="text-xs font-bold uppercase tracking-[0.22em] text-white/85 transition hover:text-[#b18355]">
                {label}
              </button>
            ))}
          </div>

          <button type="button" onClick={() => goTo("contact")} className="hidden bg-[#a87a4b] px-10 py-5 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#bd8c59] lg:block">
            Demander un devis
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className={`relative z-[90] grid h-11 w-11 place-items-center border border-white/30 bg-black/35 text-white backdrop-blur transition lg:hidden ${
              menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <span className="relative block h-5 w-5">
              <span className="absolute left-0 top-0 h-[2px] w-5 bg-current" />
              <span className="absolute left-0 top-[9px] h-[2px] w-5 bg-current" />
              <span className="absolute bottom-0 left-0 h-[2px] w-5 bg-current" />
            </span>
          </button>

          <div className={`fixed left-4 right-4 top-20 z-[80] overflow-hidden border border-[#b18355]/30 bg-[#11100d]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${menuOpen ? "max-h-[520px] translate-y-0 opacity-100" : "max-h-0 -translate-y-3 opacity-0"}`}>
            <div className="relative grid p-5 pt-14">
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setMenuOpen(false)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center text-white"
              >
                <span className="absolute h-[2px] w-6 rotate-45 bg-current" />
                <span className="absolute h-[2px] w-6 -rotate-45 bg-current" />
              </button>
              {navItems.map(([id, label]) => (
                <button key={id} type="button" onClick={() => goTo(id)} className="border-b border-white/10 py-4 text-left text-xs font-bold uppercase tracking-[0.24em] text-white">
                  {label}
                </button>
              ))}
              <button type="button" onClick={() => goTo("contact")} className="mt-5 bg-[#a87a4b] px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-white">
                Demander un devis
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section id="accueil" className="relative min-h-[780px] overflow-hidden sm:min-h-[860px] lg:min-h-[790px]">
        <Image src="/artisan/hero-bg.png" alt="Cuisine en bois réalisée sur mesure" fill priority loading="eager" fetchPriority="high" sizes="100vw" className="object-cover object-[58%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-[1500px] items-center px-5 pt-28 sm:min-h-[860px] sm:px-6 lg:min-h-[790px] lg:px-16">
          <div className="max-w-[680px]">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#c29461]">Artisan menuisier</p>
            <h1 className="font-serif text-[44px] leading-[1.03] tracking-[-0.02em] text-white min-[380px]:text-[50px] sm:text-[72px] lg:text-[86px]">
              L’art du bois, <br />le goût du <span className="text-[#a87a4b]">détail.</span>
            </h1>
            <p className="mt-8 max-w-[420px] text-base leading-7 text-white/80">
              Créations sur mesure en bois massif pour des intérieurs uniques et durables.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <button type="button" onClick={() => goTo("realisations")} className="bg-[#a87a4b] px-6 py-5 text-xs font-bold uppercase tracking-[0.16em] transition hover:bg-[#bd8c59] sm:px-8 sm:tracking-[0.2em]">
                Découvrir nos réalisations
              </button>
              <button type="button" className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                <PlayIcon /> Voir la vidéo
              </button>
            </div>
            <div className="mt-16 border-l border-[#a87a4b] pl-8 text-xs font-semibold uppercase leading-7 tracking-[0.24em] text-[#d8b383]">
              Fait main <br />avec passion
            </div>
          </div>
        </div>
      </section>

      <section id="apropos" className="grid bg-[#10100d] lg:grid-cols-[.55fr_.72fr_.38fr]">
        <div className="bg-[#f4f1ea] px-6 py-16 text-[#17140f] sm:px-12 lg:px-20 lg:py-24">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#8e6339]">L’atelier</p>
          <h2 className="font-serif text-4xl leading-tight lg:text-5xl">Un savoir-faire authentique.</h2>
          <div className="my-8 h-px w-12 bg-[#17140f]" />
          <p className="max-w-[420px] text-base leading-8 text-[#4c453c]">
            Chaque projet est pensé, conçu et réalisé dans notre atelier avec exigence et passion. Du bois brut à la création finale, nous maîtrisons chaque étape pour un résultat d’exception.
          </p>
          <button type="button" onClick={() => goTo("services")} className="mt-10 border border-[#17140f] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] transition hover:bg-[#17140f] hover:text-white">
            En savoir plus
          </button>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[520px]">
          <Image src="/artisan/atelier.png" alt="Artisan travaillant le bois" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>

        <div className="grid gap-10 bg-[#0c0d0a] px-8 py-14 sm:grid-cols-2 lg:grid-cols-1 lg:px-14 lg:py-24">
          {strengths.map(({ title, text, Icon }) => (
            <article key={title} className="flex items-start gap-6 text-[#b18355]">
              <Icon />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">{title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/80">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-[#f4f1ea] px-6 py-16 text-[#17140f] lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#b18355]/20 blur-[95px]" />
        <div className="pointer-events-none absolute right-10 top-48 h-96 w-96 rounded-full bg-[#d7b184]/14 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-white/55 blur-[90px]" />
        <div className="relative z-10 mx-auto max-w-[1500px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[.45fr_1fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#8e6339]">Services</p>
              <h2 className="font-serif text-4xl leading-tight lg:text-5xl">Des pièces pensées pour durer.</h2>
            </div>
            <p className="max-w-[720px] text-base leading-8 text-[#4c453c]">
              De la première esquisse à la pose, nous réalisons des ouvrages sur mesure qui s’intègrent naturellement à votre intérieur, avec le bon équilibre entre usage, matière et détail.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#d8c7b2] bg-[#d8c7b2] md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, text]) => (
              <article key={title} className="bg-[#f9f6ef] p-8 transition hover:bg-white">
                <div className="mb-8 h-px w-14 bg-[#a87a4b]" />
                <h3 className="mb-4 font-serif text-3xl">{title}</h3>
                <p className="leading-7 text-[#5f554b]">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {processSteps.map(([number, title, text]) => (
              <article key={number} className="border-l border-[#a87a4b] pl-6">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#a87a4b]">{number}</span>
                <h3 className="mt-4 font-serif text-3xl">{title}</h3>
                <p className="mt-3 leading-7 text-[#5f554b]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="realisations" className="bg-[#0b0b08] px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#b18355]">Réalisations</p>
              <h2 className="font-serif text-4xl leading-tight text-white lg:text-5xl">Des créations uniques <br />pour des intérieurs d’exception.</h2>
            </div>
            <button type="button" className="flex w-full items-center justify-between gap-5 text-left text-xs font-bold uppercase tracking-[0.16em] text-white/85 min-[440px]:w-max min-[440px]:justify-start sm:tracking-[0.22em]">
              Voir toutes les réalisations <span className="h-px w-14 bg-[#b18355]" />
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(([image, title, subtitle]) => (
              <article key={title} className="group relative min-h-[270px] overflow-hidden">
                <Image src={`/artisan/${image}`} alt={`${title} ${subtitle}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs font-bold uppercase leading-6 tracking-[0.18em]">
                  {title}<br /><span className="text-white/78">{subtitle}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="materiaux" className="grid bg-[#11110e] lg:grid-cols-[.7fr_.3fr]">
        <div className="relative min-h-[420px] lg:min-h-[430px]">
          <Image src="/artisan/matériaux.png" alt="Échantillons de bois nobles" fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover object-[78%_center] lg:object-[72%_center]" />
          <div className="absolute inset-y-0 left-0 w-[78%] bg-gradient-to-r from-[#f4f1ea] via-[#f4f1ea]/95 to-[#f4f1ea]/18 lg:w-[42%] lg:via-[#f4f1ea]/90 lg:to-transparent" />
          <div className="relative z-10 flex min-h-[420px] max-w-[360px] flex-col justify-center px-6 py-14 text-[#17140f] sm:max-w-[440px] sm:px-12 lg:min-h-[430px] lg:px-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#8e6339]">Matériaux nobles</p>
            <h2 className="font-serif text-3xl leading-tight min-[380px]:text-4xl lg:text-5xl">Le choix du beau, <br />le respect du vivant.</h2>
            <div className="my-6 h-px w-12 bg-[#17140f] lg:my-8" />
            <p className="text-sm leading-7 text-[#3f342b] sm:text-base sm:leading-8">
              Nous travaillons des essences rigoureusement sélectionnées pour leur qualité, leur durabilité et leur élégance naturelle.
            </p>
            <button type="button" className="mt-9 w-full border border-[#17140f] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] transition hover:bg-[#17140f] hover:text-white min-[420px]:w-max sm:px-8 sm:tracking-[0.2em]">
              Découvrir nos essences
            </button>
          </div>
        </div>
        <div className="flex items-center bg-[#10100d] px-6 py-16 sm:px-12 lg:px-20">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.26em] text-[#b18355]">Un projet ?</p>
            <h2 className="font-serif text-4xl leading-tight text-white lg:text-5xl">Parlons-en.</h2>
            <div className="my-7 h-px w-12 bg-white/70" />
            <p className="max-w-[390px] text-base leading-8 text-white/78">
              Vous avez une idée, un projet d’aménagement ou de création sur mesure ? Nous vous accompagnons de la conception à la réalisation.
            </p>
            <button type="button" onClick={() => goTo("contact")} className="mt-9 w-full bg-[#a87a4b] px-6 py-5 text-xs font-bold uppercase tracking-[0.16em] transition hover:bg-[#bd8c59] min-[420px]:w-auto sm:px-9 sm:tracking-[0.2em]">
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f4f1ea] px-6 py-16 text-[#17140f] lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.75fr_1fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#8e6339]">Demande de devis</p>
            <h2 className="font-serif text-4xl leading-tight lg:text-5xl">Racontez-nous votre projet.</h2>
            <p className="mt-7 max-w-[520px] text-base leading-8 text-[#4c453c]">
              Quelques lignes suffisent pour lancer l’échange. Nous vous recontactons pour préciser les dimensions, les matériaux, les délais et le budget.
            </p>
            <div className="mt-10 grid gap-4 text-sm text-[#4c453c]">
              <p><strong className="text-[#17140f]">Atelier</strong><br />Nantes · Pays de la Loire</p>
              <p><strong className="text-[#17140f]">Téléphone</strong><br />06 12 34 56 78</p>
              <p><strong className="text-[#17140f]">Email</strong><br />contact@atelier-moreau.fr</p>
            </div>
          </div>

          <form className="grid gap-5 bg-white p-6 shadow-2xl sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="border border-[#d8c7b2] px-5 py-4 outline-none" placeholder="Nom" />
              <input className="border border-[#d8c7b2] px-5 py-4 outline-none" placeholder="Email" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <input className="border border-[#d8c7b2] px-5 py-4 outline-none" placeholder="Téléphone" />
              <select className="border border-[#d8c7b2] px-5 py-4 outline-none" defaultValue="">
                <option value="" disabled>Type de projet</option>
                <option>Cuisine sur mesure</option>
                <option>Agencement intérieur</option>
                <option>Escalier</option>
                <option>Mobilier</option>
                <option>Rénovation</option>
              </select>
            </div>
            <textarea className="min-h-40 resize-none border border-[#d8c7b2] px-5 py-4 outline-none" placeholder="Décrivez votre projet, les dimensions, les matériaux souhaités..." />
            <button type="button" className="w-full bg-[#17140f] px-6 py-5 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#a87a4b] min-[420px]:w-max sm:px-9 sm:tracking-[0.22em]">
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#080806] px-6 py-8 lg:px-16">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 text-xs text-white/75 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <Monogram />
            <span>
              <span className="block font-semibold uppercase tracking-[0.28em] text-white">Atelier Moreau</span>
              <span className="mt-1 block uppercase tracking-[0.45em]">Menuisier</span>
            </span>
          </div>
          <div>Atelier à Nantes<br />Pays de la Loire</div>
          <div>06 12 34 56 78<br />contact@atelier-moreau.fr</div>
          <div>Instagram<br />Houzz</div>
          <Image
            src="/artisan/logo.png"
            alt="Fait main en France"
            width={112}
            height={112}
            className="hidden lg:block"
          />
        </div>
      </footer>
    </main>
  );
}
