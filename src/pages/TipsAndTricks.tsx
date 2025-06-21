import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lightbulb, Clock, Target, Star, BookOpen, PenTool, Headphones, Mic, CheckCircle, Zap, Brain, Users, Calendar, AlertTriangle, TrendingUp, Shield, Smartphone, Wifi, RefreshCw, Coffee } from "lucide-react";

const TipsAndTricks = () => {
  const generalTips = [
    {
      icon: Clock,
      title: "Time Management Mastery",
      description: "Advanced techniques for maximizing efficiency across all test sections",
      tips: [
        "Use the 'parking lot' method - skip difficult questions and return later",
        "Practice the 2-minute rule: spend max 2 minutes on any single question", 
        "Allocate specific time slots for each question type during practice",
        "Use transition time between sections to mentally prepare for the next",
        "Practice speed reading techniques: chunking and skimming patterns"
      ]
    },
    {
      icon: Target,
      title: "Strategic Score Planning",
      description: "Data-driven approach to achieving your target band score efficiently",
      tips: [
        "Calculate your current baseline across all four skills first",
        "Focus 60% of study time on your two weakest skills",
        "Use the 'skill transfer' method - strengths in one area support others",
        "Set micro-goals: aim for 0.5 band improvement every 4-6 weeks",
        "Track daily progress with a simple scoring system (1-10)",
        "Identify your 'golden hours' - when you perform best and schedule practice then"
      ]
    },
    {
      icon: Brain,
      title: "Mental Performance Optimization",
      description: "Psychological strategies used by top-scoring test takers",
      tips: [
        "Practice the 'confident guessing' mindset - eliminate options systematically",
        "Use visualization: imagine yourself succeeding before each practice session",
        "Develop a pre-test ritual to trigger focus and calm confidence",
        "Practice positive self-talk: replace 'I can't' with 'I'm learning'",
        "Use the 'reset breath' technique between difficult questions"
      ]
    }
  ];

  const skillSpecificTips = [
    {
      skill: "Reading",
      icon: BookOpen,
      color: "blue",
      quickTips: [
        "Read questions before passages to activate 'search mode' in your brain",
        "Look for synonyms and paraphrases, not exact word matches", 
        "Use the 'elimination method' for multiple choice questions",
        "Practice the 'paragraph purpose' technique for better comprehension"
      ],
      advancedTips: [
        "Master 'signpost words' that indicate text structure and relationships",
        "Learn the 'context clue hierarchy': definition, example, contrast, inference",
        "Practice 'strategic skipping' - know when to abandon difficult questions",
        "Develop 'passage mapping' skills to track main ideas and supporting details",
        "Use 'backward reading' for True/False/Not Given questions"
      ],
      expertSecrets: [
        "The first and last sentences of paragraphs contain 70% of key information",
        "Writers use specific patterns: problem-solution, cause-effect, compare-contrast",
        "Question order usually follows passage order (except for headings)",
        "Academic texts have predictable vocabulary patterns you can learn"
      ]
    },
    {
      skill: "Writing", 
      icon: PenTool,
      color: "green",
      quickTips: [
        "Spend 5 minutes planning each task - it saves time overall",
        "Use the PEEL structure: Point, Evidence, Explain, Link",
        "Write a strong thesis statement that previews your main points",
        "Vary sentence openings to demonstrate grammatical range"
      ],
      advancedTips: [
        "Master 'cohesive substitution' - refer back without repetition",
        "Learn 'academic hedging' language to show sophisticated thinking",
        "Develop a personal 'phrase bank' of high-scoring expressions",
        "Practice 'reverse outlining' to check logical flow after writing",
        "Use 'micro-editing' techniques for common grammar patterns"
      ],
      expertSecrets: [
        "Examiners spend only 2-3 minutes reading each essay - first impressions matter",
        "Task 2 essays need exactly 4-5 paragraphs for optimal band scores",
        "Using 'less common vocabulary' appropriately is better than complex words used incorrectly",
        "The conclusion should never introduce completely new ideas"
      ]
    },
    {
      skill: "Listening",
      icon: Headphones, 
      color: "purple",
      quickTips: [
        "Predict answers during the preparation time using question context",
        "Listen for 'stress patterns' - emphasized words often contain answers",
        "Write answers immediately, don't wait for confirmation",
        "Use abbreviations during listening, expand during transfer time"
      ],
      advancedTips: [
        "Practice 'shadow listening' - repeat what you hear with a 2-second delay",
        "Learn to identify 'distractors' - wrong answers mentioned before correct ones",
        "Develop 'accent adaptation' skills for different English varieties",
        "Master 'inference listening' for questions requiring logical deduction",
        "Practice 'selective attention' to filter relevant from irrelevant information"
      ],
      expertSecrets: [
        "Section 1 and 3 are dialogues; Section 2 and 4 are monologues - adjust strategies accordingly",
        "The audio plays only once, but you can use question time strategically",
        "Numbers, dates, and names are often spelled out - practice letter recognition",
        "Speakers often correct themselves - the final version is usually correct"
      ]
    },
    {
      skill: "Speaking",
      icon: Mic,
      color: "orange", 
      quickTips: [
        "Use the STAR method for Part 2: Situation, Task, Action, Result",
        "Buy thinking time with phrases like 'That's an interesting question...'",
        "Speak at natural pace - rushing reduces clarity and coherence",
        "Make eye contact with the examiner to show confidence"
      ],
      advancedTips: [
        "Practice 'topic bridging' - connect different ideas naturally",
        "Develop 'personal examples bank' for common topics like education, technology, environment",
        "Learn 'opinion gradation' language - not just agree/disagree but nuanced views",
        "Master 'hypothetical language' for discussing possibilities and consequences",
        "Practice 'discourse markers' that show sophisticated thinking patterns"
      ],
      expertSecrets: [
        "Examiners assess fluency over accuracy - it's better to keep talking than to pause for perfect grammar",
        "Part 3 questions often build on Part 2 topic - prepare thoughtful extensions",
        "Using idiomatic language naturally demonstrates high proficiency",
        "The examiner wants you to succeed - they're not trying to trick you"
      ]
    }
  ];

  const studySchedules = [
    {
      title: "30-Day Intensive Plan",
      description: "For test takers with 1 month to prepare",
      schedule: [
        "Week 1: Diagnostic test + identify weak areas + basic strategy learning",
        "Week 2: Focused practice on 2 weakest skills (3 hours daily)",
        "Week 3: Integrated practice + full tests every other day",
        "Week 4: Fine-tuning + confidence building + final practice test"
      ],
      dailyTime: "3-4 hours",
      color: "red"
    },
    {
      title: "60-Day Balanced Plan", 
      description: "Recommended for most test takers",
      schedule: [
        "Weeks 1-2: Foundation building + strategy mastery",
        "Weeks 3-6: Skill-specific practice (rotating focus daily)",
        "Weeks 7-8: Integration + full practice tests twice weekly",
        "Week 9: Review weak areas + confidence building"
      ],
      dailyTime: "2-3 hours",
      color: "blue"
    },
    {
      title: "90-Day Comprehensive Plan",
      description: "For thorough preparation and high band scores",
      schedule: [
        "Month 1: English foundation + IELTS introduction",
        "Month 2: Systematic skill development + strategy practice",
        "Month 3: Advanced techniques + regular testing + refinement"
      ],
      dailyTime: "1.5-2 hours",
      color: "green"
    }
  ];

  const psychologicalTips = [
    {
      icon: Shield,
      title: "Confidence Building",
      tips: [
        "Practice positive visualization daily - see yourself succeeding",
        "Keep a 'wins journal' - record daily improvements and breakthroughs",
        "Use progressive muscle relaxation before practice sessions",
        "Create a 'power pose' routine to boost confidence before the test"
      ]
    },
    {
      icon: Users,
      title: "Social Learning Strategies", 
      tips: [
        "Join online IELTS communities for motivation and tips",
        "Practice speaking with native speakers via language exchange apps",
        "Form study groups with other test takers for accountability",
        "Share your progress on social media for external motivation"
      ]
    },
    {
      icon: Coffee,
      title: "Test Anxiety Management",
      tips: [
        "Practice the '4-7-8 breathing technique' for instant calm",
        "Use mindfulness meditation apps for 10 minutes daily",
        "Develop 'grounding techniques' - name 5 things you see, 4 you hear, etc.",
        "Create positive mantras: 'I am prepared and capable'"
      ]
    }
  ];

  const technologyTools = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      tools: [
        "Anki for vocabulary flashcards with spaced repetition",
        "Voice recorder apps for speaking practice and self-evaluation",
        "Cambridge IELTS app for official practice materials",
        "Grammarly for writing feedback and error patterns"
      ]
    },
    {
      icon: Wifi,
      title: "Online Resources",
      tools: [
        "BBC Learning English for authentic listening materials",
        "TED Talks for academic vocabulary and complex ideas",
        "Online IELTS simulators for realistic test experience",
        "YouTube channels for free lessons and tips from experts"
      ]
    }
  ];

  const quickReference = [
    {
      title: "Last 48 Hours Checklist",
      items: [
        "✓ Confirm test center location and transport route",
        "✓ Prepare required documents in a clear folder",
        "✓ Review your personal strategy sheets for each section",
        "✓ Practice relaxation techniques and positive affirmations",
        "✓ Get 8+ hours of sleep each night"
      ]
    },
    {
      title: "Test Day Emergency Kit",
      items: [
        "✓ Valid passport/ID + photocopy",
        "✓ Bottle of water and healthy snacks",
        "✓ Analog watch (if allowed at your center)",
        "✓ Tissues and comfortable clothing",
        "✓ Backup transport plan and emergency contact"
      ]
    }
  ];

  const recoveryStrategies = [
    {
      title: "When Reading Gets Difficult",
      strategies: [
        "Skip the passage entirely and move to easier questions",
        "Focus on question types you're strongest at first",
        "Use elimination method even if you don't understand the text",
        "Look for obvious answers in headings and True/False questions"
      ]
    },
    {
      title: "When Writing Time Runs Short",
      strategies: [
        "Write a simple conclusion even if it's just one sentence",
        "Focus on task achievement over perfect grammar",
        "Use bullet points for ideas if running out of time",
        "Don't leave tasks completely blank - attempt everything"
      ]
    },
    {
      title: "When Speaking Gets Nervous",
      strategies: [
        "Use the preparation time to write key words, not full sentences",
        "If you lose track, say 'Let me think about this differently...'",
        "Ask for clarification: 'Could you repeat the question?'",
        "Keep talking even if you make mistakes - fluency matters more"
      ]
    }
  ];

  const examStrategies = [
    {
      title: "The Week Before",
      items: [
        "Take a complete practice test under strict exam conditions",
        "Review and memorize your personal strategy sheets for each section",
        "Prepare all required documents and backup identification",
        "Establish optimal sleep schedule (8+ hours nightly)",
        "Visit the test center location if possible to reduce anxiety"
      ]
    },
    {
      title: "The Day Before",
      items: [
        "Light review only - no new learning or intensive practice",
        "Engage with enjoyable English content (movies, podcasts) for ear training",
        "Organize test day materials: ID, stationery, water, healthy snacks",
        "Practice relaxation techniques and positive affirmations",
        "Early bedtime with phone away from sleeping area"
      ]
    },
    {
      title: "Test Day Strategy",
      items: [
        "Arrive 45 minutes early to settle nerves and complete check-in calmly",
        "Eat protein-rich breakfast for sustained energy and brain function",
        "Use bathroom breaks strategically to reset focus between sections",
        "Practice brief meditation or breathing exercises during transitions",
        "Trust your preparation - avoid last-minute cramming or strategy changes"
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Perfectionism Paralysis",
      solution: "Accept that good enough is better than perfect when time is limited",
      impact: "Leads to incomplete tests and unnecessary stress"
    },
    {
      mistake: "Ignoring Question Instructions", 
      solution: "Highlight key instruction words: 'no more than', 'one word only', etc.",
      impact: "Even correct answers marked wrong due to format errors"
    },
    {
      mistake: "Over-studying Strengths",
      solution: "Spend 70% of time on weak areas, 30% maintaining strong areas",
      impact: "Unbalanced scores that don't reflect true ability"
    },
    {
      mistake: "Memorizing Sample Answers",
      solution: "Learn structures and ideas, but develop personal examples and language",
      impact: "Robotic responses that examiners easily identify and penalize"
    },
    {
      mistake: "Panic Response to Difficulties",
      solution: "Develop 'emergency protocols' for each section when things go wrong",
      impact: "One difficult section derails performance in remaining sections"
    },
    {
      mistake: "Underestimating Transfer Time",
      solution: "Practice transferring answers quickly and accurately under time pressure",
      impact: "Correct work goes unmarked due to poor time management"
    }
  ];

  const expertInsights = [
    {
      title: "Band Score Psychology",
      insight: "Band 7+ requires showing 'natural' English use, not just accuracy. Examiners look for authenticity over complexity."
    },
    {
      title: "The 80/20 Rule",
      insight: "80% of score improvements come from mastering 20% of key techniques. Focus on high-impact strategies first."
    },
    {
      title: "Examiner Expectations",
      insight: "Examiners are trained to find reasons to award higher scores, not to catch mistakes. Show your best English confidently."
    },
    {
      title: "Strategic Mistakes",
      insight: "Sometimes strategic 'mistakes' (like guessing confidently) score better than perfect answers delivered hesitantly."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Lightbulb className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Expert Tips & Tricks</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven strategies from IELTS professionals and high-scoring test takers. Master insider techniques that make a real difference on test day.
          </p>
        </div>
      </section>

      {/* Quick Reference Cards */}
      <section className="py-16 bg-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Reference Guide</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quickReference.map((ref, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {ref.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {ref.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-gray-700 leading-relaxed">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General Tips */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Universal Success Strategies</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {generalTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <Icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <CardTitle className="text-xl text-yellow-600">{tip.title}</CardTitle>
                    <CardDescription className="text-gray-600">{tip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tip.tips.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skill-Specific Tips */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Advanced Skill-Specific Strategies</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillSpecificTips.map((skill, index) => {
              const Icon = skill.icon;
              const colorClasses = {
                blue: "text-blue-600 bg-blue-50",
                green: "text-green-600 bg-green-50", 
                purple: "text-purple-600 bg-purple-50",
                orange: "text-orange-600 bg-orange-50"
              };
              
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${colorClasses[skill.color]}`}>
                        <Icon className={`h-8 w-8 ${colorClasses[skill.color].split(' ')[0]}`} />
                      </div>
                      <CardTitle className="text-2xl text-gray-900">{skill.skill}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                          Quick Wins
                        </h4>
                        <ul className="space-y-2">
                          {skill.quickTips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Advanced Techniques
                        </h4>
                        <ul className="space-y-2">
                          {skill.advancedTips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Brain className="h-4 w-4 mr-2 text-purple-500" />
                          Expert Secrets
                        </h4>
                        <ul className="space-y-2">
                          {skill.expertSecrets.map((secret, secretIndex) => (
                            <li key={secretIndex} className="flex items-start space-x-2">
                              <Star className="h-3 w-3 text-purple-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm font-medium">{secret}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Technology-Enhanced Learning</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologyTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-indigo-50">
                        <Icon className="h-8 w-8 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{tool.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tool.tools.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recovery Strategies */}
      <section className="py-20 bg-orange-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Emergency Recovery Strategies</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            When things don't go as planned during the test, these strategies can help you recover and maintain your performance.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recoveryStrategies.map((strategy, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="h-8 w-8 text-orange-600" />
                    <CardTitle className="text-xl text-gray-900">{strategy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {strategy.strategies.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Schedules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Strategic Study Plans</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {studySchedules.map((plan, index) => {
              const colorClasses = {
                red: "border-red-200 bg-red-50",
                blue: "border-blue-200 bg-blue-50",
                green: "border-green-200 bg-green-50"
              };
              
              return (
                <Card key={index} className={`border-2 ${colorClasses[plan.color]} shadow-lg`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{plan.title}</CardTitle>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                    <div className="text-lg font-semibold text-gray-800">
                      Daily Commitment: {plan.dailyTime}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.schedule.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Psychological Tips */}
      <section className="py-20 bg-purple-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Mental Performance & Motivation</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {psychologicalTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Icon className="h-8 w-8 text-purple-600" />
                      <CardTitle className="text-xl text-gray-900">{tip.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tip.tips.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expert Insights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Professional Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertInsights.map((insight, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{insight.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{insight.insight}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Timeline Strategy */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Test Preparation Timeline</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {examStrategies.map((strategy, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-600 text-center">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {strategy.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 bg-red-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Critical Mistakes to Avoid</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonMistakes.map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.mistake}</h3>
                    <p className="text-red-600 text-xs font-medium">{item.impact}</p>
                  </div>
                  <div className="border-t border-gray-200 my-4"></div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply These Expert Strategies?</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your IELTS preparation with these proven techniques and start seeing real improvements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Take Practice Test
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3">
              View Model Answers
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TipsAndTricks;
