
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  PenTool, 
  Clock, 
  Target, 
  CheckCircle, 
  BarChart3, 
  TrendingUp, 
  Lightbulb, 
  AlertCircle, 
  BookOpen, 
  Users, 
  Award,
  HelpCircle 
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // For Quick Start
import FloatingHelpButton from "@/components/FloatingHelpButton";
import useIsMobile from "@/hooks/useIsMobile";
import QuickStart from "@/components/writing/QuickStart";
import TaskBreakdown from "@/components/writing/TaskBreakdown";
import TaskDetails from "@/components/writing/TaskDetails";
import { tasks } from "@/components/writing/WritingTasks";
import AssessmentCriteriaSection from "@/components/writing/AssessmentCriteria";
import WritingStructures from "@/components/writing/WritingStructures";
import WritingCTA from "@/components/writing/WritingCTA";
import WritingStepByStep from "@/components/writing/WritingStepByStep";

const Writing = () => {
  const [selectedTask, setSelectedTask] = useState<'task1-academic' | 'task1-general' | 'task2' | null>(null);
  const isMobile = useIsMobile();
  const detailsRef = useRef<HTMLDivElement>(null);

  const getSelectedTaskData = () => {
    return tasks.find(task => task.id === selectedTask) || null;
  };

  useEffect(() => {
    // On mobile, if a task is selected, smoothly scroll to the details section.
    if (selectedTask && isMobile && detailsRef.current) {
      // A small timeout ensures the element is rendered before we scroll.
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [selectedTask, isMobile]);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-green-50 to-emerald-100 px-2 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-6">
                <PenTool className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">IELTS Writing Excellence</h1>
              <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-1">
                Master both Task 1 and Task 2 with proven techniques, structure templates, and high-scoring strategies for Academic and General Training tests.
              </p>
              <div className="mt-3 sm:hidden">
                <span className="text-green-700 text-sm font-medium bg-green-50 rounded px-3 py-1">
                  👆 Scroll down & tap a card for guides!
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-white/60 p-6 rounded-xl backdrop-blur-sm">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">60 Minutes</h3>
                <p className="text-gray-600">Total test time</p>
              </div>
              <div className="text-center bg-white/60 p-6 rounded-xl backdrop-blur-sm">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">2 Tasks</h3>
                <p className="text-gray-600">Different requirements</p>
              </div>
              <div className="text-center bg-white/60 p-6 rounded-xl backdrop-blur-sm">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Band 9</h3>
                <p className="text-gray-600">Achievable target</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start/FAQ Section */}
        <QuickStart />

        {/* Step-by-Step Guide */}
        <WritingStepByStep />

        {/* Tasks Overview */}
        <TaskBreakdown selectedTask={selectedTask} setSelectedTask={setSelectedTask} />

        {/* Task Details Section - now wrapped with a div for the ref */}
        <div ref={detailsRef}>
          {selectedTask && getSelectedTaskData() && (
            <TaskDetails selectedTaskData={getSelectedTaskData()} />
          )}
        </div>

        {/* Micro-guidance for further study */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <span className="text-gray-700 text-sm bg-gray-50 px-4 py-1 rounded">
            Want more help? Try these extra resources:
          </span>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://ieltsliz.com/ielts-writing-task-1-lessons-and-tips/"
              className="text-blue-600 underline font-semibold hover:opacity-80 transition"
              target="_blank" rel="noopener"
            >
              Band 9 Task 1 Sample Answers
            </a>
            <a
              href="https://ielts-simon.com"
              className="text-blue-600 underline font-semibold hover:opacity-80 transition"
              target="_blank" rel="noopener"
            >
              Practice Tasks & Model Essays
            </a>
            <a
              href="https://www.ielts.org/about-ielts/how-ielts-is-scored"
              className="text-blue-600 underline font-semibold hover:opacity-80 transition"
              target="_blank" rel="noopener"
            >
              Official IELTS Marking Criteria
            </a>
          </div>
        </div>

        {/* Assessment Criteria */}
        <AssessmentCriteriaSection />

        {/* Writing Structure Tips */}
        <WritingStructures />

        {/* CTA */}
        <WritingCTA />

        {/* Floating Help Button */}
        <FloatingHelpButton />

        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Writing;
