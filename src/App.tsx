/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const Spinner = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-primary/10 selection:text-primary overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Suspense fallback={<Spinner />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
