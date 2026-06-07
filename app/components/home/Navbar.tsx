"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  ["probleme", "Problème"],
  ["services", "Services"],
  ["projets", "Réalisations"],
  ["processus", "Processus"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const goTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    closeMenu();
  };

  return (
    <>
      {isOpen && (
        <div className="pointer-events-none fixed inset-0 z-40 bg-[#0B0B0B]/25 backdrop-blur-md lg:hidden" />
      )}

      <header className="fixed left-0 top-0 z-[60] w-full border-b border-[#E5E7EB] bg-white/95 backdrop-blur-xl">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
          <button type="button" onClick={() => goTo("top")} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Nexora Agence Web"
              width={42}
              height={42}
              priority
              className="rounded-md object-contain"
              style={{ width: 42, height: 42 }}
            />
            <span className="text-sm font-semibold tracking-[0.25em] text-[#0B0B0B]">EVORA</span>
          </button>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => goTo(id)}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] transition hover:text-[#0B0B0B]"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo("contact")}
              className="shrink-0 rounded-full bg-[#4F8CFF] px-4 py-2 text-xs font-medium text-white transition hover:scale-105 hover:shadow-[0_0_30px_rgba(79,140,255,0.25)] sm:px-5 sm:text-sm"
            >
              Contactez-nous
            </button>

            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#E5E7EB] bg-white text-[#0B0B0B] transition lg:hidden ${
                isOpen ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-0 top-0 h-[2px] w-5 bg-current" />
                <span className="absolute left-0 top-[9px] h-[2px] w-5 bg-current" />
                <span className="absolute bottom-0 left-0 h-[2px] w-5 bg-current" />
              </span>
            </button>
          </div>

          <div
            className={`absolute left-4 right-4 top-[76px] overflow-hidden rounded-[1.25rem] border border-[#E5E7EB] bg-white/95 shadow-2xl shadow-[#4F8CFF]/10 backdrop-blur-xl transition-all duration-300 lg:hidden ${
              isOpen ? "max-h-[520px] translate-y-0 opacity-100" : "max-h-0 -translate-y-3 opacity-0"
            }`}
          >
            <div className="relative grid p-5 pt-14">
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={closeMenu}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center text-[#0B0B0B]"
              >
                <span className="absolute h-[2px] w-6 rotate-45 bg-current" />
                <span className="absolute h-[2px] w-6 -rotate-45 bg-current" />
              </button>

              {navItems.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => goTo(id)}
                  className="border-b border-[#E5E7EB] py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[#0B0B0B]"
                >
                  {label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goTo("contact")}
                className="mt-5 rounded-full bg-[#4F8CFF] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white"
              >
                Contactez-nous
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
