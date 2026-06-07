import Image from "next/image";
import { beforeAfter } from "./data";

export default function TransformationSection() {
  return (
    <section id="transformation" className="relative border-y border-[#E5E7EB] bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-[#4F8CFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium text-[#4F8CFF]">Transformation</p>

        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.025em] md:text-5xl">
          Vous ne changez pas seulement de site.{" "}
          <span className="block">Vous changez la première impression.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {beforeAfter.map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-[#E5E7EB] bg-[#FAFAFA] p-6 shadow-sm sm:p-8">
              <p className="mb-6 text-sm font-medium text-[#4F8CFF]">{title}</p>

              <div className="relative mb-8 h-56 overflow-hidden border border-[#E5E7EB]">
                <Image
                  src={title === "Avant" ? "/transformation/before.png" : "/transformation/after.png"}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                  className="object-cover object-[center_35%]"
                />
              </div>

              <p className="text-lg leading-8 text-[#111827]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
