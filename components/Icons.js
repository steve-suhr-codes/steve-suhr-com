import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Icons() {
  return (
    <div className="flex">
      <div className="px-2">
        <a 
            href="https://www.linkedin.com/in/stevesuhr/" 
            target="_blank" 
            rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-4xl hover:text-blue-300 transition-colors" />
        </a>
      </div>
      <div className="px-2 border-l border-white">
        <a 
            href="https://github.com/steve-suhr-codes" 
            target="_blank" 
            rel="noopener noreferrer"
        >
          <FaGithub className="text-white text-4xl hover:text-gray-400 transition-colors" />
        </a>
      </div>
    </div>
  );
}
