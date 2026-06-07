import Image from "next/image";

const featured = [
  {
    title: "Pâtes fraîches maison",
    text: "Tagliatelle, ravioli et gnocchi préparés chaque matin avec une farine italienne sélectionnée.",
    image: "/restaurant/hero-bg.jpg",
  },
  {
    title: "Produits de saison",
    text: "Tomates anciennes, basilic frais, huile d’olive vierge, fromages affinés et charcuteries italiennes.",
    image: "/restaurant/restaurant-table.jpg",
  },
];

const menuSections = [
  {
    category: "Antipasti",
    subtitle: "Pour commencer",
    items: [
      { name: "Burrata pugliese", price: "14€", text: "Tomates anciennes, basilic, huile d’olive extra vierge." },
      { name: "Carpaccio di manzo", price: "16€", text: "Bœuf finement tranché, roquette, parmesan, citron." },
      { name: "Arancini siciliani", price: "11€", text: "Riz safrané croustillant, mozzarella fondante, sauce tomate." },
      { name: "Focaccia maison", price: "8€", text: "Romarin, fleur de sel, huile d’olive des Pouilles." },
    ],
  },
  {
    category: "Pasta fresca",
    subtitle: "Nos pâtes signatures",
    items: [
      { name: "Tagliatelle al ragù", price: "18€", text: "Sauce bolognaise mijotée longtemps, parmesan 24 mois." },
      { name: "Linguine alle vongole", price: "22€", text: "Palourdes, ail, persil, vin blanc, piment doux." },
      { name: "Ravioli ricotta e spinaci", price: "19€", text: "Beurre de sauge, ricotta, épinards frais, noisettes." },
      { name: "Gnocchi alla sorrentina", price: "17€", text: "Tomate San Marzano, mozzarella fior di latte, basilic." },
    ],
  },
  {
    category: "Secondi piatti",
    subtitle: "Plats généreux",
    items: [
      { name: "Osso buco milanese", price: "28€", text: "Jarret de veau confit, gremolata, risotto au safran." },
      { name: "Pollo al limone", price: "23€", text: "Poulet fermier, citron, herbes, pommes de terre rôties." },
      { name: "Branzino alla griglia", price: "26€", text: "Bar grillé, légumes de saison, huile citronnée." },
      { name: "Melanzane alla parmigiana", price: "20€", text: "Aubergines, tomate, mozzarella, parmesan gratiné." },
    ],
  },
  {
    category: "Dolci",
    subtitle: "Douceurs italiennes",
    items: [
      { name: "Tiramisù della casa", price: "9€", text: "Mascarpone, café espresso, cacao amer." },
      { name: "Panna cotta vaniglia", price: "8€", text: "Coulis de fruits rouges, vanille de Madagascar." },
      { name: "Cannoli siciliani", price: "10€", text: "Ricotta sucrée, pistache, chocolat noir." },
      { name: "Affogato al caffè", price: "7€", text: "Glace vanille noyée dans un espresso chaud." },
    ],
  },
];

const wines = [
  { name: "Chianti Classico", price: "9€ / 42€", text: "Rouge élégant, parfait avec les pâtes au ragù." },
  { name: "Pinot Grigio", price: "8€ / 36€", text: "Blanc frais, notes d’agrumes et belle minéralité." },
  { name: "Prosecco brut", price: "8€ / 38€", text: "Bulles fines, idéal à l’apéritif." },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-[#fbf5ec] px-5 py-16 sm:px-6 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-[#a43624]">Notre menu</p>
        <h2 className="mb-6 text-center font-serif text-4xl leading-tight text-[#173f32] sm:text-5xl md:text-6xl">
          UNE VRAIE CARTE <br /> ITALIENNE
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-7 text-[#1f2d29]/75 sm:mb-14 sm:text-lg sm:leading-8">
          Des antipasti à partager, des pâtes fraîches, des plats mijotés et des desserts maison pour composer votre moment à l’italienne.
        </p>

        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          {featured.map((item) => (
            <article key={item.title} className="group grid overflow-hidden border border-[#173f32]/15 bg-white/60 md:grid-cols-[0.85fr_1fr]">
              <div className="relative min-h-[220px] overflow-hidden sm:min-h-[260px]">
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <h3 className="mb-4 font-serif text-3xl text-[#173f32] sm:text-4xl">{item.title}</h3>
                <p className="leading-7 text-[#1f2d29]/75 sm:leading-8">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {menuSections.map((section) => (
            <article key={section.category} className="border border-[#173f32]/15 bg-[#fffaf3] p-5 shadow-sm sm:p-7 md:p-9">
              <div className="mb-7 border-b border-[#173f32]/15 pb-5 sm:mb-8 sm:pb-6">
                <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#a43624]">{section.subtitle}</p>
                <h3 className="font-serif text-3xl text-[#173f32] sm:text-4xl md:text-5xl">{section.category}</h3>
              </div>

              <div className="space-y-7">
                {section.items.map((dish) => (
                  <div key={dish.name}>
                    <div className="mb-2 grid gap-1 sm:flex sm:items-baseline sm:justify-between sm:gap-5">
                      <h4 className="font-serif text-xl text-[#173f32] sm:text-2xl">{dish.name}</h4>
                      <div className="hidden min-w-14 border-b border-dotted border-[#173f32]/30 sm:block" />
                      <span className="font-semibold text-[#a43624]">{dish.price}</span>
                    </div>
                    <p className="max-w-xl text-sm leading-6 text-[#1f2d29]/70 sm:text-base sm:leading-7">{dish.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-[#a43624]/25 bg-[#a43624] p-6 text-white sm:p-8 md:p-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/70">Cantina</p>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl">Vins italiens</h3>
            </div>
            <p className="max-w-lg leading-7 text-white/75">Une courte sélection de bouteilles italiennes pour accompagner chaque plat.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {wines.map((wine) => (
              <div key={wine.name} className="border border-white/25 p-5 sm:p-6">
                <div className="mb-3 grid gap-1 sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <h4 className="font-serif text-2xl">{wine.name}</h4>
                  <span className="text-sm font-semibold">{wine.price}</span>
                </div>
                <p className="text-sm leading-6 text-white/75">{wine.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
