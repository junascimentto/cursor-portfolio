import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import React from "react";

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

  // Get next project
  const allSlugs = getAllProjectSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const nextIndex = currentIndex < allSlugs.length - 1 ? currentIndex + 1 : 0; // Wrap around to first project
  const nextProjectSlug = allSlugs[nextIndex];
  const nextProject = getProjectBySlug(nextProjectSlug);

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

            {/* Summary Section - Combined Problem, What I did, and Role */}
            <div className="flex flex-col gap-6">
              <div className="max-w-4xl">
                <div className="flex flex-col gap-6">
                  {/* Problem - Use summary.problem, project.problem, or scenario (whichever exists) */}
                  {(project.summary?.problem || project.problem || project.scenario) && (
                    <div className="flex flex-col gap-2">
                      <p className="text-heading-3 text-[#262626] font-medium">Problem</p>
                      <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                        {project.summary?.problem || project.problem || project.scenario}
                      </p>
                    </div>
                  )}
                  
                  {/* What I did */}
                  {project.summary?.whatIDid && (
                    <div className="flex flex-col gap-2">
                      <p className="text-heading-3 text-[#262626] font-medium">What I did</p>
                      {Array.isArray(project.summary.whatIDid) ? (
                        <ul className="flex flex-col gap-3">
                          {project.summary.whatIDid.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-[#E75C3B] text-heading-3 mt-1">•</span>
                              <p className="text-body-large text-[#1A1A1A] flex-1 leading-relaxed">
                                {item.split(/\*\*(.*?)\*\*/).map((part, i) =>
                                  i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                                )}
                              </p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                          {project.summary.whatIDid}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Before and After Images - Edge to Edge */}
              {project.beforeAfter && (
                <div className="w-full -mx-6 md:-mx-16">
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16">
                      {/* Before Image */}
                      <div className="flex flex-col gap-4">
                        <p className="text-heading-3 text-[#262626] font-medium">Before</p>
                        <div className="w-full aspect-[4/3] relative bg-[#EBEBEB] overflow-hidden">
                          {project.beforeAfter.before ? (
                            <Image
                              src={project.beforeAfter.before}
                              alt="Before"
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-[#A2A2A2] text-body-small">Before Image</span>
                            </div>
                          )}
                        </div>
                        <p className="text-body-regular text-[#6B6B6B]">Text only response</p>
                      </div>

                      {/* After Image */}
                      <div className="flex flex-col gap-4">
                        <p className="text-heading-3 text-[#262626] font-medium">After</p>
                        <div className="w-full aspect-[4/3] relative bg-[#EBEBEB] overflow-hidden">
                          {project.beforeAfter.after ? (
                            <Image
                              src={project.beforeAfter.after}
                              alt="After"
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-[#A2A2A2] text-body-small">After Image</span>
                            </div>
                          )}
                        </div>
                        <p className="text-body-regular text-[#6B6B6B]">Carousel with images and facilities</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* My Key Contribution Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-heading-2 text-[#262626]">My key contribution</h2>
              <div className="max-w-4xl">
                {project.keyContribution ? (
                  <div className="flex flex-col gap-4">
                    <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                      {project.keyContribution.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-heading-3 text-[#262626] font-medium">Highlight:</p>
                      <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                        {project.keyContribution.highlight}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-body-large text-[#A2A2A2] leading-relaxed italic">
                    Content coming soon...
                  </p>
                )}
              </div>
            </div>

            {/* Metrics and Results Section - Consolidated with Outcomes */}
            <div className="flex flex-col gap-6">
              <h2 className="text-heading-2 text-[#262626]">
                {project.results?.title || "Results & Impact"}
              </h2>
              <div className="w-full">
                {/* Results Cards - If available, show these prominently */}
                {project.results && project.results.metrics.length > 0 ? (
                  <div className="flex flex-row flex-wrap items-start gap-8 md:gap-12 mb-8">
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
                ) : null}
                
                {/* Metrics List or Outcomes - Show whichever is available */}
                {project.metrics && project.metrics.length > 0 ? (
                  <ul className="flex flex-col gap-4">
                    {project.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#549082] text-heading-3 mt-1">✅</span>
                        <p className="text-body-large text-[#1A1A1A] flex-1 leading-relaxed">
                          {metric.split(/\*\*(.*?)\*\*/).map((part, i) =>
                            i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : project.outcomes && project.outcomes.length > 0 ? (
                  <ul className="flex flex-col gap-4">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#549082] text-heading-3 mt-1">✅</span>
                        <p className="text-body-large text-[#1A1A1A] flex-1 leading-relaxed">
                          {outcome}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : project.summary?.impact ? (
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.summary.impact.split(/\*\*(.*?)\*\*/).map((part, i) =>
                      i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                    )}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Overview and Team Section - Magazine Style Two Columns */}
            <div className="w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
              {/* Overview Section - Left Column */}
            {project.overview && (
                <div className="w-full lg:w-[60%] flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">Overview</h2>
                  <div className="max-w-4xl flex flex-col gap-4">
                    {project.overview.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-body-large text-[#1A1A1A] leading-relaxed">
                        {paragraph.split(/\*\*(.*?)\*\*/).map((part, i) =>
                          i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                        )}
                      </p>
                    ))}
                    <p className="text-body-small text-[#6B6B6B] leading-relaxed italic">
                      To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Booking.com.
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

            {/* How Might We Section - Centered Quote Style */}
            {(() => {
              // Extract HMW from problem statement
              const extractHMW = (text: string | undefined): string | null => {
                if (!text) return null;
                const hmwMatch = text.match(/How might we (.+?)(?:\.|$)/i);
                return hmwMatch ? hmwMatch[1].trim() : null;
              };
              
              // Format the HMW statement (no bold emphasis)
              const formatHMW = (text: string): React.ReactNode => {
                return text;
              };
              
              const hmwText = extractHMW(project.summary?.problem) || extractHMW(project.problem);
              
              return hmwText ? (
                <div className="w-full flex flex-col items-center gap-6 py-12 md:py-16">
                  <div className="max-w-4xl mx-auto text-center px-6">
                    <blockquote className="text-heading-2 md:text-heading-2 text-[#262626] font-normal leading-relaxed italic border-l-4 border-[#E75C3B] pl-8 pr-8 py-6">
                      How might we {formatHMW(hmwText)}
                    </blockquote>
                  </div>
                </div>
              ) : null;
            })()}

            {/* Problem Framing Section - Combined with Scenario context */}
            <div className="flex flex-col gap-6">
              <h2 className="text-heading-2 text-[#262626]">
                {project.problemFraming 
                  ? "How I structured the problem space to guide design decisions"
                  : project.scenario
                  ? "The context: high-stakes project with tight deadlines and evolving requirements"
                  : "Problem Framing"}
              </h2>
              <div className="max-w-4xl">
                {project.problemFraming ? (
                  (() => {
                    // Parse the problem framing text to extract key concepts
                    const text = project.problemFraming;
                    
                    // Look for pattern: "I framed the challenge around [number] core needs: [concept1], [concept2], and [concept3]. [explanation]"
                    const needsMatch = text.match(/I framed the challenge around (?:three|two|four|five|several) core needs?:\s*(.+?)(?:\.\s+|$)/i);
                    
                    if (needsMatch) {
                      // Extract the concepts part
                      const conceptsText = needsMatch[1];
                      // Split by comma and "and" to get individual concepts
                      const concepts = conceptsText
                        .split(/,\s*(?:and\s+)?/)
                        .map(c => c.trim())
                        .filter(c => c.length > 0);
                      
                      // Extract the explanation (everything after the concepts)
                      const explanationMatch = text.match(/I framed the challenge around .+?\.\s+(.+)/i);
                      const explanation = explanationMatch ? explanationMatch[1] : null;
                      
                      return (
                        <div className="flex flex-col gap-4">
                          {/* Simple list of concepts */}
                          <ul className="flex flex-col gap-3">
                            {concepts.map((concept, idx) => {
                              const fullConcept = concept.replace(/\*\*/g, '');
                              return (
                                <li key={idx} className="flex items-start gap-3">
                                  <span className="text-[#E75C3B] text-heading-3 mt-1">•</span>
                                  <p className="text-body-large text-[#1A1A1A] flex-1 leading-relaxed">
                                    {fullConcept.split(/\*\*(.*?)\*\*/).map((part, i) =>
                                      i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                                    )}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                          
                          {/* Explanation below the list */}
                          {explanation && (
                            <p className="text-body-large text-[#1A1A1A] leading-relaxed mt-2">
                              {explanation.split(/\*\*(.*?)\*\*/).map((part, i) =>
                                i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                              )}
                            </p>
                          )}
                        </div>
                      );
                    }
                    
                    // Fallback to original format if pattern doesn't match
                    return (
                      <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                        {text.split(/\*\*(.*?)\*\*/).map((part, i) =>
                          i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                        )}
                      </p>
                    );
                  })()
                ) : project.scenario ? (
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.scenario}
                  </p>
                ) : (
                  <p className="text-body-large text-[#A2A2A2] leading-relaxed italic">
                    Content coming soon...
                  </p>
                )}
              </div>
            </div>

            {/* Information Architecture Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-heading-2 text-[#262626]">
                {project.informationArchitecture 
                  ? "Using user flows and IA to bring early clarity for the team and define the MVP"
                  : "Information Architecture"}
              </h2>
              <div className="max-w-4xl">
                {project.informationArchitecture ? (
                  <div className="flex flex-col gap-6">
                    {project.informationArchitecture.description && (
                      <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                        {project.informationArchitecture.description.split(/\*\*(.*?)\*\*/).map((part, i) =>
                          i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                        )}
                      </p>
                    )}
                    <div className="flex flex-col gap-8">
                      {/* User Flow Image */}
                      {project.informationArchitecture.userFlowImage && (
                        <div className="flex flex-col gap-4">
                          <div className="w-full aspect-[16/9] relative bg-[#EBEBEB] overflow-hidden p-6">
                            <Image
                              src={project.informationArchitecture.userFlowImage}
                              alt="User Flow"
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 100%"
                            />
                          </div>
                          {project.informationArchitecture.userFlowDescription && (
                            <p className="text-body-regular text-[#6B6B6B]">
                              {project.informationArchitecture.userFlowDescription}
                            </p>
                          )}
                        </div>
                      )}
                      {/* Information Architecture Image */}
                      {project.informationArchitecture.iaImage && (
                        <div className="flex flex-col gap-4">
                          <div className="w-full aspect-[16/9] relative bg-[#EBEBEB] overflow-hidden">
                            <Image
                              src={project.informationArchitecture.iaImage}
                              alt="Information Architecture"
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 100%"
                            />
                          </div>
                          {project.informationArchitecture.iaDescription && (
                            <p className="text-body-regular text-[#6B6B6B]">
                              {project.informationArchitecture.iaDescription}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-body-large text-[#A2A2A2] leading-relaxed italic">
                    Content coming soon...
                  </p>
                )}
              </div>
            </div>

            {/* Systems Thinking Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-heading-2 text-[#262626]">
                {project.systemsThinking 
                  ? "Designing modular, scalable components that integrate across the product ecosystem"
                  : "Systems Thinking"}
              </h2>
              <div className="max-w-4xl">
                {project.systemsThinking ? (
                  <div className="flex flex-col gap-6">
                    {/* Two-column layout for better readability */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div className="flex flex-col gap-4">
                        <p className="text-heading-3 text-[#262626] font-medium">Approach</p>
                        <div className="text-body-large text-[#1A1A1A] leading-relaxed">
                          {project.systemsThinking.split(/\*\*(.*?)\*\*/).map((part, i) =>
                            i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-heading-3 text-[#262626] font-medium">Benefits</p>
                        <ul className="flex flex-col gap-3 text-body-large text-[#1A1A1A] leading-relaxed">
                          <li className="flex items-start gap-3">
                            <span className="text-[#E75C3B] text-heading-3 mt-1">•</span>
                            <span>Reduces technical debt through reusable components</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#E75C3B] text-heading-3 mt-1">•</span>
                            <span>Enables faster iterations and scalability</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#E75C3B] text-heading-3 mt-1">•</span>
                            <span>Creates enterprise-scale solutions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-body-large text-[#A2A2A2] leading-relaxed italic">
                    Content coming soon...
                  </p>
                )}
              </div>
            </div>

            {/* Collaboration Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-heading-2 text-[#262626]">
                {project.collaboration 
                  ? "Navigating complexity through cross-functional collaboration"
                  : "Collaboration"}
              </h2>
              <div className="max-w-4xl">
                {project.collaboration ? (
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.collaboration.split(/\*\*(.*?)\*\*/).map((part, i) =>
                      i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                    )}
                  </p>
                ) : (
                  <p className="text-body-large text-[#A2A2A2] leading-relaxed italic">
                    Content coming soon...
                  </p>
                )}
              </div>
            </div>

            {/* Press Quotes Section - Only show if available */}
            {project.pressQuotes && project.pressQuotes.length > 0 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-heading-2 text-[#262626]">Press & Recognition</h2>
                <div className="max-w-4xl">
                  <div className="flex flex-col gap-6">
                    {project.pressQuotes.map((quote, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <blockquote className="text-body-large text-[#1A1A1A] leading-relaxed italic border-l-4 border-[#E75C3B] pl-6">
                          "{quote.quote}"
                        </blockquote>
                        <p className="text-body-regular text-[#6B6B6B] font-medium">
                          — {quote.source}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Challenges and Trade-offs Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-heading-2 text-[#262626]">Challenges and trade-offs</h2>
              <div className="max-w-4xl">
                {project.challenges ? (
                  <div className="flex flex-col gap-6">
                    {project.challenges.intro && (
                      <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                        {project.challenges.intro}
                      </p>
                    )}
                    {project.challenges.subtitle && (
                      <p className="text-heading-3 text-[#262626] font-medium">
                        {project.challenges.subtitle}
                      </p>
                    )}
                    {project.challenges.items && project.challenges.items.length > 0 && (
                      <div className="flex flex-col gap-6">
                        {project.challenges.items.map((item, idx) => (
                          <div key={idx} className="flex flex-row gap-4">
                            {/* Simple Number */}
                            <div className="flex-shrink-0">
                              <span className="text-body-regular text-[#262626] font-medium">
                                {idx + 1}.
                              </span>
                            </div>
                            {/* Content */}
                            <div className="flex flex-col gap-3 flex-1">
                              <p className="text-body-large text-[#262626] font-medium">
                                {item.title}
                              </p>
                              <p className="text-body-regular text-[#1A1A1A] leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-body-large text-[#A2A2A2] leading-relaxed italic">
                    Content coming soon...
                  </p>
                )}
              </div>
                </div>

            {/* What I Learnt Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-heading-2 text-[#262626]">What I learnt</h2>
              <div className="max-w-4xl">
                {project.whatILearnt ? (
                  <p className="text-body-large text-[#1A1A1A] leading-relaxed">
                    {project.whatILearnt.split(/\*\*(.*?)\*\*/).map((part, i) =>
                      i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                    )}
                  </p>
                ) : (
                  <p className="text-body-large text-[#A2A2A2] leading-relaxed italic">
                    Content coming soon...
                  </p>
                )}
              </div>
            </div>

            {/* Feedback Section - Last Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-heading-2 text-[#262626]">Feedback</h2>
              <div className="max-w-4xl">
                {project.feedback && project.feedback.length > 0 ? (
                  <div className="flex flex-col gap-8">
                    {project.feedback.map((feedbackItem, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        <p className="text-heading-3 text-[#262626] font-medium">
                          {feedbackItem.role}
                        </p>
                        <blockquote className="text-body-large text-[#1A1A1A] leading-relaxed whitespace-pre-line border-l-4 border-[#E75C3B] pl-6 italic">
                          "{feedbackItem.text.split(/\*\*(.*?)\*\*/).map((part, i) => 
                            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                          )}"
                        </blockquote>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-body-large text-[#A2A2A2] leading-relaxed italic">
                    Content coming soon...
                  </p>
                )}
              </div>
            </div>


            {/* Navigation Links */}
            <div className="flex flex-row items-center justify-between gap-8 pt-8 border-t border-gray-200">
              <Link
                href="/projects"
                className="text-body-large text-[#6D6A7D] hover:text-[#262626] transition-colors"
              >
                ← Back to Projects
              </Link>
              {nextProject && (
                <Link
                  href={`/projects/${nextProjectSlug}`}
                  className="text-body-large text-[#6D6A7D] hover:text-[#262626] transition-colors inline-flex items-center gap-2"
                >
                  Next: {nextProject.title} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

