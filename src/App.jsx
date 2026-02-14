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
        } text-gray-700`}
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #030712 25%, #000000 50%, #030712 75%, #000000 100%)"
        }}
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
