import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Community from './components/Community';
import ContactForm from './components/ContactForm';
import SocialDock from './components/SocialDock';
import './index.css';

function App() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen">
      <Navbar />
      <main>
        <Hero />       {/* PRIMARY – full height, max visual impact  */}
        <Projects />   {/* PRIMARY – recruiter attention #1          */}
        <Experience /> {/* PRIMARY – recruiter attention #2          */}
        <Skills />     {/* SECONDARY – collapsible skill groups      */}
        <Community />  {/* SECONDARY – leadership & involvement      */}
        <ContactForm />{/* CTA – always last                         */}
      </main>
      <SocialDock />
    </div>
  );
}

export default App;
