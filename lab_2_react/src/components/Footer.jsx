function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-6 rounded-2xl shadow-md border border-slate-700">
      <h2 className="text-2xl font-bold border-l-4 border-emerald-500 pl-3 mb-4 text-white">
        Контакти
      </h2>
      <ul className="flex flex-col sm:flex-row gap-4 p-0 m-0 list-none text-slate-300">
        <li className="flex items-center">
          <a
            href="https://github.com/taranka19"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-emerald-400 font-semibold px-4 py-2 rounded-xl transition-colors border border-slate-600"
          >
            GitHub
          </a>
        </li>
        <li className="flex items-center bg-slate-700/50 px-4 py-2 rounded-xl border border-slate-700">
          <p className="m-0 text-sm">
            Email: <a href="mailto:taras.kachmar.kb.25@lpnu.ua" className="text-emerald-400 font-medium hover:underline">taras.kachmar.kb.25@lpnu.ua</a>
          </p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;