import { services } from "./data";

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-[#E5E7EB] bg-[#FAFAFA] px-4 py-16 sm:px-6 sm:py-24">
      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-[#4F8CFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium text-[#4F8CFF]">Services</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.025em] md:text-5xl">
          Des solutions simples pour développer votre activité.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#4F8CFF]/40 hover:shadow-xl hover:shadow-[#4F8CFF]/10"
            >
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
