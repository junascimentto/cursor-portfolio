import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen px-6 md:px-16 py-32 md:py-40">
      <div className="max-w-[1728px] mx-auto">
        <div className="w-full flex flex-col items-start gap-16 md:gap-20">
          <div className="w-[818px] flex flex-col gap-4">
            <p className="text-heading-2 text-[#E75C3B]">
              ABOUT ME
            </p>
            <p className="text-body-large text-[#6D6A7D]">
              Figma Community lead Amsterdam and Lisbon Organise every year a Figma Design conference 
              for 500+ designers Touch Rugby player on Amsterdam Lowlanders Runner Political book club 
              Building an agroforestry in Brazil Medieval cosplay Lived and worked in different countries 
              Medium writer about design and figma @julianascimentto
            </p>
          </div>

          {/* Avatar and Name Section */}
          <div className="w-full flex flex-col items-start gap-[34px]">
            <h1 className="text-display-medium text-[#262626]">
              Julia Nascimento
            </h1>
            
            <div className="w-[57.47px] h-[57.47px] rounded-full overflow-hidden relative">
              <Image
                src="/avatar/avatar-julia.png"
                alt="Julia Nascimento"
                fill
                className="object-cover"
                sizes="57.47px"
              />
            </div>

            {/* About Me Text */}
            <p className="text-body-large text-[#1A1A1A] max-w-[929.44px]">
              Hi, I'm Julia Nascimento, (she/her). A systems-oriented designer who brings structure, 
              and clarity to complex digital ecosystems — designing frameworks for scalable, accessible, 
              and AI-powered user experiences on B2B2C and enterprise products. Now, I'm a Product Designer 
              at Booking.com building AI/ML products for LLM's ecosystems and white label products with 
              a focus on scaling design, experimentation, and design systems.
            </p>

            {/* Icons List */}
            <div className="flex flex-col gap-4 mt-8">
              {/* Location */}
              <div className="flex flex-row items-center gap-3">
                <div className="w-[56.72px] h-[58.41px] relative flex-shrink-0">
                  <div className="absolute inset-0 bg-black rounded-full"></div>
                  <div className="absolute left-[11.03px] right-[7.88px] top-[8.72px] bottom-[11.87px] bg-[#1D47CD] rounded-full"></div>
                </div>
                <div className="flex flex-col gap-0">
                  <p className="text-body-regular text-[#FB7759]">In Amsterdam</p>
                  <p className="text-body-regular text-[#211814]">From Brasil</p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex flex-row items-center gap-3">
                <div className="w-[56.72px] h-[47.83px] relative flex-shrink-0">
                  <div className="absolute inset-0 bg-black rounded-full"></div>
                  <div className="absolute left-[1.58px] right-[-1.58px] top-[-1.29px] bottom-[-7.59px] bg-[#D0FECF]"></div>
                </div>
                <div className="flex flex-col gap-0">
                  <p className="text-body-regular text-[#549082]">7 years experience</p>
                  <p className="text-body-regular text-[#211814]">Designed and launched 14+ products,</p>
                </div>
              </div>

              {/* Domains */}
              <div className="flex flex-row items-center gap-3">
                <div className="w-[59.87px] h-[59.87px] relative flex-shrink-0">
                  <div className="absolute inset-0 bg-black rounded-full"></div>
                  <div className="absolute inset-[6.3px] bg-[#FB7759]"></div>
                </div>
                <div className="flex flex-col gap-0">
                  <p className="text-body-regular text-[#549082]">Payments, Financial</p>
                  <p className="text-body-regular text-[#211814]">Enterprise, AI, Highly regulated industries.</p>
                </div>
              </div>
            </div>

            {/* Role Information */}
            <div className="w-full flex flex-row items-start gap-16 md:gap-20 mt-12">
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-body-regular text-[#A2A2A2]">Booking.com</p>
                <p className="text-body-regular text-[#A2A2A2]">2022 - 2025</p>
                <p className="text-heading-3 text-black">My role Product Designer</p>
              </div>

              <div className="flex-1 flex flex-col gap-3">
                <p className="text-heading-3 text-black">Teams</p>
                <p className="text-body-regular text-black">
                  Partner Invoices, White Label, Strategic Partnerships, OpenAI widget, Design System
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
