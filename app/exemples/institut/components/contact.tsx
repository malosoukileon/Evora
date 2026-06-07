export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-intro">
          <p className="overline">Nous contacter</p>
          <h2>Prenez rendez-vous</h2>
          <p>Une question, une carte cadeau ou une envie de soin précis ? Notre équipe vous répond et vous guide vers le rituel le plus adapté.</p>
          <div className="contact-details">
            <article><b>Adresse</b><span>125 Rue de la Beauté<br />75008 Paris</span></article>
            <article><b>Téléphone</b><span>01 25 45 67 89</span></article>
            <article><b>Email</b><span>contact@elegance-institut.fr</span></article>
            <article><b>Horaires</b><span>Lundi - Vendredi : 9h - 19h<br />Samedi : 9h - 17h</span></article>
          </div>
        </div>

        <form className="appointment-form">
          <div className="form-row">
            <input placeholder="Nom" />
            <input placeholder="Email" />
          </div>
          <div className="form-row">
            <input placeholder="Téléphone" />
            <select defaultValue="">
              <option value="" disabled>Prestation souhaitée</option>
              <option>Soin visage</option>
              <option>Soin corps</option>
              <option>Mains & pieds</option>
              <option>Regard</option>
              <option>Épilation</option>
              <option>Carte cadeau</option>
            </select>
          </div>
          <textarea placeholder="Votre message" />
          <button className="btn" type="button">Envoyer ma demande</button>
        </form>
      </div>
      <div className="container access-card" id="acces">
        <div>
          <p className="overline">Venir à l’institut</p>
          <h3>Paris VIII, à deux pas des grands boulevards</h3>
        </div>
        <div className="access-details">
          <span><b>Métro</b>Miromesnil · Saint-Philippe-du-Roule</span>
          <span><b>Parking</b>Haussmann Berri à 4 minutes</span>
          <span><b>Adresse</b>125 Rue de la Beauté, 75008 Paris</span>
        </div>
        <a className="btn" href="https://www.google.com/maps/search/?api=1&query=125%20Rue%20de%20la%20Beaut%C3%A9%2075008%20Paris" target="_blank" rel="noreferrer">
          Voir l’itinéraire
        </a>
      </div>
    </section>
  )
}
