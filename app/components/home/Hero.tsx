"use client";

import { motion } from "framer-motion";
import PreviewFrame from "./PreviewFrame";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36 md:pt-44 md:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,140,255,0.16),transparent_42%)]" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[#4F8CFF]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm text-[#6B7280] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#4F8CFF]" />
            Agence web pour commerçants
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-7xl">
            Des sites web modernes qui donnent confiance{" "}
            <span className="block md:inline">à vos clients.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#6B7280] md:text-lg">
            Nous créons des sites rapides, clairs et optimisés mobile pour aider les commerces locaux à inspirer confiance et générer plus de contacts.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#6B7280]">
            {["Sites modernes", "Mobile-first", "Optimisés pour convertir"].map((item) => (
              <span key={item} className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 shadow-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#4F8CFF] px-7 py-4 text-center font-medium text-white transition hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(79,140,255,0.28)]"
            >
              Contactez-nous
            </a>

            <a
              href="#projets"
              className="rounded-full border border-[#E5E7EB] bg-white px-7 py-4 text-center font-medium text-[#0B0B0B] transition hover:border-[#4F8CFF]/40 hover:bg-[#F3F7FF]"
            >
              Voir les réalisations
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-[#4F8CFF]/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white p-3 shadow-2xl shadow-[#4F8CFF]/10 sm:rounded-[2rem] sm:p-4">
            <PreviewFrame href="/exemples/artisan" title="Aperçu site artisan" height="h-[360px] sm:h-[520px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
