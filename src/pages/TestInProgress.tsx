import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { diagnosticTestQuestions, ReadingQuestion, McqQuestion, TrueFalseNgQuestion, SentenceCompletionQuestion } from "@/data/diagnosticTestQuestions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const { reading } = diagnosticTestQuestions;
const readingDuration = Math.ceil(reading.length * 1.5) * 60; // in seconds

const TestInProgress = () => {
  const navigate = useNavigate();
  
  const [timeLeft, setTimeLeft] = useState(readingDuration);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinishTest();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleFinishTest = () => {
    toast.success('Test complete! Here are your results.');
    const finalAnswers = { reading: answers };
    navigate('/test-results', { state: { answers: finalAnswers, skills: ['reading'] } }); 
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prev => Math.min(prev + 1, reading.length - 1));
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(prev => Math.max(prev - 1, 0));
  };

  const renderQuestionContent = () => {
    const question: ReadingQuestion = reading[currentQuestionIndex];

    if (question.type === 'mcq') {
      const mcqQuestion = question as McqQuestion;
      return (
        <div>
          <p className="mb-4 bg-gray-50 p-4 rounded-lg border text-gray-700 leading-relaxed">{mcqQuestion.passage}</p>
          <p className="font-semibold mb-4 text-lg text-gray-800">{currentQuestionIndex + 1}. {mcqQuestion.question}</p>
          <RadioGroup 
            value={answers[mcqQuestion.id] || ""}
            onValueChange={(value) => handleAnswerChange(mcqQuestion.id, value)}
            className="space-y-2"
          >
            {mcqQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 border has-[input:checked]:bg-blue-50 has-[input:checked]:border-blue-300 transition-colors">
                <RadioGroupItem value={option} id={`${mcqQuestion.id}-${index}`} />
                <Label htmlFor={`${mcqQuestion.id}-${index}`} className="flex-1 cursor-pointer text-base text-gray-700">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      );
    }

    if (question.type === 'true-false-ng') {
        const tfngQuestion = question as TrueFalseNgQuestion;
        return (
          <div>
            <p className="mb-4 bg-gray-50 p-4 rounded-lg border text-gray-700 leading-relaxed">{tfngQuestion.passage}</p>
            <p className="font-semibold mb-2 text-lg text-gray-800">{currentQuestionIndex + 1}. Review the following statement:</p>
            <p className="italic bg-yellow-50 border border-yellow-200 p-3 rounded-md mb-4 text-gray-800">"{tfngQuestion.statement}"</p>
            <p className="text-sm text-gray-600 mb-4">According to the passage, is this statement True, False, or Not Given?</p>
            <RadioGroup 
              value={answers[tfngQuestion.id] || ""}
              onValueChange={(value) => handleAnswerChange(tfngQuestion.id, value)}
              className="space-y-2"
            >
              {['True', 'False', 'Not Given'].map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 border has-[input:checked]:bg-blue-50 has-[input:checked]:border-blue-300 transition-colors">
                  <RadioGroupItem value={option} id={`${tfngQuestion.id}-${index}`} />
                  <Label htmlFor={`${tfngQuestion.id}-${index}`} className="flex-1 cursor-pointer text-base text-gray-700">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      }
    
    if (question.type === 'sentence-completion') {
        const scQuestion = question as SentenceCompletionQuestion;
        return (
          <div>
            <p className="mb-4 bg-gray-50 p-4 rounded-lg border text-gray-700 leading-relaxed">{scQuestion.passage}</p>
            <p className="font-semibold mb-4 text-lg text-gray-800">{currentQuestionIndex + 1}. {scQuestion.question}</p>
            <Label htmlFor={`sc-answer-${scQuestion.id}`} className="font-semibold text-gray-700">Your Answer</Label>
            <input
              id={`sc-answer-${scQuestion.id}`}
              type="text"
              placeholder="Type your answer here..."
              className="mt-2 w-full flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={answers[scQuestion.id] || ""}
              onChange={(e) => handleAnswerChange(scQuestion.id, e.target.value)}
            />
          </div>
        );
      }

    return <p>Unsupported question type.</p>;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8 shadow-lg bg-white/80 backdrop-blur-sm border border-gray-100">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-3xl font-bold text-gray-800">Reading Diagnostic Test</CardTitle>
            <div className={`flex items-center space-x-2 text-2xl font-semibold rounded-lg px-4 py-2 transition-colors duration-500 ${
              timeLeft < 60 ? 'text-red-600 bg-red-100' : 'text-gray-700 bg-gray-100'
            }`}>
              <Timer className="h-7 w-7" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </CardHeader>
        </Card>
        
        <Card className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <BookOpen className="mr-3 h-7 w-7 text-blue-600" />
              Reading Section
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderQuestionContent()}
            <div className="mt-6 pt-6 border-t flex justify-between items-center">
                <Button 
                    onClick={handlePreviousQuestion} 
                    disabled={currentQuestionIndex === 0}
                    variant="outline"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                </Button>
                <span className="text-sm font-medium text-gray-600">
                    Question {currentQuestionIndex + 1} of {reading.length}
                </span>
                <Button 
                    onClick={handleNextQuestion} 
                    disabled={currentQuestionIndex === reading.length - 1}
                >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button onClick={handleFinishTest} size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Finish Test & See Results
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestInProgress;
