
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Clock, MessageCircle, Target, Eye, CheckCircle, ArrowRight, Lightbulb, AlertTriangle, TrendingUp, Users } from "lucide-react";

const SpeakingStepByStep = () => {
  const steps = [
    {
      step: 1,
      title: "Arrive Early & Prepare Mentally",
      subtitle: "Build Confidence Before You Begin (15-30 minutes before)",
      icon: Eye,
      description: "Your speaking test success begins before you even enter the room. Mental preparation and understanding the test format are crucial for peak performance.",
      actions: [
        "Arrive 30 minutes early to settle your nerves and familiarize yourself with the environment",
        "Review your identification documents and ensure they match your registration exactly",
        "Practice speaking English with yourself or others while waiting (quiet conversation)",
        "Review common Part 1 topics mentally (hometown, work/study, hobbies, family)",
        "Take deep breaths and remind yourself that the examiner wants you to succeed",
        "Visualize yourself speaking confidently and fluently throughout the test"
      ],
      time: "15-30 minutes before test",
      whyImportant: "First impressions matter enormously. A calm, confident start sets the tone for the entire test and helps you perform at your best level.",
      tip: "Smile naturally and make eye contact with the examiner. They're trained to put you at ease, so treat them as a friendly conversation partner",
      commonMistake: "Arriving stressed or unprepared, which affects performance in crucial Part 1 where you establish your speaking baseline"
    },
    {
      step: 2,
      title: "Master Part 1 - Create Strong Foundation",
      subtitle: "Answer Personal Questions Confidently (4-5 minutes)",
      icon: MessageCircle,
      description: "Part 1 sets your speaking band score baseline. Examiners form initial impressions here, so extended, natural responses are essential.",
      actions: [
        "Give detailed answers of 30-45 seconds, not just yes/no responses",
        "Use present, past, and future tenses naturally in your responses",
        "Include personal examples and specific details to make answers interesting",
        "Show opinion language: 'I believe...', 'In my view...', 'I tend to think...'",
        "Use reason-giving language: 'because...', 'since...', 'as a result...'",
        "Connect ideas smoothly with linking words: 'furthermore', 'additionally', 'however'"
      ],
      time: "4-5 minutes total",
      whyImportant: "Part 1 establishes your fluency baseline and shows your ability to discuss familiar topics. Strong performance here builds examiner confidence in your abilities.",
      tip: "Practice the 'PEE' structure: Point (answer), Example (personal detail), Explanation (why/how). This naturally extends your responses.",
      commonMistake: "Giving one-sentence answers or memorized responses that sound unnatural and don't showcase your English ability"
    },
    {
      step: 3,
      title: "Excel at Part 2 - Long Turn Mastery",
      subtitle: "Organize & Deliver 2-Minute Presentation (3-4 minutes total)",
      icon: Clock,
      description: "Part 2 tests your ability to speak at length coherently. Strategic preparation and structured delivery are key to maximizing your performance.",
      actions: [
        "Use the full 1-minute preparation time to make detailed notes covering all bullet points",
        "Create a clear structure: Introduction → Main points → Personal examples → Conclusion",
        "Speak for the full 2 minutes without stopping - examiners time you precisely",
        "Include vivid descriptions and specific details to make your talk engaging",
        "Use a variety of grammatical structures: complex sentences, conditionals, comparatives",
        "Connect ideas with sophisticated linking words: 'what's more', 'in addition', 'on the other hand'"
      ],
      time: "1 minute prep + 2 minutes speaking",
      whyImportant: "Part 2 demonstrates your ability to organize thoughts and speak extensively. It's your opportunity to showcase advanced vocabulary and complex grammar.",
      tip: "If you finish before 2 minutes, expand with 'Another thing I should mention...' or 'What's also important is...' to fill the time naturally",
      commonMistake: "Not using preparation time effectively or stopping speaking before 2 minutes, missing opportunities to display language range"
    },
    {
      step: 4,
      title: "Dominate Part 3 - Abstract Discussion",
      subtitle: "Engage in Complex Analysis & Opinion Exchange (4-5 minutes)",
      icon: Target,
      description: "Part 3 evaluates your ability to discuss abstract concepts and provide analytical responses. This is where band 7+ candidates truly distinguish themselves.",
      actions: [
        "Take 2-3 seconds to think before responding - this shows careful consideration",
        "Present multiple perspectives: 'On one hand... but on the other hand...'",
        "Use advanced vocabulary and idiomatic expressions appropriately",
        "Support opinions with reasoning, examples, and logical arguments",
        "Speculate about future changes: 'I imagine...', 'It's likely that...', 'We might see...'",
        "Compare different situations, cultures, or time periods thoughtfully"
      ],
      time: "4-5 minutes of discussion",
      whyImportant: "Part 3 separates good speakers from excellent ones. It tests critical thinking, opinion justification, and ability to handle complex, unfamiliar topics.",
      tip: "Use phrases like 'That's a fascinating question' or 'I've never considered that before' to buy thinking time while showing engagement",
      commonMistake: "Giving superficial answers or avoiding the question when topics become challenging, rather than engaging thoughtfully with complex ideas"
    },
    {
      step: 5,
      title: "Maintain Fluency & Natural Communication",
      subtitle: "Focus on Communication Over Perfection (Throughout all parts)",
      icon: Users,
      description: "Successful IELTS Speaking is about effective communication, not perfect grammar. Maintain natural flow while showcasing your English ability.",
      actions: [
        "Speak at a natural pace - not too fast from nerves or too slow from over-thinking",
        "Self-correct naturally when you make mistakes, just as native speakers do",
        "Use fillers appropriately: 'Well...', 'You know...', 'I mean...' (but don't overuse)",
        "Maintain good eye contact and natural body language throughout",
        "Show enthusiasm and interest in the topics being discussed",
        "Don't stop completely if you make an error - keep the conversation flowing"
      ],
      time: "Throughout entire 11-14 minute test",
      whyImportant: "Examiners assess your ability to communicate effectively. Minor errors don't matter if your message is clear and your fluency is maintained.",
      tip: "Remember that examiners hear thousands of candidates. Show personality and genuine interest to make your performance memorable in a positive way",
      commonMistake: "Focusing so much on accuracy that fluency suffers, or stopping mid-sentence to correct minor errors that don't affect understanding"
    }
  ];

  const totalTestTime = "11-14";

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <TrendingUp className="h-8 w-8 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Master IELTS Speaking: Complete Step-by-Step Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Follow this proven 5-step method to excel in all three parts of the IELTS Speaking test. Build confidence, fluency, and natural communication skills.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 font-medium">
            <Clock className="h-5 w-5 mr-2" />
            {totalTestTime} minutes face-to-face assessment
          </div>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-orange-500 to-amber-600 text-white p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">{step.step}</span>
                      </div>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl mb-2 text-white">{step.title}</CardTitle>
                    <p className="text-orange-100 text-lg mb-4">{step.subtitle}</p>
                    <div className="flex items-center text-orange-100 mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-medium">{step.time}</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-white text-sm mb-1">WHY THIS MATTERS:</h4>
                      <p className="text-orange-100 text-sm">{step.whyImportant}</p>
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
                  <span>How to structure responses effectively for all three speaking parts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Techniques for extending answers naturally without memorized speeches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Strategies for handling complex Part 3 discussions with confidence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>How to maintain fluency while showcasing advanced language skills</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-amber-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-orange-600" />
                Your Next Steps
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Practice daily conversation</strong> with native speakers or advanced English users to build natural fluency.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Record yourself</strong> speaking on various topics and analyze your performance for areas of improvement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Expand topic vocabulary</strong> - prepare ideas and vocabulary for common IELTS speaking themes.
                </p>
                <div className="bg-orange-100 p-4 rounded-lg mt-4">
                  <p className="text-orange-800 font-medium text-center">
                    🎯 Remember: Authentic communication beats perfect grammar every time!
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

export default SpeakingStepByStep;
