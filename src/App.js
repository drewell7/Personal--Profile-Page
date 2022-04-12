import React from 'react';
import Header from './components/Header';
import NavigateBar from './components/NavigateBar';
import PicCard from './components/PicCard';
import CertCard from './components/CertCard';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import headerBackground from './images/background.jpg';
import background from "./images/black-background.jpg";
import initFontAwesome from "./initFontAwesome";
initFontAwesome();


function App() {
  return (
    <div>
      <div className='headBg' style={{ backgroundImage: `url(${headerBackground})`}}>
      <Header />
      </div>
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
