import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpeakingStepByStep from "@/components/speaking/SpeakingStepByStep";
import { Mic, Clock, User, CheckCircle, MessageCircle, Star, Users, Target, AlertTriangle, BookOpen, TrendingUp, PlayCircle, Volume2, FileText, Lightbulb } from "lucide-react";

const Speaking = () => {
  const speakingParts = [
    {
      title: "Part 1 - Introduction & Interview",
      duration: "4-5 minutes",
      difficulty: "Easy",
      description: "General questions about yourself, your background, and familiar topics",
      sampleQuestions: [
        "What's your full name? Can I see your identification?",
        "Where are you from? Can you describe your hometown?",
        "Do you work or are you a student? What do you do/study?",
        "What do you like to do in your free time?",
        "Do you prefer mornings or evenings? Why?",
        "How do you usually spend your weekends?"
      ],
      topics: [
        { name: "Personal Information", examples: "Name, age, occupation, studies" },
        { name: "Hometown", examples: "Where you're from, local features, changes" },
        { name: "Family", examples: "Family members, relationships, traditions" },
        { name: "Work/Studies", examples: "Current job/course, likes/dislikes, future plans" },
        { name: "Hobbies & Interests", examples: "Free time activities, sports, entertainment" },
        { name: "Daily Routine", examples: "Typical day, morning/evening activities" }
      ],
      keySkills: [
        "Fluent responses to personal questions",
        "Using present, past, and future tenses",
        "Expressing preferences and opinions",
        "Providing reasons and examples"
      ],
      strategy: [
        "Give extended answers (30-45 seconds each)",
        "Use personal examples and experiences", 
        "Show variety in vocabulary and grammar",
        "Be natural and conversational",
        "Don't just answer 'yes' or 'no' - explain why"
      ],
      commonMistakes: [
        "Giving one-word or very short answers",
        "Memorizing and reciting prepared speeches",
        "Speaking too fast due to nervousness",
        "Not listening carefully to the question"
      ],
      timeManagement: "Answer each question in 30-45 seconds with 2-3 sentences minimum",
      modelAnswer: {
        question: "Do you enjoy reading books?",
        answer: "Yes, I really enjoy reading, especially fiction novels. I find that reading helps me relax after a long day at work, and it's also a great way to improve my vocabulary. I usually read for about 30 minutes before going to bed, and I prefer mystery or romance genres because they keep me engaged."
      }
    },
    {
      title: "Part 2 - Individual Long Turn",
      duration: "3-4 minutes",
      difficulty: "Medium", 
      description: "Speak for 1-2 minutes on a given topic with 1 minute preparation time",
      sampleQuestions: [
        "Describe a person who has influenced you",
        "Describe a place you would like to visit",
        "Describe an important decision you made",
        "Describe a skill you would like to learn",
        "Describe a memorable celebration",
        "Describe something you bought recently"
      ],
      topics: [
        { name: "Describe a Person", examples: "Someone you admire, a family member, a teacher" },
        { name: "Describe a Place", examples: "Favorite location, memorable trip, ideal home" },
        { name: "Describe an Experience", examples: "Important event, learning experience, celebration" },
        { name: "Describe an Object", examples: "Valuable possession, useful item, gift received" },
        { name: "Describe an Activity", examples: "Hobby you enjoy, sport you play, skill you learned" }
      ],
      keySkills: [
        "Organizing ideas coherently",
        "Speaking continuously for 2 minutes",
        "Using descriptive language effectively",
        "Managing time and covering all points"
      ],
      strategy: [
        "Use the full 1-minute preparation time wisely",
        "Make brief notes covering all bullet points",
        "Structure: Introduction → Main points → Conclusion",
        "Speak for the full 2 minutes without stopping",
        "Use connecting words (firstly, secondly, finally)",
        "Include specific details and examples"
      ],
      commonMistakes: [
        "Not using preparation time effectively",
        "Missing bullet points on the task card",
        "Speaking for less than 1.5 minutes",
        "Going completely off-topic"
      ],
      timeManagement: "1 minute prep + 2 minutes speaking + examiner follow-up questions",
      modelAnswer: {
        question: "Describe a teacher who has influenced you",
        preparationNotes: "• Ms. Johnson - English teacher\n• High school - encouraged writing\n• Kind, patient, inspiring\n• Helped with confidence\n• Still in contact",
        answer: "I'd like to talk about my English teacher, Ms. Johnson, who had a huge influence on me during high school. She was incredibly kind and patient, always encouraging students to express themselves through writing. What made her special was her ability to see potential in every student. She noticed that I enjoyed creative writing and encouraged me to join the school newspaper. This not only improved my writing skills but also boosted my confidence significantly. Even now, five years later, I still keep in touch with her, and she continues to inspire me in my career choices."
      }
    },
    {
      title: "Part 3 - Two-way Discussion",
      duration: "4-5 minutes", 
      difficulty: "Hard",
      description: "Abstract discussion related to Part 2 topic with complex analytical questions",
      sampleQuestions: [
        "How has education changed in your country?",
        "What qualities make a good teacher?",
        "Do you think online learning is as effective as traditional classroom learning?",
        "How might education change in the future?",
        "What role should technology play in education?",
        "Is it better to have specialized or general education?"
      ],
      topics: [
        { name: "Social Issues", examples: "Technology impact, generational differences, cultural changes" },
        { name: "Future Predictions", examples: "How things might change, trends, developments" },
        { name: "Comparisons", examples: "Past vs present, different countries/cultures" },
        { name: "Abstract Concepts", examples: "Success, happiness, education, environment" },
        { name: "Problem-Solution", examples: "Identifying issues, suggesting improvements" }
      ],
      keySkills: [
        "Expressing and justifying opinions",
        "Analyzing complex topics",
        "Comparing and contrasting ideas",
        "Speculating about future changes"
      ],
      strategy: [
        "Think before speaking - pause is okay",
        "Express different viewpoints and perspectives",
        "Use complex grammatical structures",
        "Support opinions with examples and reasoning",
        "Use phrases like 'On one hand... on the other hand'",
        "Show you can think critically about issues"
      ],
      commonMistakes: [
        "Giving superficial or simple answers",
        "Not developing ideas sufficiently",
        "Avoiding the question or being too vague",
        "Using only simple vocabulary and grammar"
      ],
      timeManagement: "Take time to think, aim for 45-60 seconds per response",
      modelAnswer: {
        question: "Do you think online learning is as effective as traditional classroom learning?",
        answer: "That's a complex question with valid arguments on both sides. On one hand, online learning offers incredible flexibility and accessibility - students can learn at their own pace and access resources from anywhere. However, I believe traditional classroom learning has irreplaceable benefits, particularly the social interaction and immediate feedback from teachers. In my opinion, the most effective approach is probably a hybrid model that combines the best of both worlds. The pandemic showed us that while online learning can work, many students struggled with motivation and engagement without face-to-face interaction."
      }
    }
  ];

  const quickTips = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Time Management",
      tips: [
        "Part 1: 30-45 seconds per answer",
        "Part 2: Use full 1 minute prep time",
        "Part 3: Think before speaking (2-3 seconds is OK)"
      ]
    },
    {
      icon: <Volume2 className="h-5 w-5" />,
      title: "Speaking Technique",
      tips: [
        "Speak clearly and at natural pace",
        "Don't worry about small mistakes",
        "Use varied intonation and stress"
      ]
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Content Strategy",
      tips: [
        "Always give reasons for your opinions",
        "Use personal examples and experiences",
        "Show range of vocabulary and grammar"
      ]
    }
  ];

  const usefulPhrases = {
    expressing_opinions: [
      "In my opinion...",
      "I believe that...",
      "From my perspective...",
      "It seems to me that...",
      "I'm inclined to think..."
    ],
    giving_examples: [
      "For instance...",
      "A good example would be...",
      "To illustrate this point...",
      "Let me give you an example...",
      "Take... for example"
    ],
    connecting_ideas: [
      "Furthermore...",
      "On the other hand...",
      "Additionally...",
      "However...",
      "What's more..."
    ],
    buying_time: [
      "That's an interesting question...",
      "Well, let me think about that...",
      "That's a good point...",
      "I've never really thought about that before..."
    ]
  };

  const assessmentCriteria = [
    {
      title: "Fluency & Coherence",
      weight: "25%",
      description: "How smoothly and logically you express your ideas",
      band9: "Natural, effortless speech with coherent and cohesive ideas",
      band7: "Generally fluent with occasional hesitation, logical development",
      band5: "Some hesitation and repetition, basic coherence maintained",
      keyAreas: [
        "Natural pace and rhythm",
        "Logical organization of ideas", 
        "Effective use of linking words",
        "Self-correction without losing fluency"
      ]
    },
    {
      title: "Lexical Resource",
      weight: "25%",
      description: "Range, accuracy and appropriateness of vocabulary",
      band9: "Wide range of vocabulary used naturally and precisely",
      band7: "Flexible vocabulary with some less common expressions",
      band5: "Limited but adequate vocabulary for familiar topics",
      keyAreas: [
        "Variety of vocabulary choices",
        "Accurate word usage and collocation",
        "Idiomatic language and expressions",
        "Paraphrasing ability when needed"
      ]
    },
    {
      title: "Grammatical Range & Accuracy",
      weight: "25%",
      description: "Variety and correctness of grammar structures",
      band9: "Full range of structures used naturally with rare errors",
      band7: "Range of complex structures with good control",
      band5: "Limited range with frequent errors that don't impede meaning",
      keyAreas: [
        "Complex sentence structures",
        "Accurate use of tenses",
        "Error frequency and impact",
        "Grammatical flexibility"
      ]
    },
    {
      title: "Pronunciation",
      weight: "25%",
      description: "Clarity, word/sentence stress, and intonation patterns",
      band9: "Natural pronunciation with clear articulation throughout",
      band7: "Generally clear with some mispronunciation",
      band5: "Generally intelligible despite some pronunciation issues",
      keyAreas: [
        "Individual sound clarity",
        "Word and sentence stress",
        "Intonation patterns",
        "Overall intelligibility"
      ]
    }
  ];

  const bandDescriptors = [
    { band: 9, level: "Expert", description: "Fully operational command with complete accuracy" },
    { band: 8, level: "Very Good", description: "Fully operational with occasional inaccuracies" },
    { band: 7, level: "Good", description: "Operational command with some inaccuracies" },
    { band: 6, level: "Competent", description: "Generally effective command despite some errors" },
    { band: 5, level: "Modest", description: "Partial command with frequent problems" }
  ];

  const practiceStrategies = [
    {
      category: "Daily Practice",
      icon: <Target className="h-5 w-5" />,
      activities: [
        "Record yourself speaking for 2 minutes daily",
        "Practice with IELTS speaking apps and websites",
        "Use a mirror to observe facial expressions",
        "Set speaking goals and track progress"
      ]
    },
    {
      category: "Language Development",
      icon: <BookOpen className="h-5 w-5" />,
      activities: [
        "Learn topic-specific vocabulary lists",
        "Practice complex grammatical structures",
        "Study idiomatic expressions and collocations",
        "Work on pronunciation with phonetic symbols"
      ]
    },
    {
      category: "Confidence Building",
      icon: <TrendingUp className="h-5 w-5" />,
      activities: [
        "Start with familiar topics you enjoy",
        "Practice with friends or language partners",
        "Join English conversation groups",
        "Focus on communication over perfection"
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getBandColor = (band: number) => {
    if (band >= 8) return 'bg-green-500';
    if (band >= 6) return 'bg-blue-500';
    if (band >= 5) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-orange-50 to-amber-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Mic className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">IELTS Speaking Mastery</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build confidence and fluency for all three parts of the IELTS Speaking test. Master the art of natural, impressive communication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold text-base sm:text-lg mb-1">11-14 Minutes</h3>
              <p className="text-gray-600 text-sm sm:text-base">Face-to-face assessment</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
              <User className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold text-base sm:text-lg mb-1">One-to-One</h3>
              <p className="text-gray-600 text-sm sm:text-base">With certified examiner</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold text-base sm:text-lg mb-1">3 Distinct Parts</h3>
              <p className="text-gray-600 text-sm sm:text-base">Progressive difficulty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <SpeakingStepByStep />

      {/* Quick Tips Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Quick Success Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {quickTips.map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg text-orange-600 flex items-center">
                    <span className="flex-shrink-0">{tip.icon}</span>
                    <span className="ml-2">{tip.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {tip.tips.map((item, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Parts - Mobile Optimized */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16">Three Speaking Parts Explained</h2>
          
          <div className="space-y-6 sm:space-y-8">
            {speakingParts.map((part, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4 sm:pb-6">
                  <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                        <CardTitle className="text-xl sm:text-2xl text-orange-600">{part.title}</CardTitle>
                        <Badge className={`${getDifficultyColor(part.difficulty)} border self-start`}>
                          {part.difficulty}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-600 text-base sm:text-lg leading-relaxed">{part.description}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        {part.duration}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">{part.timeManagement}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="sample" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 h-auto">
                      <TabsTrigger value="sample" className="px-2 py-2 text-xs sm:text-sm">Sample Q&A</TabsTrigger>
                      <TabsTrigger value="topics" className="px-2 py-2 text-xs sm:text-sm">Topics</TabsTrigger>
                      <TabsTrigger value="skills" className="px-2 py-2 text-xs sm:text-sm">Key Skills</TabsTrigger>
                      <TabsTrigger value="strategy" className="px-2 py-2 text-xs sm:text-sm hidden sm:block">Strategy</TabsTrigger>
                      <TabsTrigger value="mistakes" className="px-2 py-2 text-xs sm:text-sm hidden sm:block">Mistakes</TabsTrigger>
                    </TabsList>
                    
                    {/* Mobile-only additional tabs */}
                    <div className="sm:hidden mt-2">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="strategy" className="px-2 py-2 text-xs">Strategy</TabsTrigger>
                        <TabsTrigger value="mistakes" className="px-2 py-2 text-xs">Mistakes</TabsTrigger>
                      </TabsList>
                    </div>
                    
                    <TabsContent value="sample" className="mt-4 sm:mt-6">
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-sm sm:text-base">
                            <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-orange-600" />
                            Sample Questions
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            {part.sampleQuestions.map((question, qIndex) => (
                              <div key={qIndex} className="p-3 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-800">{question}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {part.modelAnswer && (
                          <div className="border-t pt-4 sm:pt-6">
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-sm sm:text-base">
                              <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-600" />
                              Model Answer Example
                            </h4>
                            <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                              <p className="font-medium text-green-800 mb-2 text-sm sm:text-base">Q: {part.modelAnswer.question}</p>
                              {part.modelAnswer.preparationNotes && (
                                <div className="mb-3">
                                  <span className="text-sm font-medium text-green-700">Preparation notes:</span>
                                  <pre className="text-sm text-green-600 mt-1 whitespace-pre-wrap leading-relaxed">{part.modelAnswer.preparationNotes}</pre>
                                </div>
                              )}
                              <p className="text-green-700 italic text-sm sm:text-base leading-relaxed">"{part.modelAnswer.answer}"</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="topics" className="mt-4 sm:mt-6">
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        {part.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{topic.name}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{topic.examples}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="skills" className="mt-4 sm:mt-6">
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        {part.keySkills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="strategy" className="mt-4 sm:mt-6">
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        {part.strategy.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start space-x-3">
                            <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="mistakes" className="mt-4 sm:mt-6">
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        {part.commonMistakes.map((mistake, mistakeIndex) => (
                          <div key={mistakeIndex} className="flex items-start space-x-3">
                            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{mistake}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Phrases Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16">Essential Speaking Phrases</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Object.entries(usefulPhrases).map(([category, phrases], index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg text-orange-600 capitalize">
                    {category.replace('_', ' ')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {phrases.map((phrase, phraseIndex) => (
                      <li key={phraseIndex} className="text-gray-700 text-sm p-2 bg-orange-50 rounded leading-relaxed">
                        {phrase}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Criteria - Mobile Optimized */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16">Assessment Criteria & Band Descriptors</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {assessmentCriteria.map((criteria, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-lg sm:text-xl text-orange-600 flex items-center">
                      <Star className="h-5 w-5 sm:h-6 sm:w-6 mr-2 flex-shrink-0" />
                      <span>{criteria.title}</span>
                    </CardTitle>
                    <Badge variant="outline" className="text-sm self-start sm:self-center">{criteria.weight}</Badge>
                  </div>
                  <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">{criteria.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <span className="font-semibold text-green-700 text-sm sm:text-base">Band 9: </span>
                      <span className="text-green-700 text-sm sm:text-base">{criteria.band9}</span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-blue-700 text-sm sm:text-base">Band 7: </span>
                      <span className="text-blue-700 text-sm sm:text-base">{criteria.band7}</span>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <span className="font-semibold text-yellow-700 text-sm sm:text-base">Band 5: </span>
                      <span className="text-yellow-700 text-sm sm:text-base">{criteria.band5}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Focus Areas:</h4>
                    <ul className="space-y-1">
                      {criteria.keyAreas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm leading-relaxed">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Band Score Overview - Mobile Optimized */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-center text-gray-900">Band Score Quick Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {bandDescriptors.map((descriptor, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg border-2 border-gray-100">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${getBandColor(descriptor.band)} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <span className="text-white font-bold text-base sm:text-lg">{descriptor.band}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{descriptor.level}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{descriptor.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Practice Strategies - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16">Effective Practice Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {practiceStrategies.map((strategy, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl text-orange-600 flex items-center">
                    <span className="flex-shrink-0">{strategy.icon}</span>
                    <span className="ml-2">{strategy.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {strategy.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-orange-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Start Speaking with Confidence</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Practice with authentic materials and get personalized feedback to achieve your target band score
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-6 sm:px-8 py-3 text-sm sm:text-base">
              Practice Speaking Tasks
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-3 text-sm sm:text-base">
              View Sample Answers
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speaking;
