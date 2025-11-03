"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white border-b border-gray-200">
      <div className="max-w-[1728px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-heading-3 font-medium text-[#262626] hover:text-[#6D6A7D] transition-colors"
          >
            Julia Nascimento
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-body-large font-medium transition-colors ${
                    isActive
                      ? "bg-[#262626] text-white"
                      : "text-[#262626] hover:bg-[#F5F5F5] hover:text-[#6D6A7D]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

