import React from 'react';
import Header from './components/Header';
import NavigateBar from './components/NavigateBar';
import PicCard from './components/PicCard';
import CertCard from './components/CertCard';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import background from "./images/black-background.jpg";
import initFontAwesome from "./initFontAwesome";
initFontAwesome();


function App() {
  return (
    <div>
      <Header />
        <NavigateBar />
          <div className='bgImg' style={{ backgroundImage: `url(${background})` }}>
          <div className='mainBody'>
            <PicCard />
            <CertCard />
            
            <PortfolioSection />
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default App;
