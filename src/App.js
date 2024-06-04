import React from 'react';
import Navbar from './page/navbar/navbar.js';
import Carousel from './page/carousel/carousel.js';
import Qsj from './page/qsj/qsj.js';
import Competences from './page/competences/competences.js';
import Realisation from './page/realisation/realisation.js';
import Contact from './page/contact/contact.js';
import Footer from './page/footer/footer.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cv from './extra/cv/cv.js';
import Qr from './extra/qr/qr.js';

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

