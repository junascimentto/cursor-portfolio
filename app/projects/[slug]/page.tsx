import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://julianascimento.com";

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const projectUrl = `${siteUrl}/projects/${slug}`;
  const ogImage = project.heroImage 
    ? `${siteUrl}${project.heroImage}` 
    : `${siteUrl}/og-image.jpg`;

  return {
    title: project.title,
    description: project.description || project.overview || `Project: ${project.title}`,
    keywords: project.tags,
    openGraph: {
      title: project.title,
      description: project.description || project.overview || `Project: ${project.title}`,
      url: projectUrl,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description || project.overview || `Project: ${project.title}`,
      images: [ogImage],
    },
    alternates: {
      canonical: projectUrl,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Image Section */}
      <section className="w-full bg-[#EBEBEB]">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16">
          <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
            {project.heroImage ? (
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div 
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: project.bgColor || "#DAEFFF" }}
              >
                <span className="text-[#A2A2A2] text-body-large">Hero Image</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16">
          <div className="flex flex-col gap-16 md:gap-24">
            {/* Back Link */}
            <div>
              <Link
                href="/projects"
                className="text-body-large text-[#6D6A7D] hover:text-[#262626] transition-colors inline-flex items-center gap-2"
              >
                ← Back to Projects
              </Link>
            </div>

            {/* Project Header */}
            <div className="flex flex-col gap-6">
              {project.highlight && (
                <p className="text-heading-2 text-[#E75C3B]">
                  {project.highlight}
                </p>
              )}
              <h1 className="text-display-medium text-[#262626]">
                {project.title}
              </h1>
              {project.description && (
                <p className="text-body-large text-[#6D6A7D] max-w-3xl">
                  {project.description}
                </p>
              )}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-body-regular text-[#6B6B6B] px-4 py-2 border border-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Overview Section */}
            {project.overview && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">Overview</h2>
                <div className="max-w-4xl">
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.overview}
                  </p>
                </div>
              </div>
            )}

            {/* Role Section */}
            {project.role && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">My Role</h2>
                <div className="max-w-4xl">
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.role}
                  </p>
                </div>
              </div>
            )}

            {/* Outcomes Section */}
            {project.outcomes && project.outcomes.length > 0 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">Outcomes</h2>
                <div className="max-w-4xl">
                  <ul className="flex flex-col gap-4">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#E75C3B] text-heading-3 mt-1">•</span>
                        <p className="text-body-large text-[#1A1A1A] flex-1">
                          {outcome}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Links */}
            <div className="flex flex-row items-center gap-8 pt-8 border-t border-gray-200">
              <Link
                href="/projects"
                className="text-body-large text-[#6D6A7D] hover:text-[#262626] transition-colors"
              >
                ← Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

