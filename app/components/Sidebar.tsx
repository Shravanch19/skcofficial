import { FaHome, FaUser, FaCode, FaEnvelope, FaNewspaper } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="hidden sm:block">
      <aside className="w-20 h-screen bg-gray-800/30 backdrop-blur-lg flex flex-col items-center justify-center fixed shadow-lg border-r border-gray-700/30 z-50">
        <nav aria-label="Main navigation">
          <ul className="flex flex-col gap-8">
            {[
              { href: '#Home', icon: FaHome, label: 'Home' },
              { href: '#About', icon: FaUser, label: 'About' },
              { href: '#Projects', icon: FaCode, label: 'Projects' },
              { href: '#Contact', icon: FaEnvelope, label: 'Contact' },
              { href: '#Blogs', icon: FaNewspaper, label: 'Blogs' }
            ].map(({ href, icon: Icon, label }) => (
              <li key={href} className="group">
                <a
                  href={href}
                  aria-label={label}
                  className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-blue-500/20 hover:scale-110"
                >
                  <Icon size={24} className="text-gray-400 group-hover:text-blue-400" />
                  <span className="absolute left-20 bg-gray-800 px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
} 