import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Target, TrendingUp, Award, Play, Download, GraduationCap, Briefcase } from "lucide-react";

const ReadingHero = () => {
  const keyStats = [
    { icon: Clock, value: "60", label: "Minutes Total", description: "For 3 passages" },
    { icon: Target, value: "40", label: "Questions", description: "Across all passages" },
    { icon: TrendingUp, value: "20", label: "Min/Passage", description: "Recommended timing" },
    { icon: Award, value: "9", label: "Band Score", description: "Maximum achievable" }
  ];

  const testTypes = [
    {
      type: "Academic (AC)",
      icon: GraduationCap,
      description: "For university study and professional registration",
      passages: ["Academic texts", "Journals & research", "University materials"]
    },
    {
      type: "General Training (GT)", 
      icon: Briefcase,
      description: "For work experience and immigration",
      passages: ["Workplace texts", "Daily life materials", "Social contexts"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">IELTS Reading Mastery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master both Academic and General Training IELTS Reading tests with proven strategies, comprehensive practice materials, and expert guidance for achieving your target band score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" disabled>
              <Play className="h-5 w-5 mr-2" />
              Start Practice Test
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50">
              <Download className="h-5 w-5 mr-2" />
              Download Guide
            </Button>
          </div>

          {/* Test Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {testTypes.map((test, index) => {
              const Icon = test.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{test.type}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{test.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {test.passages.map((passage, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {passage}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {keyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReadingHero;
