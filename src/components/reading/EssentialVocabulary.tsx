
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Book, Brain, Zap, HelpCircle, BookOpen } from "lucide-react";

interface EssentialVocabularyProps {
  selectedTestType: 'academic' | 'general';
}

const EssentialVocabulary = ({ selectedTestType }: EssentialVocabularyProps) => {
  const academicVocab = [
    {
      category: "Research & Analysis",
      words: ["analyze", "hypothesis", "methodology", "empirical", "correlate", "substantiate"],
      usage: "These words appear frequently in scientific and research texts. Practice identifying them in context."
    },
    {
      category: "Cause & Effect",
      words: ["consequently", "therefore", "furthermore", "nevertheless", "whereas", "thereby"],
      usage: "Signal words that show relationships between ideas. Essential for understanding text structure."
    },
    {
      category: "Academic Verbs",
      words: ["demonstrate", "illustrate", "establish", "indicate", "comprise", "constitute"],
      usage: "Common academic verbs that express actions, evidence, and relationships in formal texts."
    },
    {
      category: "Descriptive Terms",
      words: ["significant", "substantial", "considerable", "negligible", "prominent", "prevalent"],
      usage: "Adjectives used to describe importance, size, and frequency in academic contexts."
    }
  ];

  const generalVocab = [
    {
      category: "Workplace Terms",
      words: ["personnel", "procedure", "mandatory", "flexible", "efficient", "facilitate"],
      usage: "Common in job advertisements, workplace policies, and business communications."
    },
    {
      category: "Daily Life",
      words: ["convenient", "available", "require", "recommend", "suitable", "alternative"],
      usage: "Everyday words found in brochures, advertisements, and general information texts."
    },
    {
      category: "Instructions",
      words: ["ensure", "complete", "obtain", "submit", "notify", "confirm"],
      usage: "Action words commonly found in forms, manuals, and instructional materials."
    },
    {
      category: "Descriptions",
      words: ["comprehensive", "essential", "optional", "previous", "current", "additional"],
      usage: "Descriptive words that help identify specific information and requirements."
    }
  ];

  const currentVocab = selectedTestType === 'academic' ? academicVocab : generalVocab;

  const signalWords = [
    { 
      type: "Addition", 
      words: ["furthermore", "moreover", "in addition", "besides"],
      explanation: "These words introduce additional information or support existing points."
    },
    { 
      type: "Contrast", 
      words: ["however", "nevertheless", "on the contrary", "whereas"],
      explanation: "These words signal opposing ideas or contradictory information."
    },
    { 
      type: "Cause/Effect", 
      words: ["therefore", "consequently", "as a result", "due to"],
      explanation: "These words show causal relationships between events or ideas."
    },
    { 
      type: "Example", 
      words: ["for instance", "such as", "namely", "specifically"],
      explanation: "These words introduce examples or specific cases."
    },
    { 
      type: "Conclusion", 
      words: ["in conclusion", "to summarize", "overall", "ultimately"],
      explanation: "These words signal the end of an argument or summary of main points."
    }
  ];

  const learningStrategies = [
    {
      strategy: "Context Clues",
      description: "Use surrounding words to guess meanings of unknown vocabulary",
      howTo: "Look at the words before and after unknown vocabulary. Check if there are definitions, examples, or synonyms nearby."
    },
    {
      strategy: "Word Families",
      description: "Learn related words (analyze, analysis, analytical) together",
      howTo: "Group words by their root. Learn noun, verb, adjective, and adverb forms together for better retention."
    },
    {
      strategy: "Synonyms",
      description: "Questions often use synonyms of words from the passage",
      howTo: "Practice identifying synonyms and paraphrases. The test rarely uses exact words from the passage in questions."
    }
  ];

  return (
    <TooltipProvider>
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Book className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Essential Vocabulary for {selectedTestType === 'academic' ? 'Academic' : 'General Training'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Master these key words and phrases to improve comprehension and answer accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Brain className="h-6 w-6 mr-2 text-purple-600" />
                Key Vocabulary Categories
              </h3>
              <div className="space-y-6">
                {currentVocab.map((category, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-purple-600">{category.category}</CardTitle>
                        <HoverCard>
                          <HoverCardTrigger>
                            <HelpCircle className="h-4 w-4 text-gray-400 hover:text-purple-600 transition-colors cursor-pointer" />
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Usage Tips:</h4>
                              <p className="text-sm text-gray-600">{category.usage}</p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.words.map((word, wordIndex) => (
                          <Tooltip key={wordIndex}>
                            <TooltipTrigger>
                              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer">
                                {word}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm">Click to see usage examples</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="h-6 w-6 mr-2 text-indigo-600" />
                Signal Words & Phrases
              </h3>
              <div className="space-y-6">
                {signalWords.map((signal, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-indigo-600">{signal.type}</CardTitle>
                        <HoverCard>
                          <HoverCardTrigger>
                            <HelpCircle className="h-4 w-4 text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer" />
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Function:</h4>
                              <p className="text-sm text-gray-600">{signal.explanation}</p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {signal.words.map((word, wordIndex) => (
                          <span 
                            key={wordIndex}
                            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors cursor-pointer"
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-amber-50 to-orange-50">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2">
                <CardTitle className="text-2xl text-gray-900">Vocabulary Learning Strategies</CardTitle>
                <HoverCard>
                  <HoverCardTrigger>
                    <HelpCircle className="h-5 w-5 text-gray-400 hover:text-amber-600 transition-colors cursor-pointer" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-96">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Daily Practice Routine:</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>• Learn 10-15 new words daily</p>
                        <p>• Review previously learned words</p>
                        <p>• Practice using words in sentences</p>
                        <p>• Read texts that contain target vocabulary</p>
                        <p>• Keep a vocabulary journal</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {learningStrategies.map((strategy, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-amber-600 font-bold">{index + 1}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center justify-center gap-2">
                      {strategy.strategy}
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400 hover:text-amber-600 transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">{strategy.howTo}</p>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <p className="text-gray-700 text-sm">{strategy.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default EssentialVocabulary;
