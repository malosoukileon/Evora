import { trustItems } from "./data";

export default function TrustBar() {
  return (
    <section className="border-y border-[#E5E7EB] bg-white px-4 py-5 sm:px-6 sm:py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 min-[430px]:grid-cols-2 md:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#4B5563] shadow-sm md:justify-center md:border-0 md:bg-transparent md:shadow-none">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#4F8CFF]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
