import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] px-6 md:px-16 py-32 md:py-40">
      <div className="max-w-[1728px] mx-auto">
        <div className="w-full flex flex-col items-end gap-16 md:gap-20">
          <div className="w-full flex flex-col items-center gap-4">
            <p className="w-full text-heading-2 text-[#E75C3B]">
              WORK
            </p>
            <h1 className="w-full text-display-large text-[#262626]">
              Projects overview
            </h1>
          </div>

          {/* Projects Grid */}
          <div className="w-full flex flex-row flex-wrap justify-between gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <p className="w-full text-body-small text-[#6B6B6B]">
            Most projects are under NDA so Please reach out for in detail case
          </p>
        </div>
      </div>
    </div>
  );
}
