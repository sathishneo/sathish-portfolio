
import { Button } from '@/components/ui/button';

const Hero = () => {
  // Handler to scroll smoothly to #projects
  const handleViewMyWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Handler to download resume from Google Drive
  const handleDownloadResume = () => {
    try {
      // Convert your Google Drive link to direct download format
      const fileId = "1JMHk8znmXVDUw3i2dTtusp4Dhinvnh2V";
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, '_blank');
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback to view link
      const viewUrl = `https://drive.google.com/file/d/1JMHk8znmXVDUw3i2dTtusp4Dhinvnh2V/view`;
      window.open(viewUrl, '_blank');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-800 dark:via-blue-900 dark:to-indigo-900 text-white px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-400">Sathish Kumar</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-blue-100 px-4">Front-End Developer | React.js | Python | Open to Work</p>
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-blue-200 max-w-3xl mx-auto px-4 leading-relaxed">
            Passionate about creating beautiful, responsive web applications with modern technologies. 
            Ready to bring your ideas to life with clean, efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 text-base sm:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={handleDownloadResume}
            >
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 text-base sm:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto" 
              onClick={handleViewMyWork}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
