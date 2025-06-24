// AccountsPanel.jsx
export default function AccountsPanel() {
  const accounts = [
    { id: 1, name: "@hoodi_marketing", platform: "Instagram", followers: "15K", status: "Активен" },
    { id: 2, name: "@hoodi_shorts", platform: "YouTube Shorts", followers: "8K", status: "Активен" },
    { id: 3, name: "@hoodi_viral", platform: "TikTok", followers: "22K", status: "На модерации" },
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Ваши аккаунты в соцсетях</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map(acc => (
          <div key={acc.id} className="border rounded p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium">{acc.name}</h3>
            <p>Платформа: <strong>{acc.platform}</strong></p>
            <p>Подписчики: <strong>{acc.followers}</strong></p>
            <p>Статус: 
              <span className={`ml-2 px-2 py-1 rounded text-xs ${acc.status === "Активен" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                {acc.status}
              </span>
            </p>
            <button className="mt-2 text-blue-500 hover:underline">Управление</button>
          </div>
        ))}
      </div>
    </div>
  );
}