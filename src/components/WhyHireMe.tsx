const WhyHireMe = () => {
  const reasons = [
    {
      title: "Genuine Passion",
      description: "My career gap was a conscious decision to focus entirely on learning web development. This wasn't just a backup plan - it's my true calling.",
      highlight: "100% committed to this field"
    },
    {
      title: "Fresh Perspective", 
      description: "As a fresher, I bring enthusiasm, modern coding practices, and eagerness to learn from experienced team members.",
      highlight: "Up-to-date with latest technologies"
    },
    {
      title: "Goal-Oriented",
      description: "I've systematically built my skills through structured learning and practical projects, showing my ability to set and achieve goals.",
      highlight: "Self-motivated learner"
    },
    {
      title: "Team Ready",
      description: "I understand the importance of collaboration, clean code, and communication in a professional development environment.",
      highlight: "Ready to contribute from day one"
    }
  ];

  return (
    <section id="why-hire-me" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Hire Me?</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            As a dedicated fresher, I bring unique value to your team through passion, modern skills, and unwavering commitment to growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <span className="text-lg mr-2">✨</span>
                    <span className="font-semibold">{reason.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
