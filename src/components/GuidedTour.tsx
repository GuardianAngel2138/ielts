
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, ArrowRight, ArrowLeft, Mail, BookOpen, PenTool, Headphones, Mic, TestTube2, Target, Lightbulb } from 'lucide-react';

interface TourStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  action?: string;
  highlight?: string;
}

const GuidedTour = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const tourSteps: TourStep[] = [
    {
      id: 1,
      title: "Welcome to Your IELTS Journey! 🎉",
      description: "I'm here to help you navigate this free IELTS preparation platform. Let me show you around!",
      icon: BookOpen,
      action: "Click 'Next' to begin the tour."
    },
    {
      id: 2,
      title: "Start with a Diagnostic Test 📊",
      description: "First, take our diagnostic test to identify your current level and areas that need improvement.",
      icon: TestTube2,
      action: "Look for the 'Take Diagnostic Test' button",
      highlight: "This helps you understand your current level."
    },
    {
      id: 3,
      title: "Master the Four Skills 🎯",
      description: "Practice Reading, Writing, Listening, and Speaking with our comprehensive materials and strategies.",
      icon: Target,
      action: "Scroll down to see the skills section in the homepage.",
      highlight: "Each skill has detailed lessons and practice materials, look through carefully."
    },
    {
      id: 4,
      title: "Reading Skills 📖",
      description: "Learn strategies for academic and general training texts, time management, and question types.",
      icon: BookOpen,
      action: "Click on the Reading card to explore",
      highlight: "Great for both Academic and General Training. There's a toggle switch to change content."
    },
    {
      id: 5,
      title: "Writing Skills ✍️",
      description: "Master Task 1 and Task 2 essays with structure guides, model answers, and scoring criteria.",
      icon: PenTool,
      action: "Click on the Writing card to practice",
      highlight: "Learn how to write high-scoring essays. While Task 1 is different for AC and GT, Task 2 is the same."
    },
    {
      id: 6,
      title: "Listening Skills 🎧",
      description: "Improve with diverse accents, note-taking techniques, and all question formats.",
      icon: Headphones,
      action: "Click on the Listening card to start",
      highlight: "Practice with authentic exam materials. We'll guide you to youtube there!"
    },
    {
      id: 7,
      title: "Speaking Skills 🎤",
      description: "Build confidence for all three speaking parts with fluency and pronunciation tips.",
      icon: Mic,
      action: "Click on the Speaking card to begin",
      highlight: "Get ready for the face-to-face interview."
    },
    {
      id: 8,
      title: "Practice Tests & Tips 💡",
      description: "Take realistic practice tests and learn expert tips and tricks to boost your score.",
      icon: Lightbulb,
      action: "Use the navigation menu to access these. ",
      highlight: "Simulate real exam conditions, We're still working on it!"
    },
    {
      id: 9,
      title: "Need Help? Contact Me! 📧",
      description: "If you have questions or feedback, feel free to reach out anytime.",
      icon: Mail,
      action: "Email: abhinavkrishnas@avensora.in",
      highlight: "I'm here to support your IELTS success!. Get in touch for live classes."
    }
  ];

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('ielts-tour-completed');
    if (!hasSeenTour) {
      // Show tour after a short delay when page loads
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    if (dontShowAgain) {
      localStorage.setItem('ielts-tour-completed', 'true');
    }
    setIsOpen(false);
    setCurrentStep(0);
  };

  const handleSkip = () => {
    if (dontShowAgain) {
      localStorage.setItem('ielts-tour-completed', 'true');
    }
    setIsOpen(false);
    setCurrentStep(0);
  };

  const currentTourStep = tourSteps[currentStep];
  const Icon = currentTourStep?.icon;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-2">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {Icon && <Icon className="h-6 w-6 text-blue-600" />}
              <DialogTitle className="text-lg font-bold">{currentTourStep?.title}</DialogTitle>
            </div>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={handleSkip}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button> */}
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <DialogDescription className="text-base leading-relaxed">
            {currentTourStep?.description}
          </DialogDescription>

          {currentTourStep?.action && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-3">
                <p className="text-sm font-medium text-blue-800">
                  👉 {currentTourStep.action}
                </p>
              </CardContent>
            </Card>
          )}

          {currentTourStep?.highlight && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                💡 <strong>Tip:</strong> {currentTourStep.highlight}
              </p>
            </div>
          )}

          {/* Progress indicator */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">
              Step {currentStep + 1} of {tourSteps.length}
            </span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Don't show again checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="dontShowAgain"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="dontShowAgain" className="text-sm text-gray-600">
              Don't show this tour again
            </label>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between space-x-2">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="text-gray-600"
              >
                Skip Tour
              </Button>
              <Button
                onClick={handleNext}
                className="flex items-center bg-blue-600 hover:bg-blue-700"
              >
                {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
                {currentStep !== tourSteps.length - 1 && <ArrowRight className="h-4 w-4 ml-1" />}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuidedTour;
