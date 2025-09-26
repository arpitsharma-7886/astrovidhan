import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Astrologers from './components/Astrologers';
import Horoscope from './components/Horoscope';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Astrologers />
      <Horoscope />
      <Footer />
    </div>
  );
}

export default App;