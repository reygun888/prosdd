import React from 'react';
import Navbar from './navbar';
import Carousel from './carousel';
import Qsj from './qsj';
import Competences from './competences';
import Realisation from './realisation';
import Contact from './contact.js';
import Footer from './footer.js';
import './App.css';

function App() {
  return (
    <div id='home'>
        <header className="App-header">
          <Navbar />
          <Carousel />
        </header>
        <main>
          <Qsj />
          <Competences />
          <Realisation />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
