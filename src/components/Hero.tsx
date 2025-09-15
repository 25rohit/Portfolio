
import { Github, Linkedin, Mail, MapPin, Phone, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-400/20 transform -skew-y-6 origin-top-left"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-pulse">
              Welcome to my portfolio
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Padmanathan V
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
              Software Developer & Tech Enthusiast
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Passionate about creating innovative solutions through code. Specializing in full-stack development, 
              system design, and emerging technologies with a focus on user experience and performance.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <span>padmanathanrohit@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <span>+91 9790983750</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>Tiruvannamalai, Tamil Nadu</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://github.com/25rohit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 group"
              >
                <Github size={20} className="text-gray-700 group-hover:text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/padmanathan-v-9971252a0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 group"
              >
                <Linkedin size={20} className="text-gray-700 group-hover:text-blue-600" />
              </a>
              <a
                href="mailto:padmanathanrohit@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 group"
              >
                <Mail size={20} className="text-gray-700 group-hover:text-blue-600" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Learn More
              </button>
              <button
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm">
                <img
                  src="/padmanathan.jpg"
                  alt="Padmanathan V"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-60 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;