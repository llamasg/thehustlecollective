import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are — The Hustle Collective",
  description:
    "Meet the people behind The Hustle Collective. A crew of artists, producers, and community builders making festivals happen in Nottingham since 2006.",
};

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
