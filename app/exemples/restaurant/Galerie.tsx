import Image from "next/image";

const galleryImages = [
  "/restaurant/galerie-1.jpg",
  "/restaurant/galerie-2.jpg",
  "/restaurant/galerie-3.jpg",
  "/restaurant/galerie-4.jpg",
];

export default function Galerie() {
  return (
    <section
      id="galerie"
      className="bg-[#f6efe6] px-5 py-16 sm:px-6 sm:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#a43624]">
            Galerie
          </p>

          <h2 className="font-serif text-4xl text-[#173f32] sm:text-5xl">
            L’AMBIANCE LA BOTTEGA
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className="group relative h-[220px] overflow-hidden rounded-2xl sm:h-[320px]"
            >
              <Image
                src={image}
                alt={`Galerie ${index + 1}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
