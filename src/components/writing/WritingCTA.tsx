
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function WritingCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-20 bg-green-600 text-white px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Start Writing with Confidence</h2>
        <p className="text-base sm:text-xl mb-5 sm:mb-8 opacity-90 leading-relaxed">
          Practice with our model answers and get structured feedback on your writing using proven Band 9 strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="px-8 py-3 font-semibold text-base sm:text-lg"
            onClick={() => navigate("/model-answers")}
          >
            View Model Essays
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 font-semibold text-base sm:text-lg"
            onClick={() => navigate("/practice-tests")}
          >
            Practice Writing Tasks
          </Button>
        </div>
      </div>
    </section>
  );
}
