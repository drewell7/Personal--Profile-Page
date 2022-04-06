import React from 'react';
import Header from './components/Header';
import PicCard from './components/PicCard';
import CertCard from './components/CertCard';
import Footer from './components/Footer';
import initFontAwesome from "./initFontAwesome";
initFontAwesome();


function App() {
  return (
    <div>
      <Header />
        <div className='mainBody'>
            <PicCard />
            <CertCard />
        </div>
      <Footer />
    </div>
  );
};

export default App;
