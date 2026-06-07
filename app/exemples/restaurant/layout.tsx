import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Bottega – Restaurant Italien",
  description: "Restaurant italien chaleureux autour des pâtes fraîches, produits de saison et recettes traditionnelles.",
};

export default function RestaurantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
