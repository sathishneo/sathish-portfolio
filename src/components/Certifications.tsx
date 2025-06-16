
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: 'PCEP – Python Certified Entry-Level Programmer',
      issuer: 'Udemy',
      icon: '🐍',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      icon: '💻',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'JavaScript Essentials',
      issuer: 'Cisco',
      icon: '⚡',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      title: 'Postman API Fundamentals',
      issuer: 'Postman Academy',
      icon: '🚀',
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className={`${cert.color} dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{cert.icon}</div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">{cert.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 font-medium">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
