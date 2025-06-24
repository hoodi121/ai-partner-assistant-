// ChatPanel.jsx
import { useState } from "react";

export default function ChatPanel() {
  const [messageInput, setMessageInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", text: "Здравствуйте! Я помогу вам автоматизировать маркетинг и работу с партнёрскими программами." }
  ]);

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    setChatHistory(prev => [
      ...prev,
      { role: "user", text: messageInput },
      { role: "assistant", text: "Обрабатываю ваш запрос..." }
    ]);
    setMessageInput("");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-4">Чат с ИИ-ассистентом</h2>
      <div className="h-96 overflow-y-auto mb-4 border rounded p-4 bg-gray-50 dark:bg-gray-700 space-y-4">
        {chatHistory.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-600'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Введите сообщение..."
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-grow p-3 border rounded-l focus:outline-none dark:bg-gray-700 dark:border-gray-600"
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
          Отправить
        </button>
      </div>
    </div>
  );
}