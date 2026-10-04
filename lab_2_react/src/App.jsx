import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      <main>
        <section>
          <h2>Про мене</h2>
          <p>Студент, цікавлюсь вебпрограмуванням</p>
        </section>

        <section>
          <h2>Навички</h2>
          <ul>
            <li>Python</li>
            <li>C#</li>
            <li>HTML</li>
          </ul>
        </section>

        <Education />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}

export default App;