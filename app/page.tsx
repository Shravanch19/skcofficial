import { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  metadataBase: new URL('https://skcofficial.vercel.app'),
  title: 'Shravan Chaturvedi - Portfolio',
  description: 'Full Stack Web Developer specializing in Next.js, React, and modern web technologies.',
  keywords: ['web developer', 'full stack', 'next.js', 'react', 'typescript'],
  authors: [{ name: 'Shravan Chaturvedi' }],
  openGraph: {
    title: 'Shravan Chaturvedi - Portfolio',
    description: 'Full Stack Web Developer specializing in Next.js, React, and modern web technologies.',
    images: ['/bg.png'],
    url: 'https://skcofficial.vercel.app',
    siteName: 'Shravan Chaturvedi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shravan Chaturvedi - Portfolio',
    description: 'Full Stack Web Developer specializing in Next.js, React, and modern web technologies.',
    images: ['/bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen relative overflow-hidden bg-gray-900 text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-slide-right"></div>
          <div className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-slide-left"></div>
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent animate-slide-right"></div>
          <div className="absolute top-3/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-slide-left"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex w-full">
          <Sidebar />
        
        {/* Main Content */}
        <main className="sm:ml-20 p-8 w-full relative z-0">
          <Header />
          <HomeSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
