
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, BookOpen, CheckCircle, XCircle, AlertTriangle, ThumbsUp, GraduationCap, Users, BookOpenCheck } from "lucide-react";
import { diagnosticTestQuestions, ReadingQuestion } from "@/data/diagnosticTestQuestions";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";

const TestResults = () => {
  const location = useLocation();
  const { answers } = location.state || { answers: null };

  const calculateScores = () => {
    let correct = 0;
    const questions = diagnosticTestQuestions.reading;
    const total = questions.length;
    
    if (total > 0 && answers?.reading) {
      const readingAnswers = answers.reading;
      questions.forEach((question) => {
        const rQuestion = question as ReadingQuestion;
        const userAnswer = readingAnswers[rQuestion.id];
        if (userAnswer) {
          if (rQuestion.type === 'sentence-completion') {
            if (userAnswer.trim().toLowerCase() === rQuestion.correctAnswer.trim().toLowerCase()) {
              correct++;
            }
          } else {
            if (userAnswer === rQuestion.correctAnswer) {
              correct++;
            }
          }
        }
      });
    }
    
    const percentage = total > 0 ? (correct / total) * 100 : 0;
    const band = total > 0 ? (correct / total) * 9 : 0;
    
    return { score: band.toFixed(1), correct, total, overallBand: band, percentage };
  };

  const { score, correct, total, overallBand, percentage } = calculateScores();

  const getCefrLevel = (score: number) => {
    if (score >= 8.5) return { level: 'C2', description: 'Proficient' };
    if (score >= 7.0) return { level: 'C1', description: 'Advanced / Effective Operational Proficiency' };
    if (score >= 5.5) return { level: 'B2', description: 'Independent / Vantage' };
    if (score >= 4.0) return { level: 'B1', description: 'Independent / Threshold' };
    return { level: 'A2/A1', description: 'Basic User' };
  }

  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 80) return 'excellent';
    if (percentage >= 60) return 'good';
    if (percentage >= 40) return 'needs-improvement';
    return 'needs-significant-help';
  };

  const getRecommendations = (performanceLevel: string, band: number) => {
    switch (performanceLevel) {
      case 'excellent':
        return {
          icon: <ThumbsUp className="h-8 w-8 text-green-600" />,
          title: "Excellent Work! 🎉",
          message: "You're doing great! Your English reading skills are strong.",
          suggestions: [
            "Continue with online practice to maintain your skills",
            "Consider advanced IELTS practice materials",
            "A tutor could help you reach even higher band scores (8.5+)",
            "Focus on time management and exam strategies"
          ],
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-800"
        };
      
      case 'good':
        return {
          icon: <BookOpenCheck className="h-8 w-8 text-blue-600" />,
          title: "Good Progress! 📚",
          message: "You have a solid foundation, but there's room for improvement.",
          suggestions: [
            "Online practice will definitely help you improve",
            "Working with a tutor would accelerate your progress significantly",
            "Focus on expanding your vocabulary",
            "Practice different question types regularly"
          ],
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-800"
        };
      
      case 'needs-improvement':
        return {
          icon: <AlertTriangle className="h-8 w-8 text-yellow-600" />,
          title: "Keep Going! 💪",
          message: "You're on the right track, but focused practice is needed.",
          suggestions: [
            "A tutor would be very beneficial for personalized guidance",
            "Combine online practice with structured learning",
            "Work on basic reading comprehension skills",
            "Build your vocabulary systematically"
          ],
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
          textColor: "text-yellow-800"
        };
      
      case 'needs-significant-help':
        return {
          icon: <GraduationCap className="h-8 w-8 text-red-600" />,
          title: "Let's Build Your Foundation! 🌱",
          message: "Everyone starts somewhere! With the right support, you can improve significantly.",
          suggestions: [
            "We strongly recommend working with a qualified IELTS tutor",
            "Focus on fundamental English reading skills first",
            "Start with basic vocabulary building",
            "Take your time - consistent practice is key"
          ],
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-800"
        };
      
      default:
        return {
          icon: <BookOpen className="h-8 w-8 text-gray-600" />,
          title: "Assessment Complete",
          message: "Here are your personalized recommendations.",
          suggestions: ["Continue practicing to improve your skills"],
          bgColor: "bg-gray-50",
          borderColor: "border-gray-200",
          textColor: "text-gray-800"
        };
    }
  };

  const cefr = getCefrLevel(overallBand);
  const performanceLevel = getPerformanceLevel(percentage);
  const recommendations = getRecommendations(performanceLevel, overallBand);

  if (!answers) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">No results to display.</h1>
            <p className="text-gray-600 mb-8">Please complete a skills check to see your results.</p>
            <Link to="/diagnostic-test">
                <Button>Take a Skills Check</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl text-center shadow-2xl bg-white/90 backdrop-blur-lg border-gray-100 animate-in fade-in-50 duration-500 mx-auto">
          <CardHeader className="pb-4">
            <Award className="mx-auto h-20 w-20 text-yellow-400 drop-shadow-lg" />
            <CardTitle className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">Skills Check Complete!</CardTitle>
            <CardDescription className="text-xl text-gray-600 mt-2">Here's your English reading assessment and personalized recommendations.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-blue-100/50 rounded-xl border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Estimated Band Score</h3>
                <p className="text-6xl font-bold text-blue-600">{(Math.round(overallBand * 2) / 2).toFixed(1)}</p>
              </div>
              <div className="p-6 bg-green-100/50 rounded-xl border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">CEFR Level</h3>
                <p className="text-4xl font-bold text-green-600">{cefr.level}</p>
                <p className="text-sm text-green-700">{cefr.description}</p>
              </div>
              <div className="p-6 bg-purple-100/50 rounded-xl border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Accuracy</h3>
                <p className="text-4xl font-bold text-purple-600">{percentage.toFixed(0)}%</p>
                <p className="text-sm text-purple-700">{correct} out of {total} correct</p>
              </div>
            </div>

            {/* Personalized Recommendations */}
            <Alert className={`mb-8 ${recommendations.bgColor} ${recommendations.borderColor} border-2`}>
              <div className="flex items-center space-x-4">
                {recommendations.icon}
                <div className="text-left flex-1">
                  <h4 className={`text-xl font-bold ${recommendations.textColor} mb-2`}>
                    {recommendations.title}
                  </h4>
                  <AlertDescription className={`${recommendations.textColor} text-base mb-4`}>
                    {recommendations.message}
                  </AlertDescription>
                  <div className="space-y-2">
                    <h5 className={`font-semibold ${recommendations.textColor}`}>Recommended Next Steps:</h5>
                    <ul className="space-y-1">
                      {recommendations.suggestions.map((suggestion, index) => (
                        <li key={index} className={`flex items-start space-x-2 ${recommendations.textColor}`}>
                          <span className="text-lg">•</span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Alert>

            {/* Contact Information */}
            <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center space-x-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Need Personal Guidance?</h4>
                    <p className="text-gray-600 mb-3">
                      Ready to work with a tutor or have questions about your results?
                    </p>
                    <a 
                      href="mailto:support@ieltsmastery.com" 
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors duration-300"
                    >
                      Contact Us: support@ieltsmastery.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4 text-left mb-8">
                <div className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 border">
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-blue-500" />
                    <p className="font-semibold text-lg text-gray-700">Reading Assessment</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-gray-800">{score}</p>
                    <p className="text-sm text-gray-500">{correct} / {total} correct ({percentage.toFixed(0)}%)</p>
                  </div>
                </div>
            </div>

            {answers?.reading && (
              <div className="mt-8 text-left">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold text-gray-800 hover:no-underline">
                      📝 Review Your Answers (Optional)
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        {diagnosticTestQuestions.reading.map((q, index) => {
                          const userAnswer = answers.reading[q.id];
                          let isCorrect = false;
                          if (userAnswer) {
                            if (q.type === 'sentence-completion') {
                                isCorrect = userAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                            } else {
                                isCorrect = userAnswer === q.correctAnswer;
                            }
                          }
                          return (
                            <div key={q.id} className={`p-4 rounded-lg border ${isCorrect ? 'border-green-300 bg-green-50/70' : 'border-red-300 bg-red-50/70'}`}>
                              <p className="font-semibold text-gray-800">Question {index + 1}</p>
                              <p className="mt-2 text-gray-600 text-sm">{q.passage}</p>
                              
                              {q.type === 'mcq' && <p className="mt-3 font-medium text-gray-800">{q.question}</p>}
                              {q.type === 'true-false-ng' && <p className="mt-3 font-medium text-gray-800">Statement: "{q.statement}"</p>}
                              {q.type === 'sentence-completion' && <p className="mt-3 font-medium text-gray-800">{q.question}</p>}

                              <div className="mt-4 text-sm space-y-2 border-t pt-3">
                                <p className="text-gray-700">Your answer: <span className="font-bold">{userAnswer || "Not answered"}</span></p>
                                <p className="text-gray-700">Correct answer: <span className="font-bold">{q.correctAnswer}</span></p>
                              </div>
                              <div className="mt-3 flex items-center">
                                {isCorrect ? (
                                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                                )}
                                <span className={`font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                  {isCorrect ? 'Correct' : 'Incorrect'}
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}

            <p className="text-gray-500 text-sm my-8">
              Disclaimer: This is an estimated score based on a skills check. For an official score, you must take the official IELTS test.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tips-tricks">
                <Button size="lg" className="w-full sm:w-auto">View Tips & Strategies</Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Back to Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default TestResults;
