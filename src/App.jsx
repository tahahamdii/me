import React from 'react';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';

import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Services from './sections/services/Services';



const App = () => {


  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Footer />
    </main>
  )
}

export default App;