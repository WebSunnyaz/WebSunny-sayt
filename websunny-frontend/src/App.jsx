import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Testimonials from './components/Testimonials';
import Tech from './pages/Tech';
import "./LightBackground.css"; // burda arxa fon effekti var
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (

    <Router>

       <ScrollToTop/>
      <div className="light-bg relative text-white flex flex-col min-h-screen overflow-hidden z-[0]">
        {/* Sağdan-soldan gələn işıq effekti üçün ::before və ::after olacaq */}

        <div className="relative z-10 py-[30px] px-6 md:px-12 lg:px-24">
          <Header />
        </div>

        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/tech" element={<Tech />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
