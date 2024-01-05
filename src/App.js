import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SitePage from './components/SitePage';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import { MantineProvider } from '@mantine/core';

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/site/:siteId" element={<SitePage />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </Router>
        </MantineProvider>
    );
}

export default App;
