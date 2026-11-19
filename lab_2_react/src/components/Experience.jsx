function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 mb-6 hover:shadow-lg transition-all">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-l-4 border-emerald-500 pl-3 mb-4">
        Досвід
      </h2>
      <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-100 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Навчальні проєкти
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Виконання лабораторних робіт під час навчання
        </p>
      </div>
    </section>
  );
}

export default Experience;