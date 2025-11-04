import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { communityProjects } from "@/data/communityProjects";
import { personalProjects } from "@/data/personalProjects";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeInUp, FadeIn, StaggerContainer } from "@/components/animations";
import { MetadataIcon } from "@/components/MetadataIcon";

export default function Home() {

  return (
    <div className="w-full bg-white">
      {/* Video Header Section */}
      <section className="w-full bg-[#EBEBEB] pb-10">
        <div className="w-full h-[360px] sm:h-[450px] md:h-[540px] lg:h-[630px] xl:h-[720px] relative bg-[#EBEBEB] flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain video-zoom-in"
          >
            <source src="/videos/hero-video-openai.mov" type="video/quicktime" />
            <source src="/videos/hero-video-openai.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle link to OpenAI widget project */}
          <Link 
            href="/projects/openai-widget"
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 text-body-small text-[#6D6A7D] opacity-50 hover:opacity-100 transition-opacity duration-200 underline decoration-[#6D6A7D] decoration-1 underline-offset-2 z-10"
          >
            View project →
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-32 md:py-40">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 flex flex-col items-start gap-32 md:gap-40">
          
          {/* Magazine-Style Two-Column Layout */}
          <div className="w-full flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
            
            {/* Main Column - Primary Content */}
            <div className="w-full lg:w-[60%] flex flex-col items-start">
              
              {/* Hero Statement - Name + Subtitle */}
              <FadeInUp>
                <div className="w-full mb-12">
                  <h1 className="text-display-medium text-[#262626] mb-6">
                    Julia Nascimento
                  </h1>
                  <p className="text-body-large text-[#262626] leading-relaxed max-w-2xl mb-12">
                    Hi, I'm Julia Nascimento, (she/her). A systems-oriented designer who brings structure, and clarity to complex digital ecosystems — designing frameworks for scalable, accessible, and <strong>AI-powered</strong> user experiences on <strong>B2B2C</strong> and <strong>enterprise products</strong>.
                  </p>
                  <p className="text-body-large text-[#262626] leading-relaxed max-w-2xl mb-12">
                    Now, I'm a Product Designer at <strong>Booking.com</strong> building <strong>AI/ML products for LLM's ecosystems</strong> and <strong>white label products</strong> with a focus on scaling design, experimentation, and <strong>design systems</strong>.
                  </p>
                </div>
              </FadeInUp>

              {/* Role Information - Full Width Horizontal Bar */}
              <FadeInUp delay={0.3}>
                <div className="w-full pt-16 border-t border-[#EBEBEB]">
                <div className="w-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <p className="text-heading-3 text-black">Booking.com</p>
                    <p className="text-body-regular text-[#A2A2A2]">2022 - 2025</p>
                  </div>

                  {/* Role */}
                  <div className="flex flex-col gap-2">
                    <p className="text-heading-3 text-black">My role</p>
                    <p className="text-body-regular text-black">Product Designer</p>
                  </div>

                  {/* Teams */}
                  <div className="flex flex-col gap-2">
                    <p className="text-heading-3 text-black">Teams</p>
                    <p className="text-body-regular text-black">
                      Partner Invoices, White Label, Strategic Partnerships, OpenAI widget, Design System
                    </p>
                  </div>
                </div>
              </div>
              </FadeInUp>
            </div>

            {/* Sidebar - Metadata with Keywords */}
            <FadeIn delay={0.4}>
              <div className="w-full lg:w-[40%] flex flex-col items-start lg:items-start gap-12 lg:pt-16">
                {/* Location */}
                <div className="flex flex-row items-start gap-5 w-full">
                  <div className="flex-shrink-0 mt-0.5">
                    <MetadataIcon type="location" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body-regular text-[#FB7759] leading-relaxed mb-1 font-medium">In Amsterdam</p>
                    <p className="text-body-regular text-[#211814] leading-relaxed">From Brasil</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex flex-row items-start gap-5 w-full">
                  <div className="flex-shrink-0 mt-0.5">
                    <MetadataIcon type="experience" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body-regular text-[#549082] leading-relaxed mb-1 font-medium">7 years experience</p>
                    <p className="text-body-regular text-[#211814] leading-relaxed">Designed and launched 14+ products</p>
                  </div>
                </div>

                {/* Domains - Keywords for scanning */}
                <div className="flex flex-row items-start gap-5 w-full">
                  <div className="flex-shrink-0 mt-0.5">
                    <MetadataIcon type="domains" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body-regular text-[#549082] leading-relaxed mb-1 font-medium">Payments, Financial</p>
                    <p className="text-body-regular text-[#211814] leading-relaxed">
                      Enterprise, AI, Highly regulated industries
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Designed With */}
          <FadeInUp delay={0.5}>
            <div className="w-full flex flex-col gap-4 mt-24 lg:mt-32">
              <p className="text-heading-2 text-[#E75C3B]">DESIGNED WITH</p>
              <div className="flex flex-row flex-wrap items-center gap-6 md:gap-8 lg:gap-10">
                {/* Company Logos - Smaller, uniform sizes, luminosity blend, transparent background */}
                <div className="w-[120px] md:w-[140px] lg:w-[160px] h-[40px] md:h-[45px] lg:h-[50px] relative flex items-center justify-center">
                  <Image
                    src="/logos/booking.svg"
                    alt="Booking.com"
                    fill
                    className="object-contain mix-blend-luminosity opacity-60"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                  />
                </div>
                <div className="w-[120px] md:w-[140px] lg:w-[160px] h-[40px] md:h-[45px] lg:h-[50px] relative flex items-center justify-center">
                  <Image
                    src="/logos/openai.svg"
                    alt="OpenAI"
                    fill
                    className="object-contain mix-blend-luminosity opacity-60"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                  />
                </div>
                <div className="w-[120px] md:w-[140px] lg:w-[160px] h-[40px] md:h-[45px] lg:h-[50px] relative flex items-center justify-center">
                  <Image
                    src="/logos/klm.svg"
                    alt="KLM"
                    fill
                    className="object-contain mix-blend-luminosity opacity-60"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                  />
                </div>
                <div className="w-[120px] md:w-[140px] lg:w-[160px] h-[40px] md:h-[45px] lg:h-[50px] relative flex items-center justify-center">
                  <Image
                    src="/logos/millennium.svg"
                    alt="Millennium"
                    fill
                    className="object-contain mix-blend-luminosity opacity-60"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                  />
                </div>
                <div className="w-[120px] md:w-[140px] lg:w-[160px] h-[40px] md:h-[45px] lg:h-[50px] relative flex items-center justify-center">
                  <Image
                    src="/logos/activobank.svg"
                    alt="ActivoBank"
                    fill
                    className="object-contain mix-blend-luminosity opacity-60"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                  />
                </div>
              </div>
            </div>
          </FadeInUp>

        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="w-full bg-[#F5F5F5] py-32 md:py-40 px-6 md:px-16">
        <div className="max-w-[1728px] mx-auto">
          <StaggerContainer className="w-full flex flex-col items-start gap-16 md:gap-20">
            <FadeInUp>
              <div className="w-full flex flex-col items-start gap-4">
                <p className="w-full text-heading-2 text-[#E75C3B]">WORK</p>
                <h2 className="w-full text-display-large text-[#262626]">
                  Selected Projects
                </h2>
                <p className="w-full text-body-large text-[#262626] leading-relaxed max-w-2xl">
                  I believe this projects shows a combination of my current skills and interests
                </p>
              </div>
            </FadeInUp>

            {/* Selected Projects Grid - Only highlight="HIGHLIGHT" */}
            <div className="w-full flex flex-row flex-wrap gap-6">
              {projects
                .filter((project) => project.highlight === "HIGHLIGHT")
                .slice(0, 3)
                .map((project, idx) => (
                  <FadeInUp key={project.slug} delay={idx * 0.05}>
                    <ProjectCard project={project} />
                  </FadeInUp>
                ))}
            </div>

            <FadeInUp>
              <p className="w-full text-body-small text-[#6B6B6B]">
                Most projects are under NDA so Please reach out for in detail case
              </p>
            </FadeInUp>
          </StaggerContainer>
        </div>
      </section>

      {/* Community Section */}
      <section className="w-full bg-[#F5F5F5] py-32 md:py-40 px-6 md:px-16">
        <div className="max-w-[1728px] mx-auto">
          <StaggerContainer className="w-full flex flex-col items-start gap-16 md:gap-20">
            <FadeInUp>
              <div className="w-full flex flex-col items-start gap-4">
                <p className="w-full text-heading-2 text-[#E75C3B]">DESIGN</p>
                <h2 className="w-full text-display-large text-[#262626]">
                  Community
                </h2>
              </div>
            </FadeInUp>
            
            {/* Community Items Grid */}
            <div className="w-full flex flex-row flex-wrap gap-6">
              {communityProjects.map((project, idx) => (
                <FadeInUp key={project.title || idx} delay={idx * 0.1}>
                  <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[403px] relative">
                    <div 
                      className="w-full h-[280px] sm:h-[320px] md:h-[373px] flex items-center justify-center"
                      style={{ backgroundColor: project.bgColor, borderRadius: 0 }}
                    >
                      <span className="text-[#A2A2A2] text-sm">Community {idx + 1}</span>
                    </div>
                    <p className="mt-4 text-body-large text-black">
                      {project.title}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="w-full bg-[#F5F5F5] py-32 md:py-40 px-6 md:px-16">
        <div className="max-w-[1728px] mx-auto">
          <StaggerContainer className="w-full flex flex-col items-start gap-16 md:gap-20">
            <FadeInUp>
              <div className="w-full flex flex-col items-start gap-4">
                <p className="w-full text-heading-2 text-[#E75C3B]">DESIGN</p>
                <h2 className="w-full text-display-large text-[#262626]">
                  Personal projects
                </h2>
              </div>
            </FadeInUp>
            
            {/* Personal Projects Grid */}
            <div className="w-full flex flex-row flex-wrap gap-6">
              {personalProjects.map((project, idx) => (
                <FadeInUp key={project.title || idx} delay={idx * 0.1}>
                  <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[403px] relative">
                    <div 
                      className="w-full h-[280px] sm:h-[320px] md:h-[373px] flex items-center justify-center"
                      style={{ backgroundColor: project.bgColor, borderRadius: 0 }}
                    >
                      <span className="text-[#A2A2A2] text-sm">Personal {idx + 1}</span>
                    </div>
                    <p className="mt-4 text-body-large text-black">
                      {project.title}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Social Links */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16">
          <div className="flex flex-row items-start gap-16 md:gap-20 flex-wrap">
            <p className="text-body-regular text-[#A2A2A2]">My LinkedIn</p>
            <p className="text-body-large text-[#6D6A7D]">
              Medium @julianascimentto
            </p>
            <p className="text-body-large text-[#6D6A7D]">
              My email: lia.silvans@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

