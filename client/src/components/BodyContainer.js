import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


export default function BodyContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
    }
        if (currentPage === 'About') {
            return <About />;
    }
        if (currentPage === 'Projects') {
            return <Projects />;
    }
    return <Contact />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
    );
}
