
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReadingHero from "@/components/reading/ReadingHero";
import ReadingStrategies from "@/components/reading/ReadingStrategies";
import QuestionTypes from "@/components/reading/QuestionTypes";
import PracticeMaterials from "@/components/reading/PracticeMaterials";
import SuccessTips from "@/components/reading/SuccessTips";
import ReadingCTA from "@/components/reading/ReadingCTA";
import TestTypeToggle from "@/components/reading/TestTypeToggle";
import QuickStartGuide from "@/components/reading/QuickStartGuide";
import BandScoreGuide from "@/components/reading/BandScoreGuide";
import EssentialVocabulary from "@/components/reading/EssentialVocabulary";
import ReadingStepByStep from "@/components/reading/ReadingStepByStep";

const Reading = () => {
  const [selectedTestType, setSelectedTestType] = useState<'academic' | 'general'>('academic');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ReadingHero />
      <div className="py-4 sm:py-8">
        <TestTypeToggle 
          selectedType={selectedTestType} 
          onTypeChange={setSelectedTestType} 
        />
      </div>
      <ReadingStepByStep selectedTestType={selectedTestType} />
      <QuickStartGuide selectedTestType={selectedTestType} />
      <BandScoreGuide />
      <ReadingStrategies selectedTestType={selectedTestType} />
      <QuestionTypes selectedTestType={selectedTestType} />
      <EssentialVocabulary selectedTestType={selectedTestType} />
      <PracticeMaterials selectedTestType={selectedTestType} />
      <SuccessTips selectedTestType={selectedTestType} />
      <ReadingCTA selectedTestType={selectedTestType} />
      <Footer />
    </div>
  );
};

export default Reading;
