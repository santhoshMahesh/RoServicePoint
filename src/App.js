import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import ServicesOffered from './components/ServicesOffered';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Services />
      <ServicesOffered />
    </main>
  );
}

export default App;
