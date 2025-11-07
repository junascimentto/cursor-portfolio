import Image from "next/image";
import { FadeInUp } from "@/components/animations";

export default function About() {
  return (
    <div className="min-h-screen px-6 md:px-16 py-32 md:py-40">
      <div className="max-w-[1728px] mx-auto">
        <div className="w-full flex flex-col items-start gap-32 md:gap-40">
          {/* About Me Content - Edge to edge */}
          <FadeInUp delay={0.6}>
            <div className="w-screen -ml-6 md:-ml-16 mr-0 pr-6 md:pr-16">
              <div className="w-full flex flex-col lg:flex-row items-start gap-12 md:gap-16 lg:gap-20">
                {/* Text Column - Better proportion */}
                <div className="w-full lg:w-[55%] xl:w-[58%] flex flex-col items-start gap-6 pl-6 md:pl-16">
                  <p className="text-heading-2 text-[#E75C3B]">ABOUT ME</p>
                  <h2 className="text-display-medium font-medium text-[#262626] leading-tight">
                    Community<br />driven
                  </h2>
                  <div className="flex flex-col items-start gap-4 mt-2 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Figma Community lead
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Amsterdam and Portugal
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Organise Design conference
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        for 500+ designers
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">//</span> Touch Rugby player on
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Amsterdam Lowlanders
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">//</span> Building an agroforestry in
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Brazil
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Medium writer about design
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        and figma @julianascimentto
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Image Column - Edge to edge, full width */}
                <div className="w-full lg:w-[45%] xl:w-[42%] lg:sticky lg:top-24 lg:self-start pr-6 md:pr-16 lg:pr-0">
                  <div className="w-full lg:w-[calc(100%+4rem)] xl:w-[calc(100%+5rem)] aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] relative overflow-hidden">
                    <Image
                      src="/about-me-image.png"
                      alt="About Julia Nascimento"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Design Community Section */}
          <FadeInUp delay={0.8}>
            <div className="w-full flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-4">
                <p className="text-heading-2 text-[#E75C3B]">DESIGN COMMUNITY</p>
                <h2 className="text-display-medium font-medium text-[#262626] leading-tight">
                  Sharing knowledge<br />and mentoring
                </h2>
              </div>

              <div className="flex flex-col items-start gap-6 w-full max-w-4xl">
                {/* Podcasts */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="text-heading-3 text-[#262626] font-medium">Podcasts</p>
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Podvagas Podcast
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Leading a podcast about junior designers migrating to UX
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Clip content Podcast
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        A podcast I've created to talk about design career and share tips
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Podcast guest
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        UX Design e Carreira Internacional - Design and career (Portuguese)
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Guest speaker
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        UX and impact of communities and collaboration
                      </p>
                    </div>
                  </div>
                </div>

                {/* Speaking & Events */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="text-heading-3 text-[#262626] font-medium">Speaking & Events</p>
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Design System Event
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Invited to talk about product libraries at Booking.com
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Design conference
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Organise Layers conference for 500+ designers
                      </p>
                    </div>
                  </div>
                </div>

                {/* Writing & Content */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="text-heading-3 text-[#262626] font-medium">Writing & Content</p>
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Medium writer
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Articles about design and Figma @julianascimentto
                      </p>
                    </div>
                  </div>
                </div>

                {/* Community Leadership */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="text-heading-3 text-[#262626] font-medium">Community Leadership</p>
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Figma Community Lead/Advocate
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Friends of Figma Portugal and Amsterdam
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Member of Vagas UX
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Leading a podcast about junior designers migrating to UX
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teaching & Mentoring */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="text-heading-3 text-[#262626] font-medium">Teaching & Mentoring</p>
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> UX Design Teacher
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        EDIT, Flag and Tangível - Designing my own UX Design and Design System courses
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Design System Teacher
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Tangível Academy in Lisbon, Portugal
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="text-body-large text-[#6D6A7D]">
                        <span className="text-[#262626]">/</span> Co-lead initiative
                      </p>
                      <p className="text-body-large text-[#6D6A7D] ml-4">
                        Share UX work inside the Design community at Booking.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
