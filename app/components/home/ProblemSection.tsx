export default function ProblemSection() {
  return (
    <section id="probleme" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4F8CFF]/10 blur-3xl" />

      <div className="relative max-w-2xl">
        <p className="mb-3 text-sm font-medium text-[#4F8CFF]">Le problème</p>
        <h2 className="text-3xl font-semibold tracking-[-0.025em] md:text-5xl">
          Votre site donne-t-il vraiment envie de vous contacter ?
        </h2>
      </div>

      <div className="relative mt-12 grid gap-5 md:grid-cols-3">
        {[
          ["Site ancien", "Un design daté peut donner l’impression que votre activité n’est plus à jour."],
          ["Pas optimisé pour mobile", "La majorité des clients consultent votre site depuis leur téléphone."],
          ["Manque de crédibilité", "Un site peu clair peut faire hésiter un client avant même de vous appeler."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="group rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#4F8CFF]/40 hover:shadow-xl hover:shadow-[#4F8CFF]/10"
          >
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-[#F3F7FF] text-[#4F8CFF]">
              -
            </div>

            <h3 className="text-xl font-medium">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#6B7280]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
