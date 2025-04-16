import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const FeedbackCard = ({ subject, professor, date, description }: { subject: string; professor: string; date: string; description: string }) => {
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
          <h2 className="text-2xl font-semibold mb-2">{subject}</h2>
          <div className="text-gray-500 mb-2">
            <span>By {professor} • {date}</span>
            <span className="ml-4">Computer Science</span>
          </div>
          <p className="py-4">
            {description}
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
                <SelectItem value="dmdw">Discrete Mathematics and Data Structures</SelectItem>
                <SelectItem value="nlp">Natural Language Processing</SelectItem>
                <SelectItem value="os">Operating Systems</SelectItem>
                <SelectItem value="dbms">Database Management Systems</SelectItem>
                <SelectItem value="algorithms">Design and Analysis of Algorithms</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Feedback cards for engineering topics */}
        <FeedbackCard 
          subject="Discrete Mathematics and Data Structures" 
          professor="Dr. Pulak Sahoo"
          date="2023-05-12"
          description="Discrete mathematics provides the foundational theory for data structures such as trees, graphs, stacks, and queues, which are essential for algorithmic problem-solving."
        />
        <FeedbackCard 
          subject="Natural Language Processing" 
          professor="Nayan Ranjan Raul"
          date="2023-07-22"
          description="Natural Language Processing involves techniques for processing and analyzing large amounts of natural language data, focusing on tasks such as text classification, sentiment analysis, and machine translation."
        />
        <FeedbackCard 
          subject="Operating Systems" 
          professor="Dr. Satyajit Das"
          date="2023-08-15"
          description="An Operating System (OS) manages hardware resources and provides services for computer programs. Key topics include process management, memory management, and file systems."
        />
        <FeedbackCard 
          subject="Database Management Systems" 
          professor="Dr. Priya Sharma"
          date="2023-09-10"
          description="DBMS provides a systematic approach to storing and retrieving data. Topics include relational databases, normalization, indexing, and transactions."
        />
        <FeedbackCard 
          subject="Design and Analysis of Algorithms" 
          professor="Dr. Ankit Agarwal"
          date="2023-10-05"
          description="This subject covers fundamental algorithms for solving problems efficiently, focusing on sorting, searching, dynamic programming, and graph algorithms."
        />
      </main>
    </div>
  );
};

export default Feedback;
