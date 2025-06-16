
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce UI built with React and Tailwind CSS. Features include product listings, dynamic cart management, and product detail pages using React Router. Fetched real product data using FakeStore API.',
      tech: ['React', 'Tailwind CSS', 'FakeStoreAPI', 'React Router'],
      github: 'https://github.com/sathishneo/ecommerce-site',
      live: '#',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop'
    },
    {
      title: 'To-Do App',
      description: 'Task manager with add, delete, filter, and localStorage features',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/sathishneo/todo-app',
      live: '#',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather by city using OpenWeatherMap API',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/sathishneo/weather-app',
      live: '#',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop'
    },
    {
      title: 'Responsive Portfolio Website',
      description: 'This current portfolio, built with clean code and responsive design',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/sathishneo/portfolio',
      live: '#',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop'
    },
    {
      title: 'Calculator',
      description: 'Basic calculator with keyboard support',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/sathishneo/calculator',
      live: '#',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop'
    },
    {
      title: 'Blog Landing Page',
      description: 'Responsive blog homepage using Flexbox and Grid',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/sathishneo/blog-landing',
      live: '#',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, demonstrating expertise in modern web technologies and clean, efficient code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <Card key={project.title} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-gray-800 border-0 shadow-lg">
              <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
