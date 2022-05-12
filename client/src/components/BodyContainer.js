import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Support from './pages/Support';
import About from './pages/About';
import Equipment from './pages/Equipment';
import Partners from './pages/Partners';


export default function BodyContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Support') {
            return <Support />;
    }
        if (currentPage === 'About') {
            return <About />;
    }
        if (currentPage === 'Equipment') {
            return <Equipment />;
    }
    return <Partners />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
    );
}
