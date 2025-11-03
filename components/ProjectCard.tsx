import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[403px] flex flex-col gap-4">
        {/* Project Image */}
        <div 
          className="w-full h-[280px] sm:h-[320px] md:h-[373px] flex items-center justify-center overflow-hidden relative"
          style={{ backgroundColor: project.bgColor || "#DAEFFF", borderRadius: 0 }}
        >
          {project.image && project.image.startsWith("/") ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 403px"
            />
          ) : (
            <span className="text-[#A2A2A2] text-body-small">Project Image</span>
          )}
        </div>
        
        {/* Project Content */}
        <div className="flex flex-col gap-2">
          <p className="text-body-large font-bold text-black group-hover:text-[#E75C3B] transition-colors">
            {project.title}
          </p>
          {project.highlight && (
            <p className="text-body-large font-medium text-[#E75C3B]">
              {project.highlight}
            </p>
          )}
          {project.description && (
            <p className="text-body-regular text-[#6D6A7D]">
              {project.description}
            </p>
          )}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-body-small text-[#6B6B6B] px-2 py-1 border border-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

