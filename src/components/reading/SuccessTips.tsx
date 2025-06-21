
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Target, Book, Brain, CheckCircle, Zap, AlertTriangle } from "lucide-react";

interface SuccessTipsProps {
  selectedTestType: 'academic' | 'general';
}

const SuccessTips = ({ selectedTestType }: SuccessTipsProps) => {
  const commonTips = [
    {
      icon: Clock,
      title: "Time Management",
      tips: [
        "Spend 20 minutes per passage",
        "Don't get stuck on difficult questions",
        "Leave 2-3 minutes for checking answers",
        "Practice with a timer regularly"
      ]
    },
    {
      icon: Target,
      title: "Answer Strategy",
      tips: [
        "Read questions before the passage",
        "Look for keywords and synonyms",
        "Don't leave any blanks - guess if needed",
        "Transfer answers carefully"
      ]
    },
    {
      icon: Book,
      title: "Reading Technique",
      tips: [
        "Skim first for general understanding",
        "Scan for specific information",
        "Pay attention to paragraph topics",
        "Use context clues for unknown words"
      ]
    }
  ];

  const academicSpecificTips = [
    {
      icon: Brain,
      title: "Academic Text Skills",
      tips: [
        "Focus on main arguments and evidence",
        "Understand academic vocabulary in context",
        "Identify writer's stance and tone",
        "Look for cause-effect relationships"
      ]
    },
    {
      icon: Zap,
      title: "Quick Wins",
      tips: [
        "Practice True/False/Not Given daily",
        "Learn common academic word families",
        "Master heading matching techniques",
        "Build stamina with full-length tests"
      ]
    }
  ];

  const generalSpecificTips = [
    {
      icon: Brain,
      title: "Everyday Text Skills",
      tips: [
        "Focus on practical information",
        "Look for specific details quickly",
        "Understand instructions and procedures",
        "Practice with real-world materials"
      ]
    },
    {
      icon: Zap,
      title: "Quick Wins",
      tips: [
        "Read advertisements and brochures daily",
        "Practice with workplace documents",
        "Master information matching tasks",
        "Time yourself on shorter texts"
      ]
    }
  ];

  const avoidMistakes = [
    "Don't spend too long on one question",
    "Avoid choosing answers with exact word matches",
    "Don't assume - stick to what the text says",
    "Check spelling when transferring answers",
    "Don't change answers unless you're certain"
  ];

  const specificTips = selectedTestType === 'academic' ? academicSpecificTips : generalSpecificTips;
  const allTips = [...commonTips, ...specificTips];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Tips for {selectedTestType === 'academic' ? 'Academic' : 'General Training'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master these proven strategies to maximize your Reading score and tackle the test with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allTips.map((tipGroup, index) => {
            const Icon = tipGroup.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{tipGroup.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tipGroup.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-0 shadow-lg bg-red-50">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">Common Mistakes to Avoid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {avoidMistakes.map((mistake, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{mistake}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SuccessTips;
