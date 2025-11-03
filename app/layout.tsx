import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://julianascimento.design";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Julia Nascimento – Product Designer Portfolio",
    template: "%s | Julia Nascimento",
  },
  description: "Systems-oriented Product Designer specializing in AI/ML products, enterprise design, and white label solutions. Building scalable, accessible user experiences at Booking.com.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "AI/ML Design",
    "Enterprise Design",
    "Design Systems",
    "User Experience",
    "Booking.com",
    "Portfolio",
  ],
  authors: [{ name: "Julia Nascimento" }],
  creator: "Julia Nascimento",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Julia Nascimento Portfolio",
    title: "Julia Nascimento – Product Designer Portfolio",
    description: "Systems-oriented Product Designer specializing in AI/ML products, enterprise design, and white label solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Julia Nascimento - Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julia Nascimento – Product Designer Portfolio",
    description: "Systems-oriented Product Designer specializing in AI/ML products, enterprise design, and white label solutions.",
    images: ["/og-image.jpg"],
    creator: "@julianascimentto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Avenir fonts - using system font stack as fallback, add actual Avenir fonts if available */}
        <style>{`
          @font-face {
            font-family: 'Avenir';
            font-weight: 300;
            font-style: normal;
            src: local('Avenir-Light'), local('Avenir Light');
          }
          @font-face {
            font-family: 'Avenir';
            font-weight: 800;
            font-style: normal;
            src: local('Avenir-Heavy'), local('Avenir Heavy');
          }
          @font-face {
            font-family: 'Avenir';
            font-weight: 900;
            font-style: normal;
            src: local('Avenir-Black'), local('Avenir Black');
          }
          @font-face {
            font-family: 'Avenir Next';
            font-weight: 400;
            font-style: normal;
            src: local('AvenirNext-Regular'), local('Avenir Next');
          }
          @font-face {
            font-family: 'Avenir Next';
            font-weight: 700;
            font-style: normal;
            src: local('AvenirNext-Bold'), local('Avenir Next Bold');
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${workSans.variable} antialiased bg-white text-[#262626] min-h-screen flex flex-col`}
        style={{
          fontFamily: `'Avenir', 'Avenir Next', var(--font-geist-sans), system-ui, sans-serif`,
        }}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
