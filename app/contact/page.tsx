import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dinol Siriwardena - Software Developer and AI Engineer."
};

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-10">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s work together"
        description={
          <span className="!text-white">
            I&apos;m open to exciting opportunities in AI/ML, full-stack development, and innovative projects. Feel free to reach out through any of the channels below.
          </span>
        }
        descriptionClassName="max-w-6xl !text-white"
      />

      <Reveal>
        <GlassCard className="border-accent/25">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Quick Contact</p>
              <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
              <p className="text-sm text-muted">Interested in discussing opportunities, projects, or collaboration? Let&apos;s connect!</p>
            </div>
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/70 bg-accent/20 px-6 py-3 text-sm font-semibold text-accent transition hover:shadow-glow hover:bg-accent/30"
            >
              <Mail size={16} /> Send Email
            </Link>
          </div>
        </GlassCard>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">📞 Contact Information</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li>
                <Link href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-accent transition">
                  <Mail size={16} className="text-accent" /> {profile.email}
                </Link>
              </li>
              <li>
                <Link href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 hover:text-accent transition">
                  <Phone size={16} className="text-accent" /> {profile.phone}
                </Link>
              </li>
              <li>
                <Link href={profile.linkedin} target="_blank" className="inline-flex items-center gap-2 hover:text-accent transition">
                  <Linkedin size={16} className="text-accent" /> LinkedIn Profile
                </Link>
              </li>
              <li>
                <Link href={profile.github} target="_blank" className="inline-flex items-center gap-2 hover:text-accent transition">
                  <Github size={16} className="text-accent" /> GitHub Profile
                </Link>
              </li>
            </ul>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">📍 Location & Availability</h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              <strong className="text-white">Location:</strong> {profile.location}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              <strong className="text-white">Working Style:</strong> Open to full-time, contract, and project-based opportunities. Remote-friendly.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              <strong className="text-white">Focus Areas:</strong> AI/ML projects, Full-stack development, Backend systems, and scalable architectures.
            </p>
          </GlassCard>
        </Reveal>
      </div>

      <div className="grid gap-4">
        <Reveal>
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">💼 Additional Resources</h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              Explore my work and technical depth through my GitHub repositories. Each project includes detailed documentation and demonstrates my approach to software engineering.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={profile.github}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/70 bg-accent/20 px-5 py-3 text-sm font-semibold text-accent transition hover:shadow-glow hover:bg-accent/30"
              >
                <Github size={16} /> Visit GitHub
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-accent/10"
              >
                <Linkedin size={16} /> Connect on LinkedIn
              </Link>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </div>
  );
}
