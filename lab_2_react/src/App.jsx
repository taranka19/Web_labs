import { useState, useEffect } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    const hours = new Date().getHours();
    return hours >= 7 && hours < 21 ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 py-10 px-4 transition-colors duration-200">
      <div className="max-w-3xl mx-auto mb-6 flex justify-end">
        <button
          onClick={toggleTheme}
          className="border rounded px-3 py-1 bg-white text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700 shadow-sm cursor-pointer"
        >
          {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
        </button>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <Education />
        <Experience />
        <Reviews />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;