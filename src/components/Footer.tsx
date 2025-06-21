import { BookOpen, Heart, Mail, MapPin, Users, Award, Globe, Twitter, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  IELTS Mastery
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your comprehensive free resource for IELTS preparation. Master all four skills with expert guidance and practice materials designed for success.
              </p>
              
              {/* Stats */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span>75,000+ students helped worldwide</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Award className="h-4 w-4 text-green-400" />
                  <span>97% success rate for Band 7+</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Globe className="h-4 w-4 text-purple-400" />
                  <span>Available in 150+ countries</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">IELTS Skills</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/reading" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <BookOpen className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Reading Strategies
                  </a>
                </li>
                <li>
                  <a href="/writing" className="text-gray-300 hover:text-green-400 transition-colors flex items-center group">
                    <span className="mr-2">✍️</span>
                    Writing Tasks
                  </a>
                </li>
                <li>
                  <a href="/listening" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                    <span className="mr-2">🎧</span>
                    Listening Practice
                  </a>
                </li>
                <li>
                  <a href="/speaking" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group">
                    <span className="mr-2">🎤</span>
                    Speaking Confidence
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Free Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/tips-tricks" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span className="mr-2">💡</span>
                    Expert Tips & Tricks
                  </a>
                </li>
                <li>
                  <a href="/model-answers" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span className="mr-2">📋</span>
                    Band 9 Model Answers
                  </a>
                </li>
                <li>
                  <a href="/practice-tests" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span className="mr-2">🎯</span>
                    Practice Tests
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span className="mr-2">📊</span>
                    Score Calculator
                    <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">Soon</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span className="mr-2">📱</span>
                    Mobile App
                    <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Coming</span>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Support & Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Support & Info</h3>
              <ul className="space-y-3 mb-6">
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">❓</span>
                    FAQ & Help
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">📖</span>
                    Study Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">🌟</span>
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                    <span className="mr-2">📧</span>
                    Newsletter
                  </a>
                </li>
              </ul>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@ieltsmastery.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Available worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Media Section */}
      <div className="border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm font-medium">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors group">
                  <Twitter className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-800 transition-colors group">
                  <Facebook className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors group">
                  <Instagram className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors group">
                  <Youtube className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>for IELTS learners worldwide</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
              <span>© 2024 IELTS Mastery. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
