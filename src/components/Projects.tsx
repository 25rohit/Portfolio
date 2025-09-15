import { Github, Pill, School, Car } from 'lucide-react';
// ...existing code...

const Projects = () => {
  const projects = [
    {
      title: 'Pharmacy Drug Management System',
      description:
        'A comprehensive pharmacy management solution featuring inventory tracking, prescription management, drug interaction checking, and automated reorder systems. Built with modern web technologies for optimal performance.',
      icon: <Pill className="w-8 h-8" />,
      technologies: ['React', 'Node.js', 'MySQL', 'Express.js', 'JWT'],
      features: [
        'Real-time inventory tracking',
        'Prescription management',
        'Drug interaction alerts',
        'Automated reorder system',
        'Sales analytics dashboard',
      ],
      
      status: 'Completed',
      color: 'from-blue-500 to-blue-600',
      github: 'https://github.com/25rohit/Pharmacy-Drug-Management-System',
    },
    {
      title: 'AI Sports Talent Assessment',
      description:
        'A mobile-first platform democratizing access to professional sports talent evaluation. Uses AI and machine learning algorithms to assess player performance, generate detailed reports, and provide personalized training recommendations.',
      icon: <Pill className="w-8 h-8" />,
      technologies: ['React Native', 'Expo', 'Node.js', 'TensorFlow', 'SQLite', 'Python'],
      features: [
        'AI-driven talent evaluation',
        'Player performance analytics',
        'Personalized training recommendations',
        'Real-time dashboard for coaches',
        'Secure cloud storage of assessments',
      ],
      status: 'Completed',
      color: 'from-green-500 to-green-600',
      github: 'https://github.com/25rohit/AI-Sports-Talent-Assessment', // update with your repo
    },
    {
      title: 'Food-Delivery-Railway-Station',
    description:
      'A system designed to ensure the quality and safety of food products by tracking inspections, certifications, and compliance across the supply chain. Provides real-time alerts and reporting to maintain high safety standards.',
    icon: <Pill className="w-8 h-8" />, // Can change icon if needed
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'APIs'],
    features: [
      'Food product safety tracking',
      'Inspection and certification management',
      'Real-time compliance alerts',
      'Supply chain monitoring',
      'Reporting and analytics dashboard',
    ],
    status: 'completed',
    color: 'from-red-500 to-red-600',
    github: 'https://github.com/25rohit/Food-Delivery-Railway-Station',
    },
    {
      title: 'University Online Course Enrollment Platform',
      description:
        'A platform that enables students to browse, register, and manage their university courses online. Features include secure authentication, course catalog browsing, and an admin panel for faculty management.',
      icon: <School className="w-8 h-8" />,
      technologies: ['Typescript', 'Vite', 'MySQL', 'React', 'Express.js'],
      features: [
        'Student registration & login',
        'Course catalog browsing',
        'Online enrollment system',
        'Admin & faculty management panel',
        'Secure payment & receipt generation',
      ],
      status: 'Completed',
      color: 'from-orange-500 to-orange-600',
      github: 'https://github.com/25rohit/University-Online-Course-Enrollment-Platform',
    },
    {
      title: 'IoT Smart Parking System',
      description:
        'An IoT-enabled smart parking solution that detects real-time vehicle availability, guides drivers, and provides analytics for parking management. Uses sensors and cloud integration for scalability.',
      icon: <Car className="w-8 h-8" />,
      technologies: ['IoT', 'Arduino', 'NodeMCU', 'React', 'Firebase', 'Cloud MQTT'],
      features: [
        'Real-time parking space detection',
        'Mobile app integration',
        'Automated gate system',
        'Payment integration',
        'Parking analytics dashboard',
      ],
      status: 'Pursuing',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions addressing real-world challenges across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
            >
              {/* Project Header */}
              <div
                className={`bg-gradient-to-r ${project.color} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full mt-2 ${
                          project.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : project.status === 'In Development'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link Only */}
                <div className="flex">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg group"
                    >
                      <Github
                        size={16}
                        className="group-hover:rotate-12 transition-transform duration-200"
                      />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, and
              innovative ideas. Let's build something amazing together!
            </p>
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
