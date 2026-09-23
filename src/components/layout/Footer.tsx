import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { site as staticSite } from "@/content/site";

type FooterProps = {
  name?: string;
  email?: string;
  social?: { github?: string; linkedin?: string; instagram?: string };
};

export function Footer({
  name = staticSite.name,
  email = staticSite.email,
  social = staticSite.social,
}: FooterProps) {
  const links = [
    { href: `mailto:${email}`, label: "Email", icon: Mail },
    { href: social.linkedin ?? staticSite.social.linkedin, label: "LinkedIn", icon: LinkedinIcon },
    { href: social.github ?? staticSite.social.github, label: "GitHub", icon: GithubIcon },
    { href: social.instagram ?? staticSite.social.instagram, label: "Instagram", icon: InstagramIcon },
  ];

  return (
    <footer className="border-t border-surface-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 sm:flex-row sm:justify-between sm:px-8">
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {name}
        </div>
        <div className="flex items-center gap-3">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener" : undefined}
              aria-label={label}
              data-cursor-magnet
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
