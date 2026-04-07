import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack and AI engineering projects by Dinol Siriwardena - Software Developer and AI Engineer."
};

export default function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <div className="space-y-14 pb-6">
      <section className="space-y-7">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Flagship AI and Full-Stack Engineering Work"
          description={
            <span className="!text-white">
              In-depth case studies showcasing AI systems, full-stack architecture, and production-ready applications with measurable impact and technical depth.
            </span>
          }
          descriptionClassName="max-w-6xl !text-white"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {others.length > 0 && (
        <section className="space-y-7">
          <SectionHeading
            eyebrow="Additional Projects"
            title="Broader portfolio of technical work"
            description="Additional projects demonstrating experience across different domains, technologies, and problem-solving approaches."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {others.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.04}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Reveal>
        <CtaBanner />
      </Reveal>
    </div>
  );
}
