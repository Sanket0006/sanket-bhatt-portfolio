"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  SpotifyIcon,
  YoutubeIcon,
} from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error" | "not-configured";

const socialLinks = [
  { href: site.social.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: site.social.github, label: "GitHub", icon: GithubIcon },
  { href: site.social.instagram, label: "Instagram", icon: InstagramIcon },
  { href: site.social.spotify, label: "Spotify", icon: SpotifyIcon },
  { href: site.social.youtube, label: "YouTube", icon: YoutubeIcon },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!site.formspreeId) {
      setStatus("not-configured");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Open to new projects, collaborations, or just a chat. Reach out any time."
        />

        <div className="grid gap-12 md:grid-cols-2">
          <Reveal direction="up">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg glass px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg glass px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg glass px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>

              <MagneticButton
                className="bg-foreground text-background hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
              >
                <span className="flex items-center gap-2">
                  <Send size={14} />
                  {status === "sending" ? "Sending…" : "Send message"}
                </span>
              </MagneticButton>

              {status === "sent" && (
                <p className="text-sm text-accent-2">Thanks — I&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong — email me directly instead.
                </p>
              )}
              {status === "not-configured" && (
                <p className="text-sm text-muted">
                  [TODO: this form isn&apos;t wired up yet — add your Formspree
                  form ID to <code>site.formspreeId</code> in{" "}
                  <code>src/content/site.ts</code>.] In the meantime, email me
                  directly below.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-2xl glass p-8">
              <div>
                <div className="mb-2 text-xs uppercase tracking-wider text-muted">
                  Email
                </div>
                <a
                  href={`mailto:${site.email}`}
                  data-cursor-magnet
                  className="font-display text-2xl font-medium transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <div className="mb-3 text-xs uppercase tracking-wider text-muted">
                  Elsewhere
                </div>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener"
                      aria-label={label}
                      data-cursor-magnet
                      className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted transition-colors hover:border-accent hover:text-foreground"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
