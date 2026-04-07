import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, education, profile } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education, and certifications of Dinol Siriwardena - Software Developer & AI Engineer."
};

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-6">
      <SectionHeading
        eyebrow="About Me"
        title="Software Engineer passionate about AI and Full-Stack Development"
        description={<span className="!text-white">{profile.summary}</span>}
        descriptionClassName="max-w-6xl !text-white"
      />

      <div className="space-y-4">
        <Reveal>
          <GlassCard>
            <h3 className="text-xl font-semibold text-white">👨‍💻 Professional Background</h3>
            <p className="mt-4 text-sm leading-8 text-slate-300">
              I&apos;m a Computer Software Engineering graduate from Cardiff Metropolitan University with a passion for building intelligent systems and scalable web applications. My expertise spans full-stack development, machine learning, and modern web technologies.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-300">
              I specialize in transforming complex requirements into well-architected solutions using Python, Java, React, and cloud technologies. With hands-on experience in AI-based systems, enterprise applications, and data-driven solutions, I focus on creating systems that solve real-world problems.
            </p>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard>
            <h3 className="text-xl font-semibold text-white">🚀 Core Expertise</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span><strong>Machine Learning & AI:</strong> Building ML/AI systems achieving 90%+ accuracy for real-world applications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span><strong>Full-Stack Development:</strong> End-to-end web applications with React, Next.js, and Python/Java backends</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span><strong>System Design:</strong> Enterprise applications with strong architecture, testing, and deployment practices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span><strong>Backend APIs:</strong> RESTful APIs with FastAPI, NestJS, and Java EE for scalable systems</span>
              </li>
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.16}>
          <GlassCard>
            <h3 className="text-xl font-semibold text-white">💡 What Drives Me</h3>
            <p className="mt-4 text-sm leading-8 text-slate-300">
              I&apos;m driven by the challenge of building systems that combine technical excellence with user-centric design. Whether implementing ML models that improve healthcare diagnostics or architecting scalable backend systems, I believe great software comes from understanding both the technical constraints and business objectives.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-300">
              Currently seeking opportunities where I can apply my skills in AI/ML and full-stack development to build impactful solutions that make a difference.
            </p>
          </GlassCard>
        </Reveal>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <GlassCard>
            <h3 className="text-xl font-semibold text-white">🎓 Education</h3>
            <p className="mt-4 text-base text-slate-200">{education.degree}</p>
            <p className="mt-2 text-sm text-muted">{education.school}</p>
            <p className="mt-1 text-sm text-muted">{education.period}</p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard>
            <h3 className="text-xl font-semibold text-white">📜 Qualifications</h3>
            <ul className="mt-4 space-y-4">
              {certifications.map((cert) => (
                <li key={cert.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-slate-100">{cert.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted">{cert.issuer}</p>
                  <p className="mt-1 text-xs text-muted">{cert.year}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal>
        <CtaBanner />
      </Reveal>
    </div>
  );
}
