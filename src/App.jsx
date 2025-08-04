import { lazy, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './utils/utils';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './pages/Home';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';



const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-primary font-inter">Loading...</p>
    </div>
  </div>
);


export default function App() {

  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add this function to scroll to footer
  const handleScrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Router>
      <ScrollToTop />
      <Header onAboutClick={handleScrollToAbout} />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/hobbies" element={<Hobbies/>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Projects/>} />
          {/* <Route path="/contact" element={
            <Contact scrollToFooter={handleScrollToFooter} />
          } /> */}
        </Routes>
      </Suspense>
      <div ref={footerRef}> {/* Wrap Footer with ref */}
        <Footer />
      </div>
    </Router>
  );
}