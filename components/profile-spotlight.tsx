"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Github, Mail } from "lucide-react";
import { profile } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function ProfileSpotlight() {
  return (
    <section className="spotlight-shell relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-accent/10 via-base to-base px-6 py-8 shadow-glass sm:px-10 lg:px-12">
      {/* Ambient glow effects */}
      <div className="spotlight-blob-a absolute -right-32 top-0 h-64 w-64 rounded-full bg-accent2/25 blur-3xl opacity-50" />
      <div className="spotlight-blob-b absolute -left-32 bottom-0 h-56 w-56 rounded-full bg-accent/25 blur-3xl opacity-50" />

      <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
        {/* Left: Profile Image */}
        <Reveal delay={0}>
          <div className="flex justify-center md:justify-start">
            <div className="group relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/50 to-accent2/40 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-3xl border-2 border-accent/60 overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-sm">
                <div className="relative w-72 h-72 md:w-80 md:h-80">
                  <Image
                    src="/images/dinol.jpeg"
                    alt="Dinol Siriwardena"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: Content */}
        <div className="space-y-6">
          <Reveal delay={0.1}>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Profile Spotlight</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                AI & Full-Stack Engineer
                <span className="block text-lg sm:text-xl mt-2 text-slate-300 font-normal">Ready for High-Impact Teams</span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base text-slate-200 leading-relaxed">
              End-to-end development from AI systems to scalable web platforms, delivering high-quality and production-ready solutions.
            </p>
          </Reveal>

          {/* Tags */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
                <p className="text-xs font-medium text-accent">📍 {profile.location}</p>
              </div>
              <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2">
                <p className="text-xs font-medium text-slate-300">🚀 Full-Stack + AI</p>
              </div>
              <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2">
                <p className="text-xs font-medium text-slate-300">✨ Production Quality</p>
              </div>
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.25} className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/cv/DINOL_SIRIWARDENA_RESUME.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/70 bg-accent/20 px-5 py-3 text-sm font-semibold text-accent transition hover:shadow-glow hover:bg-accent/30 hover:border-accent/90"
            >
              <Download size={16} /> Download CV
            </Link>
            <Link
              href={profile.github}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-accent/10"
            >
              <Github size={16} /> GitHub
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-accent/10"
            >
              <Mail size={16} /> Contact
            </Link>
          </Reveal>

          {/* Quick stats */}
          <Reveal delay={0.3} className="grid grid-cols-2 gap-4 pt-4">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
              <p className="text-2xl font-bold text-accent">3+</p>
              <p className="text-xs text-slate-400">Years Experience</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
              <p className="text-2xl font-bold text-accent">10+</p>
              <p className="text-xs text-slate-400">Projects Done</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
