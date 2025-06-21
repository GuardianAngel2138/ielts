import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, PenTool, Headphones, Mic, Lightbulb, FileText, Target, TestTube2 } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "Reading", path: "/reading", icon: BookOpen },
    { name: "Writing", path: "/writing", icon: PenTool },
    { name: "Listening", path: "/listening", icon: Headphones },
    { name: "Speaking", path: "/speaking", icon: Mic },
    { name: "Tips", path: "/tips-tricks", icon: Lightbulb },
    { name: "Models", path: "/model-answers", icon: FileText },
    { name: "Practice", path: "/practice-tests", icon: Target },
    { name: "Skills Check", path: "/diagnostic-test", icon: TestTube2 },
  ];

  const isActivePath = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IELTS Mastery
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = isActivePath(item.path);
              return (
                <Link key={item.name} to={item.path}>
                  <Button
                    variant="ghost"
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <Icon className={`h-4 w-4 transition-transform duration-300 ${
                      isActive ? "text-white" : "group-hover:scale-110"
                    }`} />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 animate-pulse"></div>
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} />
                <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-2 mt-4">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = isActivePath(item.path);
              return (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className={`transform transition-all duration-300 ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2"
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? "bg-white/20" 
                        : "bg-gray-100 group-hover:bg-blue-100"
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
