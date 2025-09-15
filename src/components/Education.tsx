
import { GraduationCap, Award, Book, Star } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech.)',
      field: 'Artificial Intelligence and Data Science',
      institution: 'Arunai Engineering College',
      period: '2022 - 2026 (Expected)',
      location: 'Tiruvannamalai, Tamil Nadu',
      cgpa: '8.0/10',
      status: 'Completed',
      description: 'Comprehensive program covering software engineering, data structures, algorithms, database systems, and emerging technologies.',
      highlights: [
        'Strong foundation in programming and software engineering principles',
        'Advanced coursework in AI/ML and data science',
        'Active participation in technical events and competitions',
        'Leadership roles in student technical organizations'
      ],
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Software Engineering',
        'Operating Systems',
        'Computer Networks',
        'Machine Learning',
        'Web Technologies',
        'Object-Oriented Programming'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Maths Biology',
      institution: 'Sri V.D.S Jain Higher Secondary School',
      period: '2020 - 2022',
      location: 'Tamil Nadu',
      cgpa: '75%',
      status: 'Completed',
      description: 'Completed higher secondary education with specialization in Computer Science, building strong foundation in mathematics and computing concepts.',
      highlights: [
        'Top 10% of the graduating class',
        'Excellence in Mathematics and Biology',
        'Active participant in science exhibitions',
        'Strong analytical and problem-solving skills'
      ],
      courses: [
        'Biology',
        'Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'Tamil'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistent high performance throughout academic journey',
      icon: <Star className="w-6 h-6 text-yellow-600" />
    },
    {
      title: 'Technical Projects',
      description: 'Successfully completed multiple industry-relevant projects',
      icon: <Book className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Leadership',
      description: 'Led technical teams and mentored junior students',
      icon: <Award className="w-6 h-6 text-green-600" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation and continuous learning journey in Biology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-gray-200">{edu.field}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      edu.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-300 mb-1">Institution</p>
                      <p className="font-medium">{edu.institution}</p>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-1">Period</p>
                      <p className="font-medium">{edu.period}</p>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-1">CGPA/Percentage</p>
                      <p className="font-medium text-green-300">{edu.cgpa}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Highlights</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-gray-600">
                          <ChevronRight size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Relevant Coursework</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors duration-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Academic Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100 hover:border-blue-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed">
            "Education is not the filling of a pail, but the lighting of a fire." - I believe in lifelong learning 
            and staying updated with the latest technologies. My academic foundation provides the base, 
            but my curiosity drives me to explore new technologies and methodologies continuously.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;