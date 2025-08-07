import { lazy, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './utils/utils';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './pages/Home';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import ProjectDetails from './pages/Projects/ProjectDetails';
import ImageGallerySlider from './components/ImageGallerySlider';
import ImageCarousel from './components/ImageGallerySlider';


const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-primary font-inter">Loading...</p>
    </div>
  </div>
);


export default function App() {

  const footerRef = useRef(null);
  const handleScrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/mysandbox" element={<Hobbies />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={
            <Contact scrollToFooter={handleScrollToFooter} />
          } />
        </Routes>
      </Suspense>
        <ImageCarousel />
      <div ref={footerRef}> {/* Wrap Footer with ref */}
        <Footer />
      </div>
    </Router>
  );
}