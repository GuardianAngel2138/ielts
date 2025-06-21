
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown, Clock, Target, Lightbulb, BookOpen, AlertCircle } from "lucide-react";
import { readingQuestionData } from "@/data/readingQuestionData";

interface QuestionTypesProps {
  selectedTestType: 'academic' | 'general';
}

const QuestionTypes = ({ selectedTestType }: QuestionTypesProps) => {
  const questionTypes = readingQuestionData[selectedTestType];
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-amber-600 bg-amber-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {selectedTestType === 'academic' ? 'Academic' : 'General Training'} Question Types
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master every question format with detailed breakdowns of difficulty levels, time allocation, and proven strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {questionTypes.map((q, index) => {
            const isExpanded = expandedCards.has(q.id);
            return (
              <Card 
                key={q.id} 
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer transform hover:-translate-y-2 ${
                  isExpanded ? 'ring-2 ring-blue-300 shadow-2xl scale-[1.02]' : ''
                }`}
                onClick={() => toggleCard(q.id)}
              >
                {/* Card Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>

                <CardHeader className="pb-4 pr-14">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors font-bold">
                        {q.title}
                      </CardTitle>
                      
                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(q.difficulty)}`}>
                          {q.difficulty}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-100 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {q.timeAllocation}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs font-semibold text-purple-600 bg-purple-100">
                          {q.frequency} in test
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {q.description.length > 120 ? `${q.description.slice(0, 120)}...` : q.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Button */}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-blue-600 font-medium">
                      {isExpanded ? 'Less details' : 'More details'}
                    </span>
                    <div className={`p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-all duration-300 ${isExpanded ? 'rotate-180 bg-blue-100' : ''}`}>
                      <ChevronDown className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0 animate-fade-in">
                    <div className="space-y-5">
                      {/* Key Skills Section */}
                      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100/50 p-5 rounded-xl border border-indigo-200/50">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                            <Target className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                              Key Skills Tested
                            </h4>
                            <ul className="text-gray-700 text-sm space-y-1">
                              {q.keySkills.map((skill, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* Strategy Section */}
                      <div className="bg-gradient-to-r from-green-50 to-green-100/50 p-5 rounded-xl border border-green-200/50">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Lightbulb className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                              Winning Strategy
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-sm mb-3">
                              {q.strategy}
                            </p>
                            <div className="bg-white/60 p-3 rounded-lg border border-green-200/30">
                              <h5 className="font-semibold text-green-800 text-xs mb-1">STEP-BY-STEP APPROACH:</h5>
                              <ol className="text-xs text-gray-700 space-y-1">
                                {q.stepByStep.map((step, idx) => (
                                  <li key={idx} className="flex gap-2">
                                    <span className="font-semibold text-green-600">{idx + 1}.</span>
                                    {step}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Common Mistakes Section */}
                      <div className="bg-gradient-to-r from-red-50 to-red-100/50 p-5 rounded-xl border border-red-200/50">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <AlertCircle className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                              Avoid These Mistakes
                            </h4>
                            <ul className="text-gray-700 text-sm space-y-2">
                              {q.commonMistakes.map((mistake, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="leading-relaxed">{mistake}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Master These Question Types?
            </h3>
            <p className="text-gray-600 mb-6">
              Practice with real {selectedTestType} materials and apply these proven strategies to boost your reading score.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Practicing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionTypes;
