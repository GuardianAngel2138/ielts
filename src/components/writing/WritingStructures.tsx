
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default function WritingStructures() {
  return (
    <section className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-16">Essential Writing Structures</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-green-600 flex items-center gap-2">
                Task 1 Structure
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-gray-400 hover:text-green-600" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>
                      Introduction: paraphrase question.<br />
                      Overview: key trends/features.<br />
                      Body: precise details/data.
                    </span>
                  </TooltipContent>
                </Tooltip>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Introduction (1-2 sentences)</h4>
                  <p className="text-sm text-gray-600">Paraphrase the question and describe what the visual shows</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Overview (2-3 sentences)</h4>
                  <p className="text-sm text-gray-600">Highlight the main trends, patterns, or key features</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Body Paragraphs (2 paragraphs)</h4>
                  <p className="text-sm text-gray-600">Describe specific details with data and comparisons</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-green-600 flex items-center gap-2">
                Task 2 Structure
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-gray-400 hover:text-green-600" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>
                      Introduction: clear thesis.<br />
                      Body: evidence, examples, topic sentences.<br />
                      Conclusion: summarize stance.
                    </span>
                  </TooltipContent>
                </Tooltip>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Introduction (3-4 sentences)</h4>
                  <p className="text-sm text-gray-600">Hook, background, and clear thesis statement</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Body Paragraph 1</h4>
                  <p className="text-sm text-gray-600">First main point with examples and explanations</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Body Paragraph 2</h4>
                  <p className="text-sm text-gray-600">Second main point or counterargument</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Conclusion (2-3 sentences)</h4>
                  <p className="text-sm text-gray-600">Summarize key points and restate position</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
