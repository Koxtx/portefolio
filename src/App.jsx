import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeProvider from "./Provider/ThemeProvider";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeProvider>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
