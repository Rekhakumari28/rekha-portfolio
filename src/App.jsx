
import "/src/App.css";
import { Hero } from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Technologies from "./components/Technologies.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
