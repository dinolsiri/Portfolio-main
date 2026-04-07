import { ProfileSpotlight } from "@/components/profile-spotlight";
import { CtaBanner } from "@/components/cta-banner";
import { ProjectCard } from "@/components/project-card";
import { StackStrip } from "@/components/stack-strip";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getYearsBuildingProducts, projects, stats } from "@/data/site";

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  const dynamicStats = stats.map((stat) =>
    stat.label === "Years of Experience" ? { ...stat, value: getYearsBuildingProducts() } : stat
  );

  return (
    <div className="space-y-16 pb-6 sm:space-y-20">
      <ProfileSpotlight />

      <Reveal>
        <StackStrip />
      </Reveal>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Expertise"
          title="Building intelligent systems with modern technologies"
          description="A concise view of my focus areas and technical specialization."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dynamicStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <GlassCard>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Showcase of my best work"
          description="Three flagship projects demonstrating AI expertise, full-stack development, and production-ready systems."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <CtaBanner />
      </Reveal>
    </div>
  );
}
