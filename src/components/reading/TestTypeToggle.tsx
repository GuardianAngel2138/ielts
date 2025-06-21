
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { GraduationCap, Briefcase, Info, X } from "lucide-react";

interface TestTypeToggleProps {
  selectedType: 'academic' | 'general';
  onTypeChange: (type: 'academic' | 'general') => void;
}

const TestTypeToggle = ({ selectedType, onTypeChange }: TestTypeToggleProps) => {
  const [showTooltip, setShowTooltip] = useState(!localStorage.getItem('hideTestTypeTooltip'));

  const handleDismissTooltip = () => {
    localStorage.setItem('hideTestTypeTooltip', 'true');
    setShowTooltip(false);
  };

  return (
    <div className="flex flex-col items-center mb-12">
      <div className="flex justify-center mb-4">
        <div className="bg-gray-100 p-1 rounded-xl shadow-lg">
          <TooltipProvider>
            <Tooltip open={showTooltip && selectedType === 'academic'}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onTypeChange('academic')}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    selectedType === 'academic'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Academic (AC)
                </button>
              </TooltipTrigger>
              {showTooltip && (
                <TooltipContent side="bottom" className="max-w-sm p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <Info className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="font-semibold">Academic Test</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleDismissTooltip}
                      className="h-auto p-1"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-sm mb-2">
                    For university study, professional registration, and academic purposes.
                  </p>
                  <p className="text-xs text-gray-600">
                    Features complex academic texts, research papers, and scholarly articles.
                  </p>
                </TooltipContent>
              )}
            </Tooltip>

            <Tooltip open={showTooltip && selectedType === 'general'}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onTypeChange('general')}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    selectedType === 'general'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Briefcase className="h-5 w-5 mr-2" />
                  General Training (GT)
                </button>
              </TooltipTrigger>
              {showTooltip && (
                <TooltipContent side="bottom" className="max-w-sm p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <Info className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="font-semibold">General Training</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleDismissTooltip}
                      className="h-auto p-1"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-sm mb-2">
                    For immigration, work experience, and training programs.
                  </p>
                  <p className="text-xs text-gray-600">
                    Features workplace texts, daily life materials, and social contexts.
                  </p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      {/* Add visible info cards below the toggle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full mt-6">
        <div className={`p-4 rounded-xl border-2 transition-all ${
          selectedType === 'academic' 
            ? 'border-blue-200 bg-blue-50' 
            : 'border-gray-200 bg-gray-50'
        }`}>
          <div className="flex items-center mb-2">
            <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
            <span className="font-semibold text-blue-600">Academic Test</span>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            For university study, professional registration, and academic purposes.
          </p>
          <p className="text-xs text-gray-600">
            Features complex academic texts, research papers, and scholarly articles.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border-2 transition-all ${
          selectedType === 'general' 
            ? 'border-blue-200 bg-blue-50' 
            : 'border-gray-200 bg-gray-50'
        }`}>
          <div className="flex items-center mb-2">
            <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
            <span className="font-semibold text-blue-600">General Training</span>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            For immigration, work experience, and training programs.
          </p>
          <p className="text-xs text-gray-600">
            Features workplace texts, daily life materials, and social contexts.
          </p>
        </div>
      </div>
      
      {!showTooltip && (
        <button 
          onClick={() => setShowTooltip(true)}
          className="text-xs text-gray-500 hover:text-gray-700 flex items-center mt-4"
        >
          <Info className="h-3 w-3 mr-1" />
          Show test type info
        </button>
      )}
    </div>
  );
};

export default TestTypeToggle;
