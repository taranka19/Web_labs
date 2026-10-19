function Header() {
  return (
    <header className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 mb-6">
      {/* Заголовок та ім'я */}
      <div className="text-center pb-6 mb-6 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold text-emerald-600 tracking-tight mb-2">
          Резюме
        </h1>
        <p className="text-xl font-medium text-gray-700">
          Ім'я: <span className="font-semibold text-gray-900">Тарас Качмар</span>
        </p>
      </div>

      {/* Блок "Про мене" */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-emerald-500 pl-3 mb-2">
          Про мене
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Студент, цікавлюсь вебпрограмуванням
        </p>
      </section>

      {/* Блок "Навички" */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-emerald-500 pl-3 mb-3">
          Навички
        </h2>
        <ul className="flex flex-wrap gap-2 p-0 m-0 list-none">
          <li className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-emerald-200 transition-colors">
            Python
          </li>
          <li className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-emerald-200 transition-colors">
            C#
          </li>
          <li className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-emerald-200 transition-colors">
            HTML
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;