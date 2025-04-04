
import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const subjects = [
  { id: 'computerScience', name: 'Computer Science' },
  { id: 'mathematics', name: 'Mathematics' },
  { id: 'science', name: 'Science' },
  { id: 'english', name: 'English' },
  { id: 'history', name: 'History' },
];

const topicsBySubject: Record<string, string[]> = {
  computerScience: ['Web Development', 'Data Structures', 'Algorithms', 'Programming'],
  mathematics: ['Algebra', 'Calculus', 'Geometry', 'Statistics'],
  science: ['Biology', 'Chemistry', 'Physics', 'Earth Science'],
  english: ['Literature', 'Grammar', 'Writing', 'Vocabulary'],
  history: ['Ancient History', 'Modern History', 'World Wars', 'Civil Rights'],
};

const ShareInsights = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [insight, setInsight] = useState("");
  const { toast } = useToast();

  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value);
    setSelectedTopic("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSubject || !selectedTopic || !insight.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields before submitting",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Insight shared!",
      description: "Thank you for sharing your knowledge.",
    });
    
    // Reset form
    setInsight("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Share Your Insights</h1>

        <Card className="mb-8">
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-lg font-medium">Select Subject</label>
                <Select value={selectedSubject} onValueChange={handleSubjectChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.id} value={subject.id}>
                        {subject.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
                
              <div>
                <label className="block mb-2 text-lg font-medium">Select Topic</label>
                <Select 
                  disabled={!selectedSubject} 
                  value={selectedTopic} 
                  onValueChange={setSelectedTopic}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={selectedSubject ? "Select a topic" : "Select a subject first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedSubject && 
                      topicsBySubject[selectedSubject].map((topic) => (
                        <SelectItem key={topic} value={topic}>
                          {topic}
                        </SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Share Your Insight</h2>
              <Textarea
                placeholder="Share your knowledge or answer related to this topic..."
                className="min-h-[200px] border-educonnect-purple border-opacity-30"
                value={insight}
                onChange={(e) => setInsight(e.target.value)}
              />
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button 
              type="button" 
              variant="outline" 
              className="flex items-center gap-2 border-educonnect-purple text-educonnect-purple"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Add Images
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              className="flex items-center gap-2 border-educonnect-purple text-educonnect-purple"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Add Documents
            </Button>

            <Button 
              type="submit" 
              className="ml-auto bg-educonnect-purple hover:bg-opacity-90"
            >
              Submit
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ShareInsights;
