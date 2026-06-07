import { audiences } from "./data";

export default function AudiencesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="mb-3 text-sm font-medium text-[#4F8CFF]">Pour qui ?</p>

      <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.025em] md:text-5xl">
        Des sites adaptés aux commerces et services locaux.
      </h2>

      <div className="mt-10 flex flex-wrap gap-3">
        {audiences.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm text-[#6B7280] shadow-sm transition hover:border-[#4F8CFF]/40 hover:text-[#0B0B0B]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
