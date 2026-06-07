export default function Reservation() {
  return (
    <section
      id="reservation"
      className="bg-[#173f32] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#e8c8a8]">
            Réservation
          </p>

          <h2 className="mb-6 font-serif text-4xl leading-tight sm:mb-8 sm:text-5xl">
            UNE TABLE VOUS ATTEND
          </h2>

          <p className="max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Réservez votre table en quelques instants et laissez-vous porter
            par l’ambiance chaleureuse de notre trattoria italienne.
          </p>
        </div>

        <div className="grid gap-4 bg-[#f6efe6] p-5 text-[#173f32] shadow-2xl sm:gap-5 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            <input
              type="text"
              placeholder="Nom"
              className="min-h-12 border border-[#d8c6b5] bg-white px-4 py-3 text-[#173f32] placeholder:text-[#6b6b6b] outline-none sm:px-5 sm:py-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="min-h-12 border border-[#d8c6b5] bg-white px-4 py-3 text-[#173f32] placeholder:text-[#6b6b6b] outline-none sm:px-5 sm:py-4"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            <input
              type="date"
              className="min-h-12 border border-[#d8c6b5] bg-white px-4 py-3 text-[#173f32] outline-none sm:px-5 sm:py-4"
            />

            <input
              type="time"
              className="min-h-12 border border-[#d8c6b5] bg-white px-4 py-3 text-[#173f32] outline-none sm:px-5 sm:py-4"
            />

            <input
              type="number"
              placeholder="Personnes"
              min="1"
              className="min-h-12 border border-[#d8c6b5] bg-white px-4 py-3 text-[#173f32] placeholder:text-[#6b6b6b] outline-none sm:px-5 sm:py-4"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={5}
            className="resize-none border border-[#d8c6b5] bg-white px-4 py-3 text-[#173f32] placeholder:text-[#6b6b6b] outline-none sm:px-5 sm:py-4"
          />

          <button
            type="button"
            className="mt-2 bg-[#a43624] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#843021] hover:shadow-xl sm:px-10 sm:py-5 sm:text-sm sm:tracking-[0.28em]"
          >
            Envoyer la demande
          </button>
        </div>
      </div>
    </section>
  );
}
