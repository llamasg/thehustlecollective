import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch — The Hustle Collective",
  description:
    "Contact The Hustle Collective. Whether you're an artist, a venue, a brand, a charity, or just someone who loves Nottingham — let's talk.",
};

export default function GetInTouchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
