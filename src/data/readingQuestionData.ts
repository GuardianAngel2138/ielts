
export interface QuestionType {
  id: string;
  title: string;
  description: string;
  strategy: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeAllocation: string;
  frequency: string;
  keySkills: string[];
  stepByStep: string[];
  commonMistakes: string[];
}

const academicQuestionTypes: QuestionType[] = [
  {
    id: "mcq",
    title: "Multiple Choice",
    description: "Choose one correct answer from three or four options, or multiple answers from a longer list. Questions test for main ideas or specific details within academic texts.",
    strategy: "Read the question stem carefully to understand what's being asked. Locate the relevant section in the text. Eliminate clearly wrong options. The correct answer will accurately paraphrase information from the text.",
    difficulty: "Medium",
    timeAllocation: "1-2 min/question",
    frequency: "Common",
    keySkills: [
      "Identifying main ideas and supporting details",
      "Understanding paraphrasing and synonyms",
      "Eliminating distractors effectively",
      "Locating specific information quickly"
    ],
    stepByStep: [
      "Read the question and identify keywords",
      "Scan the text for the relevant paragraph",
      "Read the options carefully",
      "Eliminate obviously wrong answers",
      "Choose the option that best matches the text's meaning"
    ],
    commonMistakes: [
      "Choosing answers based on keywords alone without understanding context",
      "Falling for distractors that use text words but change the meaning",
      "Not reading all options before deciding",
      "Overthinking simple questions"
    ]
  },
  {
    id: "true-false-ng",
    title: "Identifying Information (True/False/Not Given)",
    description: "Decide if factual statements are 'True' (supported by text), 'False' (contradicted by text), or 'Not Given' (information cannot be found).",
    strategy: "The answers appear in order. For each statement, find the relevant text section. 'False' means the text states the opposite. 'Not Given' means you can't verify the statement from the text.",
    difficulty: "Hard",
    timeAllocation: "1 min/question",
    frequency: "Very Common",
    keySkills: [
      "Distinguishing between stated and implied information",
      "Understanding the difference between 'False' and 'Not Given'",
      "Identifying qualifying words (all, some, mainly, etc.)",
      "Precise text comprehension"
    ],
    stepByStep: [
      "Read the statement carefully",
      "Identify key information in the statement",
      "Locate the relevant part of the text",
      "Compare the statement with the text exactly",
      "Decide: True (matches), False (contradicts), or Not Given (no information)"
    ],
    commonMistakes: [
      "Confusing 'False' with 'Not Given'",
      "Using outside knowledge instead of text information",
      "Missing qualifying words that change meaning",
      "Making assumptions based on partial information"
    ]
  },
  {
    id: "yes-no-ng",
    title: "Identifying Writer's Views/Claims (Yes/No/Not Given)",
    description: "Focus on the author's opinions, claims, or beliefs rather than factual information. Determine if statements reflect the writer's views.",
    strategy: "Look for opinion indicators like 'believes', 'claims', 'suggests'. 'Yes' means the view is expressed, 'No' means it contradicts the writer's view, 'Not Given' means the view isn't mentioned.",
    difficulty: "Hard",
    timeAllocation: "1-1.5 min/question",
    frequency: "Common",
    keySkills: [
      "Identifying opinion vs. fact",
      "Recognizing writer's stance and attitude",
      "Understanding subtle expressions of viewpoint",
      "Distinguishing between writer's and others' opinions"
    ],
    stepByStep: [
      "Identify if the statement is about opinion or fact",
      "Look for opinion markers in the text",
      "Find where the writer expresses their view",
      "Compare the statement with the writer's expressed opinion",
      "Choose Yes/No/Not Given based on writer's view only"
    ],
    commonMistakes: [
      "Treating opinions as facts",
      "Confusing other people's views with the writer's",
      "Missing subtle expressions of opinion",
      "Assuming the writer agrees with presented information"
    ]
  },
  {
    id: "matching-info",
    title: "Matching Information",
    description: "Find specific pieces of information and match them to the correct paragraphs or sections labeled with letters (A, B, C, etc.).",
    strategy: "Answers are not in order. Read statements first, then skim paragraphs to find where information is located. Some paragraphs may contain multiple answers, others none.",
    difficulty: "Medium",
    timeAllocation: "1-2 min/question",
    frequency: "Common",
    keySkills: [
      "Skimming for specific information",
      "Understanding paragraph main ideas",
      "Matching concepts across different expressions",
      "Managing time effectively with unordered answers"
    ],
    stepByStep: [
      "Read all the information statements first",
      "Skim each paragraph to understand its content",
      "Look for the specific type of information requested",
      "Match statements to paragraphs systematically",
      "Double-check your matches before moving on"
    ],
    commonMistakes: [
      "Assuming answers are in order",
      "Matching based on keywords without understanding meaning",
      "Not reading all paragraphs before deciding",
      "Spending too much time on difficult matches"
    ]
  },
  {
    id: "matching-headings",
    title: "Matching Headings",
    description: "Match headings to paragraphs based on their main idea. There are always more headings than paragraphs needed.",
    strategy: "Read headings first. For each paragraph, identify its main idea, not just details. Choose the heading that best summarizes the entire paragraph. Do easier paragraphs first.",
    difficulty: "Medium",
    timeAllocation: "2 min/paragraph",
    frequency: "Very Common",
    keySkills: [
      "Identifying paragraph main ideas vs. details",
      "Understanding heading themes and scope",
      "Eliminating distractors effectively",
      "Summarizing content concisely"
    ],
    stepByStep: [
      "Read all headings to understand options",
      "Read the first paragraph completely",
      "Identify the paragraph's main purpose/idea",
      "Match with the most appropriate heading",
      "Cross out used headings and continue"
    ],
    commonMistakes: [
      "Choosing headings based on details instead of main ideas",
      "Falling for headings that only match part of the paragraph",
      "Not eliminating used headings",
      "Rushing without fully understanding paragraph content"
    ]
  },
  {
    id: "matching-features",
    title: "Matching Features",
    description: "Match statements to features like names of researchers, theories, or historical periods. Options may be used more than once.",
    strategy: "Scan text for feature names first and highlight them. Read statements one by one and find which feature relates to each. Remember options can be reused.",
    difficulty: "Easy",
    timeAllocation: "30-45 sec/question",
    frequency: "Occasional",
    keySkills: [
      "Scanning for specific names/terms",
      "Connecting information to sources",
      "Managing multiple uses of same option",
      "Quick location of relevant text sections"
    ],
    stepByStep: [
      "Scan the text and highlight all feature names",
      "Read the first statement",
      "Find which highlighted feature it relates to",
      "Continue systematically through all statements",
      "Remember features can be used multiple times"
    ],
    commonMistakes: [
      "Assuming each feature is used only once",
      "Missing some feature names in the text",
      "Not reading the full context around features",
      "Confusing similar-sounding names or terms"
    ]
  },
  {
    id: "matching-sentence-endings",
    title: "Matching Sentence Endings",
    description: "Complete sentence beginnings by choosing correct endings from a list. Both grammar and meaning must be correct.",
    strategy: "Read sentence stems first. Answers are in order. Locate information for the first stem, then find the ending that completes it correctly in grammar and meaning.",
    difficulty: "Medium",
    timeAllocation: "1-1.5 min/question",
    frequency: "Common",
    keySkills: [
      "Understanding sentence structure and grammar",
      "Maintaining meaning coherence",
      "Following text order systematically",
      "Combining information accurately"
    ],
    stepByStep: [
      "Read all sentence stems to understand what's needed",
      "Find the location for the first stem in the text",
      "Read the context carefully",
      "Test each ending for grammar and meaning",
      "Choose the best fit and move to the next stem"
    ],
    commonMistakes: [
      "Ignoring grammar rules when matching",
      "Choosing endings that only partially fit the meaning",
      "Not following the order of stems in the text",
      "Rushing without checking both meaning and grammar"
    ]
  },
  {
    id: "sentence-completion",
    title: "Sentence Completion",
    description: "Complete sentences using exact words from the text within a specific word limit (e.g., 'NO MORE THAN TWO WORDS AND/OR A NUMBER').",
    strategy: "Answers are in order. Check word limit carefully. Identify the type of word needed. Find the relevant text section and select exact words to fill the gap.",
    difficulty: "Easy",
    timeAllocation: "30-45 sec/question",
    frequency: "Very Common",
    keySkills: [
      "Following word limit instructions precisely",
      "Identifying exact words from text",
      "Understanding grammatical requirements",
      "Maintaining text accuracy"
    ],
    stepByStep: [
      "Read the word limit instruction carefully",
      "Identify what type of information is missing",
      "Locate the relevant sentence in the text",
      "Extract the exact words needed",
      "Check your answer fits grammatically and within word limit"
    ],
    commonMistakes: [
      "Exceeding the word limit",
      "Changing the form of words from the text",
      "Using synonyms instead of exact text words",
      "Missing articles (a, an, the) when needed"
    ]
  },
  {
    id: "summary-completion",
    title: "Summary, Note, Table, Flow-chart Completion",
    description: "Fill gaps in summaries, notes, tables, or flow-charts using words from the text or from a provided list of options.",
    strategy: "Understand the overall meaning first. Identify information type needed for each gap. If using text words, follow word limits. Answers usually come from one or two paragraphs.",
    difficulty: "Medium",
    timeAllocation: "1-2 min/question",
    frequency: "Common",
    keySkills: [
      "Understanding document structure and flow",
      "Identifying information types and categories",
      "Following complex instructions",
      "Maintaining coherence in completed text"
    ],
    stepByStep: [
      "Read the complete summary/table to understand the topic",
      "Identify what type of word fits each gap",
      "Locate the relevant section in the original text",
      "Find the specific information for each gap",
      "Check that completed text makes sense"
    ],
    commonMistakes: [
      "Not understanding the overall structure before filling gaps",
      "Ignoring word limit restrictions",
      "Using information from wrong text sections",
      "Completing gaps without checking final coherence"
    ]
  },
  {
    id: "diagram-label",
    title: "Diagram Label Completion",
    description: "Label parts of diagrams (technical drawings, natural processes, maps) with words taken directly from the text, following word limits.",
    strategy: "Analyze the diagram structure first. Use existing labels to locate relevant text description. Answers may not come in order. Match text descriptions to diagram parts systematically.",
    difficulty: "Easy",
    timeAllocation: "30-45 sec/label",
    frequency: "Occasional",
    keySkills: [
      "Visual-text correlation",
      "Understanding technical descriptions",
      "Following spatial relationships",
      "Precise word selection from text"
    ],
    stepByStep: [
      "Study the diagram and existing labels",
      "Find the description section in the text",
      "Match text descriptions to unlabeled parts",
      "Use exact words from the text",
      "Check that labels make sense with the diagram"
    ],
    commonMistakes: [
      "Using common knowledge instead of text words",
      "Misunderstanding diagram orientation or relationships",
      "Exceeding word limits for labels",
      "Not using exact words from the descriptive text"
    ]
  },
  {
    id: "short-answer",
    title: "Short-answer Questions",
    description: "Answer questions with short phrases using exact words from the text within specified word limits.",
    strategy: "Answers appear in order. Read question and identify keywords. Scan text for relevant information. Use exact text words and respect word limits strictly.",
    difficulty: "Easy",
    timeAllocation: "30-45 sec/question",
    frequency: "Common",
    keySkills: [
      "Quick information location",
      "Extracting precise answers",
      "Following word limits exactly",
      "Understanding question requirements"
    ],
    stepByStep: [
      "Identify question keywords and what information is needed",
      "Scan the text to find the relevant section",
      "Locate the specific answer in the text",
      "Extract exact words within the word limit",
      "Check your answer directly answers the question"
    ],
    commonMistakes: [
      "Exceeding specified word limits",
      "Paraphrasing instead of using exact text words",
      "Providing incomplete answers",
      "Missing key information that makes the answer unclear"
    ]
  }
];

