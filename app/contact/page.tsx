export default function Contact() {
  return (
    <div className="min-h-screen px-6 md:px-16 py-32 md:py-40">
      <div className="max-w-[1728px] mx-auto">
        <div className="flex flex-col gap-16 md:gap-20">
          <div className="flex flex-row items-start gap-16 md:gap-20 flex-wrap">
            <p className="text-body-regular text-[#A2A2A2]">
              My LinkedIn
            </p>
            <p className="text-body-large text-[#6D6A7D]">
              Medium @julianascimentto
            </p>
            <p className="text-body-large text-[#6D6A7D]">
              My email: lia.silvans@gmail.com
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-heading-2 text-[#E75C3B]">
              GET IN TOUCH
            </p>
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-[#262626] text-heading-3">Email</h3>
                <a 
                  href="mailto:lia.silvans@gmail.com" 
                  className="text-[#6D6A7D] hover:text-[#262626] underline text-body-regular"
                >
                  lia.silvans@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-[#262626] text-heading-3">Location</h3>
                <p className="text-[#6D6A7D] text-body-regular">Amsterdam, Netherlands</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-body-large text-[#6D6A7D]">
              I'm always open to discussing new projects, design challenges, or 
              opportunities to collaborate. Feel free to reach out via email or 
              connect on social platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
