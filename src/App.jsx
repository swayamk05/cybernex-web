import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertySnapshot from './components/PropertySnapshot';
import About from './components/About';
import Features from './components/Features';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import FloorPlan from './components/FloorPlan';
import CommercialTerms from './components/CommercialTerms';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <PropertySnapshot />
      <About />
      <Features />
      <Amenities />
      <Gallery />
      <FloorPlan />
      <CommercialTerms />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
