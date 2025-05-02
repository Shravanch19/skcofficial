import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-end mb-8">
      <div className="flex gap-6">
        <Link
          href="https://github.com/Shravanch19"
          aria-label="GitHub"
          className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/skcOfficial"
          aria-label="LinkedIn"
          className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </Link>
      </div>
    </header>
  );
} 