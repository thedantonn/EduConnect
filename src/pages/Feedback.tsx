
import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const FeedbackCard = () => {
  const [rating, setRating] = useState<number | null>(null);
  const { toast } = useToast();

  const handleRatingSubmit = () => {
    if (rating === null) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Rating submitted",
      description: "Thank you for your feedback!"
    });
    setRating(null);
  };

  return (
    <Card className="mb-8">
      <CardContent>
        <div className="pt-6">
          <h2 className="text-2xl font-semibold mb-2">Solving Quadratic Equations</h2>
          <div className="text-gray-500 mb-2">
            <span>By John D. • 2023-06-15</span>
            <span className="ml-4">Mathematics &gt; Algebra</span>
          </div>
          <p className="py-4">
            Quadratic equations can be solved using the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a where ax² + bx + c = 0. You can also solve by factoring or completing the square.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Rate this answer</h3>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="text-3xl focus:outline-none"
                >
                  <span className={`${rating && rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}>
                    ★
                  </span>
                </button>
              ))}
              <span className="ml-3 text-gray-600">Select rating</span>
            </div>
            <Button 
              onClick={handleRatingSubmit} 
              className="bg-educonnect-purple hover:bg-opacity-90"
            >
              Submit Rating
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Feedback = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Feedback</h1>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-lg font-medium mb-4">Filter by Topic</h2>
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger className="w-full max-w-xs">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="algebra">Algebra</SelectItem>
                <SelectItem value="calculus">Calculus</SelectItem>
                <SelectItem value="geometry">Geometry</SelectItem>
                <SelectItem value="statistics">Statistics</SelectItem>
                <SelectItem value="programming">Programming</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <FeedbackCard />
        <FeedbackCard />
      </main>
    </div>
  );
};

export default Feedback;
