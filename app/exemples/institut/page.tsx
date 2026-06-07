import Navbar from './components/navbar'
import Hero from './components/hero'
import Prestations from './components/prestations'
import Institut from './components/institut'
import Marques from './components/marques'
import GiftCard from './components/gift-card'
import Tarifs from './components/tarifs'
import Apropos from './components/apropos'
import Contact from './components/contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Prestations />
      <Institut />
      <Marques />
      <GiftCard />
      <Tarifs />
      <Apropos />
      <Contact />
      <Footer />
    </main>
  )
}
