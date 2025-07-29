import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // ✅ import BrowserRouter
import Header from './components/Header';
import HeroSection from './components/Hero';
import GPACalculator from './components/GPACalculator';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter> {/* ✅ Wrap everything in <BrowserRouter> */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <GPACalculator />
          <HowItWorks />
          <FAQ />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
