import React from 'react';
import { Navbar, About, Home, Skills, Footer } from './containers';
import './index.css';

const App = () => {
  return (
   <div className="app">
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Footer />
   </div>
  );
}

export default App;
