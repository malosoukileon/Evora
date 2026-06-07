import Image from 'next/image'

export default function GiftCard() {
  return (
    <section className="gift" id="boutique">
      <div className="gift-visual">
        <Image src="/institut/carte-cadeau.jpg" fill sizes="55vw" alt="Carte cadeau Elegance" />
      </div>
      <div>
        <p className="overline">Faites plaisir</p>
        <h2>Offrez une parenthèse <em>de bien-être</em></h2>
        <p>Anniversaire, remerciement ou simple attention, la carte cadeau Élégance fait toujours plaisir.</p>
        <a className="btn" href="#contact">Offrir une carte cadeau</a>
      </div>
    </section>
  )
}
