import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeInUp, StaggerContainer } from "@/components/animations";

export default function Projects() {
  // Selected projects (highlight="HIGHLIGHT")
  const selectedProjects = projects.filter(
    (project) => project.highlight === "HIGHLIGHT"
  ).slice(0, 3);

  // Remaining projects (not highlighted)
  const remainingProjects = projects.filter(
    (project) => project.highlight !== "HIGHLIGHT"
  );

  return (
    <div className="min-h-screen bg-[#F5F5F5] px-6 md:px-16 py-32 md:py-40">
      <div className="max-w-[1728px] mx-auto">
        <div className="w-full flex flex-col items-start gap-16 md:gap-20">
          <div className="w-full flex flex-col items-start gap-4">
            <p className="w-full text-heading-2 text-[#E75C3B]">
              WORK
            </p>
            <h1 className="w-full text-display-large text-[#262626]">
              Projects overview
            </h1>
          </div>

          {/* Selected Projects Section */}
          {selectedProjects.length > 0 && (
            <StaggerContainer className="w-full flex flex-col items-start gap-16 md:gap-20">
              {/* Selected Projects Grid */}
              <div className="w-full flex flex-row flex-wrap gap-6">
                {selectedProjects.map((project, idx) => (
                  <FadeInUp key={project.slug} delay={idx * 0.05}>
                    <ProjectCard project={project} />
                  </FadeInUp>
                ))}
              </div>
            </StaggerContainer>
          )}

          {/* Remaining Projects Section */}
          {remainingProjects.length > 0 && (
            <>
              {/* Visual Divider */}
              <div className="w-full border-t border-[#EBEBEB] pt-16 md:pt-20">
                <div className="w-full flex flex-col items-start gap-6">
                  <p className="w-full text-body-large text-[#262626] leading-relaxed max-w-2xl">
                    If you are curious and want to see more
                  </p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="w-full flex flex-row flex-wrap gap-6">
                {remainingProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </>
          )}

          <p className="w-full text-body-small text-[#6B6B6B]">
            Most projects are under NDA so Please reach out for in detail case
          </p>
        </div>
      </div>
    </div>
  );
}
