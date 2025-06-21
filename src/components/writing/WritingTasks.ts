
import { PenTool, Clock, Target, CheckCircle, BarChart3, TrendingUp, Lightbulb, AlertCircle, BookOpen, Users, Award, HelpCircle } from "lucide-react";
import type { ReactNode } from "react";

export type WritingTask = {
  id: 'task1-academic' | 'task1-general' | 'task2';
  title: string;
  description: string;
  timeLimit: string;
  wordCount: string;
  difficulty: string;
  weight: string;
  keySkills: string[];
  strategy: string;
  stepByStep: string[];
  commonMistakes: string[];
  tips: string[];
  assessmentCriteria: { name: string; description: string; weight: string }[];
};

const commonCriteria = [
    { name: "Coherence and Cohesion", description: "How you organize information, paragraphing, and use linking devices.", weight: "25%" },
    { name: "Lexical Resource", description: "The range and accuracy of your vocabulary.", weight: "25%" },
    { name: "Grammatical Range and Accuracy", description: "The range and accuracy of your grammar.", weight: "25%" }
];

export const tasks: WritingTask[] = [
  {
    id: 'task1-academic',
    title: "Task 1 - Academic",
    description: "Describe visual information (graphs, charts, diagrams)",
    timeLimit: "20 minutes",
    wordCount: "150+ words",
    difficulty: "Medium",
    weight: "33%",
    keySkills: [
      "Data interpretation and analysis",
      "Trend identification and comparison",
      "Academic vocabulary usage",
      "Objective description writing"
    ],
    strategy: "Focus on identifying the main trends first, then support with specific data. Use a clear 4-paragraph structure and vary your vocabulary to avoid repetition.",
    stepByStep: [
      "Carefully analyze the chart/graph for 2-3 minutes before you start writing—identify main trends, differences, or significant changes.",
      "Write an introduction by paraphrasing the prompt using your own words and sentence structure.",
      "Write an overview paragraph summarizing the major trends, comparisons, or overall changes—do NOT include specific data here.",
      "Write two body paragraphs. For each, select and group key details or data from the visual; describe comparisons and significant figures clearly.",
      "Check your writing for clear structure, objective language, and avoid giving any personal opinions."
    ],
    commonMistakes: [
      "Giving opinions instead of objective description",
      "Describing every single detail without focus",
      "Poor paraphrasing in the introduction",
      "Not identifying the most significant trends"
    ],
    tips: ["Analyze the visual carefully", "Identify key trends", "Use appropriate vocabulary", "Structure with introduction, overview, details"],
    assessmentCriteria: [
        { name: "Task Achievement", description: "How well you answer the task: summarizing the main features, highlighting key trends and comparing data.", weight: "25%" },
        ...commonCriteria
    ]
  },
  {
    id: 'task1-general',
    title: "Task 1 - General Training",
    description: "Write a letter (formal, semi-formal, or informal)",
    timeLimit: "20 minutes",
    wordCount: "150+ words",
    difficulty: "Easy",
    weight: "33%",
    keySkills: [
      "Letter format and structure",
      "Appropriate tone and register",
      "Addressing all bullet points",
      "Natural expressions and phrases"
    ],
    strategy: "Identify the letter type and relationship first. Use appropriate opening/closing phrases and ensure you address all three bullet points with sufficient detail.",
    stepByStep: [
      "Read the task and identify if it’s a formal, semi-formal, or informal letter. Decide your relationship to the recipient (friend, boss, etc.).",
      "Plan your response and make notes to address each bullet point provided in the prompt.",
      "Start your letter with an appropriate opening (e.g., 'Dear Sir or Madam' for formal; 'Hi John' for informal).",
      "Write one full paragraph for each bullet point in the task—provide details and make your purpose clear.",
      "Use natural, appropriate phrases for the letter type. Maintain the right tone and level of formality throughout.",
      "End with a suitable closing (e.g., 'Yours sincerely,' or 'Best wishes,') and sign your name."
    ],
    commonMistakes: [
      "Using wrong tone for the relationship",
      "Not addressing all bullet points fully",
      "Inappropriate opening/closing phrases",
      "Poor paragraph organization"
    ],
    tips: ["Identify letter type", "Use appropriate tone", "Address all bullet points", "Follow letter format"],
    assessmentCriteria: [
        { name: "Task Achievement", description: "How well you answer the task: covering all bullet points fully and maintaining a clear purpose and appropriate tone.", weight: "25%" },
        ...commonCriteria
    ]
  },
  {
    id: 'task2',
    title: "Task 2 - Essay",
    description: "Write an argumentative essay on a given topic",
    timeLimit: "40 minutes",
    wordCount: "250+ words",
    difficulty: "Hard",
    weight: "67%",
    keySkills: [
      "Argument development and support",
      "Critical thinking and analysis",
      "Essay structure and coherence",
      "Advanced vocabulary and grammar"
    ],
    strategy: "Spend 5-7 minutes planning your argument. Have a clear position and support it with relevant examples. Balance your essay structure and use cohesive devices effectively.",
    stepByStep: [
      "Begin by reading the question carefully—identify if you need to agree/disagree, discuss both views, present solutions, etc.",
      "Brainstorm relevant ideas and examples. Decide your position and outline your main arguments.",
      "Write an introduction with a hook, any necessary background, and a clear thesis statement presenting your position.",
      "Develop each main idea as a separate body paragraph. Start each with a topic sentence, then support it with explanations and specific examples.",
      "Use linking words to make your writing coherent (e.g., 'Firstly,' 'In addition,' 'However,' etc.).",
      "Write a strong conclusion summarizing your argument and clearly restating your stance—avoid adding new information.",
      "Review your essay for grammar, vocabulary, and to make sure each part of the task is answered clearly."
    ],
    commonMistakes: [
      "Not having a clear position or thesis",
      "Poor paragraph development",
      "Irrelevant examples or ideas",
      "Weak conclusion that doesn't summarize effectively"
    ],
    tips: ["Plan before writing", "Have clear thesis", "Use topic sentences", "Conclude effectively"],
    assessmentCriteria: [
        { name: "Task Response", description: "How well you answer the question, develop your arguments, present a clear position and support your ideas with examples.", weight: "25%" },
        ...commonCriteria
    ]
  }
];
