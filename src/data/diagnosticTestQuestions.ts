export interface McqQuestion {
  id: string;
  type: 'mcq';
  passage: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface TrueFalseNgQuestion {
  id:string;
  type: 'true-false-ng';
  passage: string;
  statement: string;
  correctAnswer: 'True' | 'False' | 'Not Given';
}

export interface SentenceCompletionQuestion {
  id: string;
  type: 'sentence-completion';
  passage: string;
  question: string;
  correctAnswer: string;
}

export type ReadingQuestion = McqQuestion | TrueFalseNgQuestion | SentenceCompletionQuestion;

export interface DiagnosticTestQuestions {
    reading: ReadingQuestion[];
}

export const diagnosticTestQuestions: DiagnosticTestQuestions = {
  reading: [
    {
      id: 'r1',
      type: 'mcq',
      passage: 'The Industrial Revolution, which began in Britain in the late 18th century, was a period of major industrialization that saw the mechanization of agriculture and textile manufacturing and a revolution in power, including steam ships and railways. This period transformed economies that had been based on agriculture and handicrafts into economies based on large-scale industry, mechanized manufacturing, and the factory system. New machines, new power sources, and new ways of organizing work made existing industries more productive and efficient.',
      question: 'What was a primary effect of the Industrial Revolution?',
      options: [
        'A decline in the factory system.',
        'A shift from agricultural to industrial economies.',
        'A decrease in the efficiency of industries.',
        'The end of the use of steam power.'
      ],
      correctAnswer: 'A shift from agricultural to industrial economies.'
    },
    {
      id: 'r2',
      type: 'true-false-ng',
      passage: 'Photosynthesis is a process used by plants, algae, and certain bacteria to convert light energy into chemical energy, through a process that converts carbon dioxide and water into glucose (sugar) and oxygen. This process is responsible for producing and maintaining the oxygen content of the Earth\'s atmosphere and supplies most of the energy necessary for life on Earth.',
      statement: 'Only plants are capable of photosynthesis.',
      correctAnswer: 'False'
    },
    {
        id: 'r3',
        type: 'mcq',
        passage: 'The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe. Several walls were being built as early as the 7th century BC; these, later joined together and made bigger and stronger, are now collectively referred to as the Great Wall. Especially famous is the wall built 220–206 BC by Qin Shi Huang, the first Emperor of China.',
        question: 'What was the main purpose of the Great Wall of China?',
        options: [
          'To serve as a tourist attraction.',
          'To mark the border of China.',
          'To defend against nomadic invasions.',
          'To be a monument to the first Emperor.'
        ],
        correctAnswer: 'To defend against nomadic invasions.'
    },
    {
      id: 'r4',
      type: 'true-false-ng',
      passage: 'Vincent van Gogh, a Dutch Post-Impressionist painter, is among the most famous and influential figures in the history of Western art. In just over a decade, he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life. Despite his prolific output, he was commercially unsuccessful and his suicide at 37 came after years of mental illness and poverty. His fame grew in the early 20th century, and his work had a powerful influence on subsequent generations of artists.',
      statement: 'Van Gogh was a wealthy and commercially successful artist during his lifetime.',
      correctAnswer: 'False'
    },
    {
      id: 'r5',
      type: 'mcq',
      passage: 'The Amazon rainforest, covering much of northwestern Brazil and extending into Colombia, Peru and other South American countries, is the world\'s largest tropical rainforest, famed for its biodiversity. It’s crisscrossed by thousands of rivers, including the powerful Amazon. The region is home to millions of species of insects, plants, fish, birds, and mammals. However, deforestation is a major threat to this vital ecosystem, primarily due to cattle ranching and agricultural expansion.',
      question: 'What is the main threat to the Amazon rainforest mentioned in the passage?',
      options: [
        'Natural river erosion.',
        'A lack of biodiversity.',
        'Tourism and exploration.',
        'Deforestation for agriculture and cattle.'
      ],
      correctAnswer: 'Deforestation for agriculture and cattle.'
    },
    {
      id: 'r6',
      type: 'sentence-completion',
      passage: 'Climate change refers to long-term shifts in temperatures and weather patterns. While these shifts can be natural, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas.',
      question: 'The primary driver of modern climate change is __________.',
      correctAnswer: 'human activities'
    },
    {
      id: 'r7',
      type: 'true-false-ng',
      passage: 'The Roman Empire, at its height in 117 AD, was the most extensive political and social structure in western civilization. Spanning over five million square kilometers, it held sway over an estimated 70 million people, 21% of the world\'s population at the time. It was known for its contributions to law, architecture, and engineering, many of which are still influential today.',
      statement: 'The Roman Empire had minimal impact on modern society.',
      correctAnswer: 'False'
    },
    {
      id: 'r8',
      type: 'mcq',
      passage: 'Bees are vital for the preservation of ecological balance and biodiversity in nature. They provide one of the most recognisable ecosystem services, i.e., pollination, which is what makes food production possible. By doing so, they protect and maintain ecosystems as well as animal and plant species, and contribute to genetic and biotic diversity.',
      question: 'What is the most significant ecosystem service provided by bees mentioned in the text?',
      options: [
        'Honey production',
        'Maintaining biodiversity',
        'Pollination',
        'Protecting animal species'
      ],
      correctAnswer: 'Pollination'
    },
    {
      id: 'r9',
      type: 'sentence-completion',
      passage: 'The internet has revolutionized communication, allowing for instantaneous contact with people across the globe. This has transformed industries, personal relationships, and access to information.',
      question: 'The internet allows for __________ contact with people worldwide.',
      correctAnswer: 'instantaneous'
    },
    {
      id: 'r10',
      type: 'true-false-ng',
      passage: 'The first successful airplane flight was conducted by the Wright brothers in 1903 in Kitty Hawk, North Carolina. The flight lasted only 12 seconds and covered 120 feet, but it marked the beginning of the aviation era.',
      statement: 'The Wright brothers\' first flight took place in Ohio.',
      correctAnswer: 'False'
    }
  ],
};
