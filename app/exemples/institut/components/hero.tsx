const promises = [
  ['♙', 'Expertise', 'Des professionnelles à votre écoute'],
  ['♧', 'Produits premium', 'Des marques de qualité sélectionnées avec soin'],
  ['♢', 'Résultats', 'Des soins sur-mesure pour sublimer votre beauté'],
]

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-content">
        <p className="eyebrow">Révélez votre</p>
        <h1>Beauté <em>Naturelle</em></h1>
        <div className="separator"><span />✥<span /></div>
        <p>Élégance Institut de Beauté vous accueille dans un espace raffiné dédié à votre bien-être et à la beauté de votre peau.</p>
        <a className="btn" href="#soins">Découvrir nos soins</a>
      </div>
      <aside className="hero-card" aria-label="Promesses de l'institut">
        {promises.map(([icon, title, text]) => (
          <div key={title}>
            <i aria-hidden="true">{icon}</i>
            <b>{title}</b>
            <span>{text}</span>
          </div>
        ))}
      </aside>
      <span className="scroll">Découvrir</span>
    </section>
  )
}
