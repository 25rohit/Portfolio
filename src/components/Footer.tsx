
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/25rohit',
      name: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/padmanathan-v-9971252a0',
      name: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:padmanathanrohit@gmail.com',
      name: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Padmanathan V</h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Software Developer passionate about creating innovative solutions through clean, 
              efficient code. Always eager to learn and contribute to meaningful projects.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg group"
                  title={social.name}
                >
                  <span className="group-hover:rotate-12 transition-transform duration-200 block">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                <Mail size={16} className="inline mr-2" />
                padmanathanrohit@gmail.com
              </p>
              <p className="text-gray-400 text-sm">
                <Mail size={16} className="inline mr-2" />
                +91 9790983750
              </p>
              <p className="text-gray-400 text-sm">
                <MapPin size={16} className="inline mr-2" />
                Tiruvannamalai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Padmanathan V. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Back to top</span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg group"
                title="Scroll to top"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;