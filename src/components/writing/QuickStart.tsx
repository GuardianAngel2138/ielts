
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import useIsMobile from "@/hooks/useIsMobile";

export default function QuickStart() {
  const isMobile = useIsMobile();
  return (
    <section className="pt-6 pb-0 px-2 sm:px-4">
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible defaultValue={isMobile ? "quick" : undefined} value={isMobile ? "quick" : undefined}>
          <AccordionItem value="quick">
            <AccordionTrigger className="text-green-700 text-lg font-bold bg-green-50 px-4 py-3 rounded-lg mb-2">
              🟢 Quick Start: How to Ace IELTS Writing
            </AccordionTrigger>
            <AccordionContent className="bg-white px-4 py-2 rounded-b-lg shadow">
              <ul className="list-disc list-inside text-gray-700 text-[15px] space-y-1">
                <li>
                  <b>Time:</b> 60 minutes total—spend <b>20m</b> on Task&nbsp;1, <b>40m</b> on Task&nbsp;2.
                </li>
                <li>
                  <b>Read instructions carefully</b> &mdash; answer all the parts!
                </li>
                <li>
                  <b>Write enough words:</b> min 150 for Task 1, min 250 for Task 2.
                </li>
                <li>
                  <b>Structure matters:</b> Use clear paragraphs (see below).
                </li>
                <li>
                  <b>Don't panic!</b> If unsure, write what you can—every word counts.
                </li>
                <li className="italic">This guide is open on mobile, so you won’t miss it! 👇</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
