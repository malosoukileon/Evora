"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "À propos", id: "apropos" },
  { label: "Menu", id: "menu" },
  { label: "Réservation", id: "reservation" },
  { label: "Galerie", id: "galerie" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="pointer-events-none fixed inset-0 z-40 bg-[#102b24]/35 backdrop-blur-md lg:hidden" />
      )}

      <header className="absolute left-0 top-0 z-[60] w-full px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
      <nav className="relative mx-auto flex max-w-7xl items-start justify-between gap-4">
        <button
          type="button"
          onClick={() => scrollToSection("accueil")}
          className="text-left text-[#173f32]"
        >
          <div className="font-serif text-2xl tracking-[0.22em] sm:text-3xl">
            LA BOTTEGA
          </div>

          <div className="mt-1 text-center text-[10px] font-semibold tracking-[0.28em] sm:text-xs sm:tracking-[0.35em]">
            TRATTORIA ITALIANA
          </div>
        </button>

        <div className="hidden items-center gap-8 xl:gap-12 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-bold uppercase tracking-[0.28em] text-[#102b24] transition hover:text-[#a43624]"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("reservation")}
          className="hidden border border-[#102b24] px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-[#102b24] transition hover:bg-[#102b24] hover:text-white lg:block"
        >
          Réserver
        </button>

        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className={`grid h-11 w-11 place-items-center border border-[#173f32]/35 bg-[#fbf5ec]/80 text-[#173f32] backdrop-blur transition lg:hidden ${
            isOpen ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <span className="relative block h-5 w-5">
            <span className="absolute left-0 top-0 h-[2px] w-5 bg-current" />
            <span className="absolute left-0 top-[9px] h-[2px] w-5 bg-current" />
            <span className="absolute bottom-0 left-0 h-[2px] w-5 bg-current" />
          </span>
        </button>

        <div
          className={`absolute left-0 right-0 top-[58px] overflow-hidden border border-[#173f32]/15 bg-[#fbf5ec]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[440px] translate-y-0 opacity-100" : "max-h-0 -translate-y-3 opacity-0"
          }`}
        >
          <div className="relative grid p-5 pt-14">
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center text-[#173f32]"
            >
              <span className="absolute h-[2px] w-6 rotate-45 bg-current" />
              <span className="absolute h-[2px] w-6 -rotate-45 bg-current" />
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="border-b border-[#173f32]/10 py-4 text-left text-xs font-bold uppercase tracking-[0.25em] text-[#173f32]"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection("reservation")}
              className="mt-5 bg-[#173f32] px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white"
            >
              Réserver une table
            </button>
          </div>
        </div>
      </nav>
      </header>
    </>
  );
}
