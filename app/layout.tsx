import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import PageLoader from "@/components/layout/PageLoader";
import { DisableDraftMode } from "@/components/DisableDraftMode";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en">
      <body className="antialiased">
        <PageLoader>{children}</PageLoader>
        {isDraftMode && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
