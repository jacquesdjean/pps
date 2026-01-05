import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/common';
import { useTheme } from './hooks/useTheme';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Contact from './pages/Contact';
import FranklinWH from './pages/FranklinWH';

// Import Outfit font
import './styles.css';

function App() {
  const { colors } = useTheme();

  // Load Outfit font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  // Apply theme colors to body
  useEffect(() => {
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.textPrimary;
  }, [colors]);

  return (
    <Router>
      <div
        style={{
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/residential" element={<Solutions />} />
            <Route path="/solutions/commercial" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/franklinwh" element={<FranklinWH />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
