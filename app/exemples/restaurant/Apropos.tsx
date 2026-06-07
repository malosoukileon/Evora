"use client";

import Image from "next/image";

export default function Apropos() {
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="apropos"
      className="grid grid-cols-1 lg:min-h-[360px] lg:grid-cols-[1.3fr_0.75fr_0.75fr_0.45fr]"
    >
      <div className="relative overflow-hidden bg-[#0d3f2e] px-6 py-14 sm:px-10 sm:py-16 lg:flex lg:items-center lg:gap-12 lg:px-24">
        <div className="pointer-events-none absolute -left-8 bottom-8 h-[210px] w-[210px] opacity-25 sm:h-[260px] sm:w-[260px] lg:relative lg:left-auto lg:bottom-auto lg:opacity-60">
          <Image
            src="/restaurant/illustration-italie.png"
            alt="Illustration côte italienne"
            fill
            sizes="260px"
            className="object-contain"
          />
        </div>

        <div className="relative z-10 max-w-[520px] text-white lg:max-w-[420px]">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e8c8a8] sm:mb-5 sm:text-sm">
            La Dolce Vita
          </p>

          <h2 className="mb-5 font-serif text-4xl leading-tight tracking-wide sm:mb-6 sm:text-5xl lg:text-4xl">
            UN VOYAGE <br />
            EN ITALIE
          </h2>

          <p className="mb-7 text-base leading-7 text-white/85 sm:mb-8 sm:leading-8">
            Chez La Bottega, nous célébrons l’art de vivre à l’italienne :
            des recettes traditionnelles, une ambiance conviviale et la
            générosité dans chaque assiette.
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("reservation")}
            className="border-b border-white pb-2 text-xs uppercase tracking-[0.25em] transition hover:text-[#e8c8a8] sm:text-sm"
          >
            Réserver maintenant
          </button>
        </div>
      </div>

      <div className="relative min-h-[260px] sm:min-h-[360px]">
        <Image
          src="/restaurant/restaurant-table.jpg"
          alt="Table de restaurant italienne"
          fill
          sizes="(min-width: 1024px) 19vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex items-center bg-[#f4efe8] px-6 py-14 sm:px-10 sm:py-16 lg:px-12">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#a43624] sm:mb-5 sm:text-sm">
            Réservation
          </p>

          <h2 className="mb-5 font-serif text-4xl leading-tight tracking-wide text-[#173f32] sm:mb-6">
            UNE TABLE <br />
            VOUS ATTEND
          </h2>

          <p className="mb-7 max-w-[380px] text-base leading-7 text-[#1f2d29] sm:mb-8">
            Réservez votre table en ligne et laissez-vous porter par l’esprit
            italien.
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("reservation")}
            className="w-full border border-[#173f32] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#173f32] transition hover:-translate-y-1 hover:bg-[#173f32] hover:text-white hover:shadow-xl min-[420px]:w-auto sm:px-9 sm:tracking-[0.25em]"
          >
            Réserver une table
          </button>
        </div>
      </div>

      <div className="relative hidden min-h-[260px] overflow-hidden bg-[#af3b2a] p-10 lg:flex lg:items-end">
        <div className="absolute bottom-[-20px] right-[-40px] h-[260px] w-[260px] opacity-35">
          <Image
            src="/restaurant/illustration-rome.png"
            alt="Illustration Rome"
            fill
            sizes="260px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
