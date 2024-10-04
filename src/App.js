import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="lay">
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
