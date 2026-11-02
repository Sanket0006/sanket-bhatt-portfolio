import { site } from "@/content/site";

export type ExtraEntry = {
  name: string;
  description: string;
  href: string;
  hidden?: boolean;
};

export const allExtras: ExtraEntry[] = [
  {
    name: "Music",
    description:
      "I make melodic bass and progressive electronic music under my own name, just for fun.",
    href: "/music",
    hidden: !site.features.music,
  },
  {
    name: "Stratosphere",
    description:
      "A little aviation content page I run on the side, for the love of planes.",
    // [TODO: add the Stratosphere page URL]
    href: "",
  },
];

export const extras = allExtras.filter((e) => !e.hidden);
