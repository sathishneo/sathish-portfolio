
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sm:p-8 md:p-12 shadow-lg">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Sathish</span>, a Front-End Developer from Tamil Nadu. 
              After completing my BCA in 2021, I took a break due to family responsibilities but stayed focused on self-learning. 
              I upskilled in <span className="font-semibold">HTML, CSS, JavaScript, React.js, and Python</span>.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
              I've built real-world projects, completed certifications, and interned at
              <span className="font-semibold text-blue-600 dark:text-blue-400"> Aspire Systems</span>. 
              I'm currently seeking full-time developer opportunities where I can grow and contribute 
              to meaningful projects that make a difference.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">2021</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">BCA Graduate</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
