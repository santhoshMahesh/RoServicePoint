import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Brands from './components/Brands';
import ServicesOffered from './components/ServicesOffered';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Contact/>
      <Hero />
      <Brands />
      <ServicesOffered />
      <About />
      <Footer />
    </main>
  );
}

export default App;
