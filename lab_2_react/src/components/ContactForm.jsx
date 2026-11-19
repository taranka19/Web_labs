import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    // if (sessionStorage.getItem('contactClosed')) return;


    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Порожній масив залежностей строго всередині useEffect

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('contactClosed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md p-6 rounded-2xl shadow-2xl bg-white text-gray-900 dark:bg-gray-800 dark:text-white border border-gray-100 dark:border-gray-700">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-lg font-bold cursor-pointer"
        >
          Закрити ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
          Зворотний зв'язок
        </h2>

        <form
          action="https://formspree.io/f/xwllwrwo"
          method="POST"
          className="flex flex-col gap-3"
        >
          <input
            className="border border-gray-300 dark:border-gray-600 p-2.5 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="text"
            name="name"
            placeholder="Ім'я"
            required
          />
          <input
            className="border border-gray-300 dark:border-gray-600 p-2.5 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="border border-gray-300 dark:border-gray-600 p-2.5 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            required
          />
          <textarea
            className="border border-gray-300 dark:border-gray-600 p-2.5 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            name="message"
            placeholder="Повідомлення"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold p-2.5 rounded-lg transition-colors cursor-pointer mt-1"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}