const generalQuestionTypes: QuestionType[] = [
  {
    id: "mcq",
    title: "Multiple Choice",
    description: "Choose correct answers from options based on everyday texts like advertisements, event schedules, or workplace notices.",
    strategy: "Read the question to identify what you need to find. Skim text for the right section. Compare options with text meaning, even if words differ.",
    difficulty: "Easy",
    timeAllocation: "45 sec/question",
    frequency: "Very Common",
    keySkills: [
      "Understanding practical information",
      "Identifying key details in everyday contexts",
      "Comparing options efficiently",
      "Working with real-world text types"
    ],
    stepByStep: [
      "Read the question and understand what's being asked",
      "Skim the text to locate relevant information",
      "Read the options and eliminate obvious wrong answers",
      "Choose the option that matches the text meaning",
      "Double-check your choice makes sense"
    ],
    commonMistakes: [
      "Rushing through simple-looking questions",
      "Missing important details in practical information",
      "Choosing answers with matching words but different meanings",
      "Not reading all options thoroughly"
    ]
  },
  {
    id: "true-false-ng",
    title: "Identifying Information (True/False/Not Given)",
    description: "Decide if statements about factual information are 'True', 'False', or 'Not Given' based on everyday texts and practical information.",
    strategy: "Answers follow text order. Find the relevant section for each statement. 'False' means text says the opposite. 'Not Given' means no information provided.",
    difficulty: "Medium",
    timeAllocation: "45 sec/question",
    frequency: "Very Common",
    keySkills: [
      "Precise fact-checking in practical contexts",
      "Distinguishing between stated and unstated information",
      "Understanding everyday language and implications",
      "Avoiding assumptions about practical situations"
    ],
    stepByStep: [
      "Read the statement and identify key information",
      "Find the relevant section in the text",
      "Compare statement with text exactly",
      "Decide if it's supported, contradicted, or not mentioned",
      "Mark True, False, or Not Given accordingly"
    ],
    commonMistakes: [
      "Using common sense instead of text information",
      "Confusing 'False' with 'Not Given' in practical contexts",
      "Missing important qualifiers in everyday language",
      "Making assumptions about typical situations"
    ]
  },
  {
    id: "yes-no-ng",
    title: "Identifying Writer's Views/Claims (Yes/No/Not Given)",
    description: "Determine if statements agree with the writer's opinions in more argumentative general training texts, usually in Section 3.",
    strategy: "Look for opinion indicators in everyday language. Focus on what the writer thinks, not just facts. Common in texts about services, advice, or recommendations.",
    difficulty: "Medium",
    timeAllocation: "1 min/question",
    frequency: "Occasional",
    keySkills: [
      "Recognizing opinions in practical writing",
      "Understanding advice and recommendations",
      "Distinguishing writer's views from general information",
      "Interpreting evaluative language"
    ],
    stepByStep: [
      "Identify if the statement is about opinion or advice",
      "Look for the writer's personal views or recommendations",
      "Find where the writer expresses their opinion",
      "Compare statement with writer's expressed view",
      "Choose based on agreement with writer's opinion only"
    ],
    commonMistakes: [
      "Treating practical advice as neutral information",
      "Missing subtle expressions of opinion in everyday language",
      "Confusing general facts with writer's personal views",
      "Assuming the writer endorses all information presented"
    ]
  },
  {
    id: "matching-info",
    title: "Matching Information",
    description: "Match specific practical details like prices, times, or rules to different locations, services, or sections of everyday texts.",
    strategy: "Answers aren't in order. Read information list first, then scan text sections systematically. Focus on practical details and specific requirements.",
    difficulty: "Easy",
    timeAllocation: "45 sec/question",
    frequency: "Common",
    keySkills: [
      "Scanning for practical details efficiently",
      "Understanding organizational information",
      "Matching requirements to appropriate sections",
      "Managing information from multiple sources"
    ],
    stepByStep: [
      "Read all the information statements",
      "Understand what each section/location offers",
      "Look for specific details mentioned in statements",
      "Match systematically, checking each possibility",
      "Verify matches make practical sense"
    ],
    commonMistakes: [
      "Assuming information appears in logical order",
      "Missing specific details while focusing on general themes",
      "Not checking all sections before making matches",
      "Overlooking important practical restrictions or conditions"
    ]
  },
  {
    id: "matching-headings",
    title: "Matching Headings",
    description: "Choose appropriate headings for paragraphs in instructional or informational texts, focusing on main purposes rather than details.",
    strategy: "Read headings first. Identify each paragraph's main purpose or function. Choose headings that capture the essential practical information or instruction.",
    difficulty: "Medium",
    timeAllocation: "1.5 min/paragraph",
    frequency: "Common",
    keySkills: [
      "Identifying main purposes in practical texts",
      "Understanding instructional organization",
      "Distinguishing between steps and supporting details",
      "Recognizing text structure patterns"
    ],
    stepByStep: [
      "Read all available headings",
      "Read the paragraph and identify its main function",
      "Ask 'What is this paragraph mainly about?'",
      "Choose the heading that best captures the main purpose",
      "Eliminate used headings and continue"
    ],
    commonMistakes: [
      "Choosing headings based on prominent details rather than main ideas",
      "Missing the instructional or practical purpose of paragraphs",
      "Being distracted by specific examples instead of general themes",
      "Not considering the paragraph's role in the overall text structure"
    ]
  },
  {
    id: "matching-features",
    title: "Matching Features",
    description: "Match practical information like job responsibilities, course features, or service details to appropriate categories or providers.",
    strategy: "Locate all feature names/categories in text first. Connect specific practical information to the right category. Features can be matched multiple times.",
    difficulty: "Easy",
    timeAllocation: "30 sec/question",
    frequency: "Occasional",
    keySkills: [
      "Categorizing practical information efficiently",
      "Understanding service/job descriptions",
      "Connecting details to appropriate sources",
      "Managing multiple connections systematically"
    ],
    stepByStep: [
      "Scan for and highlight all feature names/categories",
      "Read the first statement about practical information",
      "Find which category/feature it relates to",
      "Continue matching all statements systematically",
      "Remember categories can have multiple matches"
    ],
    commonMistakes: [
      "Assuming each category is used only once",
      "Missing categories mentioned in different parts of text",
      "Not reading full context around practical information",
      "Confusing similar services or job roles"
    ]
  },
  {
    id: "matching-sentence-endings",
    title: "Matching Sentence Endings",
    description: "Complete sentences about practical information, ensuring both grammatical correctness and factual accuracy from everyday texts.",
    strategy: "Answers are in order. Find information for each sentence beginning, then choose endings that create grammatically correct and factually accurate sentences.",
    difficulty: "Easy",
    timeAllocation: "45 sec/question",
    frequency: "Common",
    keySkills: [
      "Completing practical information accurately",
      "Maintaining grammatical correctness",
      "Understanding everyday procedures and requirements",
      "Following sequential information"
    ],
    stepByStep: [
      "Read all sentence beginnings to understand topics",
      "Locate information for the first sentence in text",
      "Test each ending for grammar and accuracy",
      "Choose the ending that creates the best complete sentence",
      "Move to next sentence beginning in order"
    ],
    commonMistakes: [
      "Ignoring grammar while focusing only on meaning",
      "Choosing endings that only partially complete the thought",
      "Not following the text order when matching",
      "Missing important practical details that affect accuracy"
    ]
  },
  {
    id: "sentence-completion",
    title: "Sentence Completion",
    description: "Complete sentences about practical information using exact words from everyday texts like policies, instructions, or procedures.",
    strategy: "Check word limits carefully. Answers are in order. Find relevant information and use exact words from text. Focus on practical details and requirements.",
    difficulty: "Easy",
    timeAllocation: "30 sec/question",
    frequency: "Very Common",
    keySkills: [
      "Extracting precise practical information",
      "Following word limits in everyday contexts",
      "Understanding procedural language",
      "Maintaining accuracy with practical details"
    ],
    stepByStep: [
      "Note the word limit and understand what's missing",
      "Locate the relevant practical information in text",
      "Find the exact words that complete the sentence",
      "Check the completion fits grammatically",
      "Verify you're within the word limit"
    ],
    commonMistakes: [
      "Exceeding word limits with practical information",
      "Changing word forms from the original text",
      "Using general knowledge instead of text words",
      "Missing important practical details like times or conditions"
    ]
  },
  {
    id: "summary-completion",
    title: "Summary, Note, Table, Flow-chart Completion",
    description: "Complete practical documents like course information tables, procedure summaries, or service comparisons using text information.",
    strategy: "Understand the practical purpose of the document. Fill gaps with information that maintains the document's usefulness and accuracy. Use exact text words when specified.",
    difficulty: "Easy",
    timeAllocation: "45 sec/question",
    frequency: "Very Common",
    keySkills: [
      "Understanding practical document formats",
      "Organizing information logically",
      "Maintaining document functionality",
      "Following completion instructions precisely"
    ],
    stepByStep: [
      "Understand the document's practical purpose",
      "Identify what type of information fills each gap",
      "Locate relevant details in the original text",
      "Complete gaps maintaining document coherence",
      "Check the completed document makes practical sense"
    ],
    commonMistakes: [
      "Not understanding the document's practical function",
      "Using information that doesn't fit the document structure",
      "Ignoring word limits when specified",
      "Missing important practical details that affect usability"
    ]
  },
  {
    id: "diagram-label",
    title: "Diagram Label Completion",
    description: "Label practical diagrams like maps, floor plans, or simple process diagrams using exact words from accompanying descriptions.",
    strategy: "Study diagram structure and existing labels. Find descriptive text section. Match descriptions to unlabeled parts using spatial and logical relationships.",
    difficulty: "Easy",
    timeAllocation: "30 sec/label",
    frequency: "Occasional",
    keySkills: [
      "Understanding practical diagrams and maps",
      "Correlating text descriptions with visual elements",
      "Using spatial reasoning with text information",
      "Extracting precise labeling information"
    ],
    stepByStep: [
      "Examine the diagram and note existing labels",
      "Find the text section describing the diagram",
      "Match text descriptions to unlabeled parts",
      "Use exact words from the descriptive text",
      "Check labels make sense with diagram relationships"
    ],
    commonMistakes: [
      "Using general knowledge instead of text descriptions",
      "Misunderstanding diagram orientation or layout",
      "Not using exact words from the accompanying text",
      "Missing important spatial relationships described in text"
    ]
  },
  {
    id: "short-answer",
    title: "Short-answer Questions",
    description: "Answer practical questions about services, procedures, or requirements using exact words from everyday texts within word limits.",
    strategy: "Answers are in order. Identify what practical information is needed. Find relevant text section quickly. Extract exact words that directly answer the question.",
    difficulty: "Easy",
    timeAllocation: "30 sec/question",
    frequency: "Very Common",
    keySkills: [
      "Quick location of practical information",
      "Understanding everyday questions and requirements",
      "Extracting precise answers efficiently",
      "Working within strict word limits"
    ],
    stepByStep: [
      "Understand exactly what practical information is needed",
      "Locate the relevant section dealing with that topic",
      "Find the specific answer in the text",
      "Use exact words within the word limit",
      "Check your answer directly addresses the question"
    ],
    commonMistakes: [
      "Providing more information than requested",
      "Using paraphrases instead of exact text words",
      "Exceeding word limits with additional details",
      "Missing key practical information that makes answers unclear"
    ]
  }
];

export const readingQuestionData = {
  academic: academicQuestionTypes,
  general: generalQuestionTypes,
};
