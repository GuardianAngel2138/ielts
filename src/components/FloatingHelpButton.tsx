
import { HelpCircle } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const extraTips = [
  "Write clearly and avoid overly complex sentences if you’re unsure.",
  "Review your writing for common spelling or grammar mistakes.",
  "Underline or bold key words in questions to focus your answer.",
  "Aim to finish with a few minutes to check your work.",
  "If stuck, write something—blank answers get no points!"
];

export default function FloatingHelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          aria-label="Open writing tips"
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md p-3 transition shadow-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <HelpCircle className="w-6 h-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 max-w-xs text-sm bg-white rounded-xl shadow-lg border-green-200 p-4"
        align="end"
        sideOffset={10}
      >
        <div className="font-semibold text-green-700 mb-2 flex items-center gap-2">
          <HelpCircle className="w-4 h-4" /> IELTS Writing Tips
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
          {extraTips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
        <div className="mt-2 text-[13px] text-gray-500">
          Looking for samples? See “Model Answers” or ask your tutor!
        </div>
      </PopoverContent>
    </Popover>
  );
}
