
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiTypescript,
  SiGithub,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "HTML5", color: "bg-orange-500", icon: SiHtml5 },
    { name: "CSS3", color: "bg-blue-500", icon: SiCss3 },
    { name: "JavaScript (ES6+)", color: "bg-yellow-500", icon: SiJavascript },
    { name: "React.js", color: "bg-cyan-500", icon: SiReact },
    { name: "TypeScript (Learning)", color: "bg-blue-800", icon: SiTypescript },
    { name: "Tailwind CSS", color: "bg-teal-500", icon: SiTailwindcss },
    { name: "Python (Basics)", color: "bg-green-500", icon: SiPython },
    { name: "Git", color: "bg-orange-700", icon: SiGit },
    { name: "GitHub", color: "bg-gray-700", icon: SiGithub },
    { name: "Postman (REST APIs)", color: "bg-orange-600", icon: SiPostman },
    { name: "Responsive Design", color: "bg-pink-500", icon: FaLaptopCode },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-700 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center group"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${skill.color} rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center text-white group-hover:animate-pulse`}
                >
                  <IconComponent size={20} className="sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
