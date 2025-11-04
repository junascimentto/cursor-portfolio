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
        </div>
      </div>
    </div>
  );
}
