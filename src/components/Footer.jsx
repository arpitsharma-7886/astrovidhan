import { Star, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Star className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-2xl font-bold">AstroVidhan</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's most trusted astrology platform connecting you with verified astrologers 
              for accurate predictions and effective solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Our Astrologers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Daily Horoscope</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Love & Relationships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Career Guidance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Marriage Matching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Health Astrology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Business Consultation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Gemstone Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 9876543210</p>
                  <p className="text-gray-300">+91 9876543211</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">support@astrovidhan.com</p>
                  <p className="text-gray-300">info@astrovidhan.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Astrology Street,<br />
                  New Delhi, India - 110001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 AstroVidhan. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Refund Policy</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;