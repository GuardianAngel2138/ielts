
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

// Lazy load pages for code splitting and loading screens
const Index = lazy(() => import("./pages/Index"));
const Reading = lazy(() => import("./pages/Reading"));
const Writing = lazy(() => import("./pages/Writing"));
const Listening = lazy(() => import("./pages/Listening"));
const Speaking = lazy(() => import("./pages/Speaking"));
const TipsAndTricks = lazy(() => import("./pages/TipsAndTricks"));
const ModelAnswers = lazy(() => import("./pages/ModelAnswers"));
const PracticeTests = lazy(() => import("./pages/PracticeTests"));
const DiagnosticTest = lazy(() => import("./pages/DiagnosticTest"));
const TestInProgress = lazy(() => import("./pages/TestInProgress"));
const TestResults = lazy(() => import("./pages/TestResults"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/listening" element={<Listening />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/tips-tricks" element={<TipsAndTricks />} />
            <Route path="/model-answers" element={<ModelAnswers />} />
            <Route path="/practice-tests" element={<PracticeTests />} />
            <Route path="/diagnostic-test" element={<DiagnosticTest />} />
            <Route path="/test/in-progress" element={<TestInProgress />} />
            <Route path="/test-results" element={<TestResults />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
