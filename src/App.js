import './App.css';
import About from './pages/About';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Gallery from './pages/Gallery';
import Coach from './pages/Coach';
import Contact from './pages/Contact';
import WaterMark from 'watermark-component-for-react'

function App() {
  return (
    <div class="content-container">
      <div class="contents">
        <WaterMark content="Sample">

          <Header />
          <Hero />
          <About />
          <Gallery />
          <Coach />
          <Contact />
        </WaterMark>
      </div>
    </div>
  );
}

export default App;
