import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import { useState } from "react";
//import Skills from "./components/Skills";
//import Projects from "./components/Projects";
//import Contact from "./components/Contact";

function App() {
  const [section, setSection] = useState("main");

  return (
    <div>
      <Navbar setSection={setSection} />
      {section === "main" && <Main />}
      {section === "about" && <About />}

      {/* <Skills />
      <Projects />
      <Contact/> */}
    </div>
  );
}

export default App;
