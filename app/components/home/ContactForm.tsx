"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        business: formData.get("business"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full min-w-0 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 text-[#0B0B0B] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#4F8CFF] focus:ring-4 focus:ring-[#4F8CFF]/10";

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-4 text-left">
      <div className="grid gap-4 md:grid-cols-2">
        <input name="name" required placeholder="Votre nom" className={inputClass} />
        <input name="email" type="email" required placeholder="Votre email" className={inputClass} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input name="phone" placeholder="Téléphone" className={inputClass} />
        <input name="business" placeholder="Type d’activité" className={inputClass} />
      </div>

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Parlez-moi rapidement de votre projet"
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[#4F8CFF] px-8 py-4 font-medium text-white transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(79,140,255,0.28)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-max"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      {status === "success" && <p className="text-sm text-[#16A34A]">Votre demande a bien été envoyée.</p>}
      {status === "error" && <p className="text-sm text-red-500">Une erreur est survenue. Réessayez dans quelques instants.</p>}
    </form>
  );
}
