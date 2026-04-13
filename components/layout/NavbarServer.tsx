import { getNavFestivals, getNavProgrammes, type NavItem } from "@/lib/sanity";
import Navbar from "./Navbar";

export default async function NavbarServer() {
  let festivals: NavItem[] = [];
  let programmes: NavItem[] = [];

  try {
    [festivals, programmes] = await Promise.all([
      getNavFestivals(),
      getNavProgrammes(),
    ]);
  } catch {
    // Sanity unavailable — Navbar will use hardcoded fallbacks
  }

  return (
    <Navbar
      festivals={festivals.length ? festivals : undefined}
      programmes={programmes.length ? programmes : undefined}
    />
  );
}
