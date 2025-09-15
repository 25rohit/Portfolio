
import { Code, Users, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with best practices'
    },
    {
      icon: <Users className="w-8 ha-8 text-teal-600" />,
      title: 'Team Player',
      description: 'Collaborative mindset with excellent communication and leadership skills'
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: 'Problem Solver',
      description: 'Analytical thinking to tackle complex challenges and deliver solutions'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: 'Quality Focus',
      description: 'Committed to delivering high-quality work that exceeds expectations'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated software developer with expertise in modern web technologies and a passion for creating impactful solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building the Future, One Line of Code at a Time
            </h3>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                I am a passionate software developer with a strong foundation in Artificial Intelligence and Data Science. 
                My journey in technology has been driven by curiosity and a desire to solve real-world problems 
                through innovative software solutions.
              </p>
              <p className="mb-6">
                With expertise spanning full-stack development, database management, and system design, 
                I specialize in creating robust applications that deliver exceptional user experiences. 
                My recent projects include pharmacy management systems, campus requirement platforms, 
                smart attendance solutions, and food safety monitoring systems.
              </p>
              <p>
                I believe in continuous learning, collaborative development, and maintaining high standards 
                of code quality. When I'm not coding, you'll find me exploring emerging technologies, 
                contributing to open-source projects, or sharing knowledge with fellow developers.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-white hover:to-gray-50 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-200">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
            <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">2+</div>
            <div className="text-gray-600 font-medium">Years Learning</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Passion</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;