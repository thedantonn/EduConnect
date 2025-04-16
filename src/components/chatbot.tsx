// components/Chatbot.tsx
import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface ChatbotProps {
  subject: string;
  topic: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ subject, topic }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = 'AIzaSyA0_WPy_hnWNFiOWFzsC_4SbSiNOW7S1gA'; // Your actual API key

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      const genAI = new GoogleGenerativeAI('AIzaSyA0_WPy_hnWNFiOWFzsC_4SbSiNOW7S1gA');
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Use 1.5-flash for faster result

      const prompt = `Subject: ${subject}, Topic: ${topic}, Question: ${question}. Answer in 4-5 lines, clearly and concisely.`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setAnswer(text);
    } catch (error) {
      console.error("Gemini Error:", error);
      setAnswer('Something went wrong. Make sure your API key is valid and billing is enabled.');
    }

    setLoading(false);
  };

  return (
    <div className="mt-10 bg-white p-6 rounded-2xl shadow-md border">
      <h3 className="text-xl font-semibold mb-4">Ask a doubt 💬</h3>
      <input
        type="text"
        placeholder="Type your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4"
      />
      <button
        onClick={handleAsk}
        disabled={loading}
        className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      {answer && (
        <div className="mt-4 p-4 bg-gray-50 border rounded-lg text-gray-800">
          <strong>Answer:</strong> <br />
          {answer}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
