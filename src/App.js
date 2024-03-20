import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Brands from './components/Brands';
import ServicesOffered from './components/ServicesOffered';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Brands />
      <ServicesOffered />
    </main>
  );
}

export default App;
