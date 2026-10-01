import type { Metadata } from "next";
import { Extras } from "@/components/sections/Extras";
import { extras } from "@/content/extras";

export const metadata: Metadata = { title: "Extras" };

export default function ExtrasPage() {
  return <Extras extras={extras} />;
}
