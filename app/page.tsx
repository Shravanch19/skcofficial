import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaUser, FaCode, FaHome, FaNewspaper, FaReact, FaNodeJs, FaPython, FaDatabase, FaGit, FaDocker } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shravan Chaturvedi - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex min-h-screen bg-gray-900 text-white">
        {/* Side Panel */}
        <aside className="w-20 h-screen bg-gray-800 flex flex-col items-center justify-center fixed shadow-lg">
          <nav>
            <ul className="flex flex-col gap-6">
              <li className="hover:scale-110 transition-transform">
                <a href="#Home" aria-label="Home"><FaHome size={24} /></a>
              </li>
              <li className="hover:scale-110 transition-transform">
                <a href="#About" aria-label="About"><FaUser size={24} /></a>
              </li>
              <li className="hover:scale-110 transition-transform">
                <a href="#Projects" aria-label="Projects"><FaCode size={24} /></a>
              </li>
              <li className="hover:scale-110 transition-transform">
                <a href="#Contact" aria-label="Contact"><FaEnvelope size={24} /></a>
              </li>
              <li className="hover:scale-110 transition-transform">
                <a href="#Blogs" aria-label="Blogs"><FaNewspaper size={24} /></a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-20 p-8 w-full">
          <header className="flex justify-end mb-8">
            <div className="flex gap-4">
              <Link href="https://github.com/Shravanch19" aria-label="GitHub">
                <FaGithub size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/skcOfficial" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </header>

          {/* Home Section */}
          <section id="Home" className="text-center flex justify-evenly">
            <div>
              <img
                src="/bg.png"
                alt="Shravan Chaturvedi"
                className="rounded-lg mx-auto h-[40vh] hover:scale-105 transition-transform"
              />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold mt-4">Shravan Chaturvedi</h1>
              <p className="text-lg">Full Stack Web Developer</p>
              <p className="mt-4 max-w-xl">
                A person passionate about technology, breaking mediocrity, and challenging the status quo.
              </p>
              <a
                href="/cv.pdf"
                download
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:scale-105 transition-transform"
              >
                Download CV
              </a>
            </div>
          </section>


          <section id="About" className="mt-12 p-6 bg-gray-800 rounded">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-4">
              I'm a dedicated web developer focused on creating elegant, scalable, and efficient applications. I have experience in full-stack development with a particular interest in the DevOps-oriented Full Stack and T3 Stack. Currently pursuing a Bachelor of Computer Applications (BCA), I am halfway through my 2nd year and constantly refining my craft.

              Beyond coding, I enjoy writing, reading, working out, traveling, and connecting with like-minded individuals. My journey in development has been fueled by curiosity, discipline, and a desire to make an impact through technology.
            </p>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">Skills & Frameworks</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {[FaReact, FaNodeJs, FaPython, RiTailwindCssFill, RiNextjsFill, FaDatabase, FaGit, FaDocker].map((Icon, index) => (
                  <span key={index} className="bg-gray-700 p-4 rounded flex justify-center items-center hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="Projects" className="mt-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="bg-gray-800 p-4 rounded flex flex-col items-center">
                <Image src="/Dharavahik_logo.png" alt="Dharavahik" width={300} height={200} className="rounded" />
                <h3 className="mt-2 text-xl">Dharavahik</h3>
                <p>A Next.js based streaming platform.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded flex flex-col items-center">
                <Image src="/MF_logo.jpeg" alt="Model Forge" width={300} height={200} className="rounded" />
                <h3 className="mt-2 text-xl">Model Forge</h3>
                <p>A Flask-based AI model generator.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded flex flex-col items-center">
                <Image src="/Jarvis_Logo.jpeg" alt="MyJarvis" width={300} height={200} className="rounded" />
                <h3 className="mt-2 text-xl">MyJarvis</h3>
                <p>A voice assistant for automation.</p>
              </div>
            </div>
          </section>

          {/* Blogs Section */}
          <section id="Blogs" className="mt-12">
            <h2 className="text-2xl font-semibold">Blogs</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="bg-gray-800 p-4 rounded">
                <Link href={"/blog"}>
                  <Image src="/assets/Dharavahik_logo.png" alt="Dharavahik" width={300} height={200} className="rounded" />
                  <h3 className="mt-2 text-xl">Dharavahik</h3>
                  <p>A Next.js based streaming platform.</p>
                </Link>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <Image src="/assets/MF_logo.jpeg" alt="Model Forge" width={300} height={200} className="rounded" />
                <h3 className="mt-2 text-xl">Model Forge</h3>
                <p>A Flask-based AI model generator.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <Image src="/assets/Jarvis_Logo.jpeg" alt="MyJarvis" width={300} height={200} className="rounded" />
                <h3 className="mt-2 text-xl">MyJarvis</h3>
                <p>A voice assistant for automation.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="Contact" className="mt-12">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <form className="mt-6 bg-gray-800 p-6 rounded" action="https://formsubmit.co/shravan190805@gmail.com" method="POST">
              <label className="block">Name</label>
              <input type="text" name="name" className="w-full p-2 mt-2 bg-gray-700 rounded" required />

              <label className="block mt-4">Email</label>
              <input type="email" name="email" className="w-full p-2 mt-2 bg-gray-700 rounded" required />

              <label className="block mt-4">Message</label>
              <textarea name="message" className="w-full p-2 mt-2 bg-gray-700 rounded" rows={5} required></textarea>

              <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
            </form>
          </section>


        </main>
      </div>
    </>
  );
}
