
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Youtube, Play, Star, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface CreatorPromotionProps {
  showContact?: boolean;
  showYoutube?: boolean;
  variant?: 'full' | 'compact';
}

const CreatorPromotion = ({ 
  showContact = true, 
  showYoutube = true, 
  variant = 'full' 
}: CreatorPromotionProps) => {
  const videoSamples = [
    {
      title: "IELTS Writing Task 2 Masterclass",
      description: "Complete guide to scoring 8+ in Writing Task 2",
      duration: "45 mins",
      views: "125K+",
      category: "Writing"
    },
    {
      title: "Speaking Confidence Builder",
      description: "Overcome speaking anxiety and boost fluency",
      duration: "32 mins", 
      views: "89K+",
      category: "Speaking"
    },
    {
      title: "Reading Speed Techniques",
      description: "Double your reading speed while maintaining accuracy",
      duration: "28 mins",
      views: "156K+",
      category: "Reading"
    }
  ];

  const handleContactClick = () => {
    // Scroll to contact section or navigate to contact page
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingClick = () => {
    // Open Google Calendar booking - replace with your actual URL
    window.open("https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID", '_blank');
  };

  return (
    <div className="space-y-20">
      {/* Contact Section */}
      {showContact && (
        <section className={`py-16 bg-white px-4 sm:px-6 lg:px-8 ${variant === 'compact' ? 'py-12' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className={`font-bold text-gray-900 mb-4 ${variant === 'compact' ? 'text-2xl' : 'text-3xl'}`}>
                Need Personal Guidance?
              </h2>
              <p className="text-lg text-gray-600">
                Get direct help from Abhinav for your IELTS preparation
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-8 rounded-2xl shadow-xl border border-gray-100">
              {variant === 'full' && (
                <div className="flex items-center justify-center mb-6">
                  <Avatar className="h-16 w-16 shadow-lg">
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">A</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 text-left">
                    <h3 className="text-xl font-bold text-gray-900">Abhinav</h3>
                    <p className="text-gray-600">Certified IELTS Trainer</p>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Ask Questions</h3>
                    <p className="text-sm text-gray-600 mb-4">Get personalized answers to your IELTS doubts</p>
                    <Button 
                      onClick={handleContactClick}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Me
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">1-on-1 Coaching</h3>
                    <p className="text-sm text-gray-600 mb-4">Book private sessions for intensive training</p>
                    <Button 
                      onClick={handleBookingClick}
                      className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Session
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Email: 
                  <a href="mailto:abhinav.ielts.prep@email.com" className="text-blue-600 hover:text-blue-700 hover:underline font-semibold ml-2 transition-colors duration-300">
                    abhinav.ielts.prep@email.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* YouTube Section */}
      {showYoutube && (
        <section className={`py-16 bg-gradient-to-br from-red-50 to-pink-50 ${variant === 'compact' ? 'py-12' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Youtube className="h-8 w-8 text-red-600 mr-3" />
                <h2 className={`font-bold text-gray-900 ${variant === 'compact' ? 'text-2xl' : 'text-3xl'}`}>
                  Watch My YouTube Tutorials
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                In-depth video explanations and live demonstrations of IELTS strategies
              </p>
            </div>
            
            <div className={`grid gap-6 ${variant === 'compact' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {(variant === 'compact' ? videoSamples.slice(0, 2) : videoSamples).map((video, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden group">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-red-500 to-pink-600 h-40 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        {video.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold line-clamp-2">{video.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{video.views} views</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{video.description}</p>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                      <Youtube className="mr-2 h-4 w-4" />
                      Watch Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Youtube className="mr-2 h-5 w-5" />
                Visit My YouTube Channel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CreatorPromotion;
