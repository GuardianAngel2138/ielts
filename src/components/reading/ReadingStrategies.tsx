
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Search, Eye, BookOpen, Target, Lightbulb, CheckCircle } from "lucide-react";

interface ReadingStrategiesProps {
  selectedTestType: 'academic' | 'general';
}

const ReadingStrategies = ({ selectedTestType }: ReadingStrategiesProps) => {
  const commonStrategies = [
    {
      icon: Eye,
      title: "Skimming",
      description: "Read quickly to get the general idea",
      techniques: [
        "Read the title and headings first",
        "Look at the first and last paragraphs",
        "Read the first sentence of each paragraph",
        "Don't worry about unknown words initially"
      ]
    },
    {
      icon: Search,
      title: "Scanning",
      description: "Search for specific information quickly",
      techniques: [
        "Look for keywords from the questions",
        "Use your finger to guide your eyes",
        "Focus on names, dates, and numbers",
        "Ignore irrelevant information"
      ]
    },
    {
      icon: Target,
      title: "Keyword Strategy",
      description: "Identify and locate key information",
      techniques: [
        "Underline keywords in questions",
        "Look for synonyms in the text",
        "Pay attention to qualifying words (always, never, some)",
        "Notice signal words (however, therefore, although)"
      ]
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Allocate time effectively across passages",
      techniques: [
        "Spend 20 minutes per passage maximum",
        "Do easier questions first",
        "Don't spend more than 1.5 minutes per question",
        "Leave time to transfer answers"
      ]
    }
  ];

  const academicStrategies = [
    {
      icon: BookOpen,
      title: "Academic Text Analysis",
      description: "Navigate complex academic materials",
      techniques: [
        "Identify the thesis statement",
        "Follow argument development",
        "Understand data and research findings",
        "Recognize academic writing patterns"
      ]
    },
    {
      icon: Lightbulb,
      title: "Critical Reading",
      description: "Analyze author's purpose and tone",
      techniques: [
        "Distinguish facts from opinions",
        "Identify author's stance",
        "Understand implied meanings",
        "Recognize bias and assumptions"
      ]
    }
  ];

  const generalStrategies = [
    {
      icon: BookOpen,
      title: "Practical Text Skills",
      description: "Handle everyday reading materials",
      techniques: [
        "Focus on practical information",
        "Extract key facts and figures",
        "Understand instructions clearly",
        "Identify relevant details quickly"
      ]
    },
    {
      icon: Lightbulb,
      title: "Context Application",
      description: "Apply information to real situations",
      techniques: [
        "Relate to everyday experiences",
        "Understand workplace contexts",
        "Follow procedural steps",
        "Make practical connections"
      ]
    }
  ];

  const specificStrategies = selectedTestType === 'academic' ? academicStrategies : generalStrategies;
  const allStrategies = [...commonStrategies, ...specificStrategies];

  const quickTips = selectedTestType === 'academic' 
    ? [
        "Read the abstract or introduction first for context",
        "Pay attention to research methodology",
        "Look for conclusions and implications",
        "Understand charts and graphs carefully"
      ]
    : [
        "Start with Section 1 - it's usually easiest",
        "Look for headings and subheadings",
        "Focus on practical details and instructions",
        "Use real-world knowledge to help understanding"
      ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {selectedTestType === 'academic' ? 'Academic' : 'General Training'} Reading Strategies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master these proven techniques to efficiently navigate {selectedTestType === 'academic' ? 'complex academic texts' : 'everyday reading materials'} and maximize your performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allStrategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{strategy.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{strategy.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {strategy.techniques.map((technique, techIndex) => (
                      <li key={techIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{technique}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl text-gray-900">
              Quick Tips for {selectedTestType === 'academic' ? 'Academic' : 'General Training'} Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReadingStrategies;
