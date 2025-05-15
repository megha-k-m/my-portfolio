import About from './components/about/About.tsx';
import AboutMe from './components/about/AboutSkills.tsx';
import Contact from './components/contact/Contact.tsx';
import Footer from './components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';
import Projects from './components/Project/Projects.tsx';
import './index.css';

const App = () => {
  return (
    <div className="bg-zinc-900 text-white">
      <Header />
      <About />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
