
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Clock, Mic, MessageCircle, AlertCircle, Star, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpeakingAnswer {
  id: number;
  part: string;
  topic: string;
  band: string;
  duration: string;
  questions: string[];
  difficulty: string;
  transcript: string;
  examinerNotes: string;
  pronunciationScore: string;
  fluencyScore: string;
  grammarScore: string;
  vocabularyScore: string;
  youtubeLink?: string;
}

interface SpeakingAnswerDetailsProps {
    answer: SpeakingAnswer;
    getBandColor: (band: string) => string;
}

const SpeakingAnswerDetails = ({ answer, getBandColor }: SpeakingAnswerDetailsProps) => {
    return (
        <>
            <DialogHeader>
                <DialogTitle className="text-2xl">{answer.topic}</DialogTitle>
                <DialogDescription>{answer.part}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto pr-4">
                <div className="flex items-center justify-between">
                    <Badge className={getBandColor(answer.band)}>
                        <Star className="h-4 w-4 mr-1" /> Band {answer.band}
                    </Badge>
                    <span className="flex items-center text-sm text-gray-500"><Clock className="h-4 w-4 mr-1" />{answer.duration}</span>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Score Breakdown</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <span>Fluency: <strong>{answer.fluencyScore}</strong></span>
                        <span>Vocabulary: <strong>{answer.vocabularyScore}</strong></span>
                        <span>Grammar: <strong>{answer.grammarScore}</strong></span>
                        <span>Pronunciation: <strong>{answer.pronunciationScore}</strong></span>
                    </div>
                </div>

                <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center"><MessageCircle className="h-4 w-4 mr-1" />Sample Questions</h4>
                     <ul className="list-disc list-inside space-y-1">
                        {answer.questions.map((q, index) => (
                            <li key={index} className="text-sm text-gray-700">{q}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center"><Mic className="h-4 w-4 mr-1" />Transcript</h4>
                    <div className="prose prose-sm max-w-none p-3 bg-gray-50 rounded-md border">
                        <p>{answer.transcript}</p>
                    </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-medium text-yellow-900 mb-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        Examiner Notes
                    </h4>
                    <p className="text-sm text-yellow-800">{answer.examinerNotes}</p>
                </div>

                {answer.youtubeLink && (
                    <div className="pt-2">
                        <Button asChild className="w-full">
                            <a href={answer.youtubeLink} target="_blank" rel="noopener noreferrer">
                                <Youtube className="h-4 w-4 mr-2" />
                                Watch on YouTube
                            </a>
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default SpeakingAnswerDetails;
