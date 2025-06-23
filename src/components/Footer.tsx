
import { Heart, MapPin, Mail, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Parish Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-sacred rounded-full p-2">
                <Heart className="h-6 w-6 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Sacred Heart Parish</h3>
                <p className="text-sm text-gray-400">Est. 1983</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the Catholic community in Tamil Nadu for over 40 years with faith, love, and devotion to the Sacred Heart of Jesus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/mass-services" className="text-gray-400 hover:text-white transition-colors">Mass Schedule</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Parish History</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-white transition-colors">Anbiyams (BCCs)</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Parish Newsletter</Link></li>
              <li><Link to="/facilities" className="text-gray-400 hover:text-white transition-colors">Church Facilities</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Daily Mass</span></li>
              <li><span className="text-gray-400">Confessions</span></li>
              <li><span className="text-gray-400">Baptisms</span></li>
              <li><span className="text-gray-400">Weddings</span></li>
              <li><span className="text-gray-400">Funerals</span></li>
              <li><span className="text-gray-400">Adoration</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sacred mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Sacred Heart Church</p>
                  <p className="text-gray-400 text-sm">Parish Address</p>
                  <p className="text-gray-400 text-sm">Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sacred" />
                <p className="text-gray-400 text-sm">parish@sacredheart.org</p>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-sacred" />
                <div>
                  <p className="text-gray-400 text-sm">Office Hours:</p>
                  <p className="text-gray-400 text-sm">Mon-Sat: 9AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sacred Heart Parish. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Accessibility</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
