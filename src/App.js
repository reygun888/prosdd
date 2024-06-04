import React from 'react';
import Navbar from './navbar';
import Carousel from './carousel';
import Qsj from './qsj';
import Competences from './competences';
import Realisation from './realisation';
import Contact from './contact.js';
import Footer from './footer.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cv from './cv';
import Qr from './qr';

function App() {
  return (
      <div id='home'>
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path='/prosdd' element={
            <>
              <main>
                <Carousel />
                <Qsj />
                <Competences />
                <Realisation />
                <Contact />
              </main>
              <footer>
                <Footer />
              </footer>
            </>
          } />
          <Route path='/cv' element={<Cv />} />
          <Route path='/qr' element={<Qr />} />
        </Routes>
      </div>
  );
}

export default App;

