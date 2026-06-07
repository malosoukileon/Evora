import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Élégance – Institut de Beauté',
  description: 'Institut de beauté raffiné dédié à votre bien-être et à la beauté naturelle de votre peau.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
