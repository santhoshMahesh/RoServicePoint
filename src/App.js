import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Brands from './components/Brands';
import ServicesOffered from './components/ServicesOffered';
import Hero from './components/Hero';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <ServicesOffered />
    </main>
  );
}

export default App;
