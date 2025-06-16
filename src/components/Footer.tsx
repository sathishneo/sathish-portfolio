import { Instagram, Github, Linkedin, Mail, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Sathish Kumar</h3>
          <p className="text-gray-400 dark:text-gray-500 mb-8">Front-End Developer | React.js | Python</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/sathishneo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/sathishneo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://instagram.com/sathish_neo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 dark:hover:bg-pink-500 transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://x.com/sathish_neo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-300"
            >
              <X size={20} />
            </a>
            <a 
              href="mailto:sathishdev428@gmail.com"
              className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} Sathish Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
