import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier Moreau – Menuisier",
  description: "Atelier de menuiserie sur mesure pour agencements, cuisines, escaliers et mobilier en bois massif.",
};

export default function ArtisanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
