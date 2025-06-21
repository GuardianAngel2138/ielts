
import { BookOpen } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[100]">
      <div className="flex flex-col items-center space-y-6 animate-[fade-in_0.5s_ease-in-out]">
        <div className="flex items-center justify-center">
            <BookOpen className="h-16 w-16 text-purple-600 animate-pulse" />
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            IELTS Mastery
          </span>
        </div>
        <p className="text-gray-500">Preparing your learning experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
