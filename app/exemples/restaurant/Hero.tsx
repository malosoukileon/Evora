"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-[650px] overflow-hidden bg-[#f4eadc] sm:min-h-[760px]">
      <Image
        src="/restaurant/hero-bg.jpg"
        alt="Plat de pâtes italiennes"
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[60%_center] sm:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f4eadc]/82 via-[#f4eadc]/48 to-transparent sm:from-[#f4eadc]/72" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-t from-[#f4eadc]/35 via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-[650px] items-center px-5 pt-24 sm:min-h-[760px] sm:px-10 lg:px-20">
        <div className="max-w-[560px]">
          <p className="mb-3 font-serif text-3xl italic text-[#a43624] sm:mb-4 sm:text-4xl">
            Benvenuti !
          </p>

          <h1 className="font-serif text-[40px] leading-[0.98] tracking-wide text-[#173f32] min-[380px]:text-[46px] sm:text-[64px] lg:text-[78px]">
            L’ITALIE <br />
            DANS VOTRE <br />
            ASSIETTE
          </h1>

          <div className="my-6 flex gap-5 sm:my-8 sm:gap-6">
            <span className="h-[3px] w-12 bg-[#0f4a35] sm:w-14" />
            <span className="h-[3px] w-12 bg-[#b23a28] sm:w-14" />
          </div>

          <p className="mb-7 max-w-[430px] text-base leading-7 text-[#1f2d29] sm:mb-8 sm:text-lg sm:leading-8">
            Une cuisine italienne authentique, préparée avec des ingrédients
            frais et passion, comme là-bas.
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("menu")}
            className="w-full bg-[#103f2f] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:bg-[#0b2d22] hover:shadow-xl min-[420px]:w-auto sm:px-12 sm:py-5 sm:text-sm sm:tracking-[0.35em]"
          >
            Découvrir le menu
          </button>
        </div>
      </div>

      <Image
        src="/restaurant/badge-produits-frais.png"
        alt="Produits frais cuisine maison"
        width={130}
        height={130}
        className="absolute bottom-10 right-24 z-20 hidden lg:block"
      />
    </section>
  );
}
