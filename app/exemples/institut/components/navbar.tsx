'use client'

import { useEffect, useState } from 'react'

const links = [
  ['apropos-detail', 'À propos'],
  ['soins', 'Soins'],
  ['prestations', 'Prestations'],
  ['acces', 'Accès'],
]

function LotusIcon() {
  return (
    <svg className="lotus" viewBox="0 0 64 46" aria-hidden="true">
      <path d="M32 5c8 8 8 18 0 28-8-10-8-20 0-28Z" />
      <path d="M20 12c7 3 11 10 10 21-10-3-15-10-10-21Z" />
      <path d="M44 12c-7 3-11 10-10 21 10-3 15-10 10-21Z" />
      <path d="M9 24c9-1 16 2 20 11-11 2-18-1-20-11Z" />
      <path d="M55 24c-9-1-16 2-20 11 11 2 18-1 20-11Z" />
      <path d="M17 39h30" />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }

  return (
    <>
      {isOpen && (
        <div
          className="mobile-menu-backdrop"
        />
      )}

      <header className={`navbar ${isOpen ? 'is-open' : ''}`}>
        <button type="button" className="brand" aria-label="Élégance accueil" onClick={() => goTo('accueil')}>
          <LotusIcon />
          <span>
            <b>ÉLÉGANCE</b>
            <small>INSTITUT DE BEAUTÉ</small>
          </span>
        </button>
        <nav className="nav-links" aria-label="Navigation principale">
          {links.map(([id, label], index) => (
            <span className="nav-item" key={id}>
              <button type="button" onClick={() => goTo(id)}>{label}</button>
              {index < links.length - 1 && <span className="nav-separator">·</span>}
            </span>
          ))}
        </nav>
        <button type="button" className="btn tiny nav-cta" onClick={() => goTo('contact')}>Prendre rendez-vous</button>
        <button
          className="menu-close"
          aria-label="Fermer le menu"
          type="button"
          onClick={closeMenu}
        >
          <span />
          <span />
        </button>
        <button
          className="menu"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
    </>
  )
}
