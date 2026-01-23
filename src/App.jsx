import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <div id="home"><Hero /></div>
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
