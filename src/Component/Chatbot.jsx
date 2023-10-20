import React, { useState } from 'react';
import ChatBot from 'react-chatbot-kit';

const config = {
  botName: 'FinancialPlannerBot',
  lang: 'en',
};

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);

  const handleNewUserMessage = (newMessage) => {
    const message = {
      type: 'user',
      message: newMessage.message.text,
    };
    setMessages([...messages, message]);

    // Replace with actual logic to generate bot response
    const botResponse = generateBotResponse(newMessage.message.text);

    const botMessage = {
      type: 'bot',
      message: botResponse,
    };
    setMessages([...messages, botMessage]);
  };

  return (
    <div>
      <h1>Financial Planner Chatbot</h1>
      <ChatBot
        config={config}
        messages={messages}
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
};

// Fungsi untuk mengganti dengan logika sebenarnya
const generateBotResponse = (userMessage) => {
  // Gantilah dengan logika respons bot yang sesuai
  return 'Terima kasih atas pertanyaan Anda. Saya siap membantu Anda dalam perencanaan keuangan.';
};

export default ChatbotPage;
