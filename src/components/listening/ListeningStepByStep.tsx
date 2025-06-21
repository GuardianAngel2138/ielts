
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Clock, BookOpen, Target, Search, CheckCircle, Eye, ArrowRight, Lightbulb, AlertTriangle, TrendingUp } from "lucide-react";

const ListeningStepByStep = () => {
  const steps = [
    {
      step: 1,
      title: "Preview Questions Before Listening",
      subtitle: "Read Ahead & Predict Answers (2-3 minutes)",
      icon: Eye,
      description: "Use the time before each section starts to thoroughly understand what you'll be listening for. This preparation is crucial for success.",
      actions: [
        "Read all questions for the upcoming section carefully",
        "Underline key words and question types in each question",
        "Predict what type of answer is needed (number, name, date, etc.)",
        "Think of possible synonyms for key words",
        "Look at any visual aids (maps, forms, diagrams) provided",
        "Identify the context and situation you'll be hearing about"
      ],
      time: "2-3 minutes per section",
      whyImportant: "The recording plays only once. Knowing what to listen for beforehand dramatically increases your chances of catching the right information.",
      tip: "Use the example given at the start of each section to familiarize yourself with the speakers' accents and speaking speed",
      commonMistake: "Rushing through questions or not reading them carefully, leading to missed opportunities to prepare"
    },
    {
      step: 2,
      title: "Listen for Keywords & Synonyms",
      subtitle: "Focus on Meaning, Not Exact Words (During Recording)",
      icon: Headphones,
      description: "The speakers rarely use the exact words from the questions. Train your ear to recognize paraphrases and synonyms.",
      actions: [
        "Listen for synonyms and paraphrases of question keywords",
        "Pay attention to signposting language (firstly, however, next)",
        "Focus on stressed words and changes in intonation",
        "Notice correction language (actually, I mean, sorry, that should be)",
        "Listen for spelling when names or addresses are mentioned",
        "Follow the conversation flow - don't get stuck on one question"
      ],
      time: "Follow the recording pace",
      whyImportant: "IELTS tests your ability to understand meaning, not just recognize identical words. Speakers will paraphrase question language.",
      tip: "If you miss an answer, move on immediately. Questions follow the order of the recording, so don't get left behind",
      commonMistake: "Waiting to hear exact words from the questions instead of listening for meaning and paraphrases"
    },
    {
      step: 3,
      title: "Write Answers Immediately",
      subtitle: "Capture Information as You Hear It (During Recording)",
      icon: BookOpen,
      description: "Don't try to remember answers - write them down as soon as you hear them. Speed and accuracy are both essential.",
      actions: [
        "Write answers directly on the question paper as you hear them",
        "Use abbreviations and shortcuts when taking notes",
        "Pay attention to word limits (no more than X words)",
        "Check spelling carefully, especially for names and places",
        "Write clearly so you can read your own handwriting later",
        "Use capital letters for proper nouns (names, places)"
      ],
      time: "Continuous during recording",
      whyImportant: "The recording doesn't pause. If you try to remember answers instead of writing them, you'll likely forget and miss subsequent questions.",
      tip: "Practice common spelling patterns for names and places. Listen for 'That's spelled...' or 'Let me spell that for you'",
      commonMistake: "Trying to remember multiple answers in your head instead of writing them down immediately"
    },
    {
      step: 4,
      title: "Use Visual Aids Strategically",
      subtitle: "Follow Maps, Diagrams & Forms (When Provided)",
      icon: Search,
      description: "Many questions include visual elements. Use these strategically to track your position and understand directions.",
      actions: [
        "Study maps, diagrams, or forms before listening starts",
        "Identify starting points and orientation (North, entrance, etc.)",
        "Follow directional language (turn left, go straight, opposite)",
        "Use your finger to trace routes on maps",
        "Mark completed sections as you go",
        "Connect visual elements to the spoken description"
      ],
      time: "Integrated with listening",
      whyImportant: "Visual aids help you stay oriented and provide context that makes the spoken information easier to follow and remember.",
      tip: "Practice with maps and diagrams before the test. Learn directional vocabulary (adjacent, diagonal, clockwise)",
      commonMistake: "Ignoring visual aids or not studying them before the recording starts"
    },
    {
      step: 5,
      title: "Review & Transfer Answers",
      subtitle: "Check Accuracy & Complete Answer Sheet (10 minutes)",
      icon: CheckCircle,
      description: "You get 10 minutes at the end to transfer answers and make final checks. Use this time strategically.",
      actions: [
        "Transfer all answers to the answer sheet carefully",
        "Check spelling, especially proper nouns and technical terms",
        "Ensure answers fit grammatically in sentences",
        "Verify you haven't exceeded word limits",
        "Make educated guesses for any blank answers",
        "Double-check answer sheet numbering matches questions"
      ],
      time: "10 minutes at the end",
      whyImportant: "Incorrect spelling or missed answers cost points. This final review ensures you get credit for everything you know.",
      tip: "If unsure about spelling, think about similar words you know. For blank answers, make logical guesses based on context",
      commonMistake: "Leaving answers blank or making careless spelling/grammar errors during transfer"
    }
  ];

  const totalListeningTime = 30;
  const transferTime = 10;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-violet-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <TrendingUp className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Master IELTS Listening: Complete Step-by-Step Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Follow this proven 5-step method to excel in every section of the IELTS Listening test. Master all accents, question types, and strategic approaches.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 font-medium">
            <Clock className="h-5 w-5 mr-2" />
            {totalListeningTime} minutes listening + {transferTime} minutes transfer time
          </div>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-purple-500 to-violet-600 text-white p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">{step.step}</span>
                      </div>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl mb-2 text-white">{step.title}</CardTitle>
                    <p className="text-purple-100 text-lg mb-4">{step.subtitle}</p>
                    <div className="flex items-center text-purple-100 mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-medium">{step.time}</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-white text-sm mb-1">WHY THIS MATTERS:</h4>
                      <p className="text-purple-100 text-sm">{step.whyImportant}</p>
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
                  <span>How to predict answers and prepare strategically for each section</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Techniques for recognizing synonyms and paraphrases in real-time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Effective note-taking strategies for different question types</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>How to handle all accents and speaking speeds confidently</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-violet-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-purple-600" />
                Your Next Steps
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Practice with authentic materials</strong> from different English-speaking countries to familiarize yourself with various accents.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Time yourself regularly</strong> to build speed in reading questions and writing answers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Focus on weak areas</strong> - identify which sections or question types challenge you most.
                </p>
                <div className="bg-purple-100 p-4 rounded-lg mt-4">
                  <p className="text-purple-800 font-medium text-center">
                    🎧 Remember: The key to listening success is active preparation and strategic practice!
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

export default ListeningStepByStep;
