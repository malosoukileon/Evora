import Image from 'next/image'

const categories = [
  {
    name: 'Soins visage',
    image: 'soins-visage.jpg',
    intro: 'Des rituels experts pour hydrater, lisser et révéler l’éclat naturel de la peau.',
    items: [
      ['Soin Hydratant Éclat', 'Hydratation profonde, massage apaisant et peau lumineuse.', '60 min', '75€'],
      ['Soin Anti-Âge Global', 'Gestuelle liftante, actifs tenseurs et confort immédiat.', '75 min', '95€'],
      ['Soin Pureté', 'Nettoyage, extraction douce et masque rééquilibrant.', '45 min', '65€'],
      ['Soin Peau Sensible', 'Apaise les rougeurs et restaure la barrière cutanée.', '50 min', '70€'],
      ['Rituel Signature Élégance', 'Diagnostic, soin complet, modelage visage et cou.', '90 min', '120€'],
    ],
  },
  {
    name: 'Soins corps',
    image: 'soins-corps.jpg',
    intro: 'Des soins enveloppants pour relâcher les tensions et retrouver une peau douce.',
    items: [
      ['Modelage Relaxant', 'Massage fluide aux huiles chaudes pour un lâcher-prise total.', '60 min', '85€'],
      ['Gommage Satin', 'Exfoliation délicate et voile hydratant parfumé.', '40 min', '55€'],
      ['Soin Jambes Légères', 'Drainage doux pour retrouver confort et légèreté.', '45 min', '60€'],
      ['Rituel Corps Complet', 'Gommage, enveloppement et modelage relaxant.', '90 min', '125€'],
    ],
  },
  {
    name: 'Mains & pieds',
    image: 'mains-pieds.jpg',
    intro: 'Des finitions soignées, naturelles et élégantes jusque dans les moindres détails.',
    items: [
      ['Beauté des mains', 'Mise en forme, cuticules, soin nourrissant et base.', '40 min', '42€'],
      ['Beauté des pieds', 'Soin complet, douceur des talons et hydratation.', '50 min', '52€'],
      ['Pose vernis semi-permanent', 'Couleur brillante, tenue longue durée et finition nette.', '45 min', '48€'],
      ['Dépose & soin réparateur', 'Dépose douce, limage et soin fortifiant.', '30 min', '32€'],
    ],
  },
  {
    name: 'Regard',
    image: 'regard.jpg',
    intro: 'Des prestations fines pour ouvrir le regard en gardant un rendu naturel.',
    items: [
      ['Teinture cils ou sourcils', 'Intensifie le regard sans maquillage quotidien.', '25 min', '28€'],
      ['Rehaussement de cils', 'Courbure naturelle et effet regard éveillé.', '50 min', '68€'],
      ['Restructuration sourcils', 'Ligne harmonieuse adaptée à votre visage.', '30 min', '35€'],
      ['Duo regard complet', 'Restructuration, teinture et soin fixateur.', '60 min', '82€'],
    ],
  },
  {
    name: 'Épilation',
    image: 'epilation.jpg',
    intro: 'Une épilation précise et confortable, réalisée avec douceur.',
    items: [
      ['Sourcils ou lèvres', 'Finition nette et respect des peaux sensibles.', '15 min', '15€'],
      ['Aisselles', 'Épilation rapide avec soin apaisant.', '20 min', '22€'],
      ['Demi-jambes', 'Peau douce et résultat durable.', '30 min', '32€'],
      ['Jambes complètes', 'Prestation complète avec finition hydratante.', '50 min', '48€'],
      ['Forfait douceur', 'Demi-jambes, aisselles et maillot classique.', '70 min', '72€'],
    ],
  },
]

export default function Tarifs() {
  return (
    <section className="tarifs-section" id="prestations">
      <div className="container">
        <div className="section-heading">
          <span className="section-flower" aria-hidden="true" />
          <p className="overline">L’art de prendre soin de vous</p>
          <h2>Nos <span>Prestations</span></h2>
          <p>Choisissez votre rituel, nous adaptons chaque soin à votre peau, votre rythme et vos envies du moment.</p>
        </div>

        <div className="prestations-list">
          {categories.map((category) => (
            <article className="prestations-category" key={category.name}>
              <div className="category-media">
                <Image src={`/institut/${category.image}`} alt={category.name} fill sizes="(min-width: 900px) 32vw, 100vw" />
              </div>
              <div className="category-content">
                <div className="category-title">
                  <p className="overline">{category.name}</p>
                  <h3>{category.intro}</h3>
                </div>
                <div className="care-list">
                  {category.items.map(([title, text, duration, price]) => (
                    <div className="care-item" key={title}>
                      <div>
                        <b>{title}</b>
                        <small>{text}</small>
                      </div>
                      <span>{duration}</span>
                      <strong>{price}</strong>
                      <a href="#contact">Réserver</a>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
