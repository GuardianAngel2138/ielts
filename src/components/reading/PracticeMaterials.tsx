import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface PracticeMaterialsProps {
  selectedTestType: 'academic' | 'general';
}

const PracticeMaterials = ({ selectedTestType }: PracticeMaterialsProps) => {
  const academicPassages = [
    {
      title: "Climate Change Research Methods",
      level: "Band 7-9",
      timeLimit: "20 minutes",
      questionCount: 13,
      topics: ["Environment", "Science", "Research Methodology"],
      difficulty: "Advanced"
    },
    {
      title: "Ancient Civilizations and Archaeology", 
      level: "Band 6-8",
      timeLimit: "20 minutes",
      questionCount: 12,
      topics: ["History", "Culture", "Archaeology"],
      difficulty: "Intermediate"
    },
    {
      title: "Modern Technology in Education",
      level: "Band 7-8",
      timeLimit: "20 minutes", 
      questionCount: 15,
      topics: ["Education", "Technology", "Innovation"],
      difficulty: "Upper-Intermediate"
    }
  ];

  const generalPassages = [
    {
      title: "Workplace Health and Safety Policies",
      level: "Band 5-7",
      timeLimit: "20 minutes",
      questionCount: 14,
      topics: ["Employment", "Health", "Safety"],
      difficulty: "Intermediate"
    },
    {
      title: "Community Center Services Guide",
      level: "Band 4-6", 
      timeLimit: "20 minutes",
      questionCount: 13,
      topics: ["Community", "Services", "Information"],
      difficulty: "Elementary"
    },
    {
      title: "Travel Insurance Terms and Conditions",
      level: "Band 6-8",
      timeLimit: "20 minutes",
      questionCount: 13,
      topics: ["Travel", "Insurance", "Legal"],
      difficulty: "Upper-Intermediate"
    }
  ];

  const currentPassages = selectedTestType === 'academic' ? academicPassages : generalPassages;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Practice with Real-Style {selectedTestType === 'academic' ? 'Academic (AC)' : 'General Training (GT)'} Passages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPassages.map((passage, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <Badge variant="secondary" className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-semibold">Coming Soon</Badge>
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {passage.level}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{passage.timeLimit}</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">{passage.title}</CardTitle>
                <CardDescription className="flex items-center">
                  <Target className="h-4 w-4 mr-1" />
                  {passage.questionCount} questions • {passage.difficulty}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Topics covered:</h5>
                  <div className="flex flex-wrap gap-2">
                    {passage.topics.map((topic, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" disabled>
                  Start Practice
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Test Type Info */}
        <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            {selectedTestType === 'academic' ? 'Academic (AC)' : 'General Training (GT)'} Reading Format
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Section 1</h4>
              <p className="text-gray-700 text-sm">
                {selectedTestType === 'academic' 
                  ? 'Academic text (e.g., journal article, research paper)'
                  : 'Social survival (e.g., advertisements, notices, timetables)'
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Section 2</h4>
              <p className="text-gray-700 text-sm">
                {selectedTestType === 'academic'
                  ? 'Academic text with more complex language'
                  : 'Workplace survival (e.g., job descriptions, contracts)'
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Section 3</h4>
              <p className="text-gray-700 text-sm">
                {selectedTestType === 'academic'
                  ? 'Complex academic text with detailed argumentation'
                  : 'General reading (e.g., newspaper articles, magazine features)'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeMaterials;
