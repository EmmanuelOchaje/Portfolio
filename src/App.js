import { Route, Routes } from "react-router-dom";
import HomePg from "./pages/HomePg";
import Navbar from "./components/Navbar";
import AboutPg from "./pages/AboutPg";
import ProjectsPg from "./ProjectsPg";
import ContactPg from "./pages/ContactPg";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/projects" element={<ProjectsPg />} />
        <Route path="/contact" element={<ContactPg />} />
      </Routes>
    </div>
  );
}

export default App;

// import About from "./components/About";
// import Contact from "./components/Contact";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
