import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sponsor from './pages/Sponsor';
import Thanks from './pages/Thanks';
import "./style.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="min-h-screen p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/om-os" element={<About />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/tak" element={<Thanks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
