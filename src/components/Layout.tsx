import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, MapPin, Mail, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> Mavoko Sub County, Kenya</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-1" /> info@swikkdomains.co.ke</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center font-semibold"><Phone className="w-4 h-4 mr-1" /> 0735 074 910 / 0706 027 118</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                SD
              </div>
              <span className="font-bold text-xl md:text-2xl text-gray-900 tracking-tight">
                Swikk Domains <span className="text-red-600">Computers</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors hover:text-red-600 ${
                    location.pathname === link.path ? 'text-red-600' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+254735074910" className="flex items-center text-red-600 font-semibold hover:text-red-800 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-red-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+254735074910"
                className="mt-4 w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold">
                  SD
                </div>
                <span className="font-bold text-xl tracking-tight">
                  Swikk Domains
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted tech solutions partner in Mavoko. We specialize in POS systems, CCTV installation, and premium computer & phone accessories.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons could go here */}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-red-400 flex items-center transition-colors">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Our Services</h3>
              <ul className="space-y-3">
                <li className="text-gray-400 flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> POS Systems</li>
                <li className="text-gray-400 flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> CCTV Installation</li>
                <li className="text-gray-400 flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Computer Accessories</li>
                <li className="text-gray-400 flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Phone Accessories</li>
                <li className="text-gray-400 flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> IT Support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Mavoko Sub County,<br />Machakos, Kenya</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">0735 074 910 / 0706 027 118</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">info@swikkdomains.co.ke</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Swikk Domains Computers. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254735074910?text=Hello%20Swikk%20Domains%20Computers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
