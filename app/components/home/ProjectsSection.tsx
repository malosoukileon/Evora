import { projects } from "./data";
import PreviewFrame from "./PreviewFrame";

export default function ProjectsSection() {
  return (
    <section id="projets" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="mb-3 text-sm font-medium text-[#4F8CFF]">Réalisations</p>

      <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.025em] md:text-5xl">
        Des exemples concrets de sites prêts à être adaptés à votre activité.
      </h2>

      <p className="mt-5 max-w-2xl text-[#6B7280]">
        Ces sites d’exemples montrent le type d’expérience que nous pouvons créer pour un commerce local : claire, moderne, mobile-first et pensée pour générer des contacts.
      </p>

      <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#4F8CFF]/40 hover:shadow-xl hover:shadow-[#4F8CFF]/10"
          >
            <div className="border-b border-[#E5E7EB] p-3">
              <PreviewFrame href={project.href} title={project.title} height="h-[320px] sm:h-[420px]" />
            </div>

            <div className="p-7">
              <p className="mb-2 text-sm text-[#4F8CFF]">{project.category}</p>
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">{project.description}</p>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-medium text-[#0B0B0B] transition hover:border-[#4F8CFF]/40 hover:bg-[#F3F7FF]"
              >
                Voir le site complet
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
