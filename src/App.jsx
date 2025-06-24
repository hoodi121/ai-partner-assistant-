// App.jsx
import { useState } from "react";
import ChatPanel from "./ChatPanel";
import OffersPanel from "./OffersPanel";
import AccountsPanel from "./AccountsPanel";
import SettingsPanel from "./SettingsPanel";

export default function App() {
  const [activeTab, setActiveTab] = useState("chat");
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Новый оффер найден", time: "10:32" },
    { id: 2, text: "Получено 5 новых рефералов", time: "09:45" },
  ]);

  const renderContent = () => {
    switch (activeTab) {
      case "chat":
        return <ChatPanel />;
      case "offers":
        return <OffersPanel />;
      case "accounts":
        return <AccountsPanel />;
      case "settings":
        return <SettingsPanel />;
      default:
        return <ChatPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">AI Партнерский Ассистент</h1>
        <div className="relative">
          <button className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Tabs Navigation */}
      <nav className="flex space-x-2 sm:space-x-4 bg-white dark:bg-gray-800 px-2 sm:px-6 py-2 overflow-x-auto">
        <button onClick={() => setActiveTab("chat")} className={`px-3 py-2 rounded-md whitespace-nowrap ${activeTab === "chat" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
          Чат с ИИ
        </button>
        <button onClick={() => setActiveTab("offers")} className={`px-3 py-2 rounded-md whitespace-nowrap ${activeTab === "offers" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
          Офферы
        </button>
        <button onClick={() => setActiveTab("accounts")} className={`px-3 py-2 rounded-md whitespace-nowrap ${activeTab === "accounts" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
          Аккаунты
        </button>
        <button onClick={() => setActiveTab("settings")} className={`px-3 py-2 rounded-md whitespace-nowrap ${activeTab === "settings" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
          Настройки
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-6">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-inner p-3 text-center text-sm text-gray-500">
        &copy; 2025 AI Partner Assistant. Все права защищены.
      </footer>
    </div>
  );
}