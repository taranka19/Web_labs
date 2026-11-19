import { useState, useEffect } from 'react';

export default function Footer() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    // 1. зчитуємо дані про систему і зберігаємо в localStorage
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    // 2. зчитуємо все з localStorage і кладемо в стан
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    setInfo(data);
  }, []);

  return (
    <footer className="mt-5 p-4 text-sm bg-white dark:bg-gray-800 rounded-lg border break-words">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-lg font-bold">Інформація про систему (localStorage)</h2>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/taranka19"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-emerald-400 font-semibold px-4 py-2 rounded-xl transition-colors border border-slate-600"
          >
            GitHub
          </a>
          <div className="flex items-center bg-slate-700/50 px-4 py-2 rounded-xl border border-slate-700">
            <p className="m-0 text-sm text-white">
              Email: <a href="mailto:taras.kachmar.kb.25@lpnu.ua" className="text-emerald-400 font-medium hover:underline">taras.kachmar.kb.25@lpnu.ua</a>
            </p>
          </div>
        </div>
      </div>

      <ul className="list-disc pl-5 space-y-1">
        {Object.entries(info).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </footer>
  );
}