import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGit, FaDocker, FaJava, FaAws } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiPostgresql, SiVercel } from "react-icons/si";

const skillCategories = {
  frontend: [
    { Icon: FaReact, name: 'React' },
    { Icon: RiTailwindCssFill, name: 'Tailwind CSS' },
    { Icon: RiNextjsFill, name: 'Next.js' },
    { Icon: SiTypescript, name: 'TypeScript' },
  ],
  backend: [
    { Icon: FaNodeJs, name: 'Node.js' },
    { Icon: FaPython, name: 'Python' },
    { Icon: FaJava, name: 'Java' },
  ],
  database: [
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: FaDatabase, name: 'Database' },
  ],
  devops: [
    { Icon: FaGit, name: 'Git' },
    { Icon: FaDocker, name: 'Docker' },
    { Icon: FaAws, name: 'AWS' },
    { Icon: SiVercel, name: 'Vercel' },
  ]
};

export default function AboutSection() {
  return (
    <section id="About" className="mt-12 sm:mt-24 relative px-4 sm:px-0">
      <div className="relative p-6 sm:p-12 bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-2xl rounded-3xl border border-gray-700/40 shadow-[0_0_40px_#0ff3_0px] animate-fade-in">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-2">
            About Me
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full mb-8 sm:mb-12"></div>

          {/* Description */}
          <div className="space-y-4 sm:space-y-6 text-gray-300 text-xs sm:text-lg leading-relaxed mb-12 sm:mb-16">
            <div className="group transition duration-300">
              <p className="group-hover:text-white transition-all duration-300">
                I'm a dedicated web developer focused on building elegant, scalable, and efficient applications. With a strong foundation in full-stack development and a growing passion for the DevOps-oriented Full Stack and T3 Stack, I’m currently pursuing a Bachelor of Computer Applications (BCA) and halfway through my 2nd year.
              </p>
              <div className="h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 group-hover:w-full transition-all duration-500 mt-2"></div>
            </div>

            <div className="group transition duration-300">
              <p className="group-hover:text-white transition-all duration-300">
                Outside coding, I enjoy writing, reading, working out, traveling, and engaging with creative minds. My journey is driven by curiosity, discipline, and a desire to create real impact through technology.
              </p>
              <div className="h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 group-hover:w-full transition-all duration-500 mt-2"></div>
            </div>
          </div>

          {/* Skills (stacked) */}
          <div className="space-y-6 sm:space-y-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 capitalize">
                  {category}
                </h3>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {skills.map(({ Icon, name }) => (
                    <div
                      key={name}
                      className="group relative bg-gray-800/50 backdrop-blur-xl p-3 sm:p-4 rounded-xl flex items-center gap-2 sm:gap-3 hover:bg-gradient-to-br from-cyan-700/20 to-fuchsia-700/20 transition-all duration-500 border border-gray-700/40 hover:border-cyan-400/30 overflow-hidden shadow-md"
                    >
                      <div className="relative z-10">
                        <div className="relative">
                          <Icon size={20} className="sm:text-[24px] text-cyan-300 group-hover:text-fuchsia-400 transition-colors duration-300 transform group-hover:scale-110" />
                          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <span className="relative z-10 text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                        {name}
                      </span>

                      {/* Decorative corners */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-fuchsia-500/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fuchsia-500/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12 sm:mt-16 border-t border-gray-700/40 pt-6 sm:pt-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-300">Education</h3>
            <div className="bg-gray-800/50 backdrop-blur-xl p-3 sm:p-4 rounded-xl border border-gray-700/40 shadow-inner">
              <p className="text-cyan-400 font-medium text-sm sm:text-base">Bachelor of Computer Applications (BCA)</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">2nd Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}