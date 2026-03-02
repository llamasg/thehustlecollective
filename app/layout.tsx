import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Hustle Collective — Events Built for Nottingham",
  description:
    "A network of community festivals based in Nottingham, UK. Hockley Hustle, Young Hustlers, Green Hustle, and Hustle Cinematic. Art + Music + Good Times since 2006.",
  keywords: [
    "Hockley Hustle",
    "Nottingham festivals",
    "community events",
    "Young Hustlers",
    "Green Hustle",
    "Hustle Cinematic",
    "arts festival",
    "music festival",
    "Nottingham",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
