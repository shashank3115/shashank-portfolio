
import React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';


const App = () => {
  return (
    <div className="relative z-0 bg-[#050816] text-white">
      <Background3D />
      <div className="relative z-10">
        <Header />
        <main>
          <Landing />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </div>
       <div className="absolute bottom-4 right-4 text-xs text-gray-500 z-20">
        Built with React, Three.js, and TailwindCSS
      </div>
    </div>
  );
};

export default App;