import Header from './components/Header';
import PicCard from './components/PicCard';
import Bio from './components/Bio';
import CertCard from './components/CertCard';


function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <PicCard />
        <Bio />
      </div>
      <CertCard />
    </div>
  );
}

export default App;
