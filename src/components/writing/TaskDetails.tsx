import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Target, HelpCircle, Lightbulb, Users, AlertCircle, Trophy } from "lucide-react";
import type { WritingTask } from "./WritingTasks";
import { Badge } from "@/components/ui/badge";

type Props = {
  selectedTaskData: WritingTask;
};

export default function TaskDetails({ selectedTaskData }: Props) {
  return (
    <div className="animate-fade-in">
      <Card className="border-0 shadow-xl bg-white">
        <CardHeader className="bg-gradient-to-r from-green-50 to-green-100/50 border-b border-green-200/50">
          <div className="flex items-center gap-3">
            <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
              <Target className="h-6 w-6" />
              {selectedTaskData?.title} - Complete Guide
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-gray-400 hover:text-green-600" />
                </TooltipTrigger>
                <TooltipContent>
                  <span>
                    Full step-by-step process, skills, and mistakes to avoid for this writing task.
                  </span>
                </TooltipContent>
              </Tooltip>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Key Skills */}
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100/50 p-6 rounded-xl border border-indigo-200/50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                      Key Skills Tested
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400 hover:text-indigo-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>These are the main skills examiners look for in your writing.</span>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      {selectedTaskData?.keySkills.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Strategy */}
              <div className="bg-gradient-to-r from-green-50 to-green-100/50 p-6 rounded-xl border border-green-200/50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                      Winning Strategy
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400 hover:text-green-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>
                            A proven approach you can follow to maximize your score for this task.
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {selectedTaskData?.strategy}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Step by Step */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-6 rounded-xl border border-blue-200/50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                      Step-by-Step Approach
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400 hover:text-blue-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>
                            Follow these steps for best results and logical structure.
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ol className="text-gray-700 text-sm space-y-2">
                      {selectedTaskData?.stepByStep.map((step, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="font-semibold text-blue-600 flex-shrink-0">{idx + 1}.</span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
              {/* Common Mistakes */}
              <div className="bg-gradient-to-r from-red-50 to-red-100/50 p-6 rounded-xl border border-red-200/50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                      Avoid These Mistakes
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400 hover:text-red-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>
                            Most common errors that lower scores—double-check and avoid them!
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      {selectedTaskData?.commonMistakes.map((mistake, idx) => (
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
          </div>

          {/* Assessment Criteria Section */}
          {selectedTaskData.assessmentCriteria && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center shadow-lg">
                    <Trophy className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Scoring & Assessment Criteria</h3>
                    <p className="text-sm text-gray-500">Your writing is marked on these four criteria, each worth 25%.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedTaskData.assessmentCriteria.map((criterion, idx) => (
                  <div key={idx} className="bg-gray-50/70 p-4 rounded-xl border border-gray-200/80 transition-all hover:shadow-md hover:border-gray-300">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-semibold text-gray-800">{criterion.name}</h5>
                      <Badge variant="outline" className="font-bold text-yellow-800 border-yellow-300 bg-yellow-100">{criterion.weight}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{criterion.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
