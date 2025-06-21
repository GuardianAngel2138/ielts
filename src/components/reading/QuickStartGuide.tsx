
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CheckCircle, Clock, BookOpen, Target, AlertTriangle, HelpCircle } from "lucide-react";

interface QuickStartGuideProps {
  selectedTestType: 'academic' | 'general';
}

const QuickStartGuide = ({ selectedTestType }: QuickStartGuideProps) => {
  const quickSteps = [
    {
      step: 1,
      title: "Read Questions First",
      description: "Always read the questions before the passage to know what to look for",
      time: "2-3 minutes",
      tooltip: "This helps you focus on relevant information and saves time by knowing what to scan for."
    },
    {
      step: 2,
      title: "Skim for Overview",
      description: "Quickly read titles, headings, and first sentences of paragraphs",
      time: "2-3 minutes",
      tooltip: "Get the big picture before diving into details. This helps you understand the passage structure."
    },
    {
      step: 3,
      title: "Scan for Answers",
      description: "Look for keywords and synonyms from the questions in the text",
      time: "12-15 minutes",
      tooltip: "Don't read every word. Use your finger to guide your eyes and look for specific information."
    },
    {
      step: 4,
      title: "Check and Transfer",
      description: "Review answers and carefully transfer to answer sheet",
      time: "2-3 minutes",
      tooltip: "Double-check spelling and ensure you've filled in all answers. No blank answers!"
    }
  ];

  const keyReminders = selectedTestType === 'academic' ? [
    "Focus on academic vocabulary and complex sentence structures",
    "Look for the author's argument and supporting evidence",
    "Pay attention to data interpretation in charts/graphs",
    "Understand implied meanings and inferences"
  ] : [
    "Focus on practical information and specific details",
    "Look for instructions, procedures, and factual information",
    "Pay attention to advertisements, notices, and workplace documents",
    "Understand everyday vocabulary in context"
  ];

  const learningTips = {
    academic: [
      "Practice with scientific journals and research papers daily",
      "Build academic vocabulary through word families",
      "Learn to identify thesis statements and conclusions",
      "Practice inference questions regularly"
    ],
    general: [
      "Read newspapers, brochures, and workplace emails",
      "Practice with real-world documents like manuals",
      "Focus on scanning for specific information quickly",
      "Time yourself with shorter practice texts first"
    ]
  };

  return (
    <TooltipProvider>
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quick Start Guide for {selectedTestType === 'academic' ? 'Academic' : 'General Training'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow this proven 4-step approach to tackle any reading passage efficiently and maximize your score.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {quickSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-green-600">{step.step}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CardTitle className="text-lg sm:text-xl text-gray-900">{step.title}</CardTitle>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-gray-400 hover:text-green-600 transition-colors" />
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs">
                        <p className="text-sm">{step.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                    <Clock className="h-4 w-4 mr-1" />
                    {step.time}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Key Focus Areas for {selectedTestType === 'academic' ? 'Academic' : 'General Training'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyReminders.map((reminder, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{reminder}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900 flex items-center justify-center gap-2">
                  How to Practice Effectively
                  <HoverCard>
                    <HoverCardTrigger>
                      <HelpCircle className="h-5 w-5 text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer" />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Daily Practice Routine:</h4>
                        <p className="text-sm text-gray-600">
                          • Spend 20-30 minutes daily on reading practice<br/>
                          • Start with easier texts and gradually increase difficulty<br/>
                          • Time yourself to build speed and accuracy<br/>
                          • Review mistakes and learn from them
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningTips[selectedTestType].map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-indigo-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default QuickStartGuide;
