import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="Home" className="min-h-[70vh] flex items-center justify-around gap-12 animate-fade-in relative overflow-hidden">
      <div className="relative group z-10">
        {/* Outer glow effect */}
        <div className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

        {/* Image container with enhanced effects */}
        <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg"></div>

          {/* Image with enhanced effects */}
          <div className="relative">
            <Image
              src="/bg.png"
              alt="Shravan Chaturvedi"
              width={500}
              height={400}
              className="rounded-lg mx-auto h-[50vh] object-cover group-hover:scale-105 transition-all duration-500"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>

          {/* Decorative bottom line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 rounded-full"></div>
        </div>
      </div>

      <div className="text-left animate-slide-up max-w-2xl relative z-10">
        <div className="space-y-6">
          <div>
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-tight">
              Shravan Chaturvedi
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
          </div>

          <p className="text-3xl text-blue-400 font-medium">Full Stack Web Developer</p>

          <p className="text-xl text-gray-300 leading-relaxed">
            A person passionate about technology, breaking mediocrity, and challenging the status quo.
          </p>

          <div className="flex gap-6 mt-8">
            <a
              href="/cv.pdf"
              download
              className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center gap-2"
            >
              <span>Download CV</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="#Contact"
              className="group px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <span>Contact Me</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 