import { Hero } from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Technologies from "./components/Technologies.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import "./App.css"
import Contact from "./components/Contact.jsx";
import BottumButton from "./components/BottumButton.jsx";
function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
      <BottumButton />
    </div>
  );
}

export default App;
