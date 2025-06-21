
import { Button } from "@/components/ui/button";
import { Target, Users } from "lucide-react";

interface ReadingCTAProps {
  selectedTestType: 'academic' | 'general';
}

const ReadingCTA = ({ selectedTestType }: ReadingCTAProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Excel in IELTS Reading?</h2>
        <p className="text-xl mb-8 opacity-90">
          Access comprehensive practice tests, model answers, and expert strategies for {selectedTestType === 'academic' ? 'Academic' : 'General Training'} tests.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100" disabled>
            <Target className="h-5 w-5 mr-2" />
            Take {selectedTestType === 'academic' ? 'Academic' : 'GT'} Practice Test
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
            <Users className="h-5 w-5 mr-2" />
            View {selectedTestType === 'academic' ? 'Academic' : 'GT'} Model Answers
          </Button>
        </div>
        
        <div className="mt-8 text-center opacity-80">
          <p className="text-sm">
            {selectedTestType === 'academic' 
              ? 'Perfect for university applications and professional registration'
              : 'Ideal for immigration, work experience, and training programs'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadingCTA;
