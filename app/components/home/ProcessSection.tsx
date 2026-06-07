import { steps } from "./data";

export default function ProcessSection() {
  return (
    <section id="processus" className="border-t border-[#E5E7EB] bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium text-[#4F8CFF]">Processus</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.025em] md:text-5xl">
          Un processus simple et rapide.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map(([number, title, desc]) => (
            <div key={title} className="rounded-3xl border border-[#E5E7EB] bg-[#FAFAFA] p-7 shadow-sm">
              <p className="text-sm font-medium text-[#4F8CFF]">{number}</p>
              <h3 className="mt-5 text-xl font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
