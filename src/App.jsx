import React, { useState } from "react";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Sections/Home";
import { About } from "./components/Sections/About";
import { Project } from "./components/Sections/Project";
import { Contact } from "./components/Sections/Contact";
import { Fotter } from "./components/Sections/Fotter";

function App() {
  const [isloaded, setisLoaded] = useState(false);
  return (
    <>
      {!isloaded && <LoadingScreen onComplete={() => setisLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isloaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-700`}
      >
        <Navbar />
        <Home/>
        <About />
        <Project />
        <Contact />
        <Fotter/>
      </div>
    </>
  );
}

export default App;
