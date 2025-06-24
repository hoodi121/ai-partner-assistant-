// OffersPanel.jsx
export default function OffersPanel() {
  const offers = [
    { id: 1, name: "Cashback за регистрацию", platform: "PartnerNet", traffic: "10K", earnings: "$500", status: "Активен" },
    { id: 2, name: "Подписка на сервис", platform: "AffiliateHub", traffic: "5K", earnings: "$300", status: "На модерации" },
    { id: 3, name: "Продажа курсов", platform: "EduPromo", traffic: "8K", earnings: "$700", status: "Активен" },
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Список партнёрских офферов</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="px-4 py-2">Название</th>
              <th className="px-4 py-2">Платформа</th>
              <th className="px-4 py-2">Трафик</th>
              <th className="px-4 py-2">Доход</th>
              <th className="px-4 py-2">Статус</th>
              <th className="px-4 py-2">Действия</th>
            </tr>
          </thead>
          <tbody>
            {offers.map(offer => (
              <tr key={offer.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-2">{offer.name}</td>
                <td className="px-4 py-2">{offer.platform}</td>
                <td className="px-4 py-2">{offer.traffic}</td>
                <td className="px-4 py-2">{offer.earnings}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${offer.status === "Активен" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                    {offer.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">Подробнее</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}