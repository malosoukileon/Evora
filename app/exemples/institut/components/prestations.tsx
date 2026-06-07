import Image from 'next/image'

const items = [
  ['soins-visage.jpg', 'Soins visage', 'Hydrate, illumine et ravive l’éclat'],
  ['soins-corps.jpg', 'Soins corps', 'Détend, raffermit et sublime'],
  ['mains-pieds.jpg', 'Mains & pieds', 'Embellit, adoucit jusqu’au bout des ongles'],
  ['regard.jpg', 'Regard', 'Sublime votre regard en toute subtilité'],
  ['epilation.jpg', 'Épilation', 'Douceur, précision et confort'],
]

export default function Prestations() {
  return (
    <section className="services" id="soins">
      <p className="overline">L’art de prendre soin de vous</p>
      <h2>Nos <span>Prestations</span></h2>
      <div className="cards container">
        {items.map(([img, title, text]) => (
          <article className="service-card" key={title}>
            <div className="service-image">
              <Image src={`/institut/${img}`} fill sizes="(min-width: 900px) 18vw, 112px" alt={title} />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#prestations">Découvrir →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
