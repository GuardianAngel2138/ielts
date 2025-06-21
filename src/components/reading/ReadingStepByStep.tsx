
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Eye, Search, CheckCircle, Clock, ArrowRight, Target, Lightbulb, AlertTriangle, TrendingUp } from "lucide-react";

interface ReadingStepByStepProps {
  selectedTestType: 'academic' | 'general';
}

const ReadingStepByStep = ({ selectedTestType }: ReadingStepByStepProps) => {
  const steps = [
    {
      step: 1,
      title: "Get the Big Picture",
      subtitle: "Overview & First Impression (2-3 minutes)",
      icon: Eye,
      description: "Before diving into details, understand what you're reading. This step saves time and prevents confusion later.",
      actions: [
        "Read the title and any headings/subheadings carefully",
        "Look at images, charts, diagrams, or tables",
        "Read the first paragraph completely",
        "Read the last paragraph or conclusion",
        "Identify the text type (article, report, essay, etc.)",
        "Get a general sense of the topic and main argument"
      ],
      time: "2-3 minutes",
      whyImportant: "Understanding the overall structure and topic helps you predict where specific information might be located.",
      tip: selectedTestType === 'academic' 
        ? "Academic texts often have clear thesis statements in the introduction and summary in the conclusion"
        : "General texts usually have practical information organized in clear sections with descriptive headings",
      commonMistake: "Don't try to understand every word - focus on getting the general idea first"
    },
    {
      step: 2,
      title: "Study the Questions Carefully",
      subtitle: "Know Exactly What You're Looking For (3-4 minutes)",
      icon: Target,
      description: "Understanding the questions thoroughly before reading in detail is crucial. This step determines your success.",
      actions: [
        "Read ALL questions before starting to read the text",
        "Underline key words and phrases in each question",
        "Identify question types (multiple choice, True/False/Not Given, etc.)",
        "Note what type of answer is needed (word, number, phrase)",
        "Look for question order patterns (usually follows text order)",
        "Pay attention to word limits for gap-fill questions"
      ],
      time: "3-4 minutes",
      whyImportant: "Questions often use synonyms and paraphrases of words in the text. Understanding this helps you locate answers faster.",
      tip: "Circle instruction words like 'choose', 'complete', 'match' - they tell you exactly what to do",
      commonMistake: "Rushing through questions and missing important details about what type of answer is required"
    },
    {
      step: 3,
      title: "Skim for Structure & Main Ideas",
      subtitle: "Map Out the Text Organization (3-4 minutes)",
      icon: BookOpen,
      description: "Quickly understand how the text is organized. This creates a mental map for finding specific information.",
      actions: [
        "Read the first sentence of each paragraph (topic sentences)",
        "Notice transition words (however, furthermore, in contrast)",
        "Identify how ideas connect between paragraphs",
        "Look for different sections or topics within the text",
        "Note any lists, examples, or supporting details",
        "Don't worry about unknown vocabulary yet"
      ],
      time: "3-4 minutes",
      whyImportant: "Each paragraph usually contains one main idea. Finding these main ideas helps you locate specific details quickly.",
      tip: "Look for signposting language like 'First...', 'Moreover...', 'In conclusion...' to understand text flow",
      commonMistake: "Getting stuck on difficult words instead of focusing on overall meaning and structure"
    },
    {
      step: 4,
      title: "Scan & Search for Specific Answers",
      subtitle: "Find Information to Answer Questions (10-12 minutes)",
      icon: Search,
      description: "Now use your understanding of the text structure to efficiently locate the specific information needed.",
      actions: [
        "Work through questions in order (they usually follow text order)",
        "Look for keywords from questions and their synonyms in the text",
        "Read around keywords for context - don't just match words",
        "Use paragraph main ideas to guide you to the right section",
        "For True/False/Not Given, look for exact meaning matches",
        "Pay attention to qualifying words (all, some, never, often)"
      ],
      time: "10-12 minutes",
      whyImportant: "This is where you apply your reading skills strategically. Don't read every word - focus on finding answers efficiently.",
      tip: "Use your finger or pen to guide your eyes and stay focused on what you're looking for",
      commonMistake: "Reading the entire text word by word instead of scanning for specific information"
    },
    {
      step: 5,
      title: "Review & Double-Check",
      subtitle: "Ensure Accuracy & Completeness (2-3 minutes)",
      icon: CheckCircle,
      description: "A final check ensures you haven't made careless mistakes and have answered everything correctly.",
      actions: [
        "Review any questions you weren't completely sure about",
        "Check that all answers make logical sense",
        "Verify you've followed word limits for gap-fill questions",
        "Ensure you've answered every single question",
        "Check spelling for written answers",
        "Transfer answers to answer sheet carefully if required"
      ],
      time: "2-3 minutes",
      whyImportant: "Small mistakes can cost valuable points. A quick review catches errors and ensures you get credit for what you know.",
      tip: "Trust your first instinct - only change answers if you find clear evidence that your first choice was wrong",
      commonMistake: "Changing correct answers due to overthinking, or leaving questions blank"
    }
  ];

  const totalTime = steps.reduce((total, step) => {
    const timeRange = step.time.split('-');
    const avgTime = (parseInt(timeRange[0]) + parseInt(timeRange[1])) / 2;
    return total + avgTime;
  }, 0);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <TrendingUp className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Master IELTS Reading: Complete Step-by-Step Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Follow this proven 5-step method to tackle any {selectedTestType === 'academic' ? 'Academic' : 'General Training'} reading passage with confidence and efficiency. By the end, you'll know exactly how to approach the exam.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 font-medium">
            <Clock className="h-5 w-5 mr-2" />
            Total time: ~{Math.round(totalTime)} minutes per passage
          </div>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">{step.step}</span>
                      </div>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl mb-2 text-white">{step.title}</CardTitle>
                    <p className="text-blue-100 text-lg mb-4">{step.subtitle}</p>
                    <div className="flex items-center text-blue-100 mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-medium">{step.time}</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-white text-sm mb-1">WHY THIS MATTERS:</h4>
                      <p className="text-blue-100 text-sm">{step.whyImportant}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-8">
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
                      {step.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">What to do:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {step.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-yellow-800 mb-1">Pro Tip:</h4>
                            <p className="text-yellow-700 text-sm">{step.tip}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-red-800 mb-1">Avoid This:</h4>
                            <p className="text-red-700 text-sm">{step.commonMistake}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 bg-gray-50">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Learning Outcomes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="h-6 w-6 mr-3 text-green-600" />
                What You'll Master
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>How to quickly identify text structure and main ideas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Strategic question analysis for efficient answer-finding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Time management techniques for each passage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>How to avoid common mistakes that cost points</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-blue-600" />
                Your Next Steps
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Practice this method</strong> with sample passages, starting slowly and building up speed.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Time yourself</strong> on each step until it becomes automatic.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Focus on accuracy first,</strong> then work on increasing your speed.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg mt-4">
                  <p className="text-blue-800 font-medium text-center">
                    💡 Remember: Consistent practice with this method will significantly improve your reading score!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReadingStepByStep;
