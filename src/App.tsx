/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CyberDivision from './pages/CyberDivision';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/cyber" 
            element={
              <Layout variant="cyber">
                <CyberDivision />
              </Layout>  
            }
          />    
          <Route path="/next" element={<ComingSoon />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CyberDivision from './pages/CyberDivision';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
import CISOTService from './pages/CISOTService';
import VCISOTService from './pages/vCISOTService';

function App() {
    return (
        <Router>
            <Routes>
                {/* Default layout for normal pages */}
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path="/next"
                    element={
                        <Layout>
                            <ComingSoon />
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <Contact />
                        </Layout>
                    }
                />

                {/* CyberDivision with custom layout variant */}
                <Route
                    path="/cyber"
                    element={
                        <Layout variant="cyber">
                            <CyberDivision />
                        </Layout>
                    }
                />
                <Route
                    path="/cyber/cisot"
                    element={
                        <Layout variant="cyber">
                            <CISOTService />
                        </Layout>
                    }
                />
                <Route
                    path="/cyber/vcisot"
                    element={
                        <Layout variant="cyber">
                            <VCISOTService />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
