import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills, skillIcons } from "@/data/site";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical expertise in Machine Learning, Full-Stack Development, and Modern Web Technologies."
};

export default function SkillsPage() {
  return (
    <div className="space-y-12 pb-6">
      <SectionHeading
        eyebrow="Skills & Expertise"
        title="Technical depth across AI, Full-Stack, and Systems Engineering"
        description={
          <span className="!text-white">
            Comprehensive technical capabilities spanning frontend, backend, machine learning, databases, DevOps, and testing frameworks. Ready to contribute immediately across full-stack and AI-enabled projects.
          </span>
        }
        descriptionClassName="max-w-6xl !text-white"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <GlassCard className="group hover:border-accent/40 transition h-full">
              <h3 className="text-lg font-semibold text-white group-hover:text-accent transition">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const iconData = skillIcons[skill];
                  const Icon = iconData?.icon;
                  const color = iconData?.color || "#94a3b8";
                  
                  return (
                    <div
                      key={skill}
                      className="group/skill inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-slate-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent transition"
                    >
                      {Icon && (
                        <Icon size={14} style={{ color: color }} className="group-hover/skill:scale-110 transition" />
                      )}
                      {skill}
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <CtaBanner />
      </Reveal>
    </div>
  );
}
