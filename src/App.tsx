// src/App.tsx

import { Provider } from "react-redux";
import store from "@/utils/appStore";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SelectQuery from "./pages/SelectQuery";
import ShareInsights from "./pages/ShareInsights";
import Feedback from "./pages/Feedback";
import Auth from "./pages/Auth";
import ProtectedRoute from "@/components/ProtectedRoute";
import LandingPage from "./pages/Landing"; // Import the LandingPage

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Show Landing Page First at '/lnd' */}
            <Route path="/lnd" element={<LandingPage />} />

            {/* Show Login Page after clicking "Get Started" */}
            <Route path="/auth" element={<Auth />} />

            {/* Protected Routes after login */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              }
            />
            <Route
              path="/select-query"
              element={
                <ProtectedRoute>
                  <SelectQuery />
                </ProtectedRoute>
              }
            />
            <Route
              path="/share-insights"
              element={
                <ProtectedRoute>
                  <ShareInsights />
                </ProtectedRoute>
              }
            />
            <Route
              path="/feedback"
              element={
                <ProtectedRoute>
                  <Feedback />
                </ProtectedRoute>
              }
            />
            {/* Catch-all route for 404 - Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
