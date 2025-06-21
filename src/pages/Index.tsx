
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GuidedTour from "@/components/GuidedTour";
import { BookOpen, PenTool, Headphones, Mic, Lightbulb, FileText, Target, Star, Users, Trophy, Clock, ArrowRight, CheckCircle, TestTube2, Play, ChevronRight, Sparkles, Youtube, MessageCircle, Calendar, Award } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const learningSteps = [
    {
      step: "1",
      title: "Take Your Skills Assessment",
      description: "Start with our free diagnostic test to identify your current level and areas for improvement",
      action: "Take Diagnostic Test",
      path: "/diagnostic-test",
      icon: TestTube2,
      color: "bg-blue-500",
      duration: "15 minutes"
    },
    {
      step: "2", 
      title: "Master Each Skill",
      description: "Learn proven strategies for Reading, Writing, Listening, and Speaking with step-by-step guides",
      action: "Explore Skills",
      path: "/reading",
      icon: BookOpen,
      color: "bg-green-500",
      duration: "Self-paced"
    },
    {
      step: "3",
      title: "Practice with Real Tests",
      description: "Apply your knowledge with authentic IELTS practice materials and mock exams",
      action: "Start Practicing",
      path: "/practice-tests",
      icon: Target,
      color: "bg-purple-500",
      duration: "Ongoing"
    },
    {
      step: "4",
      title: "Learn from Experts",
      description: "Access high-scoring model answers and insider tips from IELTS professionals",
      action: "View Examples",
      path: "/model-answers",
      icon: Award,
      color: "bg-orange-500",
      duration: "Reference"
    }
  ];

  const skills = [
    {
      title: "Reading",
      description: "Master academic and general reading with proven strategies",
      icon: BookOpen,
      path: "/reading",
      color: "bg-blue-500 hover:bg-blue-600",
      avgScore: "7.5+",
      duration: "3-4 weeks"
    },
    {
      title: "Writing",
      description: "Learn to write compelling Task 1 and Task 2 essays",
      icon: PenTool,
      path: "/writing",
      color: "bg-green-500 hover:bg-green-600",
      avgScore: "7.0+",
      duration: "4-6 weeks"
    },
    {
      title: "Listening",
      description: "Improve your listening skills with diverse accents",
      icon: Headphones,
      path: "/listening",
      color: "bg-purple-500 hover:bg-purple-600",
      avgScore: "8.0+",
      duration: "2-3 weeks"
    },
    {
      title: "Speaking",
      description: "Develop fluency and confidence for all speaking parts",
      icon: Mic,
      path: "/speaking",
      color: "bg-orange-500 hover:bg-orange-600",
      avgScore: "7.5+",
      duration: "3-5 weeks"
    }
  ];

  const quickActions = [
    { title: "Diagnostic Test", path: "/diagnostic-test", icon: TestTube2, description: "Find your level" },
    { title: "Practice Tests", path: "/practice-tests", icon: Target, description: "Mock exams" },
    { title: "Expert Tips", path: "/tips-tricks", icon: Lightbulb, description: "Proven strategies" },
    { title: "Model Answers", path: "/model-answers", icon: FileText, description: "High-scoring examples" }
  ];

  const stats = [
    { icon: Users, number: "75,000+", label: "Students Helped", color: "text-blue-600" },
    { icon: Star, number: "8.5", label: "Average Score Improvement", color: "text-yellow-600" },
    { icon: Trophy, number: "97%", label: "Success Rate", color: "text-green-600" },
    { icon: Clock, number: "24/7", label: "Free Access", color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      <GuidedTour />
      
      {/* Hero Section - More Concise */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 mb-6 shadow-lg">
              <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
              Free IELTS Preparation by Abhinav
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in">
            Your Path to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mt-2">
              IELTS Success
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Follow our proven 4-step method used by thousands of successful students. Get expert guidance, practice with authentic materials, and achieve your target score.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 animate-fade-in">
            <Link to="/diagnostic-test">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <TestTube2 className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
            </Link>
            <Link to="/practice-tests">
              <Button disabled size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 sm:px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Play className="mr-2 h-5 w-5" />
                Practice Tests
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Steps - Main Focus */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your 4-Step Journey to IELTS Success</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Follow this proven method used by thousands of successful students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {learningSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="h-8 w-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {step.step}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold mb-2">{step.title}</CardTitle>
                      <div className="text-sm text-blue-600 font-medium bg-blue-50 rounded-full px-3 py-1 inline-block mb-3">
                        {step.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center mb-4">{step.description}</CardDescription>
                      <Link to={step.path}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                          {step.action}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  {index < learningSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="h-6 w-6 text-blue-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-lg text-gray-600">Jump directly to what you need</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} to={action.path} className="group">
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Master All Four Skills</h2>
            <p className="text-lg text-gray-600">Comprehensive training for each IELTS component</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Link key={index} to={skill.path} className="group">
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 rounded-2xl ${skill.color} flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold mb-2">{skill.title}</CardTitle>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-green-600 font-semibold">{skill.avgScore}</span>
                        <span className="text-blue-600 font-semibold">{skill.duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center mb-4">{skill.description}</CardDescription>
                      <div className="flex items-center justify-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600">Join thousands of successful students</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                    <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-4 group-hover:scale-125 transition-all duration-500`} />
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Me & Contact Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Meet Your IELTS Expert</h2>
          <div className="mt-8 bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-8 rounded-2xl shadow-xl border border-gray-100">
            <Avatar className="h-24 w-24 mx-auto mb-6 shadow-lg">
              <AvatarFallback className="text-4xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">A</AvatarFallback>
            </Avatar>
            <div className="text-left max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Hello! I'm <strong>Abhinav</strong>, a certified IELTS trainer with years of experience helping students achieve their dream scores. I've helped many students worldwide, and my goal is to make high-quality IELTS preparation accessible to everyone through this free platform."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Personal Guidance</h3>
                    <p className="text-sm text-gray-600 mb-4">Need personalized help with your IELTS preparation?</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Me
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">1-on-1 Sessions</h3>
                    <p className="text-sm text-gray-600 mb-4">Book a private session for intensive training</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Session
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-sm text-gray-600 font-medium text-center">
                Email: 
                <a href="mailto:abhinav.ielts.prep@email.com" className="text-blue-600 hover:text-blue-700 hover:underline font-semibold ml-2 transition-colors duration-300">
                  abhinavkrishnas@avensora.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div><h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Coming soon!!</h1></div>
            <div className="flex items-center justify-center mb-4">
              <Youtube className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Exclusive Video Tutorials</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch my comprehensive IELTS tutorials on YouTube for in-depth explanations and live demonstrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IELTS Writing Task 2 Masterclass",
                description: "Complete guide to scoring 8+ in Writing Task 2 with live examples",
                duration: "45 mins",
                views: "125K+",
                category: "Writing"
              },
              {
                title: "Speaking Part 2 Strategies",
                description: "How to speak confidently for 2 minutes with perfect structure",
                duration: "32 mins", 
                views: "89K+",
                category: "Speaking"
              },
              {
                title: "Reading Time Management",
                description: "Proven techniques to finish all 40 questions in 60 minutes",
                duration: "28 mins",
                views: "156K+",
                category: "Reading"
              }
            ].map((video, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden group">
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-500 to-pink-600 h-48 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold line-clamp-2">{video.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{video.views} views</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{video.description}</CardDescription>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                    <Youtube className="mr-2 h-4 w-4" />
                    Watch on YouTube
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <Youtube className="mr-2 h-6 w-6" />
              Subscribe to My Channel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Achieve Your Target Score?</h2>
          <p className="text-xl mb-12 opacity-95">Start your IELTS journey today with proven strategies and expert guidance</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/diagnostic-test">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white text-blue-700 hover:bg-gray-50">
                <TestTube2 className="mr-2 h-5 w-5" />
                Start Free Assessment
              </Button>
            </Link>
            <Link to="/practice-tests">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-700 px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Target className="mr-2 h-5 w-5" />
                Practice Tests
              </Button>
            </Link>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm opacity-90">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              100% Free Access
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Expert-Created Content
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Proven Results
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
