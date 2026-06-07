import Image from 'next/image'

const values = [
  ['Expertise', 'Des soins précis réalisés par des professionnelles formées.'],
  ['Écoute', 'Chaque rendez-vous commence par un vrai échange.'],
  ['Qualité', 'Des marques sélectionnées et des protocoles exigeants.'],
]

export default function Apropos() {
  return (
    <section className="about-section" id="apropos-detail">
      <div className="container about-layout">
        <div className="about-copy">
          <p className="overline">Notre histoire</p>
          <h2>À propos de nous</h2>
          <p>
            Élégance Institut de Beauté est un lieu pensé pour ralentir, respirer et retrouver confiance dans sa peau.
            Notre équipe vous accompagne avec une approche douce, experte et personnalisée, du diagnostic jusqu’au dernier geste de soin.
          </p>
          <p>
            Dans nos cabines, chaque détail compte : la lumière, les textures, les senteurs et la précision du geste.
            Vous venez pour un soin, vous repartez avec une vraie parenthèse de bien-être.
          </p>
          <div className="about-values">
            {values.map(([title, text]) => (
              <article key={title}>
                <span className="section-flower" aria-hidden="true" />
                <b>{title}</b>
                <small>{text}</small>
              </article>
            ))}
          </div>
        </div>
        <div className="about-visual">
          <Image src="/institut/institut.jpg" alt="Cabine de soin Élégance" fill sizes="(min-width: 900px) 45vw, 100vw" />
        </div>
      </div>
      <div className="container stats-band">
        <b>+10 ans<small>d’expertise</small></b>
        <b>5000+<small>clientes satisfaites</small></b>
        <b>100%<small>bien-être</small></b>
        <b>5 univers<small>visage, corps, mains, regard, épilation</small></b>
      </div>
    </section>
  )
}
