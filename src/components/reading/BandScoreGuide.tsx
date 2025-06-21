
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Award, Target, TrendingUp, HelpCircle, Lightbulb } from "lucide-react";

const BandScoreGuide = () => {
  const bandScores = [
    {
      band: "9",
      score: "39-40",
      description: "Expert user - handles complex language with full operational command",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      tips: "Focus on speed and accuracy. Practice with the most complex texts available."
    },
    {
      band: "8.5",
      score: "37-38",
      description: "Very good user - handles complex language very well",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      tips: "Work on inference questions and complex vocabulary. Review academic texts daily."
    },
    {
      band: "8",
      score: "35-36",
      description: "Very good user - fully operational command with occasional errors",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      tips: "Practice skimming and scanning techniques. Focus on time management."
    },
    {
      band: "7.5",
      score: "33-34",
      description: "Good user - operational command with occasional errors",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      tips: "Build vocabulary and practice True/False/Not Given questions extensively."
    },
    {
      band: "7",
      score: "30-32",
      description: "Good user - operational command though with occasional inaccuracies",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      tips: "Focus on understanding main ideas and supporting details. Practice daily."
    },
    {
      band: "6.5",
      score: "27-29",
      description: "Competent user - generally effective command despite inaccuracies",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      tips: "Work on keyword identification and basic scanning techniques."
    },
    {
      band: "6",
      score: "23-26",
      description: "Competent user - effective command despite some inaccuracies",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      tips: "Practice with easier texts first. Focus on understanding context clues."
    }
  ];

  const tips = [
    {
      text: "Each correct answer = 1 point (total 40 points)",
      tooltip: "There's no partial scoring - you either get the full point or no points for each question."
    },
    {
      text: "No negative marking for wrong answers",
      tooltip: "Always guess if you're unsure! There's no penalty for incorrect answers."
    },
    {
      text: "Spelling must be correct for written answers",
      tooltip: "Double-check your spelling when transferring answers. Even small mistakes cost points."
    },
    {
      text: "Both American and British spelling accepted",
      tooltip: "You can use either 'color' (US) or 'colour' (UK) - both are correct."
    }
  ];

  const studyStrategies = [
    {
      title: "For Band 6-6.5",
      strategy: "Focus on basic comprehension and vocabulary building",
      details: "Practice with shorter texts, work on understanding main ideas, and build core vocabulary."
    },
    {
      title: "For Band 7-7.5", 
      strategy: "Master all question types and improve speed",
      details: "Practice timed tests, focus on inference questions, and learn to identify paraphrasing."
    },
    {
      title: "For Band 8+",
      strategy: "Perfect accuracy and tackle complex texts",
      details: "Read academic journals, practice with the most difficult texts, and focus on subtle meanings."
    }
  ];

  return (
    <TooltipProvider>
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Reading Band Score Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understand exactly how many questions you need to answer correctly to achieve your target band score.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {bandScores.map((score, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${score.bgColor} overflow-hidden`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${score.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{score.band}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CardTitle className={`text-xl ${score.textColor} mb-2`}>
                      Band {score.band}
                    </CardTitle>
                    <HoverCard>
                      <HoverCardTrigger>
                        <HelpCircle className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Study Tips for Band {score.band}:</h4>
                          <p className="text-sm text-gray-600">{score.tips}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Target className={`h-4 w-4 ${score.textColor}`} />
                    <span className={`font-bold ${score.textColor}`}>{score.score}/40</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center text-sm leading-relaxed">
                    {score.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Scoring System</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed flex-1">{tip.text}</span>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400 hover:text-blue-600 transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent side="left" className="max-w-xs">
                          <p className="text-sm">{tip.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Study Strategies by Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {studyStrategies.map((strategy, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-green-700">{strategy.title}</h4>
                      <p className="text-gray-800 font-medium text-sm">{strategy.strategy}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{strategy.details}</p>
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

export default BandScoreGuide;
