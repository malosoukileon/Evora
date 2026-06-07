export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0f2f25] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#e8c8a8]">
            Contact
          </p>

          <h2 className="mb-6 font-serif text-4xl leading-tight sm:mb-8 sm:text-5xl">
            CONTACTEZ-NOUS
          </h2>

          <div className="space-y-4 text-base leading-7 text-white/80 sm:space-y-5 sm:text-lg sm:leading-8">
            <p>12 Rue de la Dolce Vita, 75000 Paris</p>
            <p>01 23 45 67 89</p>
            <p>contact@labottega.fr</p>
            <p>
              Ouvert du mardi au dimanche, de 12h à 14h30 et de 19h à 23h.
            </p>
          </div>
        </div>

        <div className="grid gap-4 bg-[#f6efe6] p-5 shadow-2xl sm:gap-5 sm:p-8">
          <input
            type="text"
            placeholder="Votre nom"
            className="min-h-12 border border-[#d8c6b5] bg-white px-4 py-3 text-[#173f32] placeholder:text-[#6b6b6b] outline-none sm:px-5 sm:py-4"
          />

          <input
            type="email"
            placeholder="Votre email"
            className="min-h-12 border border-[#d8c6b5] bg-white px-4 py-3 text-[#173f32] placeholder:text-[#6b6b6b] outline-none sm:px-5 sm:py-4"
          />

          <textarea
            placeholder="Votre message"
            rows={6}
            className="resize-none border border-[#d8c6b5] bg-white px-4 py-3 text-[#173f32] placeholder:text-[#6b6b6b] outline-none sm:px-5 sm:py-4"
          />

          <button
            type="button"
            className="bg-[#173f32] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0f2f25] hover:shadow-xl sm:px-10 sm:py-5 sm:text-sm sm:tracking-[0.28em]"
          >
            Envoyer
          </button>
        </div>
      </div>
    </section>
  );
}
