import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Clock, BookOpen, PenTool, Headphones, Mic, Play, Users, Star, CheckCircle, Timer } from "lucide-react";

const PracticeTests = () => {
  const fullTests = [
    {
      id: 1,
      title: "Academic IELTS Practice Test 1",
      type: "Academic",
      difficulty: "Intermediate",
      duration: "2h 45m",
      sections: ["Reading", "Writing", "Listening", "Speaking"],
      description: "Complete practice test with authentic IELTS format and timing",
      attempts: 1247,
      rating: 4.8,
      features: ["Detailed feedback", "Band score estimation", "Answer explanations"]
    },
    {
      id: 2,
      title: "General Training IELTS Practice Test 1", 
      type: "General Training",
      difficulty: "Intermediate",
      duration: "2h 45m",
      sections: ["Reading", "Writing", "Listening", "Speaking"],
      description: "Comprehensive General Training test for immigration and work purposes",
      attempts: 892,
      rating: 4.7,
      features: ["Real exam conditions", "Instant scoring", "Performance analytics"]
    },
    {
      id: 3,
      title: "Academic IELTS Practice Test 2",
      type: "Academic", 
      difficulty: "Advanced",
      duration: "2h 45m",
      sections: ["Reading", "Writing", "Listening", "Speaking"],
      description: "Challenging practice test for advanced students targeting Band 7+",
      attempts: 634,
      rating: 4.9,
      features: ["Advanced vocabulary", "Complex structures", "Expert feedback"]
    }
  ];

  const sectionTests = [
    {
      section: "Reading",
      icon: BookOpen,
      color: "blue",
      tests: [
        { title: "Academic Reading Test 1", difficulty: "Intermediate", duration: "60 min", questions: 40 },
        { title: "General Reading Test 1", difficulty: "Beginner", duration: "60 min", questions: 40 },
        { title: "Academic Reading Test 2", difficulty: "Advanced", duration: "60 min", questions: 40 }
      ]
    },
    {
      section: "Writing", 
      icon: PenTool,
      color: "green",
      tests: [
        { title: "Academic Writing Test 1", difficulty: "Intermediate", duration: "60 min", questions: 2 },
        { title: "General Writing Test 1", difficulty: "Beginner", duration: "60 min", questions: 2 },
        { title: "Academic Writing Test 2", difficulty: "Advanced", duration: "60 min", questions: 2 }
      ]
    },
    {
      section: "Listening",
      icon: Headphones,
      color: "purple", 
      tests: [
        { title: "Listening Test 1", difficulty: "Intermediate", duration: "30 min", questions: 40 },
        { title: "Listening Test 2", difficulty: "Beginner", duration: "30 min", questions: 40 },
        { title: "Listening Test 3", difficulty: "Advanced", duration: "30 min", questions: 40 }
      ]
    },
    {
      section: "Speaking",
      icon: Mic,
      color: "orange",
      tests: [
        { title: "Speaking Test 1", difficulty: "Intermediate", duration: "15 min", questions: 3 },
        { title: "Speaking Test 2", difficulty: "Beginner", duration: "15 min", questions: 3 },
        { title: "Speaking Test 3", difficulty: "Advanced", duration: "15 min", questions: 3 }
      ]
    }
  ];

  const quickPractice = [
    {
      title: "Daily Vocabulary Quiz",
      description: "Test your vocabulary knowledge with 10 questions",
      duration: "5 min",
      type: "Vocabulary",
      icon: BookOpen
    },
    {
      title: "Grammar Quick Check",
      description: "Practice common grammar structures in IELTS",
      duration: "10 min", 
      type: "Grammar",
      icon: PenTool
    },
    {
      title: "Listening Skills Drill",
      description: "Short listening exercises for specific skills",
      duration: "15 min",
      type: "Listening",
      icon: Headphones
    },
    {
      title: "Speaking Fluency Practice",
      description: "Record yourself answering Part 1 questions",
      duration: "10 min",
      type: "Speaking", 
      icon: Mic
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner": return "bg-green-100 text-green-700";
      case "intermediate": return "bg-yellow-100 text-yellow-700";
      case "advanced": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-50",
      green: "text-green-600 bg-green-50",
      purple: "text-purple-600 bg-purple-50", 
      orange: "text-orange-600 bg-orange-50"
    };
    return colors[color] || "text-gray-600 bg-gray-50";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Target className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">IELTS Practice Tests</h1>
          <div className="mb-6">
            <Badge variant="secondary" className="bg-yellow-200 text-yellow-900 text-base font-semibold py-1 px-3 rounded-md">
              Coming Soon
            </Badge>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Test your skills with realistic IELTS practice materials. Get instant feedback, track your progress, and identify areas for improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3" disabled>
              <Play className="h-5 w-5 mr-2" />
              Start Full Practice Test
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3" disabled>
              Practice Individual Sections
            </Button>
          </div>
        </div>
      </section>

      {/* Full Practice Tests */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Complete Practice Tests</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {fullTests.map((test) => (
              <Card key={test.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2">{test.type}</Badge>
                      <CardTitle className="text-lg text-gray-900 mb-2">{test.title}</CardTitle>
                      <CardDescription className="text-gray-600">{test.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {test.duration}
                      </span>
                      <Badge className={getDifficultyColor(test.difficulty)}>
                        {test.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {test.attempts.toLocaleString()} attempts
                      </span>
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500" />
                        {test.rating}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {test.sections.map((section, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {section}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {test.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full" disabled>
                      <Play className="h-4 w-4 mr-2" />
                      Start Test
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section-Specific Tests */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Practice by Section</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sectionTests.map((section, index) => {
              const Icon = section.icon;
              const colorClasses = getColorClasses(section.color);
              
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${colorClasses}`}>
                        <Icon className={`h-8 w-8 ${colorClasses.split(' ')[0]}`} />
                      </div>
                      <CardTitle className="text-2xl text-gray-900">{section.section} Practice</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.tests.map((test, testIndex) => (
                        <div key={testIndex} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{test.title}</h4>
                            <Badge className={getDifficultyColor(test.difficulty)}>
                              {test.difficulty}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {test.duration}
                            </span>
                            <span>{test.questions} questions</span>
                          </div>
                          <Button size="sm" className="w-full" disabled>
                            <Play className="h-4 w-4 mr-2" />
                            Start Practice
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Practice */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Quick Practice Sessions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickPractice.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{practice.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{practice.description}</p>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                      <Timer className="h-4 w-4 mr-1" />
                      {practice.duration}
                    </div>
                    <Button size="sm" className="w-full" disabled>
                      <Play className="h-4 w-4 mr-2" />
                      Quick Practice
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-emerald-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Practice with Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Realistic Test Conditions</h3>
                <p className="text-gray-600 text-sm">Experience authentic IELTS format and timing</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Instant Feedback</h3>
                <p className="text-gray-600 text-sm">Get immediate results and detailed explanations</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                <p className="text-gray-600 text-sm">Monitor your improvement over time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Test Your Skills?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take a full practice test or focus on specific areas that need improvement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3" disabled>
              <Play className="h-5 w-5 mr-2" />
              Start Full Test Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3" disabled>
              Choose Section Practice
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticeTests;
