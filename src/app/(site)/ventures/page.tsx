import type { Metadata } from "next";
import { Ventures } from "@/components/sections/Ventures";
import { getMergedVentures } from "@/lib/content";

export const metadata: Metadata = { title: "Ventures" };

export default async function VenturesPage() {
  const ventures = await getMergedVentures();
  return <Ventures ventures={ventures} />;
}
