
import { ThemeProvider } from '../components/ThemeProvider';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import WhyHireMe from '../components/WhyHireMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <WhyHireMe />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
