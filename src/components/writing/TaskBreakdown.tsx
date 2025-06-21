
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, HelpCircle, Target, Award, BookOpen } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { tasks, WritingTask } from "./WritingTasks";
import { useState } from "react";

// Add this helper function for badge colors:
function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Easy":
      return "bg-green-100 text-green-700";
    case "Medium":
      return "bg-yellow-100 text-yellow-800";
    case "Hard":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

type TaskId = 'task1-academic' | 'task1-general' | 'task2';
type Props = {
  selectedTask: TaskId | null;
  setSelectedTask: (id: TaskId | null) => void;
};

export default function TaskBreakdown({ selectedTask, setSelectedTask }: Props) {
  return (
    <section className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Writing Tasks Breakdown</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understand each task type with detailed strategies, step-by-step approaches, and common pitfalls to avoid.
          </p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-green-700 text-xs sm:text-sm font-medium bg-green-50 rounded px-2 sm:px-3 py-0.5">
              <span className="font-bold mr-1">Tip:</span>
              {`Tap a task card${selectedTask ? "" : " below"} to ${selectedTask ? "hide or show another" : "see its complete guide"}!`}
            </span>
            <span className="sm:hidden text-gray-400 text-base">👆</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 mb-8 sm:mb-12">
          {tasks.map((task, index) => (
            <Card
              key={task.id}
              className={`group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer rounded-2xl sm:hover:-translate-y-2 ${
                selectedTask === task.id ? 'ring-2 ring-green-300 shadow-2xl scale-[1.02]' : ''
              }`}
              onClick={() => setSelectedTask(selectedTask === task.id ? null : task.id)}
              tabIndex={0}
              aria-label={`Show ${task.title} guide`}
            >
              <div className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                {index + 1}
              </div>
              <CardHeader className="pb-3 sm:pb-4 pr-11">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-base sm:text-xl text-green-600 group-hover:text-green-700 transition-colors font-bold">
                    {task.title}
                  </CardTitle>
                  {/* For mobile: always show HelpCircle icon as info, with tooltip on desktop only */}
                  <span className="block sm:hidden"><HelpCircle className="h-4 w-4 text-gray-400" /></span>
                  <Tooltip>
                    <TooltipTrigger className="hidden sm:inline"><HelpCircle className="h-4 w-4 text-gray-400 hover:text-green-600" /></TooltipTrigger>
                    <TooltipContent>
                      <span>
                        {task.id === 'task1-academic'
                          ? "Report a chart/graph. Use formal, factual language."
                          : task.id === 'task1-general'
                            ? "Write a real-world letter. Use the correct tone!"
                            : "Express your opinion! Support arguments with examples."}
                      </span>
                    </TooltipContent>
                  </Tooltip>
                </div>
                
                {/* Add helpful info directly in the card */}
                <div className="mt-2 p-3 bg-green-50 rounded-lg border border-green-100">
                  <p className="text-xs text-green-700 font-medium">
                    {task.id === 'task1-academic'
                      ? "💡 Report a chart/graph. Use formal, factual language."
                      : task.id === 'task1-general'
                        ? "💡 Write a real-world letter. Use the correct tone!"
                        : "💡 Express your opinion! Support arguments with examples."}
                  </p>
                </div>
                
                <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">{task.description}</CardDescription>
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge className={`${getDifficultyColor(task.difficulty)} text-xs font-semibold`}>{task.difficulty}</Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>Relative level of challenge</span>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant="outline" className="text-xs font-semibold text-green-600 border-green-200">
                        <Clock className="h-3 w-3 mr-1" />
                        {task.timeLimit}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>Recommended time allocation</span>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant="outline" className="text-xs font-semibold text-blue-600 border-blue-200">
                        📝 {task.wordCount}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>Minimum word requirement</span>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant="outline" className="text-xs font-semibold text-purple-600 border-purple-200">
                        {task.weight} of score
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>% of total mark for this task</span>
                    </TooltipContent>
                  </Tooltip>
                </div>
                
                {/* Add badge explanations directly in card */}
                <div className="mt-3 space-y-1 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Difficulty:</span>
                    <span>Relative level of challenge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Time & Words:</span>
                    <span>Recommended allocation & minimum requirement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Weight:</span>
                    <span>% of total mark for this task</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-2 sm:mb-4">
                  {task.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-[13px] sm:text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <span className="text-xs text-green-600 font-medium">
                    {selectedTask === task.id ? 'Hide details' : 'Tap for detailed guide'}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
