import type { Metadata } from "next";
import { Ventures } from "@/components/sections/Ventures";
import { ventures } from "@/content/ventures";

export const metadata: Metadata = { title: "Ventures" };

export default function VenturesPage() {
  return <Ventures ventures={ventures} />;
}
