import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Dharavahik',
    description: 'A Next.js based streaming platform.',
    image: '/Dharavahik_logo.png',
    link: '/blog'
  },
  {
    title: 'Model Forge',
    description: 'A Flask-based AI model generator.',
    image: '/MF_logo.jpeg'
  },
  {
    title: 'MyJarvis',
    description: 'A voice assistant for automation.',
    image: '/Jarvis_Logo.jpeg'
  }
];

export default function ProjectsSection() {
  return (
    <section id="Projects" className="mt-24 animate-fade-in">
      <div className="relative">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">Projects</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/30 overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Image container with enhanced effects */}
            <div className="relative h-72 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Content with enhanced styling */}
            <div className="p-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                {project.description}
              </p>
              
              {project.link && (
                <Link
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 group/link"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                  <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              )}
            </div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
} 