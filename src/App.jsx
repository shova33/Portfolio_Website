import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Community from './components/Community';
import Achievements from './components/Achievements';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Community />
        <Achievements />
        <ContactForm />
      </main>
    </div>
  );
}


export default App;
