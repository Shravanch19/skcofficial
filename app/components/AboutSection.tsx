import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGit, FaDocker } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

const skills = [
  { Icon: FaReact, name: 'React' },
  { Icon: FaNodeJs, name: 'Node.js' },
  { Icon: FaPython, name: 'Python' },
  { Icon: RiTailwindCssFill, name: 'Tailwind CSS' },
  { Icon: RiNextjsFill, name: 'Next.js' },
  { Icon: FaDatabase, name: 'Database' },
  { Icon: FaGit, name: 'Git' },
  { Icon: FaDocker, name: 'Docker' }
];

export default function AboutSection() {
  return (
    <section id="About" className="mt-24 relative">
      <div className="relative p-12 bg-gray-800/40 backdrop-blur-xl rounded-3xl border border-gray-700/30 shadow-2xl animate-fade-in">
        <div className="relative">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="group">
                <p className="text-gray-300 leading-relaxed text-lg transition-all duration-300 group-hover:text-white">
                  I'm a dedicated web developer focused on creating elegant, scalable, and efficient applications. I have experience in full-stack development with a particular interest in the DevOps-oriented Full Stack and T3 Stack. Currently pursuing a Bachelor of Computer Applications (BCA), I am halfway through my 2nd year and constantly refining my craft.
                </p>
                <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 mt-2"></div>
              </div>

              <div className="group">
                <p className="text-gray-300 leading-relaxed text-lg transition-all duration-300 group-hover:text-white">
                  Beyond coding, I enjoy writing, reading, working out, traveling, and connecting with like-minded individuals. My journey in development has been fueled by curiosity, discipline, and a desire to make an impact through technology.
                </p>
                <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 mt-2"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Skills & Frameworks</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map(({ Icon, name }) => (
                    <div
                      key={name}
                      className="group relative bg-gray-800/40 backdrop-blur-xl p-4 rounded-xl flex items-center gap-3 hover:bg-blue-500/10 transition-all duration-500 border border-gray-700/30 hover:border-blue-500/30 overflow-hidden"
                    >
                      {/* Decorative background elements */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Animated corner elements */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon container with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Icon size={24} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 transform group-hover:scale-110" />
                          <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        {/* Animated ring effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                      </div>
                      
                      {/* Skill name with enhanced typography */}
                      <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                        {name}
                      </span>
                      
                      {/* Decorative bottom line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-24 transition-all duration-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700/30">
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Education</h3>
              <div className="bg-gray-700/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30">
                <p className="text-blue-400 font-medium">Bachelor of Computer Applications (BCA)</p>
                <p className="text-gray-400 text-sm mt-1">2nd Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 