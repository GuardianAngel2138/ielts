
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, CheckCircle, Star } from "lucide-react";

interface WritingAnswer {
  id: number;
  type: string;
  title: string;
  band: string;
  wordCount: string;
  preview: string;
  topics: string[];
  difficulty: string;
  examinerComments: string;
  keyFeatures: string[];
  timeSpent: string;
}

interface WritingAnswerDetailsProps {
    answer: WritingAnswer;
    getBandColor: (band: string) => string;
}

const WritingAnswerDetails = ({ answer, getBandColor }: WritingAnswerDetailsProps) => {
    return (
        <>
            <DialogHeader>
                <DialogTitle className="text-2xl">{answer.title}</DialogTitle>
                <DialogDescription>{answer.type}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto pr-4">
                <div className="flex items-center justify-between">
                    <Badge className={getBandColor(answer.band)}>
                        <Star className="h-4 w-4 mr-1" /> Band {answer.band}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center"><FileText className="h-4 w-4 mr-1" />{answer.wordCount} words</span>
                        <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{answer.timeSpent}</span>
                    </div>
                </div>

                <div className="prose prose-sm max-w-none">
                    <h3 className="font-semibold">Sample Answer</h3>
                    <p>{answer.preview}</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-1 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Examiner Comments
                    </h4>
                    <p className="text-sm text-blue-800">{answer.examinerComments}</p>
                </div>

                <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {answer.keyFeatures.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-700">{feature}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium text-gray-900 mb-2">Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                        {answer.topics.map((topic, index) => (
                        <Badge key={index} variant="outline">{topic}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WritingAnswerDetails;
