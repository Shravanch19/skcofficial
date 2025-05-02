import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa"; // GitHub icon

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Dharavahik",
    description: "A Next.js based streaming platform.",
    image: "/Dharavahik_logo.png",
    link: "https://dharavahik.vercel.app/",
    github: "https://github.com/Shravanch19/Dharavahik",
  },
  {
    title: "Model Forge",
    description: "A Flask-based AI model generator.",
    image: "/MF_logo.jpeg",
    link: "http://modelforge.great-site.net/",
    github: "https://github.com/Shravanch19/ModelForge",
  },
  {
    title: "SkcHelp",
    description:
      "A CLI tool for devs that offers auto-completions and AI-enhanced coding productivity.",
    image: "/Jarvis_Logo.jpeg",
    link: "https://helpskc.vercel.app/",
    github: "https://github.com/Shravanch19/skchelp.git",
  },
];

export default function ProjectsSection() {
  return (
    <section id="Projects" className="mt-12 sm:mt-24 px-4 sm:px-0 animate-fade-in">
      <div className="relative">
        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          Projects
        </h2>
        <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 sm:mb-12"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative bg-gray-800/40 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-700/30 overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Image */}
            <div className="relative h-48 sm:h-64 lg:h-72 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-2">
                {project.link && (
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-all duration-300 group/link"
                    target="_blank"
                  >
                    <span className="relative">
                      Learn more
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                    <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                )}

                {project.github && (
                  <Link
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-all duration-300"
                    target="_blank"
                    aria-label={`${project.title} GitHub Repo`}
                  >
                    <FaGithub className="text-xl sm:text-2xl drop-shadow-sm hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition duration-300" />
                  </Link>

                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
