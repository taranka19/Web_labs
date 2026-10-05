function Header() {
  return (
    <header>
      <h1>Резюме</h1>
      <p>Ім'я: Тарас Качмар</p>

      <section>
        <h2>Про мене</h2>
        <p>Студент, цікавлюсь вебпрограмуванням</p>
      </section>

      <section>
        <h2>Навички</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>Python</li>
          <li>C#</li>
          <li>HTML</li>
        </ul>
      </section>
    </header>
  );
}

export default Header;