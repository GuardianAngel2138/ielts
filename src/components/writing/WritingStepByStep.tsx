import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Clock, Target, Eye, CheckCircle, ArrowRight, Lightbulb, AlertTriangle, TrendingUp, Users, BookOpen, BarChart3, Mail } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const WritingStepByStep = () => {
  const [isAcademic, setIsAcademic] = useState(true);

  const task1AcademicSteps = [
    {
      step: 1,
      title: "Analyze the Visual Carefully",
      subtitle: "Understand What You're Describing (3-4 minutes)",
      icon: Eye,
      description: "Success in Task 1 begins with thorough analysis. Take time to understand the chart type, time periods, units, and key trends before writing anything.",
      actions: [
        "Identify the chart type (line graph, bar chart, pie chart, table, diagram, or process)",
        "Read the title, axes labels, units of measurement, and time periods carefully",
        "Look for the highest and lowest points, significant changes, or overall patterns",
        "Note any categories being compared and their relationships to each other",
        "Identify 2-3 main trends or features that stand out most prominently",
        "Decide how to group your data logically for the two body paragraphs"
      ],
      time: "3-4 minutes analysis",
      whyImportant: "Proper analysis ensures you identify the most significant features and trends, which is essential for achieving high scores in Task Achievement.",
      tip: "Don't start writing immediately. Spend adequate time analyzing - it prevents you from missing key features or writing irrelevant details.",
      commonMistake: "Rushing into writing without proper analysis, leading to missed key trends or poorly organized descriptions"
    },
    {
      step: 2,
      title: "Write a Strong Introduction",
      subtitle: "Paraphrase the Question Effectively (2-3 minutes)",
      icon: BookOpen,
      description: "Your introduction should clearly paraphrase what the visual shows using different vocabulary and sentence structure from the original question.",
      actions: [
        "Paraphrase the question using synonyms (shows → illustrates, percentage → proportion)",
        "Change the sentence structure while keeping the same meaning",
        "Include what type of information is shown (data, information, figures)",
        "Mention the time period if relevant to the chart",
        "Keep it concise - one or two sentences maximum",
        "Avoid copying the exact wording from the question"
      ],
      time: "2-3 minutes writing",
      whyImportant: "A well-paraphrased introduction demonstrates your vocabulary range and shows you understand the task clearly.",
      tip: "Practice paraphrasing common IELTS chart descriptions. Use 'depicts', 'illustrates', 'presents' instead of 'shows'.",
      commonMistake: "Copying the question exactly or using poor paraphrasing that changes the meaning"
    },
    {
      step: 3,
      title: "Create an Effective Overview",
      subtitle: "Highlight Main Trends Without Data (2-3 minutes)",
      icon: Target,
      description: "The overview is crucial for band 7+. Identify and describe the most significant trends or features without including specific numbers or details.",
      actions: [
        "Write 2-3 sentences summarizing the most striking features or trends",
        "Focus on overall patterns, not specific data points or numbers",
        "Use phrases like 'Overall', 'In general', 'It is clear that' to start",
        "Mention the highest/lowest categories or most dramatic changes",
        "For processes: describe the main stages or overall purpose",
        "Group similar trends together for clarity"
      ],
      time: "2-3 minutes writing",
      whyImportant: "The overview demonstrates your ability to identify key features and is essential for achieving Band 7+ in Task Achievement.",
      tip: "Think of the overview as what someone would notice if they glanced at the chart for 5 seconds - the most obvious patterns.",
      commonMistake: "Including specific data in the overview or failing to identify the most significant overall trends"
    },
    {
      step: 4,
      title: "Develop Detailed Body Paragraphs",
      subtitle: "Support Overview with Specific Data (8-10 minutes)",
      icon: BarChart3,
      description: "Your body paragraphs should provide specific details and data that support the trends mentioned in your overview, organized logically.",
      actions: [
        "Divide information into two logical paragraphs (by time, category, or trend)",
        "Start each paragraph with a clear topic sentence",
        "Include specific figures, percentages, or data points as evidence",
        "Make comparisons between categories using comparative language",
        "Use varied vocabulary for describing trends (increased, rose, declined, fluctuated)",
        "Connect sentences with appropriate linking words (whereas, while, in contrast)"
      ],
      time: "8-10 minutes writing",
      whyImportant: "Detailed body paragraphs with accurate data demonstrate your ability to select and report relevant information effectively.",
      tip: "Group your data logically - don't jump randomly between different categories or time periods within a paragraph.",
      commonMistake: "Describing every single detail without clear organization or failing to include sufficient specific data"
    },
    {
      step: 5,
      title: "Review and Refine Your Response",
      subtitle: "Check Accuracy and Completeness (2-3 minutes)",
      icon: CheckCircle,
      description: "Use your remaining time to ensure your response is accurate, complete, and meets all task requirements effectively.",
      actions: [
        "Check that you've covered all main features mentioned in your overview",
        "Verify that specific data and figures are accurately reported",
        "Ensure you haven't included personal opinions or explanations for trends",
        "Check your word count - aim for 170-190 words for good development",
        "Review grammar, particularly verb tenses and subject-verb agreement",
        "Confirm your language is formal and objective throughout"
      ],
      time: "2-3 minutes review",
      whyImportant: "Final review ensures accuracy and completeness, preventing simple errors that can lower your band score.",
      tip: "Read your response as if you're seeing the chart for the first time - does it paint a clear picture?",
      commonMistake: "Skipping the review stage or not checking that data is accurately reported"
    }
  ];

  const task1GeneralSteps = [
    {
      step: 1,
      title: "Analyze the Task and Relationship",
      subtitle: "Understand the Letter Type and Context (2-3 minutes)",
      icon: Eye,
      description: "Success in General Training Task 1 begins with identifying the letter type and your relationship with the recipient to determine the appropriate tone.",
      actions: [
        "Read the task carefully and identify if it's formal, semi-formal, or informal",
        "Determine your relationship to the recipient (friend, colleague, manager, stranger)",
        "Identify the three bullet points you must address in your letter",
        "Note the purpose of your letter (complaint, request, invitation, etc.)",
        "Plan which bullet point to address in each paragraph",
        "Choose appropriate opening and closing phrases for the letter type"
      ],
      time: "2-3 minutes analysis",
      whyImportant: "Correct identification of letter type and relationship ensures you use appropriate tone and format throughout.",
      tip: "Look for clues in the task - words like 'friend' suggest informal, 'manager' suggests formal, 'neighbor' suggests semi-formal.",
      commonMistake: "Mixing formal and informal language or not maintaining consistent tone throughout the letter"
    },
    {
      step: 2,
      title: "Write an Appropriate Opening",
      subtitle: "Start with Correct Greeting and Purpose (2-3 minutes)",
      icon: Mail,
      description: "Your opening should use the correct greeting for the letter type and clearly state your purpose for writing.",
      actions: [
        "Use appropriate greeting: 'Dear Sir/Madam' (formal), 'Dear Mr./Ms. Smith' (semi-formal), 'Hi/Dear [name]' (informal)",
        "Start with a clear statement of why you're writing",
        "Reference any previous communication if relevant",
        "Set a friendly/professional tone appropriate to the relationship",
        "Keep the opening paragraph concise and purposeful",
        "Transition smoothly to your main points"
      ],
      time: "2-3 minutes writing",
      whyImportant: "A proper opening establishes the right tone and clearly communicates your purpose to the reader.",
      tip: "For formal letters, be direct and professional. For informal letters, you can be more conversational and friendly.",
      commonMistake: "Using wrong greeting for the relationship or being too vague about the purpose"
    },
    {
      step: 3,
      title: "Address First Bullet Point",
      subtitle: "Develop Your First Main Point (4-5 minutes)",
      icon: Target,
      description: "Dedicate a full paragraph to thoroughly addressing the first bullet point with relevant details and explanations.",
      actions: [
        "Start with a clear topic sentence that introduces the bullet point",
        "Provide specific details, examples, or explanations",
        "Use appropriate language for the letter type (formal/informal)",
        "Ensure you fully address what the bullet point asks for",
        "Connect your ideas with appropriate linking words",
        "End the paragraph with a clear concluding thought"
      ],
      time: "4-5 minutes writing",
      whyImportant: "Thorough development of each bullet point is essential for achieving high scores in Task Achievement.",
      tip: "Don't just mention the bullet point - explain it fully with details that make your letter realistic and engaging.",
      commonMistake: "Addressing bullet points too briefly or superficially without adequate development"
    },
    {
      step: 4,
      title: "Address Remaining Bullet Points",
      subtitle: "Develop Second and Third Points (6-8 minutes)",
      icon: BookOpen,
      description: "Continue with dedicated paragraphs for the remaining bullet points, maintaining consistent tone and providing full development.",
      actions: [
        "Write a separate paragraph for each remaining bullet point",
        "Maintain the same level of detail and development as the first",
        "Use varied sentence structures and vocabulary",
        "Keep the tone consistent with your letter type throughout",
        "Provide realistic details that support your purpose",
        "Use appropriate transitions between paragraphs"
      ],
      time: "6-8 minutes writing",
      whyImportant: "Equal development of all bullet points demonstrates thorough task completion and organization skills.",
      tip: "Each bullet point paragraph should be roughly the same length - don't spend too much time on one at the expense of others.",
      commonMistake: "Uneven development of bullet points or forgetting to address one completely"
    },
    {
      step: 5,
      title: "Write Closing and Review",
      subtitle: "End Appropriately and Check Your Work (3-4 minutes)",
      icon: CheckCircle,
      description: "Conclude your letter with an appropriate closing and use remaining time to review for errors and completeness.",
      actions: [
        "Write a closing paragraph that summarizes your main purpose or next steps",
        "Use appropriate sign-off: 'Yours sincerely/faithfully' (formal), 'Best regards' (semi-formal), 'Love/Cheers' (informal)",
        "Sign with an appropriate name for the context",
        "Check that all three bullet points are fully addressed",
        "Review grammar, spelling, and punctuation",
        "Ensure consistent tone throughout the letter"
      ],
      time: "3-4 minutes writing and review",
      whyImportant: "Proper closing and thorough review ensure your letter meets all requirements and is error-free.",
      tip: "For formal letters, end with a request for action or response. For informal letters, you can be more casual in your closing.",
      commonMistake: "Using inappropriate sign-offs or forgetting to review the completed letter for errors"
    }
  ];

  const task2Steps = [
    {
      step: 1,
      title: "Analyze the Question and Plan",
      subtitle: "Understand Requirements and Develop Ideas (6-8 minutes)",
      icon: Eye,
      description: "Task 2 success depends on thorough question analysis and strategic planning. Invest time upfront to ensure your essay directly addresses all parts of the question.",
      actions: [
        "Identify the essay type (opinion, discussion, problem-solution, two-part question)",
        "Underline key terms and ensure you understand what's being asked",
        "Decide your position or approach clearly before you start writing",
        "Brainstorm 2-3 main ideas with specific examples for each",
        "Plan your essay structure: introduction, body paragraphs, conclusion",
        "Allocate time for each section and stick to your plan"
      ],
      time: "6-8 minutes planning",
      whyImportant: "Proper planning ensures your essay stays focused, addresses all parts of the question, and presents a clear, coherent argument.",
      tip: "Spend more time planning than you think you need - a well-planned essay writes itself more smoothly.",
      commonMistake: "Rushing into writing without clear planning, leading to off-topic responses or weak arguments"
    },
    {
      step: 2,
      title: "Write a Compelling Introduction",
      subtitle: "Hook, Background, and Clear Thesis (4-5 minutes)",
      icon: BookOpen,
      description: "Your introduction sets the tone and direction for your entire essay. It should engage the reader while clearly stating your position on the topic.",
      actions: [
        "Start with a hook - a general statement about the topic to engage the reader",
        "Provide brief background context to introduce the specific issue",
        "Paraphrase the question using your own words and sentence structure",
        "Present a clear thesis statement that directly answers the question",
        "Preview your main arguments if the essay type requires it",
        "Keep it concise - aim for 50-60 words total"
      ],
      time: "4-5 minutes writing",
      whyImportant: "A strong introduction establishes your position clearly and shows the examiner you understand the task requirements.",
      tip: "Your thesis should be specific and directly answer the question - avoid vague statements that could apply to any topic.",
      commonMistake: "Writing an introduction that's too general or doesn't clearly state your position on the specific question"
    },
    {
      step: 3,
      title: "Develop Strong Body Paragraphs",
      subtitle: "Support Arguments with Examples (20-25 minutes)",
      icon: Target,
      description: "Your body paragraphs are where you develop your argument with evidence, examples, and detailed explanations. Each should focus on one main idea.",
      actions: [
        "Start each paragraph with a clear topic sentence stating your main point",
        "Explain your point with 2-3 sentences of development and reasoning",
        "Provide specific examples - personal, academic, or general knowledge",
        "Connect your examples back to your main argument clearly",
        "Use varied sentence structures and sophisticated vocabulary",
        "End with a concluding sentence that reinforces your point"
      ],
      time: "20-25 minutes writing",
      whyImportant: "Well-developed body paragraphs with clear examples and explanations demonstrate your ability to present and support complex ideas.",
      tip: "Use the PEEL structure: Point, Explain, Example, Link back to the question. This ensures comprehensive development.",
      commonMistake: "Presenting ideas without sufficient explanation or examples, or including irrelevant information that doesn't support your argument"
    },
    {
      step: 4,
      title: "Write a Powerful Conclusion",
      subtitle: "Summarize and Reinforce Your Position (3-4 minutes)",
      icon: CheckCircle,
      description: "Your conclusion should effectively summarize your main arguments and clearly restate your position without introducing new information.",
      actions: [
        "Begin with a conclusion signal (In conclusion, To summarize, Overall)",
        "Summarize your main arguments in 1-2 sentences",
        "Restate your thesis using different words from your introduction",
        "Provide a final thought or recommendation if appropriate to the question type",
        "Ensure your position is crystal clear to the examiner",
        "Keep it concise - aim for 40-50 words"
      ],
      time: "3-4 minutes writing",
      whyImportant: "A strong conclusion reinforces your argument and leaves a lasting impression on the examiner.",
      tip: "Your conclusion should feel like a natural end to your argument - don't introduce new ideas or contradict earlier points.",
      commonMistake: "Introducing new arguments in the conclusion or writing a conclusion that's too similar to the introduction"
    },
    {
      step: 5,
      title: "Review and Perfect Your Essay",
      subtitle: "Check Coherence, Grammar, and Task Response (3-4 minutes)",
      icon: Users,
      description: "Use your final minutes to ensure your essay is coherent, grammatically accurate, and fully addresses the question requirements.",
      actions: [
        "Check that your essay clearly answers all parts of the question",
        "Verify that your arguments are logically connected and well-supported",
        "Review grammar, focusing on complex sentences and verb forms",
        "Ensure you've used a variety of vocabulary and avoided repetition",
        "Check that your position is consistent throughout the essay",
        "Confirm your word count is between 270-300 words"
      ],
      time: "3-4 minutes review",
      whyImportant: "Final review ensures your essay is polished and meets all assessment criteria for maximum band score potential.",
      tip: "Read your essay as if you're the examiner - is your argument clear and convincing?",
      commonMistake: "Skipping the review stage or making major changes that disrupt the essay's coherence"
    }
  ];

  const task1TotalTime = "20";
  const task2TotalTime = "40";

  const currentTask1Steps = isAcademic ? task1AcademicSteps : task1GeneralSteps;
  const currentTask1Title = isAcademic ? "Task 1: Visual Description (Academic)" : "Task 1: Letter Writing (General Training)";
  const currentTask1Subtitle = isAcademic 
    ? "Describe charts, graphs, tables, diagrams, or processes with accuracy and clarity"
    : "Write formal, semi-formal, or informal letters for various purposes";

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Master IELTS Writing: Complete Step-by-Step Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Follow these proven step-by-step methods to excel in both Task 1 and Task 2. Learn the specific strategies and timing for each task type.
          </p>
          <div className="flex justify-center gap-4">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 font-medium">
              <Clock className="h-5 w-5 mr-2" />
              Task 1: {task1TotalTime} minutes
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 font-medium">
              <Clock className="h-5 w-5 mr-2" />
              Task 2: {task2TotalTime} minutes
            </div>
          </div>
        </div>

        {/* Task 1 Toggle Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <Label htmlFor="test-type" className="text-lg font-medium text-gray-700">
                  General Training
                </Label>
                <Switch
                  id="test-type"
                  checked={isAcademic}
                  onCheckedChange={setIsAcademic}
                  className="data-[state=checked]:bg-blue-600"
                />
                <Label htmlFor="test-type" className="text-lg font-medium text-gray-700">
                  Academic
                </Label>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{currentTask1Title}</h3>
            <p className="text-lg text-gray-600">{currentTask1Subtitle}</p>
          </div>
          
          <div className="space-y-8">
            {currentTask1Steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl font-bold">{step.step}</span>
                        </div>
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl mb-2 text-white">{step.title}</CardTitle>
                      <p className="text-green-100 text-lg mb-4">{step.subtitle}</p>
                      <div className="flex items-center text-green-100 mb-4">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="font-medium">{step.time}</span>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <h4 className="font-semibold text-white text-sm mb-1">WHY THIS MATTERS:</h4>
                        <p className="text-green-100 text-sm">{step.whyImportant}</p>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 p-8">
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
                        {step.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">What to do:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {step.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-yellow-800 mb-1">Pro Tip:</h4>
                              <p className="text-yellow-700 text-sm">{step.tip}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-red-800 mb-1">Avoid This:</h4>
                              <p className="text-red-700 text-sm">{step.commonMistake}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < currentTask1Steps.length - 1 && (
                    <div className="flex justify-center py-4 bg-gray-50">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Task 2 Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Task 2: Essay Writing</h3>
            <p className="text-lg text-gray-600">Present and justify your opinion on contemporary issues with clear arguments and examples</p>
          </div>
          
          <div className="space-y-8">
            {task2Steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl font-bold">{step.step}</span>
                        </div>
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl mb-2 text-white">{step.title}</CardTitle>
                      <p className="text-blue-100 text-lg mb-4">{step.subtitle}</p>
                      <div className="flex items-center text-blue-100 mb-4">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="font-medium">{step.time}</span>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <h4 className="font-semibold text-white text-sm mb-1">WHY THIS MATTERS:</h4>
                        <p className="text-blue-100 text-sm">{step.whyImportant}</p>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 p-8">
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
                        {step.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">What to do:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {step.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-yellow-800 mb-1">Pro Tip:</h4>
                              <p className="text-yellow-700 text-sm">{step.tip}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-red-800 mb-1">Avoid This:</h4>
                              <p className="text-red-700 text-sm">{step.commonMistake}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < task2Steps.length - 1 && (
                    <div className="flex justify-center py-4 bg-gray-50">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="h-6 w-6 mr-3 text-green-600" />
                What You'll Master
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>How to analyze and describe visual data accurately and comprehensively</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Techniques for writing effective letters with appropriate tone and format</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Strategies for developing strong arguments with relevant examples</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Time management techniques for both task types within strict limits</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-blue-600" />
                Your Next Steps
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Practice with authentic materials</strong> using official IELTS past papers and sample questions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Time yourself strictly</strong> when practicing to build speed and confidence under pressure.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Build vocabulary</strong> specifically for describing trends, expressing opinions, and letter writing.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg mt-4">
                  <p className="text-blue-800 font-medium text-center">
                    🎯 Remember: Clear structure and relevant content beat perfect grammar every time!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WritingStepByStep;
