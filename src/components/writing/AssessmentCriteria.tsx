
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { BarChart3, HelpCircle } from "lucide-react";

type Criteria = {
  title: string;
  description: string;
  weight: string;
  details: string;
};

export const assessmentCriteria: Criteria[] = [
  {
    title: "Task Achievement",
    description: "How well you answer the question and fulfill requirements",
    weight: "25%",
    details: "Addresses all parts of the task, presents clear position, develops ideas appropriately"
  },
  {
    title: "Coherence & Cohesion",
    description: "Logical organization and connection of ideas",
    weight: "25%",
    details: "Uses cohesive devices, has clear progression, organizes paragraphs logically"
  },
  {
    title: "Lexical Resource",
    description: "Vocabulary range, accuracy, and appropriateness",
    weight: "25%",
    details: "Uses wide range of vocabulary, shows awareness of style, makes few errors"
  },
  {
    title: "Grammar & Accuracy",
    description: "Range and accuracy of grammatical structures",
    weight: "25%",
    details: "Uses variety of structures, shows flexibility, maintains high accuracy"
  }
];

export default function AssessmentCriteriaSection() {
  return (
    <section className="py-12 sm:py-20 bg-gray-50 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-6">
            <BarChart3 className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Assessment Criteria</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understand exactly how your writing is evaluated across four key criteria, each worth 25% of your final score.
          </p>
          <span className="text-green-700 text-xs sm:text-sm font-medium bg-green-50 rounded px-2 sm:px-3 py-0.5 mt-2 inline-block">
            <span className="font-bold mr-1">Tip:</span>
            Tap a card for more detail.
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {assessmentCriteria.map((criteria, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer rounded-2xl">
                  <CardHeader className="pb-2 sm:pb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <BarChart3 className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-green-600 group-hover:text-green-700 transition-colors leading-tight flex items-center gap-1 justify-center">
                      {criteria.title}
                      <HelpCircle className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition" />
                    </CardTitle>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">{criteria.weight}</div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-1 sm:mb-3 leading-relaxed text-xs sm:text-base">
                      {criteria.description}
                    </CardDescription>
                    <div className="text-xs text-gray-500 leading-relaxed hidden sm:block">
                      {criteria.details}
                    </div>
                    {/* For mobile, show details always */}
                    <div className="text-[13px] text-gray-600 mt-2 block sm:hidden">
                      <b>What this means:</b> {criteria.details}
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-72 sm:w-80 text-left">
                <div className="font-semibold text-green-700 mb-1">{criteria.title}</div>
                <div className="text-gray-700 text-sm">{criteria.details}</div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
