import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div>
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <a
            href="#home"
            onClick={() => handlePageChange('Support')}

            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            id="boldheader"
            >
            REQUEST SUPPORT
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
            ABOUT
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#equipment"
            onClick={() => handlePageChange('Equipment')}
            className={currentPage === 'Equipment' ? 'nav-link active' : 'nav-link'}
            >
            OUR EQUIPMENT
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#contact"
            onClick={() => handlePageChange('Partners')}
            className={currentPage === 'Partners' ? 'nav-link active' : 'nav-link'}
            >
            OUR PARTNERS
            </a>
        </li>
        </ul>
        </div>
    );
}

export default NavTabs;
