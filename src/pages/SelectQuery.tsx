
import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const subjects = [
  { id: 'mathematics', name: 'Mathematics' },
  { id: 'science', name: 'Science' },
  { id: 'english', name: 'English' },
  { id: 'history', name: 'History' },
  { id: 'computerScience', name: 'Computer Science' },
];

const topicsBySubject: Record<string, string[]> = {
  mathematics: ['Algebra', 'Calculus', 'Geometry', 'Statistics'],
  science: ['Biology', 'Chemistry', 'Physics', 'Earth Science'],
  english: ['Literature', 'Grammar', 'Writing', 'Vocabulary'],
  history: ['Ancient History', 'Modern History', 'World Wars', 'Civil Rights'],
  computerScience: ['Programming', 'Web Development', 'Data Structures', 'Algorithms'],
};

const SelectQuery = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);

  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value);
    setSelectedTopic("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Select Query</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Select Subject</h2>
              <div className="space-y-4">
                <RadioGroup 
                  onValueChange={handleSubjectChange}
                  value={selectedSubject || ""}
                >
                  {subjects.map((subject) => (
                    <div key={subject.id} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <input
                        type="radio"
                        id={subject.id}
                        value={subject.id}
                        name="subject"
                        checked={selectedSubject === subject.id}
                        onChange={() => handleSubjectChange(subject.id)}
                        className="h-4 w-4 text-educonnect-purple"
                      />
                      <Label htmlFor={subject.id} className="cursor-pointer text-base">
                        {subject.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Select Topic</h2>
              <Select 
                disabled={!selectedSubject} 
                value={selectedTopic} 
                onValueChange={setSelectedTopic}
                onOpenChange={setTopicDropdownOpen}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a topic" />
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
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SelectQuery;
