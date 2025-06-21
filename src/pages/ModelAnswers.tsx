import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Star, BookOpen, PenTool, Clock, Target, Eye, Download, Filter, Search, CheckCircle, AlertCircle, TrendingUp, Award, Users, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import WritingAnswerDetails from "@/components/model-answers/WritingAnswerDetails";
import SpeakingAnswerDetails from "@/components/model-answers/SpeakingAnswerDetails";

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

const ModelAnswers = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedBand, setSelectedBand] = useState("all");

  const initialWritingAnswers: WritingAnswer[] = [
    {
      id: 1,
      type: "Task 1 - Academic",
      title: "Bar Chart: International Student Numbers",
      band: "9.0",
      wordCount: "156",
      preview: "The bar chart illustrates the number of international students enrolled in universities across four countries (USA, UK, Australia, and Canada) from 2010 to 2020...",
      topics: ["Education", "Statistics", "Trends"],
      difficulty: "Intermediate",
      examinerComments: "Excellent task achievement with clear overview and accurate data description. Strong coherence and cohesion throughout.",
      keyFeatures: ["Clear overview statement", "Accurate data interpretation", "Appropriate vocabulary", "Error-free grammar"],
      timeSpent: "18 minutes"
    },
    {
      id: 2,
      type: "Task 1 - General",
      title: "Complaint Letter to Internet Provider",
      band: "8.5",
      wordCount: "164",
      preview: "Dear Sir/Madam, I am writing to express my dissatisfaction with the internet service I have been receiving from your company over the past month...",
      topics: ["Complaint", "Formal Letter", "Customer Service"],
      difficulty: "Beginner",
      examinerComments: "Well-structured formal letter with appropriate tone and clear purpose. Minor vocabulary limitations prevent band 9.",
      keyFeatures: ["Formal tone maintained", "Clear problem description", "Appropriate closing", "Good paragraphing"],
      timeSpent: "22 minutes"
    },
    {
      id: 3,
      type: "Task 2 - Essay",
      title: "Technology in Education: Benefits vs Drawbacks",
      band: "8.0",
      wordCount: "287",
      preview: "In recent decades, technology has revolutionized the way education is delivered and received. While some argue that digital learning tools enhance...",
      topics: ["Technology", "Education", "Opinion"],
      difficulty: "Advanced",
      examinerComments: "Strong argument development with relevant examples. Good range of vocabulary and structures with occasional minor errors.",
      keyFeatures: ["Balanced argument", "Relevant examples", "Clear conclusion", "Good linking phrases"],
      timeSpent: "38 minutes"
    },
    {
      id: 4,
      type: "Task 2 - Essay", 
      title: "Environmental Protection vs Economic Growth",
      band: "9.0",
      wordCount: "296",
      preview: "The tension between environmental conservation and economic development represents one of the most pressing dilemmas of our time...",
      topics: ["Environment", "Economy", "Discussion"],
      difficulty: "Advanced",
      examinerComments: "Outstanding analysis with sophisticated language use. Perfect task response and cohesion.",
      keyFeatures: ["Complex argumentation", "Sophisticated vocabulary", "Perfect grammar", "Strong examples"],
      timeSpent: "40 minutes"
    },
    {
      id: 5,
      type: "Task 1 - Academic",
      title: "Line Graph: Energy Consumption Patterns",
      band: "8.5", 
      wordCount: "148",
      preview: "The line graph depicts changes in energy consumption patterns across renewable and non-renewable sources in Germany between 2000 and 2015...",
      topics: ["Energy", "Environment", "Trends"],
      difficulty: "Intermediate",
      examinerComments: "Clear data analysis with appropriate vocabulary. Minor grammatical inaccuracies.",
      keyFeatures: ["Clear trend description", "Accurate data", "Good vocabulary", "Minor errors"],
      timeSpent: "20 minutes"
    },
    {
      id: 6,
      type: "Task 1 - General",
      title: "Thank You Letter to a Friend",
      band: "8.0",
      wordCount: "152",
      preview: "Dear Sarah, I hope this letter finds you in good health and high spirits. I wanted to take a moment to express my heartfelt gratitude...",
      topics: ["Personal", "Informal Letter", "Gratitude"],
      difficulty: "Beginner",
      examinerComments: "Warm and appropriate tone with good vocabulary range. Some minor structural issues.",
      keyFeatures: ["Appropriate tone", "Good vocabulary", "Clear purpose", "Minor structure issues"],
      timeSpent: "25 minutes"
    }
  ];
  const [writingAnswers, setWritingAnswers] = useState(initialWritingAnswers);

  const initialSpeakingAnswers: SpeakingAnswer[] = [
    {
      id: 1,
      part: "Part 1",
      topic: "Work and Career",
      band: "8.5",
      duration: "4 min",
      questions: ["What do you do for work?", "Do you enjoy your job?", "What are your career goals?"],
      difficulty: "Beginner",
      transcript: "I currently work as a software developer for a technology company in the city center. I've been in this role for about three years now, and I find it quite rewarding...",
      examinerNotes: "Natural delivery with good vocabulary range. Minor hesitations but maintains fluency throughout.",
      pronunciationScore: "8.0",
      fluencyScore: "8.5",
      grammarScore: "8.5",
      vocabularyScore: "9.0",
      youtubeLink: "https://www.youtube.com/watch?v=5-9-3-zYgZw",
    },
    {
      id: 2,
      part: "Part 2",
      topic: "Describe a memorable journey",
      band: "9.0", 
      duration: "2 min",
      questions: ["Where did you go?", "Who did you travel with?", "What made it memorable?"],
      difficulty: "Intermediate",
      transcript: "I'd like to talk about a trip I took to Nepal last year with my university friends. We went trekking in the Himalayas for two weeks...",
      examinerNotes: "Excellent coherence and natural delivery. Wide range of vocabulary used appropriately. No noticeable errors.",
      pronunciationScore: "9.0",
      fluencyScore: "9.0",
      grammarScore: "9.0",
      vocabularyScore: "9.0",
      youtubeLink: "https://www.youtube.com/watch?v=hB-t3i42-a8",
    },
    {
      id: 3,
      part: "Part 3",
      topic: "Transportation and Society",
      band: "8.0",
      duration: "5 min",
      questions: ["How has transportation changed?", "What are the environmental impacts?", "Future of transport?"],
      difficulty: "Advanced",
      transcript: "Transportation has undergone dramatic changes over the past century. We've moved from horse-drawn carriages to electric vehicles...",
      examinerNotes: "Strong analytical thinking with well-developed arguments. Good use of complex structures with minor errors.",
      pronunciationScore: "8.0",
      fluencyScore: "8.5",
      grammarScore: "7.5",
      vocabularyScore: "8.5"
    }
  ];
  const [speakingAnswers, setSpeakingAnswers] = useState(initialSpeakingAnswers);

  const bandScoreGuide = [
    { band: "9", description: "Expert user", characteristics: "Has fully operational command of the language", examples: "Native-like fluency, sophisticated vocabulary" },
    { band: "8", description: "Very good user", characteristics: "Has fully operational command with only occasional unsystematic inaccuracies", examples: "Minor errors, wide vocabulary range" },
    { band: "7", description: "Good user", characteristics: "Has operational command with occasional inaccuracies", examples: "Good vocabulary, some complex structures" },
    { band: "6", description: "Competent user", characteristics: "Has generally effective command despite some inaccuracies", examples: "Adequate vocabulary, simple structures" }
  ];

  const [selectedWritingAnswer, setSelectedWritingAnswer] = useState<WritingAnswer | null>(null);
  const [selectedSpeakingAnswer, setSelectedSpeakingAnswer] = useState<SpeakingAnswer | null>(null);

  const getBandColor = (band: string) => {
    const score = parseFloat(band);
    if (score >= 9.0) return "bg-purple-100 text-purple-800";
    if (score >= 8.0) return "bg-green-100 text-green-800";
    if (score >= 7.0) return "bg-blue-100 text-blue-800";
    if (score >= 6.0) return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner": return "bg-green-100 text-green-700";
      case "intermediate": return "bg-yellow-100 text-yellow-700";
      case "advanced": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  // Add defensive checks for filtering
  const filteredWritingAnswers = Array.isArray(writingAnswers) ? writingAnswers.filter(answer => {
    const filterMatch = selectedFilter === "all" || answer.type.toLowerCase().includes(selectedFilter);
    const bandMatch = selectedBand === "all" || answer.band.startsWith(selectedBand);
    return filterMatch && bandMatch;
  }) : [];

  console.log('Filtered writing answers:', filteredWritingAnswers);
  console.log('Speaking answers:', speakingAnswers);
  console.log('Band score guide:', bandScoreGuide);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Award className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Model Answers Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn from high-scoring sample answers with detailed examiner feedback, band score analysis, and expert commentary.
          </p>
          
          {/* Filter Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <select 
                className="border rounded-md px-3 py-2 bg-white"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option value="all">All Sections</option>
                <option value="academic">Academic</option>
                <option value="general">General Training</option>
                <option value="task 1">Task 1</option>
                <option value="task 2">Task 2</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gray-600" />
              <select 
                className="border rounded-md px-3 py-2 bg-white"
                value={selectedBand}
                onChange={(e) => setSelectedBand(e.target.value)}
              >
                <option value="all">All Band Scores</option>
                <option value="9">Band 9</option>
                <option value="8">Band 8+</option>
                <option value="7">Band 7+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
              <Search className="h-5 w-5 mr-2" />
              Browse All Answers
            </Button>
            <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              Band Score Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Band Score Guide */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Band Scores</h2>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Band Score</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Key Characteristics</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.isArray(bandScoreGuide) && bandScoreGuide.map((band) => (
                  <TableRow key={band.band}>
                    <TableCell>
                      <Badge className={getBandColor(band.band)}>
                        Band {band.band}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{band.description}</TableCell>
                    <TableCell>{band.characteristics}</TableCell>
                    <TableCell className="text-sm text-gray-600">{band.examples}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="writing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="writing" className="flex items-center gap-2">
                <PenTool className="h-4 w-4" />
                Writing
              </TabsTrigger>
              <TabsTrigger value="speaking" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Speaking
              </TabsTrigger>
            </TabsList>

            <TabsContent value="writing">
              <div className="mb-8 flex justify-between items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Writing Model Answers</h2>
                  <p className="text-xl text-gray-600">High-scoring essays and letters with detailed examiner feedback</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {Array.isArray(filteredWritingAnswers) && filteredWritingAnswers.map((answer) => (
                  <Card key={answer.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">{answer.type}</Badge>
                          <CardTitle className="text-lg text-gray-900 mb-2">{answer.title}</CardTitle>
                          <CardDescription className="text-gray-600 line-clamp-2">{answer.preview}</CardDescription>
                        </div>
                        <Badge className={`ml-4 ${getBandColor(answer.band)}`}>
                          Band {answer.band}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            {answer.wordCount} words
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {answer.timeSpent}
                          </span>
                          <Badge className={getDifficultyColor(answer.difficulty)}>
                            {answer.difficulty}
                          </Badge>
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
                          <div className="flex flex-wrap gap-1">
                            {Array.isArray(answer.keyFeatures) && answer.keyFeatures.map((feature, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(answer.topics) && answer.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1" onClick={() => setSelectedWritingAnswer(answer)}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Full Answer
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="speaking">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Speaking Model Answers</h2>
                <p className="text-xl text-gray-600">Sample responses with audio recordings and detailed score breakdowns</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {Array.isArray(speakingAnswers) && speakingAnswers.map((answer) => (
                  <Card key={answer.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{answer.part}</Badge>
                        <Badge className={getBandColor(answer.band)}>
                          Band {answer.band}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-gray-900">{answer.topic}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {answer.duration}
                          </span>
                          <Badge className={getDifficultyColor(answer.difficulty)}>
                            {answer.difficulty}
                          </Badge>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-green-900 mb-1">Score Breakdown:</h4>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>Fluency: {answer.fluencyScore}</div>
                            <div>Vocabulary: {answer.vocabularyScore}</div>
                            <div>Grammar: {answer.grammarScore}</div>
                            <div>Pronunciation: {answer.pronunciationScore}</div>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-medium text-yellow-900 mb-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            Examiner Notes
                          </h4>
                          <p className="text-sm text-yellow-800">{answer.examinerNotes}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Sample Questions:</h4>
                          <ul className="space-y-1">
                            {Array.isArray(answer.questions) && answer.questions.slice(0, 2).map((question, index) => (
                              <li key={index} className="text-sm text-gray-600">• {question}</li>
                            ))}
                            {Array.isArray(answer.questions) && answer.questions.length > 2 && (
                              <li className="text-sm text-gray-500">+ {answer.questions.length - 2} more...</li>
                            )}
                          </ul>
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1" onClick={() => setSelectedSpeakingAnswer(answer)}>
                            <Eye className="h-4 w-4 mr-2" />
                            View & Listen
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Transcript
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use Model Answers Effectively</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Analyze Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Study how high-scoring answers are organized and follow similar patterns in your own responses.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Learn Vocabulary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Note advanced vocabulary and phrases used appropriately in context.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Practice Regularly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Apply what you learn by practicing similar questions and comparing your answers.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Master IELTS with Expert Examples</h2>
          <p className="text-xl mb-8 opacity-90">
            Study band 9 model answers with detailed examiner feedback and scoring criteria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              <Users className="h-5 w-5 mr-2" />
              Join Study Group
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3">
              <Download className="h-5 w-5 mr-2" />
              Download All PDFs
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Dialogs for Model Answers */}
      {selectedWritingAnswer && (
        <Dialog open={!!selectedWritingAnswer} onOpenChange={(isOpen) => !isOpen && setSelectedWritingAnswer(null)}>
          <DialogContent className="max-w-2xl">
            <WritingAnswerDetails answer={selectedWritingAnswer} getBandColor={getBandColor} />
          </DialogContent>
        </Dialog>
      )}

      {selectedSpeakingAnswer && (
        <Dialog open={!!selectedSpeakingAnswer} onOpenChange={(isOpen) => !isOpen && setSelectedSpeakingAnswer(null)}>
          <DialogContent className="max-w-2xl">
            <SpeakingAnswerDetails answer={selectedSpeakingAnswer} getBandColor={getBandColor} />
          </DialogContent>
        </Dialog>
      )}
      
    </div>
  );
};

export default ModelAnswers;
