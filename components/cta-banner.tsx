import Link from "next/link";
import { ArrowUpRight, Download, Github, Mail } from "lucide-react";
import { profile } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

export function CtaBanner() {
  return (
    <GlassCard className="relative overflow-hidden border-accent/25">
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-accent/20 blur-2xl" />
      <div className="absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-accent2/20 blur-2xl" />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Let&apos;s Connect</p>
          <h3 className="text-2xl font-semibold text-white">Ready for AI and Full-Stack opportunities</h3>
          <p className="max-w-2xl text-sm leading-7 text-muted">
            Software Engineer passionate about building intelligent systems, scalable backends, and modern web applications. Let&apos;s create something impactful together.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/cv/DINOL_SIRIWARDENA_RESUME.pdf"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/70 bg-accent/20 px-5 py-3 text-sm font-semibold text-accent transition hover:shadow-glow hover:bg-accent/30"
          >
            <Download size={16} /> Download CV
          </Link>
          <Link
            href={profile.github}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-accent/10"
          >
            <Github size={16} /> GitHub
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-accent/10"
          >
            <Mail size={16} /> Email <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}
