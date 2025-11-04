import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://julianascimento.design";

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
                className="object-contain"
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
              
              {/* Quick Info Bar - Company, Date, Context (scannable) */}
              {(project.company || project.completedDate || project.context) && (
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-body-regular">
                  {project.company && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#6D6A7D]">Company:</span>
                      <span className="text-[#262626] font-medium">{project.company}</span>
                    </div>
                  )}
                  {project.completedDate && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#6D6A7D]">Completed:</span>
                      <span className="text-[#262626] font-medium">{project.completedDate}</span>
                    </div>
                  )}
                  {project.context && project.context.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[#6D6A7D]">Context:</span>
                      {project.context.map((label, idx) => (
                        <span
                          key={idx}
                          className="text-body-small text-[#549082] px-3 py-1 border border-[#549082] bg-transparent"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* Impact/Description - Why they should care */}
              {project.description && (
                <p className="text-body-large text-[#262626] max-w-3xl font-medium">
                  {project.description}
                </p>
              )}
              
              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-3">
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

            {/* Overview and Team Section - Magazine Style Two Columns */}
            <div className="w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
              {/* Overview Section - Left Column */}
              {project.overview && (
                <div className="w-full lg:w-[60%] flex flex-col gap-6">
                  <h2 className="text-heading-2 text-[#262626]">Overview</h2>
                  <div className="max-w-4xl">
                    <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                      {project.overview}
                    </p>
                  </div>
                </div>
              )}

              {/* Team Section - Right Column */}
              {project.team && (
                <div className="w-full lg:w-[40%] flex flex-col gap-3 lg:pt-0">
                  <h2 className="text-heading-3 font-bold text-black">
                    Team
                  </h2>
                  <p className="text-body-large text-black">
                    {project.team.description}
                  </p>
                  <div className="flex flex-row items-center gap-0 relative pt-3">
                    {/* Team Count Indicator */}
                    {project.team.count && (
                      <div
                        className="relative"
                        style={{ zIndex: 0 }}
                      >
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-[#595959] flex items-center justify-center">
                          <span className="text-[12px] font-bold text-white leading-[16px]">
                            +{project.team.count}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {/* Individual Member Avatars */}
                    {project.team.members && project.team.members.length > 0 && (() => {
                      const members = project.team.members!;
                      const totalMembers = members.length;
                      const hasCount = project.team.count ? true : false;
                      const baseZIndex = hasCount ? 1 : 0;
                      return (
                        <>
                          {members.map((member, idx) => (
                            <div
                              key={idx}
                              className="relative"
                              style={{ marginLeft: idx > 0 || hasCount ? '-8px' : '0', zIndex: baseZIndex + totalMembers - idx }}
                            >
                              <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-[#595959] flex items-center justify-center">
                                {member.avatar ? (
                                  <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                  />
                                ) : (
                                  <span className="text-[12px] font-bold text-white leading-[16px]">
                                    {member.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>

            {/* My Role Section */}
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

            {/* Scenario Section */}
            {project.scenario && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">SCENARIO</h2>
                <div className="max-w-4xl">
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.scenario}
                  </p>
                </div>
              </div>
            )}

            {/* Problem Framing Section */}
            {project.problemFraming && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">Problem Framing</h2>
                <div className="max-w-4xl">
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.problemFraming}
                  </p>
                </div>
              </div>
            )}

            {/* Systems Thinking Section */}
            {project.systemsThinking && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">Systems Thinking</h2>
                <div className="max-w-4xl">
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.systemsThinking}
                  </p>
                </div>
              </div>
            )}

            {/* Collaboration Section */}
            {project.collaboration && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">Collaboration</h2>
                <div className="max-w-4xl">
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.collaboration}
                  </p>
                </div>
              </div>
            )}

            {/* Impact Section */}
            {project.impact && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">Impact</h2>
                <div className="max-w-4xl">
                  {typeof project.impact === "string" ? (
                    <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                      {project.impact}
                    </p>
                  ) : (
                    <ul className="flex flex-col gap-4">
                      {project.impact.map((impact, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <span className="text-[#E75C3B] text-heading-3 mt-1">•</span>
                          <p className="text-body-large text-[#1A1A1A] flex-1 leading-relaxed">
                            {impact}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

            {/* Legacy: Keep Outcomes for backward compatibility if Impact not provided */}
            {project.outcomes && project.outcomes.length > 0 && !project.impact && (
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

            {/* Metrics Section */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">Metrics</h2>
                <div className="max-w-4xl">
                  <ul className="flex flex-col gap-4">
                    {project.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#549082] text-heading-3 mt-1">✅</span>
                        <p className="text-body-large text-[#1A1A1A] flex-1 leading-relaxed">
                          {metric}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Results Section - First 10 Days Results */}
            {project.results && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#E75C3B]">
                  {project.results.title}
                </h2>
                <div className="w-full">
                  <div className="flex flex-row flex-wrap items-start gap-8 md:gap-12">
                    {project.results.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col items-start gap-4 flex-1 min-w-[250px] max-w-[323px]">
                        <div className="text-display-medium text-black font-extrabold">
                          {metric.value}
                        </div>
                        <div className="text-heading-3 text-[#E75C3B]">
                          {metric.label}
                        </div>
                        {metric.description && (
                          <div className="text-body-large text-[#595959] w-full">
                            {metric.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reflection Section */}
            {project.reflection && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">Reflection</h2>
                <div className="max-w-4xl">
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.reflection}
                  </p>
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

