import Image from "next/image";
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
      <section className="w-full bg-[#EBEBEB] pt-24 pb-10">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16">
          <div className="w-full h-[400px] md:h-[500px] flex items-start p-6 md:p-10 bg-[#EBEBEB]">
            {/* Placeholder for video - you'll add actual video component */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-[#A2A2A2] text-xl">Video Header</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-32 md:py-40">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 flex flex-col items-start gap-32 md:gap-40">
          
          {/* Magazine-Style Two-Column Layout */}
          <div className="w-full flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
            
            {/* Main Column - Primary Content */}
            <div className="w-full lg:w-[60%] flex flex-col items-start">
              
              {/* Name */}
              <FadeInUp>
                <h1 className="text-display-medium text-[#262626] mb-8">
                  Julia Nascimento
                </h1>
              </FadeInUp>
              
              {/* Avatar */}
              <FadeInUp delay={0.1}>
                <div className="w-[57.47px] h-[57.47px] rounded-full bg-gray-300 overflow-hidden flex-shrink-0 mb-16">
                  {/* Add actual avatar image */}
                </div>
              </FadeInUp>

              {/* Bio Text */}
              <FadeInUp delay={0.2}>
                <div className="w-full flex flex-col gap-6 mb-16">
                  <p className="text-body-large text-[#1A1A1A]">
                    Hi, I'm Julia Nascimento, (she/her). A systems-oriented designer who brings structure, 
                    and clarity to complex digital ecosystems — designing frameworks for scalable, accessible, 
                    and AI-powered user experiences on B2B2C and <strong>enterprise</strong> products.
                  </p>
                  <p className="text-body-large text-[#1A1A1A]">
                    Now, I'm a Product Designer at Booking.com building <strong>AI/ML products for LLM's ecosystems</strong> and <strong>white label products</strong> with 
                    a focus on scaling design, experimentation, and design systems.
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

            {/* Sidebar - Metadata */}
            <FadeIn delay={0.4}>
              <div className="w-full lg:w-[40%] flex flex-col items-start lg:items-start gap-8 lg:pt-20">
                {/* Location */}
                <div className="flex flex-row items-start gap-4 w-full">
                  <div className="flex-shrink-0 pt-1">
                    <MetadataIcon type="location" />
                  </div>
                  <div className="flex-1">
                    <p className="text-body-regular text-[#FB7759] leading-relaxed">In Amsterdam</p>
                    <p className="text-body-regular text-[#211814] leading-relaxed">From Brasil</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex flex-row items-start gap-4 w-full">
                  <div className="flex-shrink-0 pt-1">
                    <MetadataIcon type="experience" />
                  </div>
                  <div className="flex-1">
                    <p className="text-body-regular text-[#549082] leading-relaxed">7 years experience</p>
                    <p className="text-body-regular text-[#211814] leading-relaxed">Designed and launched 14+ products,</p>
                  </div>
                </div>

                {/* Domains */}
                <div className="flex flex-row items-start gap-4 w-full">
                  <div className="flex-shrink-0 pt-1">
                    <MetadataIcon type="domains" />
                  </div>
                  <div className="flex-1">
                    <p className="text-body-regular text-[#549082] leading-relaxed">Payments, Financial</p>
                    <p className="text-body-regular text-[#211814] leading-relaxed">Enterprise, AI, Highly regulated industries.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Designed For */}
          <FadeInUp delay={0.5}>
            <div className="w-full flex flex-col gap-4 mt-24 lg:mt-32">
              <p className="text-heading-2 text-[#E75C3B]">DESIGNED FOR</p>
              <div className="flex flex-row flex-wrap items-center gap-8 md:gap-12 lg:gap-16">
                {/* Add company logos here */}
                <div className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] h-[60px] md:h-[80px] lg:h-[97px] bg-gray-200 flex items-center justify-center">
                  <span className="text-[#A2A2A2] text-sm">Logo 1</span>
                </div>
                <div className="w-full sm:w-[180px] md:w-[200px] lg:w-[231px] h-[50px] md:h-[55px] lg:h-[63px] bg-gray-200 flex items-center justify-center">
                  <span className="text-[#A2A2A2] text-sm">Logo 2</span>
                </div>
                <div className="w-full sm:w-[220px] md:w-[280px] lg:w-[358px] h-[55px] md:h-[75px] lg:h-[91px] bg-gray-200 flex items-center justify-center">
                  <span className="text-[#A2A2A2] text-sm">Logo 3</span>
                </div>
                <div className="w-full sm:w-[200px] md:w-[220px] lg:w-[251px] h-[35px] md:h-[37px] lg:h-[39px] bg-gray-200 flex items-center justify-center">
                  <span className="text-[#A2A2A2] text-sm">Logo 4</span>
                </div>
                <div className="w-full sm:w-[120px] md:w-[124px] lg:w-[124px] h-[50px] md:h-[65px] lg:h-[73px] bg-gray-200 flex items-center justify-center">
                  <span className="text-[#A2A2A2] text-sm">Logo 5</span>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* About Me Content */}
          <FadeInUp delay={0.6}>
            <div className="w-full flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 xl:gap-20 mt-24 lg:mt-32">
              <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col gap-4">
                <p className="text-heading-2 text-[#E75C3B]">ABOUT ME</p>
                <p className="text-body-large text-[#6D6A7D]">
                  Figma Community lead Amsterdam and Lisbon Organise every year a Figma Design conference 
                  for 500+ designers Touch Rugby player on Amsterdam Lowlanders Runner Political book club 
                  Building an agroforestry in Brazil Medieval cosplay Lived and worked in different countries 
                  Medium writer about design and figma @julianascimentto
                </p>
              </div>
              <div className="w-full lg:w-[45%] xl:w-[50%] h-[400px] md:h-[600px] lg:h-[500px] xl:h-[849px] bg-gray-200 flex items-center justify-center">
                <span className="text-[#A2A2A2]">About Image</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Work Section */}
      <section className="w-full bg-[#F5F5F5] py-32 md:py-40 px-6 md:px-16">
        <div className="max-w-[1728px] mx-auto">
          <StaggerContainer className="w-full flex flex-col items-start gap-16 md:gap-20">
            <FadeInUp>
              <div className="w-full flex flex-col items-start gap-4">
                <p className="w-full text-heading-2 text-[#E75C3B]">WORK</p>
                <h2 className="w-full text-display-large text-[#262626]">
                  Projects overview
                </h2>
              </div>
            </FadeInUp>

            {/* Projects Grid */}
            <div className="w-full flex flex-row flex-wrap gap-6">
              {projects.map((project, idx) => (
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

