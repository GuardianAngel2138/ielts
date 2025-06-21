
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ListeningStepByStep from "@/components/listening/ListeningStepByStep";
import { Headphones, Clock, Users, CheckCircle, Volume2, Globe, BookOpen, AlertCircle, Target, Brain, Timer } from "lucide-react";

const Listening = () => {
  const sections = [
    {
      title: "Section 1",
      context: "Social/Survival",
      description: "Conversation between two people in everyday social context",
      speakers: "2 speakers",
      difficulty: "Easier",
      duration: "7-8 minutes",
      questions: "10 questions",
      skills: ["Understanding specific information", "Following conversations", "Note-taking"],
      commonMistakes: ["Missing spelled words", "Not following the conversation flow", "Focusing on unfamiliar accents"],
      strategy: "Listen for key words and synonyms. Pay attention to spelling when names or addresses are mentioned."
    },
    {
      title: "Section 2", 
      context: "Social/Survival",
      description: "Monologue in everyday social context",
      speakers: "1 speaker",
      difficulty: "Easier",
      duration: "7-8 minutes", 
      questions: "10 questions",
      skills: ["Following monologues", "Understanding directions", "Identifying specific details"],
      commonMistakes: ["Getting lost in directions", "Missing transition words", "Overthinking simple answers"],
      strategy: "Focus on signposting language. Draw diagrams or maps when possible to visualize information."
    },
    {
      title: "Section 3",
      context: "Educational/Training",
      description: "Conversation in educational/training context",
      speakers: "2-4 speakers",
      difficulty: "Harder",
      duration: "7-8 minutes",
      questions: "10 questions", 
      skills: ["Following academic discussions", "Understanding different viewpoints", "Identifying speaker attitudes"],
      commonMistakes: ["Confusing speakers", "Missing opinion changes", "Focusing on individual words vs meaning"],
      strategy: "Track who is speaking. Listen for agreement/disagreement markers and opinion expressions."
    },
    {
      title: "Section 4",
      context: "Educational/Training", 
      description: "Monologue on academic subject",
      speakers: "1 speaker",
      difficulty: "Harder",
      duration: "7-8 minutes",
      questions: "10 questions",
      skills: ["Following academic lectures", "Understanding complex concepts", "Note-taking for detailed information"],
      commonMistakes: ["Information overload", "Missing key transitions", "Getting stuck on difficult vocabulary"],
      strategy: "Focus on the overall structure. Listen for lecture signposts like 'firstly', 'in conclusion', 'however'."
    }
  ];

  const questionTypes = [
    {
      type: "Multiple Choice",
      description: "Choose the correct answer from 3-4 options",
      difficulty: "Medium",
      timePerQuestion: "30-45 seconds",
      keySkills: ["Eliminating wrong answers", "Listening for paraphrases", "Understanding context"],
      approach: "Read all options first, listen for synonyms and paraphrases, eliminate obvious wrong answers",
      commonMistakes: ["Choosing first heard option", "Not reading all choices", "Overthinking obvious answers"]
    },
    {
      type: "Form/Note/Table/Flow-chart Completion",
      description: "Fill in missing information in various formats",
      difficulty: "Easy-Medium", 
      timePerQuestion: "20-30 seconds",
      keySkills: ["Spelling accuracy", "Following sequence", "Understanding context"],
      approach: "Predict answer types, follow the logical order, pay attention to word limits",
      commonMistakes: ["Spelling errors", "Exceeding word limits", "Missing obvious answers"]
    },
    {
      type: "Matching",
      description: "Match items from two lists or categories",
      difficulty: "Medium-Hard",
      timePerQuestion: "45-60 seconds", 
      keySkills: ["Understanding relationships", "Processing multiple options", "Quick decision making"],
      approach: "Understand the categories first, listen for connecting language, use elimination process",
      commonMistakes: ["Not understanding categories", "Changing correct answers", "Running out of time"]
    },
    {
      type: "Plan/Map/Diagram Labelling",
      description: "Label parts of visual materials",
      difficulty: "Medium",
      timePerQuestion: "30-40 seconds",
      keySkills: ["Spatial awareness", "Following directions", "Understanding location descriptions"], 
      approach: "Study the visual carefully, understand the starting point, follow directional language",
      commonMistakes: ["Not studying visual first", "Getting lost in directions", "Mixing up left/right"]
    },
    {
      type: "Short Answer Questions",
      description: "Answer questions with 1-3 words or numbers",
      difficulty: "Easy-Medium",
      timePerQuestion: "20-30 seconds",
      keySkills: ["Extracting specific information", "Understanding question types", "Precise listening"],
      approach: "Identify question word type, listen for exact information, stick to word limits",
      commonMistakes: ["Writing too many words", "Including articles unnecessarily", "Spelling errors"]
    }
  ];

  const strategies = [
    {
      title: "Before Listening",
      icon: BookOpen,
      tips: [
        "Read all questions carefully and predict possible answers",
        "Identify key words and think of possible synonyms", 
        "Look at any visual aids (maps, diagrams, forms)",
        "Understand the context and situation for each section"
      ]
    },
    {
      title: "While Listening", 
      icon: Headphones,
      tips: [
        "Listen for synonyms and paraphrases, not exact words",
        "Don't panic if you miss an answer - move on quickly",
        "Write answers as you hear them, don't wait",
        "Follow the order of questions - they match the recording"
      ]
    },
    {
      title: "After Listening",
      icon: CheckCircle,
      tips: [
        "Check your spelling carefully - especially names and places",
        "Ensure answers fit grammatically in the sentence", 
        "Transfer answers to answer sheet clearly",
        "Don't leave blanks - make educated guesses if needed"
      ]
    }
  ];

  const bandDescriptors = [
    {
      band: "9",
      description: "Expert User",
      criteria: "38-40 correct answers",
      skills: "Can understand extended speech even when not clearly structured"
    },
    {
      band: "8", 
      description: "Very Good User",
      criteria: "35-37 correct answers",
      skills: "Can understand extended speech with occasional lapses"
    },
    {
      band: "7",
      description: "Good User", 
      criteria: "30-34 correct answers",
      skills: "Can understand extended speech with some effort"
    },
    {
      band: "6",
      description: "Competent User",
      criteria: "23-29 correct answers", 
      skills: "Can understand main ideas in extended speech"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Headphones className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">IELTS Listening Mastery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Develop exceptional listening skills across all accents and contexts. Master every section with targeted practice and proven strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-lg p-6">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">30 Minutes</h3>
              <p className="text-gray-600">Listening time + 10 minutes transfer</p>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-lg p-6">
              <Volume2 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">4 Sections</h3>
              <p className="text-gray-600">Increasing difficulty levels</p>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">40 Questions</h3>
              <p className="text-gray-600">Multiple question types</p>
            </div>
          </div>
        </div>
      </section>

      <ListeningStepByStep />

      {/* Test Format */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Test Format Overview</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl text-purple-600">{section.title}</CardTitle>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      section.difficulty === 'Easier' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {section.difficulty}
                    </span>
                  </div>
                  <CardDescription className="text-purple-700 font-medium text-base">{section.context}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 font-medium">{section.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-600">{section.speakers}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Timer className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-600">{section.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-600">{section.questions}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Brain className="h-4 w-4 text-purple-600 mr-2" />
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Strategy
                    </h4>
                    <p className="text-gray-700 text-sm">{section.strategy}</p>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                      Common Mistakes
                    </h4>
                    <ul className="space-y-1">
                      {section.commonMistakes.map((mistake, mistakeIndex) => (
                        <li key={mistakeIndex} className="text-gray-700 text-xs flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Question Types */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Question Types Mastery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {questionTypes.map((question, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                      {index + 1}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      question.difficulty.includes('Easy') ? 'bg-green-100 text-green-700' :
                      question.difficulty.includes('Medium') ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {question.difficulty}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-purple-600 group-hover:text-purple-700 transition-colors">
                    {question.type}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{question.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Time per question:</span>
                    <span className="font-medium text-purple-600">{question.timePerQuestion}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {question.keySkills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Approach</h4>
                    <p className="text-gray-700 text-xs leading-relaxed">{question.approach}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                      <AlertCircle className="h-3 w-3 text-red-500 mr-1" />
                      Avoid These Mistakes
                    </h4>
                    <ul className="space-y-1">
                      {question.commonMistakes.map((mistake, mistakeIndex) => (
                        <li key={mistakeIndex} className="text-gray-600 text-xs flex items-start">
                          <span className="text-red-500 mr-1">•</span>
                          {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Band Descriptors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Band Score Guide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bandDescriptors.map((band, index) => (
              <Card key={index} className="border-0 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold">{band.band}</span>
                  </div>
                  <CardTitle className="text-purple-600 text-lg">{band.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-sm font-semibold text-purple-700">Score Range</p>
                      <p className="text-lg font-bold text-purple-900">{band.criteria}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{band.skills}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Winning Strategies</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <strategy.icon className="h-8 w-8 text-purple-600" />
                    <CardTitle className="text-xl text-purple-600">{strategy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {strategy.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accent Preparation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Master All English Accents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl text-purple-600">International Accents</CardTitle>
                <CardDescription>IELTS features speakers from around the English-speaking world</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["British English", "American English", "Australian English", "Canadian English", "New Zealand English"].map((accent, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="font-medium">{accent}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Headphones className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl text-purple-600">Preparation Tips</CardTitle>
                <CardDescription>How to prepare for accent diversity</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Watch international news channels daily",
                    "Listen to podcasts from different countries", 
                    "Practice with authentic IELTS materials",
                    "Focus on content, not accent differences",
                    "Expose yourself to variety regularly"
                  ].map((tip, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Master IELTS Listening Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Practice with authentic materials and achieve your target band score
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Take Practice Test
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
              Start Exercises
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Listening;
