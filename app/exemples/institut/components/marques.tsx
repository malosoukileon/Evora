const brands = ['Guinot', 'Sothys', 'Phytomer', 'Mavala', 'Thalgo']

export default function Marques() {
  return (
    <section className="brands" aria-label="Marques partenaires">
      <button aria-label="Marque précédente">‹</button>
      {brands.map((brand) => <b key={brand}>{brand}</b>)}
      <button aria-label="Marque suivante">›</button>
    </section>
  )
}
