import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Clock, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Award,
  BarChart3,
  PlayCircle,
  Star,
  Zap,
  TrendingUp,
  Smile,
  HelpCircle,
  Lightbulb
} from "lucide-react";
import { diagnosticTestQuestions } from "@/data/diagnosticTestQuestions";

const DiagnosticTest = () => {
  const navigate = useNavigate();

  const { reading } = diagnosticTestQuestions;
  const readingDuration = Math.ceil(reading.length * 1.5);

  const testBenefits = [
    "Discover your current reading level in a friendly way",
    "Find out what you're already great at",
    "Get helpful tips for areas to improve",
    "Practice with real exam-style questions",
    "Learn new vocabulary and grammar naturally",
    "Get your personalized CEFR level assessment"
  ];

  const handleStartTest = () => {
    navigate(`/test/in-progress?skills=reading`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-pink-100 to-blue-100 text-blue-800 mb-6 border border-blue-200">
              <Heart className="h-4 w-4 mr-2 text-pink-500" />
              Free IELTS Reading Skills Check
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Check Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mt-2">
              Reading Skills! 📚
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Take our friendly reading skills assessment to see where you stand and get personalized tips to help you improve your IELTS score.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <Clock className="h-6 w-6 text-blue-500" />
              <span className="text-gray-700 font-medium">Just {readingDuration} minutes</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <Zap className="h-6 w-6 text-green-500" />
              <span className="text-gray-700 font-medium">Instant feedback</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <Star className="h-6 w-6 text-yellow-500" />
              <span className="text-gray-700 font-medium">Personalized results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Is This Hard to Follow? Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <HelpCircle className="h-12 w-12 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Is This Hard to Follow? 🤔</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Don't worry! Let's break it down in the simplest way possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left side - What it really is */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-orange-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-8 w-8 text-yellow-500" />
                  <CardTitle className="text-2xl text-gray-900">What This Really Is</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">You read some short texts</h4>
                    <p className="text-gray-600 text-sm">Just like reading a news article or a blog post</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Answer simple questions</h4>
                    <p className="text-gray-600 text-sm">Multiple choice or fill-in-the-blank - nothing tricky!</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Get your results instantly</h4>
                    <p className="text-gray-600 text-sm">See where you stand and what to do next</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right side - Why it's actually easy */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-green-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Smile className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-2xl text-gray-900">Why It's Actually Easy</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">No time pressure</h4>
                    <p className="text-gray-600 text-sm">Take your time, there's no rushing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">No wrong answers</h4>
                    <p className="text-gray-600 text-sm">This is just to see where you are now</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Help at every step</h4>
                    <p className="text-gray-600 text-sm">Clear instructions and friendly guidance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Just {readingDuration} minutes</h4>
                    <p className="text-gray-600 text-sm">Shorter than watching a YouTube video!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Simple comparison */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Think of it like this...</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <BookOpen className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-bold text-lg text-blue-800 mb-2">Like Reading</h4>
                  <p className="text-blue-700">A magazine article you enjoy</p>
                </div>
                <div className="p-6 bg-green-50 rounded-xl">
                  <Target className="h-10 w-10 text-green-500 mx-auto mb-3" />
                  <h4 className="font-bold text-lg text-green-800 mb-2">Like Taking</h4>
                  <p className="text-green-700">A friendly quiz with a friend</p>
                </div>
                <div className="p-6 bg-purple-50 rounded-xl">
                  <Award className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                  <h4 className="font-bold text-lg text-purple-800 mb-2">Like Getting</h4>
                  <p className="text-purple-700">Helpful advice from a teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Friendly Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why You'll Love This Skills Check ❤️</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              It's designed to be encouraging and helpful, not stressful!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 p-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-lg leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Test Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-2xl">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">Ready to Get Started? 🚀</CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-3">
                Don't worry - this is just for fun and learning! There's no pressure here.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={handleStartTest}
              >
                <PlayCircle className="mr-3 h-7 w-7" />
                Start My Skills Check
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                🎯 No account needed • 100% free • Takes just a few minutes
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <TrendingUp className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Remember: This is About Growth! 🌱</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whatever your current level, this assessment will help you understand where you are and give you clear, 
              actionable steps to improve. Every expert was once a beginner!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-xl p-6 shadow-lg border border-gray-100">
              <Award className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800 mb-2">Celebrate Progress</h3>
              <p className="text-gray-600">Every question you answer is a step forward in your IELTS journey</p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 shadow-lg border border-gray-100">
              <Target className="h-10 w-10 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800 mb-2">Clear Goals</h3>
              <p className="text-gray-600">Get specific advice on what to focus on next for maximum improvement</p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 shadow-lg border border-gray-100">
              <BookOpen className="h-10 w-10 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800 mb-2">Learn & Grow</h3>
              <p className="text-gray-600">Discover new strategies and techniques to boost your reading skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's See What You Can Do! ✨</h2>
          <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto">
            Take the first step towards your IELTS goals. This friendly assessment is here to help, not judge.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-white text-blue-700 hover:bg-gray-50 hover:scale-105"
              onClick={handleStartTest}
            >
              Begin My Skills Assessment
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          <p className="text-sm opacity-80 mt-6">
            💡 Remember: There are no wrong answers, only learning opportunities!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiagnosticTest;
