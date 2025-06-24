// SettingsPanel.jsx
export default function SettingsPanel() {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Настройки</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Ваши данные для регистрации</label>
          <textarea rows="4" className="w-full p-3 border rounded dark:bg-gray-700" placeholder="ФИО, телефон, паспорт..."></textarea>
        </div>

        <div>
          <label className="block mb-2 font-medium">Supabase URL</label>
          <input type="text" defaultValue="https://euacsizavhfubndcswwn.supabase.co"  className="w-full p-3 border rounded dark:bg-gray-700" />
        </div>

        <div>
          <label className="block mb-2 font-medium">Supabase API Key</label>
          <input type="text" defaultValue="sbp_f66bccc33d010705cf2bccf44177af617958ac32" className="w-full p-3 border rounded dark:bg-gray-700" />
        </div>

        <div>
          <label className="block mb-2 font-medium">GitHub Token</label>
          <input type="text" placeholder="github_pat_11BTF4ODA..." className="w-full p-3 border rounded dark:bg-gray-700" />
        </div>

        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Сохранить
        </button>
      </div>
    </div>
  );
}