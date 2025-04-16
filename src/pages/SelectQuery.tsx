import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import data from '../data/data.json';
import Chatbot from '../components/chatbot';
import { ThumbsUp, Star } from 'lucide-react';

const subjects = [
  { id: 'Software Engineering', name: 'Software Engineering' },
  { id: 'DMDW', name: 'DMDW' },
  { id: 'DBMS', name: 'DBMS' },
  { id: 'DAA', name: 'DAA' },
  { id: 'NLP', name: 'NLP' },
];

const topicsBySubject: Record<string, string[]> = {
  'Software Engineering': ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5'],
  'DMDW': ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5'],
  'DBMS': ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5'],
  'DAA': ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5'],
  'NLP': ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5'],
};

const SelectQuery = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [results, setResults] = useState<{ topics: string[]; pdfLink: string } | null>(null);
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value);
    setSelectedTopic("");
    setResults(null);
  };

  const handleTopicChange = (value: string) => {
    setSelectedTopic(value);
    if (selectedSubject && value) {
      const topicDetails = data[selectedSubject]?.[value] || null;
      setResults(topicDetails);
    }
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
                <RadioGroup onValueChange={handleSubjectChange} value={selectedSubject || ""}>
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
              <Select disabled={!selectedSubject} value={selectedTopic} onValueChange={handleTopicChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  {selectedSubject &&
                    topicsBySubject[selectedSubject].map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        {results && (
          <div className="mt-10 p-6 rounded-2xl shadow-xl bg-gradient-to-br from-purple-50 to-indigo-100 border border-indigo-200">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">Topics Covered:</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              {results.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <a
                href={results.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-all shadow-md text-lg font-semibold"
              >
                📄 View PDF
              </a>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`p-2 rounded-full border ${liked ? 'bg-green-100 border-green-500' : 'hover:bg-gray-100'}`}
                >
                  <ThumbsUp className={`w-5 h-5 ${liked ? 'text-green-600' : 'text-gray-500'}`} />
                </button>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      onClick={() => setRating(star)}
                      fill={star <= rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Chatbot */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-2">Ask your doubts:</h3>
              <Chatbot subject={selectedSubject!} topic={selectedTopic} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SelectQuery;
