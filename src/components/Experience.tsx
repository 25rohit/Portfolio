
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'R & D Information Technology',
      period: 'Jan 2024 - March 2024',
      location: 'Chennai, Tamil Nadu',
      type: 'Internship',
      description: 'Working on full-stack web applications using modern technologies. Contributing to enterprise-level projects and learning industry best practices.',
      achievements: [
        'Developed responsive web interfaces using React and TypeScript',
        'Implemented RESTful APIs with Node.js and Express.js',
        'Optimized database queries improving performance by 40%',
        'Collaborated with cross-functional teams using Agile methodologies'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Jan 2024 - Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Providing web development services to small businesses and startups. Creating custom solutions tailored to client needs with focus on performance and user experience.',
      achievements: [
        'Built 5+ responsive websites for local businesses',
        'Implemented e-commerce solutions with payment integration',
        'Delivered projects 20% faster than estimated timelines',
        'Maintained 100% client satisfaction rate'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Artificial Intelligence and Data Science Student',
      company: 'Arunai Engineering College',
      period: 'Sep 2022 - Present',
      location: 'Tiruvannamalai, Tamil Nadu',
      type: 'Education',
      description: 'Pursuing Bachelor of Technology in Artificial Intelligence and Data Science with focus on software development, algorithms, and data structures.',
      achievements: [
        'Maintained CGPA of 7.7/10 throughout the program',
        'Led multiple student project teams',
        'Active participant in coding competitions and hackathons',
        'Completed advanced coursework in AI/ML and software engineering'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience & Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and key milestones in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 transform lg:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full transform lg:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${experience.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold">{experience.title}</h3>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            experience.type === 'Internship' ? 'bg-blue-100 text-blue-800' :
                            experience.type === 'Freelance' ? 'bg-purple-100 text-purple-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {experience.type}
                          </span>
                        </div>
                        <p className="text-lg font-medium opacity-90 mb-3">{experience.company}</p>
                        <div className="flex items-center gap-4 text-sm opacity-80">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2 mb-6">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <ChevronRight size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Competencies</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Skills developed and refined through hands-on experience and continuous learning
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h4>
                <p className="text-gray-600 text-sm">End-to-end application development with modern frameworks</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">System Design</h4>
                <p className="text-gray-600 text-sm">Scalable architecture and database design principles</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Problem Solving</h4>
                <p className="text-gray-600 text-sm">Analytical approach to complex technical challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;