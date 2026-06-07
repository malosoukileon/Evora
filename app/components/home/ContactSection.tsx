import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-28">
      <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#4F8CFF]/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl rounded-[1.5rem] border border-[#E5E7EB] bg-white px-5 py-12 shadow-2xl shadow-[#4F8CFF]/10 sm:rounded-[2rem] sm:px-8 sm:py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.025em] md:text-5xl">
            Prêt à moderniser votre activité ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#6B7280]">
            Recevez un site moderne, rapide et{" "}
            <span className="block sm:inline">adapté à votre commerce.</span>
          </p>

          <p className="mt-4 text-sm text-[#6B7280]">
            Réponse rapide - Devis gratuit - Sans engagement
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
